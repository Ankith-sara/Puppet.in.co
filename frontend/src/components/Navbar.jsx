import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { ChevronDown, ChevronRight, X, Search, User, Menu, LogOut, ShoppingBag, ShoppingCart, Heart } from 'lucide-react';
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { setShowSearch, getWishlistCount, getCartCount, navigate, token, setToken, setCartItems, setSelectedSubCategory } = useContext(ShopContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  let userId = "";

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  }

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Toggle category expansion
  const toggleCategoryExpansion = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuVisible && menuRef.current && !menuRef.current.contains(event.target)) {
        const menuButton = document.getElementById('menu-toggle-button');
        if (!menuButton || !menuButton.contains(event.target)) {
          setMenuVisible(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  // Control body scroll when menu is open
  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuVisible]);

  const handleCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setMenuVisible(false);
  };

  // Determine navbar background based on home page and scroll position
  const getNavbarBackground = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-transparent backdrop-blur-none';
    } else {
      return 'bg-black/95 backdrop-blur-md border-b-2 border-pink-600';
    }
  };

  const categories = [
    {
      name: 'Vintage Wall Art',
      id: 'vintage-wall-art',
      color: 'pink',
      subcategories: [
        { name: 'Wall Art', path: '/shop/wall-art' },
        { name: 'Retro Posters', path: '/shop/retro-posters' },
        { name: 'Bold Collages', path: '/shop/bold-collages' }
      ]
    },
    {
      name: 'Sculptural Lighting',
      id: 'sculptural-lighting',
      color: 'cyan',
      subcategories: [
        { name: 'Provocative Lamps', path: '/shop/provocative-lamps' },
        { name: 'Gallery Art Lights', path: '/shop/gallery-art-lights' }
      ]
    },
    {
      name: 'Statement Furniture',
      id: 'statement-furniture',
      color: 'purple',
      subcategories: [
        { name: 'Upcycled Cabinets', path: '/shop/upcycled-cabinets' },
        { name: 'Unique Chairs', path: '/shop/unique-chairs' },
        { name: 'Designer Tables', path: '/shop/designer-tables' },
        { name: 'Custom Shelving', path: '/shop/custom-shelving' }
      ]
    },
    {
      name: 'Mosaic & Mirror Art',
      id: 'mosaic-mirror-art',
      color: 'yellow',
      subcategories: [
        { name: 'Reflective Displays', path: '/shop/reflective-displays' },
        { name: 'Light Art', path: '/shop/light-art' },
        { name: 'Mosaic Pieces', path: '/shop/mosaic-pieces' }
      ]
    }
  ];

  const colorClasses = {
    pink: {
      border: "border-pink-600",
      text: "text-pink-600",
      bg: "bg-pink-600",
      hover: "hover:bg-pink-600/10"
    },
    cyan: {
      border: "border-cyan-600",
      text: "text-cyan-600",
      bg: "bg-cyan-600",
      hover: "hover:bg-cyan-600/10"
    },
    purple: {
      border: "border-purple-600",
      text: "text-purple-600",
      bg: "bg-purple-600",
      hover: "hover:bg-purple-600/10"
    },
    yellow: {
      border: "border-yellow-600",
      text: "text-yellow-600",
      bg: "bg-yellow-600",
      hover: "hover:bg-yellow-600/10"
    }
  };

  return (
    <>
      <div className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-all duration-300 z-40 ${menuVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuVisible(false)} />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-10 lg:px-20 z-50 transition-all duration-300 ${getNavbarBackground()}`}>
        <div className="flex items-center justify-between text-white py-4">
          <Link to='/' onClick={() => window.location.href = '/'} className="flex-shrink-0 group">
            <div className="text-3xl font-black uppercase tracking-tight" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)',
            }}>
              <span className="text-cyan-400">PUPPET.In.co</span>
            </div>
          </Link>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => { setShowSearch(true); navigate('/shop/collection') }}
              className="p-2.5 transition-all duration-200 hover:bg-cyan-600/20 rounded border-2 border-transparent hover:border-cyan-600"
              aria-label="Search"
            >
              <Search size={20} className="text-cyan-400 transition-transform duration-200" />
            </button>

            <div className="relative group hidden md:block">
              <button
                onClick={() => token ? null : navigate('/login')}
                className="p-2.5 transition-all duration-200 hover:bg-pink-600/20 rounded border-2 border-transparent hover:border-pink-600"
                aria-label="Profile"
              >
                <User size={20} className="text-pink-600 transition-transform duration-200" />
              </button>

              {token && (
                <div className="hidden group-hover:block absolute right-0 pt-2 z-10">
                  <div className="w-52 bg-black border-2 border-pink-600 shadow-2xl overflow-hidden">
                    <div className="p-4 bg-purple-950 border-b-2 border-pink-600">
                      <p className="text-sm font-black uppercase tracking-wider text-cyan-400" style={{fontFamily: 'Impact, sans-serif'}}>
                        MY ACCOUNT
                      </p>
                    </div>
                    <div className="py-2">
                      <NavLink
                        to={`/profile/${userId}`}
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-pink-600/20 hover:text-pink-400 font-bold transition-all duration-200 border-l-2 border-transparent hover:border-l-pink-600"
                      >
                        <User size={16} className="mr-3" />
                        MY PROFILE
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-cyan-600/20 hover:text-cyan-400 font-bold transition-all duration-200 border-l-2 border-transparent hover:border-l-cyan-600"
                      >
                        <ShoppingBag size={16} className="mr-3" />
                        MY ORDERS
                      </NavLink>
                      <button
                        onClick={() => { if (window.confirm("Are you sure you want to log out?")) logout(); }}
                        className="w-full flex items-center px-4 py-3 text-left text-gray-300 hover:bg-purple-600/20 hover:text-purple-400 font-bold transition-all duration-200 border-l-2 border-transparent hover:border-l-purple-600"
                      >
                        <LogOut size={16} className="mr-3" />
                        LOGOUT
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to='/wishlist' className='relative group '>
              <button
                className="p-2.5 transition-all duration-200 hover:bg-purple-600/20 rounded border-2 border-transparent hover:border-purple-600"
                aria-label="Wishlist"
              >
                <Heart size={20} className="text-purple-600 transition-transform duration-200" />
                {getWishlistCount() > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center rounded-full text-xs font-black bg-purple-600 text-white border-2 border-black shadow-lg transition-all duration-200">
                    {getWishlistCount()}
                  </span>
                )}
              </button>
            </Link>

            <Link to='/cart' className='relative group'>
              <button className="p-2.5 transition-all duration-200 hover:bg-pink-600/20 rounded border-2 border-transparent hover:border-pink-600" aria-label="Cart">
                <ShoppingCart size={20} className="text-pink-600 transition-transform duration-200" />
                {getCartCount() > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center rounded-full text-xs font-black bg-pink-600 text-white border-2 border-black shadow-lg transition-all duration-200">
                    {getCartCount()}
                  </div>
                )}
              </button>
            </Link>

            {/* Menu Button */}
            <button
              id="menu-toggle-button"
              onClick={() => setMenuVisible(true)}
              className="p-2.5 transition-all duration-200 hover:bg-cyan-600/20 rounded border-2 border-transparent hover:border-cyan-600"
              aria-label="Menu"
            >
              <Menu size={20} className="text-cyan-400 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div ref={menuRef} className={`fixed top-0 right-0 bottom-0 h-full w-full sm:w-96 md:w-96 lg:w-96 bg-black border-l-2 border-pink-600 shadow-2xl overflow-y-auto transition-transform duration-300 z-50 ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-purple-950 text-white p-6 border-b-2 border-pink-600">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase tracking-wider text-cyan-400" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '1px 1px 0px rgb(219 39 119)'
            }}>MENU</h2>
            <button
              onClick={() => setMenuVisible(false)}
              className="p-2 text-white hover:bg-pink-600 rounded border-2 border-pink-600 transition-all duration-200"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="divide-y-2 divide-pink-900">
          <NavLink
            to="/"
            onClick={() => setMenuVisible(false)}
            className={({ isActive }) => `block px-6 py-4 hover:bg-pink-600/10 transition-all duration-200 font-black uppercase tracking-wider border-l-4 ${isActive ? 'text-pink-600 bg-pink-600/10 border-l-pink-600' : 'text-gray-300 border-l-transparent'}`}
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            HOME
          </NavLink>

          <div className="py-2">
            <div className="px-6 py-4 bg-purple-950 border-y-2 border-pink-900">
              <h3 className="text-cyan-400 uppercase text-sm font-black tracking-widest" style={{fontFamily: 'Impact, sans-serif'}}>
                SHOP CATEGORIES
              </h3>
            </div>

            {categories.map((category) => {
              const colors = colorClasses[category.color];
              return (
                <div key={category.id} className="border-b-2 border-pink-900 last:border-b-0">
                  <button
                    className={`w-full flex items-center justify-between px-6 py-4 text-gray-300 ${colors.hover} transition-all duration-200 font-black uppercase tracking-wide border-l-4 border-transparent`}
                    onClick={() => toggleCategoryExpansion(category.id)}
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    <span className={colors.text}>{category.name}</span>
                    <div className={`p-1 rounded border-2 ${colors.border} transition-transform duration-200 ${expandedCategory === category.id ? 'rotate-0' : 'rotate-0'}`}>
                      {expandedCategory === category.id ?
                        <ChevronDown size={18} className={colors.text} /> :
                        <ChevronRight size={18} className={colors.text} />
                      }
                    </div>
                  </button>

                  {expandedCategory === category.id && (
                    <div className="bg-purple-950/50 border-t-2 border-pink-900">
                      {category.subcategories.map((subcategory) => (
                        <NavLink
                          key={subcategory.path}
                          to={subcategory.path}
                          onClick={() => handleCategoryClick(subcategory.name)}
                          className={({ isActive }) => `block px-8 py-3 ${colors.hover} text-sm transition-all duration-200 border-l-4 font-bold uppercase tracking-wide ${isActive ? `${colors.text} bg-${category.color}-600/20 ${colors.border}` : `text-gray-400 border-l-transparent hover:${colors.text}`}`}
                          style={{fontFamily: 'Impact, sans-serif'}}
                        >
                          {subcategory.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="py-2">
            <div className="px-6 py-4 bg-purple-950 border-y-2 border-pink-900">
              <h3 className="text-cyan-400 uppercase text-sm font-black tracking-widest" style={{fontFamily: 'Impact, sans-serif'}}>
                MY ACCOUNT
              </h3>
            </div>

            {token ? (
              <div className="space-y-1">
                <NavLink
                  to={`/profile/${userId}`}
                  onClick={() => setMenuVisible(false)}
                  className={({ isActive }) => `flex items-center px-6 py-4 hover:bg-pink-600/10 transition-all duration-200 font-black uppercase tracking-wide border-l-4 ${isActive ? 'text-pink-600 bg-pink-600/10 border-l-pink-600' : 'text-gray-300 border-l-transparent'}`}
                  style={{fontFamily: 'Impact, sans-serif'}}
                >
                  <User size={18} className="mr-3" />
                  MY PROFILE
                </NavLink>
                <NavLink
                  to="/orders"
                  onClick={() => setMenuVisible(false)}
                  className={({ isActive }) => `flex items-center px-6 py-4 hover:bg-cyan-600/10 transition-all duration-200 font-black uppercase tracking-wide border-l-4 ${isActive ? 'text-cyan-600 bg-cyan-600/10 border-l-cyan-600' : 'text-gray-300 border-l-transparent'}`}
                  style={{fontFamily: 'Impact, sans-serif'}}
                >
                  <ShoppingBag size={18} className="mr-3" />
                  MY ORDERS
                </NavLink>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to log out?")) {
                      logout();
                      setMenuVisible(false);
                    }
                  }}
                  className="w-full flex items-center px-6 py-4 text-left text-gray-300 font-black uppercase tracking-wide hover:bg-purple-600/20 hover:text-purple-400 transition-all duration-200 border-l-4 border-transparent hover:border-l-purple-600"
                  style={{fontFamily: 'Impact, sans-serif'}}
                >
                  <LogOut size={18} className="mr-3" />
                  LOGOUT
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuVisible(false)}
                className="flex items-center px-6 py-4 text-gray-300 hover:bg-cyan-600/10 hover:text-cyan-400 transition-all duration-200 font-black uppercase tracking-wide border-l-4 border-transparent hover:border-l-cyan-600"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                <User size={18} className="mr-3" />
                LOGIN / SIGN UP
              </NavLink>
            )}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
      </div>
    </>
  );
};

export default Navbar;
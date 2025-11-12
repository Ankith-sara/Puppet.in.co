import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, X, Search, User, ShoppingBag, Menu, LogOut, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  // Mock context values - replace with your actual context
  const token = null; // Replace with actual token from context
  const userId = "user123"; // Replace with actual userId
  const getWishlistCount = () => 3; // Replace with actual function
  const getCartCount = () => 5; // Replace with actual function

  const isHomePage = location.pathname === '/';

  const toggleCategoryExpansion = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const logout = () => {
    // Add logout logic
    console.log('Logging out...');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuVisible]);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuVisible]);

const categories = [
    {
      name: 'Vintage Wall Art',
      id: 'vintage-wall-art',
      subcategories: [
        { name: 'Bold Collages', path: '/shop/bold-collages' },
        { name: 'Retro Advertisements', path: '/shop/retro-advertisements' },
        { name: 'Pop Art Prints', path: '/shop/pop-art-prints' },
        { name: 'Abstract Art', path: '/shop/abstract-art' }
      ]
    },
    {
      name: 'Sculptural Lighting',
      id: 'sculptural-lighting',
      subcategories: [
        { name: 'Provocative Lamps', path: '/shop/provocative-lamps' },
        { name: 'Gallery Art Lights', path: '/shop/gallery-art-lights' },
        { name: 'Statement Fixtures', path: '/shop/statement-fixtures' },
        { name: 'Ambient Sculptures', path: '/shop/ambient-sculptures' }
      ]
    },
    {
      name: 'Statement Furniture',
      id: 'statement-furniture',
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
      subcategories: [
        { name: 'Reflective Displays', path: '/shop/reflective-displays' },
        { name: 'Light Art', path: '/shop/light-art' },
        { name: 'Mosaic Pieces', path: '/shop/mosaic-pieces' },
        { name: 'Mirror Installations', path: '/shop/mirror-installations' }
      ]
    }
  ];

  const PuppetLogo = () => (
    <div className="text-3xl md:text-4xl font-black tracking-tight" style={{
      fontFamily: 'Impact, "Arial Black", sans-serif',
      textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.3)',
      color: '#00FFFF',
      transform: 'skewY(-2deg)'
    }}>
      PUPPET
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-300 z-40 ${menuVisible ? 'bg-opacity-70 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setMenuVisible(false)} 
      />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-10 lg:px-20 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md' 
          : 'bg-gradient-to-b from-black/30 to-transparent backdrop-blur-sm'
      }`} style={{
        borderBottom: isScrolled ? '2px solid #FF1493' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(255, 20, 147, 0.3)' : 'none'
      }}>
        <div className="flex items-center justify-between text-white py-4">
          <Link to='/' className="flex-shrink-0 group">
            <PuppetLogo />
          </Link>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            <button
              className="relative p-2.5 transition-all duration-300 group"
              aria-label="Search"
              style={{
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid #00FFFF';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Search size={20} style={{ color: '#00FFFF' }} className="group-hover:scale-110 transition-transform" />
            </button>

            <div className="relative group hidden md:block">
              <button
                className="relative p-2.5 transition-all duration-300 group/profile"
                aria-label="Profile"
                style={{
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #FF1493';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <User size={20} style={{ color: '#FF1493' }} className="group-hover/profile:scale-110 transition-transform" />
              </button>

              {token && (
                <div className="hidden group-hover:block absolute right-0 pt-2 z-10">
                  <div className="w-52 overflow-hidden" style={{
                    background: 'rgba(26, 10, 46, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid #FF1493',
                    boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
                  }}>
                    <div className="p-4" style={{ borderBottom: '1px solid #FF1493' }}>
                      <p className="text-sm font-black uppercase" style={{ 
                        color: '#00FFFF',
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        MY ACCOUNT
                      </p>
                    </div>
                    <div className="py-2">
                      <NavLink
                        to={`/profile/${userId}`}
                        className="flex items-center px-4 py-3 font-medium transition-all duration-200"
                        style={{ color: '#E0BBE4' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                          e.currentTarget.style.color = '#FF1493';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#E0BBE4';
                        }}
                      >
                        <User size={16} className="mr-3" />
                        My Profile
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="flex items-center px-4 py-3 font-medium transition-all duration-200"
                        style={{ color: '#E0BBE4' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)';
                          e.currentTarget.style.color = '#00FFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#E0BBE4';
                        }}
                      >
                        <ShoppingBag size={16} className="mr-3" />
                        My Orders
                      </NavLink>
                      <button
                        onClick={() => { if (window.confirm("Are you sure you want to log out?")) logout(); }}
                        className="w-full flex items-center px-4 py-3 text-left font-medium transition-all duration-200"
                        style={{ color: '#E0BBE4' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 107, 157, 0.2)';
                          e.currentTarget.style.color = '#FF6B9D';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#E0BBE4';
                        }}
                      >
                        <LogOut size={16} className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to='/wishlist' className='relative group'>
              <button
                className="relative p-2.5 transition-all duration-300"
                aria-label="Wishlist"
                style={{
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #FF6B9D';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 107, 157, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Heart size={20} style={{ color: '#FF6B9D' }} className="group-hover:scale-110 transition-transform" />
                {getWishlistCount() > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center text-xs font-black" style={{
                    background: 'linear-gradient(135deg, #FF1493, #FF6B9D)',
                    color: '#000000',
                    border: '2px solid #FF1493',
                    boxShadow: '0 0 10px rgba(255, 20, 147, 0.6)',
                    fontFamily: 'Impact, sans-serif',
                    borderRadius: '9999px'
                  }}>
                    {getWishlistCount()}
                  </span>
                )}
              </button>
            </Link>

            <Link to='/cart' className='relative group'>
              <button 
                className="relative p-2.5 transition-all duration-300" 
                aria-label="Cart"
                style={{
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '2px solid #FFD700';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '2px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ShoppingBag size={20} style={{ color: '#FFD700' }} className="group-hover:scale-110 transition-transform" />
                {getCartCount() > 0 && (
                  <div className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center text-xs font-black" style={{
                    background: 'linear-gradient(135deg, #00FFFF, #B4E7FF)',
                    color: '#000000',
                    border: '2px solid #00FFFF',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                    fontFamily: 'Impact, sans-serif',
                    borderRadius: '9999px'
                  }}>
                    {getCartCount()}
                  </div>
                )}
              </button>
            </Link>

            <button
              id="menu-toggle-button"
              onClick={() => setMenuVisible(true)}
              className="relative p-2.5 transition-all duration-300 group"
              aria-label="Menu"
              style={{
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid #FF1493';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Menu size={20} style={{ color: '#FF1493' }} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div 
        ref={menuRef} 
        className={`fixed top-0 right-0 bottom-0 h-full w-full sm:w-96 md:w-96 lg:w-96 overflow-y-auto transition-transform duration-300 z-50 ${menuVisible ? 'translate-x-0' : 'translate-x-full'}`}
        style={{
          background: 'linear-gradient(180deg, #1a0a2e 0%, #0f051d 100%)',
          boxShadow: '-5px 0 30px rgba(255, 20, 147, 0.5)'
        }}
      >
        {/* Menu Header */}
        <div className="p-6" style={{
          borderBottom: '2px solid #FF1493',
          boxShadow: '0 2px 20px rgba(255, 20, 147, 0.3)'
        }}>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black uppercase" style={{
              fontFamily: 'Impact, sans-serif',
              color: '#00FFFF',
              textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
            }}>
              MENU
            </h2>
            <button
              onClick={() => setMenuVisible(false)}
              className="p-2 transition-all duration-300"
              aria-label="Close menu"
              style={{
                border: '2px solid #FF1493',
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 20, 147, 0.5)';
              }}
            >
              <X size={24} style={{ color: '#FF1493' }} />
            </button>
          </div>
        </div>

        <div>
          <NavLink
            to="/"
            onClick={() => setMenuVisible(false)}
            className="block px-6 py-4 transition-all duration-300 font-medium"
            style={{
              color: '#E0BBE4',
              borderBottom: '1px solid rgba(255, 20, 147, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
              e.currentTarget.style.color = '#FF1493';
              e.currentTarget.style.borderLeft = '4px solid #FF1493';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#E0BBE4';
              e.currentTarget.style.borderLeft = 'none';
            }}
          >
            HOME
          </NavLink>

          <div className="py-2">
            <div className="px-6 py-4" style={{
              background: 'rgba(255, 20, 147, 0.1)',
              borderTop: '1px solid rgba(255, 20, 147, 0.3)',
              borderBottom: '1px solid rgba(255, 20, 147, 0.3)'
            }}>
              <h3 className="uppercase text-sm font-black tracking-widest" style={{
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif'
              }}>
                SHOP CATEGORIES
              </h3>
            </div>

            {categories.map((category) => (
              <div key={category.id} style={{
                borderBottom: '1px solid rgba(255, 20, 147, 0.2)'
              }}>
                <button
                  className="w-full flex items-center justify-between px-6 py-4 transition-all duration-300 font-medium"
                  onClick={() => toggleCategoryExpansion(category.id)}
                  style={{ color: '#FFB6C1' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#00FFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FFB6C1';
                  }}
                >
                  <span>{category.name}</span>
                  <div className={`p-1 transition-transform duration-300 ${expandedCategory === category.id ? 'rotate-180' : ''}`}
                    style={{
                      border: '2px solid currentColor',
                      borderRadius: '4px'
                    }}
                  >
                    {expandedCategory === category.id ? 
                      <ChevronDown size={18} /> : 
                      <ChevronRight size={18} />
                    }
                  </div>
                </button>

                {expandedCategory === category.id && (
                  <div style={{
                    background: 'rgba(0, 255, 255, 0.05)',
                    borderTop: '1px solid rgba(0, 255, 255, 0.2)'
                  }}>
                    {category.subcategories.map((subcategory) => (
                      <NavLink
                        key={subcategory.path}
                        to={subcategory.path}
                        onClick={() => setMenuVisible(false)}
                        className="block px-8 py-3 text-sm transition-all duration-300"
                        style={{ 
                          color: '#E0BBE4',
                          borderLeft: '2px solid transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 107, 157, 0.2)';
                          e.currentTarget.style.color = '#FF6B9D';
                          e.currentTarget.style.borderLeft = '2px solid #FF6B9D';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#E0BBE4';
                          e.currentTarget.style.borderLeft = '2px solid transparent';
                        }}
                      >
                        ▶ {subcategory.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="py-2">
            <div className="px-6 py-4" style={{
              background: 'rgba(255, 20, 147, 0.1)',
              borderTop: '1px solid rgba(255, 20, 147, 0.3)',
              borderBottom: '1px solid rgba(255, 20, 147, 0.3)'
            }}>
              <h3 className="uppercase text-sm font-black tracking-widest" style={{
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif'
              }}>
                MY ACCOUNT
              </h3>
            </div>

            {token ? (
              <div>
                <NavLink
                  to={`/profile/${userId}`}
                  onClick={() => setMenuVisible(false)}
                  className="flex items-center px-6 py-4 transition-all duration-300 font-medium"
                  style={{ color: '#E0BBE4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                    e.currentTarget.style.color = '#FF1493';
                    e.currentTarget.style.borderLeft = '4px solid #FF1493';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#E0BBE4';
                    e.currentTarget.style.borderLeft = 'none';
                  }}
                >
                  <User size={18} className="mr-3" />
                  MY PROFILE
                </NavLink>
                <NavLink
                  to="/orders"
                  onClick={() => setMenuVisible(false)}
                  className="flex items-center px-6 py-4 transition-all duration-300 font-medium"
                  style={{ color: '#E0BBE4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#00FFFF';
                    e.currentTarget.style.borderLeft = '4px solid #00FFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#E0BBE4';
                    e.currentTarget.style.borderLeft = 'none';
                  }}
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
                  className="w-full flex items-center px-6 py-4 text-left font-medium transition-all duration-300"
                  style={{ color: '#E0BBE4' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 107, 157, 0.2)';
                    e.currentTarget.style.color = '#FF6B9D';
                    e.currentTarget.style.borderLeft = '4px solid #FF6B9D';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#E0BBE4';
                    e.currentTarget.style.borderLeft = 'none';
                  }}
                >
                  <LogOut size={18} className="mr-3" />
                  LOGOUT
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuVisible(false)}
                className="flex items-center px-6 py-4 transition-all duration-300 font-medium"
                style={{ color: '#E0BBE4' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                  e.currentTarget.style.color = '#FF1493';
                  e.currentTarget.style.borderLeft = '4px solid #FF1493';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#E0BBE4';
                  e.currentTarget.style.borderLeft = 'none';
                }}
              >
                <User size={18} className="mr-3" />
                LOGIN / SIGN UP
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
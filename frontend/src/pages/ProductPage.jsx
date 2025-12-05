import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import {
  ShoppingBag, X, ChevronDown, GridIcon, ListIcon, Check, Heart, SlidersHorizontal, TrendingUp, Star, ChevronUp, Tag, Building2, ArrowLeft, Zap, Filter
} from 'lucide-react';
import RecentlyViewed from '../components/RecentlyViewed';

const ProductPage = () => {
  const location = useLocation();
  const { subcategory, company } = useParams(); 
  const { category } = location.state || {};

  const {
    products = [],
    selectedSubCategory,
    setSelectedSubCategory,
    navigate,
    currency,
    addToWishlist,
    removeFromWishlist,
    wishlist = []
  } = useContext(ShopContext);

  // Enhanced state management
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [showOnSale, setShowOnSale] = useState(false);
  const [showNewArrivals, setShowNewArrivals] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [expandedFilters, setExpandedFilters] = useState({
    category: true,
    price: true,
    features: false
  });
  const [isLoading, setIsLoading] = useState(false);

  // Company data mapping
  const companyLogos = {
    'biba': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYq3HEWU4nP1xdaWDzOr7YNmV-q8yg_IJjkcrGl4El207-C31gBbfwEcPBwBiry52hQPE&usqp=CAU',
    'fabindia': 'https://logos-world.net/wp-content/uploads/2021/02/FabIndia-Logo.png',
    'vasudhaa vastrram vishram': 'https://brownliving.in/cdn/shop/collections/vasudhaa-vastrram-2557117.jpg?v=1755537249'
  };

  const getCompanyDisplayName = (companyName) => {
    return companyName ? companyName.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') : '';
  };

  // Determine if this is a company page
  const isCompanyPage = !!company;
  const companyDisplayName = getCompanyDisplayName(company);
  const companyLogo = company ? (companyLogos[company.toLowerCase()] || 
    `https://via.placeholder.com/200x100/666666/FFFFFF?text=${companyDisplayName.split(' ').map(w => w[0]).join('')}`) : null;

  // Calculate price statistics
  const priceStats = products.length > 0 ? {
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price)),
    avg: Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)
  } : { min: 0, max: 10000, avg: 5000 };

  // Count active filters
  useEffect(() => {
    let count = 0;
    if (priceRange.min > priceStats.min || priceRange.max < priceStats.max) count++;
    if (showOnSale) count++;
    if (showNewArrivals) count++;
    if (sortOption !== 'relevant') count++;
    setActiveFiltersCount(count);
  }, [priceRange, sortOption, showOnSale, showNewArrivals, priceStats]);

  useEffect(() => {
    if (isCompanyPage) {
      document.title = `${companyDisplayName} Collection | Puppet`;
    } else {
      document.title = `${getCollectionTitle()} | Puppet`;
    }
  }, [selectedSubCategory, company, companyDisplayName, isCompanyPage]);

  // Enhanced filtering logic
  useEffect(() => {
    setIsLoading(true);
    let updatedProducts = [...products];

    // Company filter (takes precedence over subcategory)
    if (isCompanyPage && company) {
      updatedProducts = updatedProducts.filter(
        (product) => {
          const productCompany = product.company ? product.company.toLowerCase() : '';
          return productCompany === company.toLowerCase();
        }
      );
    }
    // Subcategory filter (only if not filtering by company)
    else if (subcategory || selectedSubCategory) {
      const targetSubCategory = subcategory || selectedSubCategory;
      updatedProducts = updatedProducts.filter(
        (product) => product.subCategory === targetSubCategory
      );
    }

    // Price range filter
    updatedProducts = updatedProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Sale filter
    if (showOnSale) {
      updatedProducts = updatedProducts.filter(
        (product) => product.onSale || product.discount > 0
      );
    }

    // New arrivals filter
    if (showNewArrivals) {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      updatedProducts = updatedProducts.filter(
        (product) => new Date(product.createdAt || product.dateAdded) > thirtyDaysAgo
      );
    }

    // Enhanced sorting
    updatedProducts.sort((a, b) => {
      switch (sortOption) {
        case 'low-high':
          return a.price - b.price;
        case 'high-low':
          return b.price - a.price;
        case 'newest':
          return new Date(b.createdAt || b.dateAdded) - new Date(a.createdAt || a.dateAdded);
        case 'popular':
          return (b.popularity || 0) - (a.popularity || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name-az':
          return a.name.localeCompare(b.name);
        case 'name-za':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(updatedProducts);
    setTimeout(() => setIsLoading(false), 300);
  }, [
    products, selectedSubCategory, subcategory, company, category, sortOption,
    priceRange, showOnSale, showNewArrivals, isCompanyPage
  ]);

  const clearFilters = () => {
    setPriceRange({ min: priceStats.min, max: priceStats.max });
    setSortOption('relevant');
    setShowOnSale(false);
    setShowNewArrivals(false);
  };

  const getCollectionTitle = () => {
    if (isCompanyPage && companyDisplayName) {
      return companyDisplayName.toUpperCase();
    }
    if (subcategory) return subcategory.toUpperCase();
    if (selectedSubCategory) return selectedSubCategory.toUpperCase();
    if (category) return category.toUpperCase();
    return "AHARYAS";
  };

  const getCollectionSubtitle = () => {
    if (isCompanyPage) {
      return `${filteredProducts.length} BOLD PIECE${filteredProducts.length !== 1 ? 'S' : ''} FROM ${companyDisplayName.toUpperCase()}`;
    }
    return `${filteredProducts.length} PIECE${filteredProducts.length !== 1 ? 'S' : ''} THAT MAKE STATEMENTS`;
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, isExpanded, onToggle, children, icon: Icon }) => (
    <div className="border-b-2 border-pink-900 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 flex justify-between items-center text-left font-black uppercase tracking-wider text-cyan-400 hover:text-pink-400 transition-colors"
        style={{ fontFamily: 'Impact, sans-serif' }}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-pink-400" />}
          {title}
        </div>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isExpanded && (
        <div className="pb-6">
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mb-6"></div>
          {children}
        </div>
      )}
    </div>
  );

  const FilterPanel = () => (
    <div className="bg-purple-950 border-2 border-pink-600 shadow-lg">
      <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            <Filter size={20} className="inline mr-2" />
            FILTERS
          </h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs uppercase tracking-wider text-cyan-400 hover:text-pink-400 transition-colors font-black px-3 py-1 border border-cyan-600 hover:border-pink-600"
              style={{ fontFamily: 'Impact, sans-serif' }}
            >
              CLEAR ({activeFiltersCount})
            </button>
          )}
        </div>
      </div>

      <div className="px-6 py-4">
        {/* Price Range Filter */}
        <FilterSection
          title="PRICE RANGE"
          isExpanded={expandedFilters.price}
          onToggle={() => toggleFilterSection('price')}
          icon={Tag}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase">
              <span>{currency}{priceStats.min}</span>
              <span className="text-pink-400">AVG: {currency}{priceStats.avg}</span>
              <span>{currency}{priceStats.max}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <input
                  type="number"
                  min={priceStats.min}
                  max={priceStats.max}
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  className="w-full border-2 border-cyan-600 bg-black text-cyan-400 px-3 py-2 text-sm font-bold focus:border-pink-600 focus:outline-none transition-colors"
                  placeholder="Min"
                />
              </div>
              <span className="text-gray-400 font-black">—</span>
              <div className="flex-1">
                <input
                  type="number"
                  min={priceStats.min}
                  max={priceStats.max}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full border-2 border-cyan-600 bg-black text-cyan-400 px-3 py-2 text-sm font-bold focus:border-pink-600 focus:outline-none transition-colors"
                  placeholder="Max"
                />
              </div>
            </div>
            {/* Quick price filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'UNDER ₹1K', min: 0, max: 1000 },
                { label: '₹1K-₹3K', min: 1000, max: 3000 },
                { label: '₹3K-₹5K', min: 3000, max: 5000 },
                { label: 'ABOVE ₹5K', min: 5000, max: priceStats.max }
              ].map((range, index) => (
                <button
                  key={index}
                  onClick={() => setPriceRange({ min: range.min, max: range.max })}
                  className="px-3 py-2 border-2 border-purple-600 text-xs font-black uppercase bg-black text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </FilterSection>

        {/* Special Features */}
        <FilterSection
          title="SPECIAL FEATURES"
          isExpanded={expandedFilters.features}
          onToggle={() => toggleFilterSection('features')}
          icon={Zap}
        >
          <div className="space-y-4">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={showOnSale}
                  onChange={(e) => setShowOnSale(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 transition-all duration-300 ${showOnSale
                    ? 'bg-pink-600 border-pink-600'
                    : 'border-cyan-600 group-hover:border-pink-600'
                  }`}>
                  {showOnSale && (
                    <Check size={14} className="text-white absolute top-0.5 left-0.5" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm font-bold uppercase text-gray-400 group-hover:text-pink-400 transition-colors">
                On Sale
              </span>
            </label>

            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={showNewArrivals}
                  onChange={(e) => setShowNewArrivals(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 transition-all duration-300 ${showNewArrivals
                    ? 'bg-cyan-600 border-cyan-600'
                    : 'border-cyan-600 group-hover:border-pink-600'
                  }`}>
                  {showNewArrivals && (
                    <Check size={14} className="text-white absolute top-0.5 left-0.5" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm font-bold uppercase text-gray-400 group-hover:text-cyan-400 transition-colors">
                New Arrivals
              </span>
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            transform: 'skewY(-2deg)'
          }}>
            {getCollectionTitle()}
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          {filteredProducts.length > 0 && (
            <p className="text-2xl md:text-3xl text-gray-400 font-black uppercase" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              {getCollectionSubtitle()}
            </p>
          )}
        </div>
      </section>

      {/* Controls Bar */}
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 bg-purple-950 border-2 border-pink-600">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center border-2 border-cyan-600 bg-black overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-black text-cyan-400 hover:bg-cyan-600 hover:text-white'
                    }`}
                  aria-label="Grid view"
                >
                  <GridIcon size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300 ${viewMode === 'list' ? 'bg-pink-600 text-white' : 'bg-black text-pink-400 hover:bg-pink-600 hover:text-white'
                    }`}
                  aria-label="List view"
                >
                  <ListIcon size={18} />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-pink-600 bg-black text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 relative font-black uppercase"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <SlidersHorizontal size={18} />
                  <span>FILTERS</span>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-600 text-white rounded-full text-xs flex items-center justify-center font-black border-2 border-black">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-gray-400 uppercase tracking-wider" style={{
                fontFamily: 'Impact, sans-serif'
              }}>SORT:</span>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none border-2 border-cyan-600 bg-black text-cyan-400 px-6 py-3 pr-12 font-black uppercase tracking-wider focus:border-pink-600 focus:outline-none transition-colors"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <option value="relevant">RELEVANT</option>
                  <option value="low-high">LOW TO HIGH</option>
                  <option value="high-low">HIGH TO LOW</option>
                  <option value="newest">NEWEST</option>
                  <option value="popular">POPULAR</option>
                  <option value="name-az">A TO Z</option>
                  <option value="name-za">Z TO A</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex justify-center items-start overflow-y-auto pt-20 px-4 pb-4">
          <div className="bg-purple-950 border-2 border-pink-600 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
              <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{
                fontFamily: 'Impact, sans-serif'
              }}>FILTERS</h3>
              <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-pink-600 transition-colors text-cyan-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              <FilterPanel />
            </div>
            <div className="p-6 border-t-2 border-pink-900 flex gap-3 bg-black bg-opacity-40">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border-2 border-cyan-600 bg-black text-cyan-400 font-black uppercase hover:bg-cyan-600 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                CLEAR
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase border-2 border-pink-600 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <FilterPanel />
              </div>
            </div>

            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-400 mx-auto mb-6"></div>
                    <span className="text-xl font-black uppercase text-gray-400" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>LOADING PRODUCTS...</span>
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {filteredProducts.map((product, index) => (
                        <div key={product._id} className="group">
                          <div className="bg-purple-950 border-2 border-cyan-600 hover:border-pink-600 transition-all duration-300 hover:scale-105">
                            <ProductItem
                              name={product.name}
                              id={product._id}
                              price={product.price}
                              image={product.images}
                              currency={currency}
                              company={product.company}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {filteredProducts.map((product, index) => (
                        <div
                          key={product._id}
                          className="flex flex-col md:flex-row gap-6 p-6 bg-purple-950 border-2 border-cyan-600 hover:border-pink-600 hover:scale-[1.02] transition-all duration-300 group"
                        >
                          <div className="md:w-1/4 aspect-square overflow-hidden border-2 border-pink-600">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-contain bg-black group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-black uppercase tracking-wide text-cyan-400 group-hover:text-pink-400 transition-colors" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  {product.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                  {product.rating && (
                                    <div className="flex items-center gap-1 bg-black px-2 py-1 border border-yellow-600">
                                      <Star size={14} className="text-yellow-400 fill-current" />
                                      <span className="text-sm text-yellow-400 font-bold">{product.rating}</span>
                                    </div>
                                  )}
                                  <button
                                    onClick={() => {
                                      if (wishlist.includes(product._id)) {
                                        removeFromWishlist(product._id);
                                      } else {
                                        addToWishlist(product._id);
                                      }
                                    }}
                                    className={`p-2 border-2 transition-all duration-300 ${wishlist.includes(product._id)
                                        ? 'bg-pink-600 text-white border-pink-600'
                                        : 'bg-black text-pink-400 border-pink-600 hover:bg-pink-600 hover:text-white'
                                      }`}
                                  >
                                    <Heart size={16} className={wishlist.includes(product._id) ? 'fill-current' : ''} />
                                  </button>
                                </div>
                              </div>

                              <div className="text-sm text-purple-400 mb-4 font-bold uppercase">
                                {product.category} • {product.subCategory}
                              </div>

                              {product.description && (
                                <p className="text-gray-400 leading-relaxed mb-4">
                                  {product.description.length > 200
                                    ? product.description.substring(0, 200) + '...'
                                    : product.description
                                  }
                                </p>
                              )}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t-2 border-pink-900">
                              <div className="flex items-center gap-3">
                                <div className="flex items-baseline gap-2">
                                  <span className="text-3xl font-black text-pink-400" style={{
                                    fontFamily: 'Impact, sans-serif'
                                  }}>
                                    {currency}{product.price}
                                  </span>
                                  {product.originalPrice && product.originalPrice > product.price && (
                                    <span className="text-sm text-gray-500 line-through font-bold">
                                      {currency}{product.originalPrice}
                                    </span>
                                  )}
                                </div>
                                {product.discount && (
                                  <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-red-600 text-white text-xs font-black uppercase border border-pink-600">
                                    -{product.discount}% OFF
                                  </span>
                                )}
                              </div>

                              <button
                                onClick={() => navigate ? navigate(`/product/${product._id}`) : window.location.href = `/product/${product._id}`}
                                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase border-2 border-cyan-600 hover:scale-105 transition-all duration-300"
                                style={{ fontFamily: 'Impact, sans-serif' }}
                              >
                                VIEW
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-purple-950 border-2 border-pink-600">
                  <div className="w-24 h-24 border-2 border-cyan-600 flex items-center justify-center mb-8">
                    {isCompanyPage ? <Building2 size={48} className="text-cyan-400" /> : <ShoppingBag size={48} className="text-cyan-400" />}
                  </div>
                  <div className="text-center max-w-md">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-pink-600" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>NO PRODUCTS FOUND</h3>
                    <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                      {isCompanyPage 
                        ? `No products from ${companyDisplayName}. Check back for new arrivals.`
                        : "No products match your filters. Try adjusting your search."
                      }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={clearFilters}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase border-2 border-cyan-600 hover:scale-105 transition-all duration-300"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        CLEAR FILTERS
                      </button>
                      <button
                        onClick={() => navigate ? navigate('/') : window.location.href = '/'}
                        className="px-8 py-4 border-2 border-pink-600 bg-black text-pink-400 font-black uppercase hover:bg-pink-600 hover:text-white transition-all duration-300"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                      >
                        BROWSE ALL
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed Section */}
      {filteredProducts.length > 0 && (
        <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-purple-950 border-2 border-pink-600 p-8">
              <h2 className="text-3xl md:text-4xl font-black text-center mb-6 uppercase text-cyan-400" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                RECENTLY VIEWED
              </h2>
              <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
              <RecentlyViewed />
            </div>
          </div>
        </section>
      )}

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default ProductPage;
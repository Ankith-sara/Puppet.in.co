import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  ShoppingBag, X, ChevronDown, Grid, List, Check, Heart, SlidersHorizontal, TrendingUp, Star, ChevronUp, Tag, Building2, Zap
} from 'lucide-react';

const ProductPage = () => {
  const location = useLocation();
  const { subcategory, company } = useParams(); 
  const { category } = location.state || {};

  // Mock context - replace with actual context
  const products = [];
  const selectedSubCategory = subcategory;
  const currency = '₹';
  const wishlist = [];

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

  const companyDisplayName = company ? company.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') : '';

  const isCompanyPage = !!company;

  // Calculate price statistics
  const priceStats = products.length > 0 ? {
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price)),
    avg: Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)
  } : { min: 0, max: 10000, avg: 5000 };

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
    return "PUPPET";
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, isExpanded, onToggle, children, icon: Icon }) => (
    <div style={{ borderBottom: '1px solid rgba(255, 20, 147, 0.2)' }}>
      <button
        onClick={onToggle}
        className="w-full py-4 px-0 flex justify-between items-center text-left font-medium text-sm transition-colors"
        style={{ color: '#E0BBE4' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00FFFF'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#E0BBE4'}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} style={{ color: '#FF1493' }} />}
          <span className="uppercase tracking-wider font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
            {title}
          </span>
        </div>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isExpanded && (
        <div className="pb-4">
          <div className="w-12 h-0.5 mb-4" style={{ background: 'linear-gradient(90deg, #FF1493, #00FFFF)' }}></div>
          {children}
        </div>
      )}
    </div>
  );

  const FilterPanel = () => (
    <div style={{
      background: 'rgba(26, 10, 46, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '2px solid #FF1493',
      boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
    }}>
      <div className="p-6" style={{ borderBottom: '2px solid #FF1493' }}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black tracking-wide uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#00FFFF',
            textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
          }}>
            FILTERS
          </h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-xs uppercase tracking-wider font-medium transition-colors"
              style={{ color: '#FF6B9D' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF1493'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#FF6B9D'}
            >
              Clear All ({activeFiltersCount})
            </button>
          )}
        </div>
      </div>

      <div className="px-6">
        {/* Price Range Filter */}
        <FilterSection
          title="PRICE RANGE"
          isExpanded={expandedFilters.price}
          onToggle={() => toggleFilterSection('price')}
          icon={Tag}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-light" style={{ color: '#E0BBE4' }}>
              <span>{currency}{priceStats.min}</span>
              <span style={{ color: '#00FFFF' }}>AVG: {currency}{priceStats.avg}</span>
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
                  className="w-full px-3 py-2 text-sm font-light focus:outline-none transition-all"
                  placeholder="Min"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid #FF1493',
                    color: '#E0BBE4'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid #00FFFF';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '2px solid #FF1493';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              <span style={{ color: '#FF6B9D' }}>—</span>
              <div className="flex-1">
                <input
                  type="number"
                  min={priceStats.min}
                  max={priceStats.max}
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm font-light focus:outline-none transition-all"
                  placeholder="Max"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid #FF1493',
                    color: '#E0BBE4'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = '2px solid #00FFFF';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.border = '2px solid #FF1493';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Under ₹1000', min: 0, max: 1000 },
                { label: '₹1000-₹3000', min: 1000, max: 3000 },
                { label: '₹3000-₹5000', min: 3000, max: 5000 },
                { label: 'Above ₹5000', min: 5000, max: priceStats.max }
              ].map((range, index) => (
                <button
                  key={index}
                  onClick={() => setPriceRange({ min: range.min, max: range.max })}
                  className="px-3 py-1 text-xs font-light transition-all duration-300"
                  style={{
                    border: '2px solid #FF1493',
                    color: '#E0BBE4',
                    background: 'rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border = '2px solid #00FFFF';
                    e.currentTarget.style.color = '#00FFFF';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border = '2px solid #FF1493';
                    e.currentTarget.style.color = '#E0BBE4';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={showOnSale}
                  onChange={(e) => setShowOnSale(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 transition-all duration-300`}
                  style={{
                    border: showOnSale ? '2px solid #FF1493' : '2px solid #E0BBE4',
                    background: showOnSale ? '#FF1493' : 'rgba(0, 0, 0, 0.3)',
                    boxShadow: showOnSale ? '0 0 10px rgba(255, 20, 147, 0.8)' : 'none'
                  }}
                >
                  {showOnSale && (
                    <Check size={14} className="text-black absolute top-0" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm font-light transition-colors" style={{ color: '#E0BBE4' }}>
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
                <div className={`w-5 h-5 transition-all duration-300`}
                  style={{
                    border: showNewArrivals ? '2px solid #00FFFF' : '2px solid #E0BBE4',
                    background: showNewArrivals ? '#00FFFF' : 'rgba(0, 0, 0, 0.3)',
                    boxShadow: showNewArrivals ? '0 0 10px rgba(0, 255, 255, 0.8)' : 'none'
                  }}
                >
                  {showNewArrivals && (
                    <Check size={14} className="text-black absolute top-0" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm font-light transition-colors" style={{ color: '#E0BBE4' }}>
                New Arrivals (30 days)
              </span>
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-16" style={{
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Background Grid Effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Header Section */}
      <section className="py-12 px-4 sm:px-8 md:px-10 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)'
            }}>
              {getCollectionTitle()}
            </h1>
            <div className="w-48 h-1 mx-auto my-6" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
            }}></div>
            {filteredProducts.length > 0 && (
              <p className="text-xl font-light" style={{ color: '#E0BBE4' }}>
                {filteredProducts.length} PIECE{filteredProducts.length !== 1 ? 'S' : ''} DISCOVERED
              </p>
            )}
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-4 pb-6" style={{
            borderBottom: '2px solid #FF1493'
          }}>
            <div className="flex items-center gap-4">
              <div className="flex items-center overflow-hidden" style={{
                border: '2px solid #FF1493',
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
              }}>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300`}
                  style={{
                    background: viewMode === 'grid' ? 'linear-gradient(135deg, #FF1493, #FF6B9D)' : 'rgba(0, 0, 0, 0.5)',
                    color: viewMode === 'grid' ? '#000000' : '#E0BBE4'
                  }}
                  aria-label="Grid view"
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-all duration-300`}
                  style={{
                    background: viewMode === 'list' ? 'linear-gradient(135deg, #00FFFF, #B4E7FF)' : 'rgba(0, 0, 0, 0.5)',
                    color: viewMode === 'list' ? '#000000' : '#E0BBE4'
                  }}
                  aria-label="List view"
                >
                  <List size={16} />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 transition-all duration-300 relative"
                  style={{
                    border: '2px solid #00FFFF',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: '#00FFFF',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                  }}
                >
                  <SlidersHorizontal size={16} />
                  <span className="font-black tracking-wide uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                    FILTERS
                  </span>
                  {activeFiltersCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center text-xs font-black"
                      style={{
                        background: 'linear-gradient(135deg, #FF1493, #FF6B9D)',
                        color: '#000000',
                        border: '2px solid #FF1493',
                        boxShadow: '0 0 10px rgba(255, 20, 147, 0.8)',
                        fontFamily: 'Impact, sans-serif',
                        borderRadius: '9999px'
                      }}
                    >
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-black tracking-wide uppercase" style={{ 
                color: '#E0BBE4',
                fontFamily: 'Impact, sans-serif'
              }}>
                SORT BY:
              </span>
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 font-light tracking-wide focus:outline-none transition-all"
                  style={{
                    border: '2px solid #FF1493',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: '#E0BBE4',
                    boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
                  }}
                >
                  <option value="relevant">Relevance</option>
                  <option value="low-high">Price: Low to High</option>
                  <option value="high-low">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="name-az">Name: A to Z</option>
                  <option value="name-za">Name: Z to A</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ color: '#FF1493' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-center items-start overflow-y-auto pt-20 px-4 pb-4"
          style={{ background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(10px)' }}
        >
          <div className="w-full max-w-md" style={{
            background: 'linear-gradient(180deg, #1a0a2e 0%, #0f051d 100%)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.8)'
          }}>
            <div className="flex justify-between items-center p-6" style={{ borderBottom: '2px solid #FF1493' }}>
              <h3 className="text-lg font-black tracking-wide uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                color: '#00FFFF'
              }}>
                FILTERS
              </h3>
              <button onClick={() => setShowFilters(false)} className="p-2 transition-all duration-300"
                style={{
                  border: '2px solid #FF1493',
                  color: '#FF1493'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              <FilterPanel />
            </div>
            <div className="p-6 flex gap-3" style={{ borderTop: '2px solid #FF1493' }}>
              <button
                onClick={clearFilters}
                className="flex-1 py-3 font-black tracking-wide uppercase transition-all duration-300"
                style={{
                  border: '2px solid #FF1493',
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif',
                  background: 'rgba(0, 0, 0, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 20, 147, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                CLEAR ALL
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 py-3 font-black tracking-wide uppercase transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF1493, #FF6B9D)',
                  border: '2px solid #FF1493',
                  color: '#000000',
                  fontFamily: 'Impact, sans-serif',
                  boxShadow: '0 0 20px rgba(255, 20, 147, 0.8)'
                }}
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20 relative">
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
                    <div className="animate-spin rounded-full h-12 w-12 mx-auto mb-4" style={{
                      border: '4px solid rgba(255, 20, 147, 0.3)',
                      borderTop: '4px solid #FF1493'
                    }}></div>
                    <span className="font-light" style={{ color: '#E0BBE4' }}>Loading products...</span>
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Products will be mapped here */}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20" style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #FF1493',
                  boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
                }}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6" style={{
                    border: '2px solid #FF1493',
                    borderRadius: '50%',
                    boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
                  }}>
                    {isCompanyPage ? <Building2 size={32} style={{ color: '#FF1493' }} /> : <ShoppingBag size={32} style={{ color: '#FF1493' }} />}
                  </div>
                  <div className="text-center max-w-md">
                    <h3 className="text-3xl font-black mb-3 tracking-wide uppercase" style={{
                      fontFamily: 'Impact, sans-serif',
                      color: '#00FFFF',
                      textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
                    }}>
                      NO PRODUCTS FOUND
                    </h3>
                    <p className="font-light leading-relaxed mb-6" style={{ color: '#E0BBE4' }}>
                      {isCompanyPage 
                        ? `We couldn't find any products from ${companyDisplayName}. Check back soon for new arrivals.`
                        : "We couldn't find any products matching your current filters. Try adjusting your search criteria."
                      }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={clearFilters}
                        className="px-6 py-3 font-black tracking-wide uppercase transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #FF1493, #FF6B9D)',
                          border: '2px solid #FF1493',
                          color: '#000000',
                          fontFamily: 'Impact, sans-serif',
                          boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
                        }}
                      >
                        CLEAR ALL FILTERS
                      </button>
                      <button
                        onClick={() => window.location.href = '/'}
                        className="px-6 py-3 font-black tracking-wide uppercase transition-all duration-300"
                        style={{
                          border: '2px solid #00FFFF',
                          background: 'rgba(0, 0, 0, 0.5)',
                          color: '#00FFFF',
                          fontFamily: 'Impact, sans-serif',
                          boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)';
                          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                        }}
                      >
                        BROWSE ALL PRODUCTS
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
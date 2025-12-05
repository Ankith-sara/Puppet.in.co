import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import RecentlyViewed from '../components/RecentlyViewed';
import {
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Filter, SlidersHorizontal, X, ShoppingBag, GridIcon, ListIcon, Check, Gift, DollarSign, Star, Heart, Zap, Palette, Ruler, Tag
} from 'lucide-react';

const Collection = () => {
  const { products = [], search, showSearch, navigate, currency, addToWishlist, removeFromWishlist, wishlist = [] } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [sortType, setSortType] = useState('relevant');
  const [giftingIdea, setGiftingIdea] = useState(false);
  const [budgetFriendly, setBudgetFriendly] = useState(false);
  const [rareItems, setRareItems] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedFilters, setExpandedFilters] = useState({ category: true, subCategory: true, price: true, features: false });
  const [isLoading, setIsLoading] = useState(false);

  const productsPerPage = 16;
  const categories = [...new Set(products.map(product => product.category).filter(Boolean))];
  const priceStats = products.length > 0 ? {
    min: Math.min(...products.map(p => p.price)),
    max: Math.max(...products.map(p => p.price)),
    avg: Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)
  } : { min: 0, max: 10000, avg: 5000 };

  const getFilteredSubCategories = () => {
    if (category.length === 0) return [...new Set(products.map(product => product.subCategory).filter(Boolean))];
    return [...new Set(products.filter(product => category.includes(product.category)).map(product => product.subCategory).filter(Boolean))];
  };

  const filteredSubCategories = getFilteredSubCategories();

  const toggleCategory = (selectedCategory) => {
    let newCategories = category.includes(selectedCategory) ? category.filter(item => item !== selectedCategory) : [...category, selectedCategory];
    setCategory(newCategories);
    if (newCategories.length > 0) {
      const validSubCategories = [...new Set(products.filter(product => newCategories.includes(product.category)).map(product => product.subCategory).filter(Boolean))];
      setSubCategory(prev => prev.filter(sub => validSubCategories.includes(sub)));
    }
  };

  const toggleSubCategory = (selectedSubCategory) => {
    setSubCategory(prev => prev.includes(selectedSubCategory) ? prev.filter(item => item !== selectedSubCategory) : [...prev, selectedSubCategory]);
  };

  const toggleFilterSection = (section) => {
    setExpandedFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setPriceRange({ min: priceStats.min, max: priceStats.max });
    setSortType('relevant');
    setGiftingIdea(false);
    setBudgetFriendly(false);
    setRareItems(false);
  };

  useEffect(() => {
    let count = 0;
    if (category.length > 0) count++;
    if (subCategory.length > 0) count++;
    if (priceRange.min > priceStats.min || priceRange.max < priceStats.max) count++;
    if (sortType !== 'relevant') count++;
    if (giftingIdea) count++;
    if (budgetFriendly) count++;
    if (rareItems) count++;
    setActiveFiltersCount(count);
  }, [category, subCategory, priceRange, sortType, giftingIdea, budgetFriendly, rareItems, priceStats]);

  const applyFilter = () => {
    setIsLoading(true);
    let productsCopy = products.slice();
    if (showSearch && search) productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    if (category.length > 0) productsCopy = productsCopy.filter(item => category.includes(item.category));
    if (subCategory.length > 0) productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    productsCopy = productsCopy.filter((item) => item.price >= priceRange.min && item.price <= priceRange.max);
    if (giftingIdea) productsCopy = productsCopy.filter((item) => item.giftable === true || item.category === 'Gift Sets' || item.price <= 2000);
    if (budgetFriendly) productsCopy = productsCopy.filter((item) => item.price < 1000);
    if (rareItems) productsCopy = productsCopy.filter((item) => item.rare === true || item.limited === true || item.stock < 5);
    setFilterProducts(productsCopy);
    setCurrentPage(1);
    setTimeout(() => setIsLoading(false), 300);
  };

  const sortProduct = (products) => {
    let fpCopy = [...products];
    switch (sortType) {
      case 'low-high': return fpCopy.sort((a, b) => a.price - b.price);
      case 'high-low': return fpCopy.sort((a, b) => b.price - a.price);
      case 'newest': return fpCopy.sort((a, b) => new Date(b.createdAt || b.dateAdded) - new Date(a.createdAt || a.dateAdded));
      case 'popular': return fpCopy.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      case 'rating': return fpCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'name-az': return fpCopy.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-za': return fpCopy.sort((a, b) => b.name.localeCompare(a.name));
      default: return fpCopy;
    }
  };

  useEffect(() => { applyFilter(); }, [category, subCategory, search, showSearch, products, priceRange, giftingIdea, budgetFriendly, rareItems]);
  useEffect(() => { if (filterProducts.length > 0) setFilterProducts(sortProduct(filterProducts)); }, [sortType]);
  useEffect(() => { document.title = 'Puppet Collection | Puppet'; }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);

  const goToNextPage = () => { if (currentPage < totalPages) { setCurrentPage(currentPage + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const goToPreviousPage = () => { if (currentPage > 1) { setCurrentPage(currentPage - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
  const goToPage = (pageNumber) => { setCurrentPage(pageNumber); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const getPaginationNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pageNumbers.push(i);
        pageNumbers.push('...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...');
        for (let i = totalPages - 3; i <= totalPages; i++) pageNumbers.push(i);
      } else {
        pageNumbers.push(1, '...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pageNumbers.push(i);
        pageNumbers.push('...', totalPages);
      }
    }
    return pageNumbers;
  };

  const FilterSection = ({ title, isExpanded, onToggle, children, icon: Icon }) => (
    <div className="border-b-2 border-pink-900 last:border-b-0">
      <button onClick={onToggle} className="w-full py-4 px-0 flex justify-between items-center text-left font-black uppercase tracking-wider text-cyan-400 hover:text-pink-400 transition-colors" style={{ fontFamily: 'Impact, sans-serif' }}>
        <div className="flex items-center gap-2">{Icon && <Icon size={18} className="text-pink-400" />}{title}</div>
        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {isExpanded && (<div className="pb-6"><div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mb-6"></div>{children}</div>)}
    </div>
  );

  const FilterPanel = () => (
    <div className="bg-purple-950 border-2 border-pink-600 shadow-lg">
      <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}><Filter size={20} className="inline mr-2" />FILTERS</h3>
          {activeFiltersCount > 0 && (<button onClick={clearFilters} className="text-xs uppercase tracking-wider text-cyan-400 hover:text-pink-400 transition-colors font-black px-3 py-1 border border-cyan-600 hover:border-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>CLEAR ({activeFiltersCount})</button>)}
        </div>
      </div>
      <div className="px-6 py-4">
        <FilterSection title="PRICE RANGE" isExpanded={expandedFilters.price} onToggle={() => toggleFilterSection('price')} icon={Tag}>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-gray-400 font-bold uppercase">
              <span>{currency}{priceStats.min}</span>
              <span className="text-pink-400">AVG: {currency}{priceStats.avg}</span>
              <span>{currency}{priceStats.max}</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="number" min={priceStats.min} max={priceStats.max} value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })} className="flex-1 border-2 border-cyan-600 bg-black text-cyan-400 px-3 py-2 text-sm font-bold focus:border-pink-600 focus:outline-none transition-colors" placeholder="Min" />
              <span className="text-gray-400 font-black">—</span>
              <input type="number" min={priceStats.min} max={priceStats.max} value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })} className="flex-1 border-2 border-cyan-600 bg-black text-cyan-400 px-3 py-2 text-sm font-bold focus:border-pink-600 focus:outline-none transition-colors" placeholder="Max" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[{ label: 'UNDER ₹1K', min: 0, max: 1000 }, { label: '₹1K-₹3K', min: 1000, max: 3000 }, { label: '₹3K-₹5K', min: 3000, max: 5000 }, { label: 'ABOVE ₹5K', min: 5000, max: priceStats.max }].map((range, index) => (
                <button key={index} onClick={() => setPriceRange({ min: range.min, max: range.max })} className="px-3 py-2 border-2 border-purple-600 text-xs font-black uppercase bg-black text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>{range.label}</button>
              ))}
            </div>
          </div>
        </FilterSection>
        <FilterSection title="CATEGORIES" isExpanded={expandedFilters.category} onToggle={() => toggleFilterSection('category')} icon={Palette}>
          <div className="space-y-3">
            {categories.map((item) => (
              <label key={item} className="flex items-center cursor-pointer group">
                <div className="relative">
                  <input type="checkbox" checked={category.includes(item)} onChange={() => toggleCategory(item)} className="sr-only" />
                  <div className={`w-5 h-5 border-2 transition-all duration-300 ${category.includes(item) ? 'bg-pink-600 border-pink-600' : 'border-cyan-600 group-hover:border-pink-600'}`}>
                    {category.includes(item) && <Check size={14} className="text-white absolute top-0.5 left-0.5" />}
                  </div>
                </div>
                <span className="ml-3 text-sm font-bold uppercase text-gray-400 group-hover:text-pink-400 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </FilterSection>
        {filteredSubCategories.length > 0 && (
          <FilterSection title="TYPE" isExpanded={expandedFilters.subCategory} onToggle={() => toggleFilterSection('subCategory')} icon={Ruler}>
            <div className="space-y-3">
              {filteredSubCategories.map((item) => (
                <label key={item} className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" checked={subCategory.includes(item)} onChange={() => toggleSubCategory(item)} className="sr-only" />
                    <div className={`w-5 h-5 border-2 transition-all duration-300 ${subCategory.includes(item) ? 'bg-cyan-600 border-cyan-600' : 'border-cyan-600 group-hover:border-pink-600'}`}>
                      {subCategory.includes(item) && <Check size={14} className="text-white absolute top-0.5 left-0.5" />}
                    </div>
                  </div>
                  <span className="ml-3 text-sm font-bold uppercase text-gray-400 group-hover:text-cyan-400 transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        )}
        <FilterSection title="SPECIAL FEATURES" isExpanded={expandedFilters.features} onToggle={() => toggleFilterSection('features')} icon={Zap}>
          <div className="space-y-4">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input type="checkbox" checked={giftingIdea} onChange={(e) => setGiftingIdea(e.target.checked)} className="sr-only" />
                <div className={`w-5 h-5 border-2 transition-all duration-300 ${giftingIdea ? 'bg-pink-600 border-pink-600' : 'border-cyan-600 group-hover:border-pink-600'}`}>
                  {giftingIdea && <Check size={14} className="text-white absolute top-0.5 left-0.5" />}
                </div>
              </div>
              <Gift size={14} className="ml-3 mr-2 text-pink-400" />
              <span className="text-sm font-bold uppercase text-gray-400 group-hover:text-pink-400 transition-colors">Gifting Ideas</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input type="checkbox" checked={budgetFriendly} onChange={(e) => setBudgetFriendly(e.target.checked)} className="sr-only" />
                <div className={`w-5 h-5 border-2 transition-all duration-300 ${budgetFriendly ? 'bg-cyan-600 border-cyan-600' : 'border-cyan-600 group-hover:border-pink-600'}`}>
                  {budgetFriendly && <Check size={14} className="text-white absolute top-0.5 left-0.5" />}
                </div>
              </div>
              <DollarSign size={14} className="ml-3 mr-2 text-cyan-400" />
              <span className="text-sm font-bold uppercase text-gray-400 group-hover:text-cyan-400 transition-colors">Budget Friendly</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input type="checkbox" checked={rareItems} onChange={(e) => setRareItems(e.target.checked)} className="sr-only" />
                <div className={`w-5 h-5 border-2 transition-all duration-300 ${rareItems ? 'bg-pink-600 border-pink-600' : 'border-cyan-600 group-hover:border-pink-600'}`}>
                  {rareItems && <Check size={14} className="text-white absolute top-0.5 left-0.5" />}
                </div>
              </div>
              <Star size={14} className="ml-3 mr-2 text-yellow-400" />
              <span className="text-sm font-bold uppercase text-gray-400 group-hover:text-pink-400 transition-colors">Rare & Limited</span>
            </label>
          </div>
        </FilterSection>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgb(219 39 119) 1px, transparent 1px), linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)`, backgroundSize: '40px 40px', transform: 'perspective(800px) rotateX(75deg) scale(2)', transformOrigin: 'center bottom' }}></div>
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{ fontFamily: 'Impact, "Arial Black", sans-serif', textShadow: '2px 2px 0px rgb(219 39 119)', transform: 'skewY(-2deg)' }}>PUPPET COLLECTION</h1>
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          {filterProducts.length > 0 && (<p className="text-2xl md:text-3xl text-gray-400 font-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>{filterProducts.length} BOLD PIECE{filterProducts.length !== 1 ? 'S' : ''}{showSearch && search && ` MATCHING "${search}"`}</p>)}
        </div>
      </section>
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 bg-purple-950 border-2 border-pink-600">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center border-2 border-cyan-600 bg-black overflow-hidden">
                <button onClick={() => setViewMode('grid')} className={`p-3 transition-all duration-300 ${viewMode === 'grid' ? 'bg-cyan-600 text-white' : 'bg-black text-cyan-400 hover:bg-cyan-600 hover:text-white'}`}><GridIcon size={18} /></button>
                <button onClick={() => setViewMode('list')} className={`p-3 transition-all duration-300 ${viewMode === 'list' ? 'bg-pink-600 text-white' : 'bg-black text-pink-400 hover:bg-pink-600 hover:text-white'}`}><ListIcon size={18} /></button>
              </div>
              <div className="lg:hidden">
                <button onClick={() => setShowFilter(!showFilter)} className="flex items-center gap-2 px-6 py-3 border-2 border-pink-600 bg-black text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 relative font-black uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>
                  <SlidersHorizontal size={18} /><span>FILTERS</span>
                  {activeFiltersCount > 0 && <span className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-600 text-white rounded-full text-xs flex items-center justify-center font-black border-2 border-black">{activeFiltersCount}</span>}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-black text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>SORT:</span>
              <div className="relative">
                <select value={sortType} onChange={(e) => setSortType(e.target.value)} className="appearance-none border-2 border-cyan-600 bg-black text-cyan-400 px-6 py-3 pr-12 font-black uppercase tracking-wider focus:border-pink-600 focus:outline-none transition-colors" style={{ fontFamily: 'Impact, sans-serif' }}>
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
      {showFilter && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex justify-center items-start overflow-y-auto pt-20 px-4 pb-4">
          <div className="bg-purple-950 border-2 border-pink-600 w-full max-w-md shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
              <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>FILTERS</h3>
              <button onClick={() => setShowFilter(false)} className="p-2 hover:bg-pink-600 transition-colors text-cyan-400 hover:text-white"><X size={24} /></button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto"><FilterPanel /></div>
            <div className="p-6 border-t-2 border-pink-900 flex gap-3 bg-black bg-opacity-40">
              <button onClick={clearFilters} className="flex-1 py-3 border-2 border-cyan-600 bg-black text-cyan-400 font-black uppercase hover:bg-cyan-600 hover:text-white transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>CLEAR</button>
              <button onClick={() => setShowFilter(false)} className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase border-2 border-pink-600 hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>APPLY</button>
            </div>
          </div>
        </div>
      )}
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            <div className="hidden lg:block w-80 flex-shrink-0"><div className="sticky top-24"><FilterPanel /></div></div>
            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-400 mx-auto mb-6"></div>
                    <span className="text-xl font-black uppercase text-gray-400" style={{ fontFamily: 'Impact, sans-serif' }}>LOADING...</span>
                  </div>
                </div>
              ) : filterProducts.length > 0 ? (
                <>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {currentProducts.map((product) => product.name && product._id && product.price && product.images?.length ? (
                        <div key={product._id} className="group"><div className="bg-purple-950 border-2 border-cyan-600 hover:border-pink-600 transition-all duration-300 hover:scale-105"><ProductItem name={product.name} id={product._id} price={product.price} image={product.images} currency={currency} company={product.company} /></div></div>
                      ) : null)}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {currentProducts.map((product) => (
                        <div key={product._id} className="flex flex-col md:flex-row gap-6 p-6 bg-purple-950 border-2 border-cyan-600 hover:border-pink-600 hover:scale-[1.02] transition-all duration-300 group">
                          <div className="md:w-1/4 aspect-square overflow-hidden border-2 border-pink-600"><img src={product.images[0]} alt={product.name} className="w-full h-full object-contain bg-black group-hover:scale-110 transition-transform duration-500" /></div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between mb-4">
                                <h3 className="text-2xl font-black uppercase tracking-wide text-cyan-400 group-hover:text-pink-400 transition-colors" style={{ fontFamily: 'Impact, sans-serif' }}>{product.name}</h3>
                                <div className="flex items-center gap-2">
                                  {product.rating && (<div className="flex items-center gap-1 bg-black px-2 py-1 border border-yellow-600"><Star size={14} className="text-yellow-400 fill-current" /><span className="text-sm text-yellow-400 font-bold">{product.rating}</span></div>)}
                                  <button onClick={() => wishlist.includes(product._id) ? removeFromWishlist(product._id) : addToWishlist(product._id)} className={`p-2 border-2 transition-all duration-300 ${wishlist.includes(product._id) ? 'bg-pink-600 text-white border-pink-600' : 'bg-black text-pink-400 border-pink-600 hover:bg-pink-600 hover:text-white'}`}><Heart size={16} className={wishlist.includes(product._id) ? 'fill-current' : ''} /></button>
                                </div>
                              </div>
                              <div className="text-sm text-purple-400 mb-4 font-bold uppercase">{product.category} • {product.subCategory}</div>
                              {product.description && <p className="text-gray-400 leading-relaxed mb-4">{product.description.length > 200 ? product.description.substring(0, 200) + '...' : product.description}</p>}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t-2 border-pink-900">
                              <div className="flex items-center gap-3">
                                <span className="text-3xl font-black text-pink-400" style={{ fontFamily: 'Impact, sans-serif' }}>{currency}{product.price}</span>
                                {product.originalPrice && product.originalPrice > product.price && <span className="text-sm text-gray-500 line-through font-bold">{currency}{product.originalPrice}</span>}
                                {product.discount && <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-red-600 text-white text-xs font-black uppercase border border-pink-600">-{product.discount}% OFF</span>}
                              </div>
                              <button onClick={() => navigate ? navigate(`/product/${product._id}`) : window.location.href = `/product/${product._id}`} className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase border-2 border-cyan-600 hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>VIEW</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 mb-4">
                      <div className="flex items-center gap-2">
                        <button onClick={goToPreviousPage} disabled={currentPage === 1} className={`flex items-center justify-center w-12 h-12 border-2 transition-all duration-300 ${currentPage === 1 ? 'border-gray-700 text-gray-700 cursor-not-allowed' : 'border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white'}`}><ChevronLeft size={20} /></button>
                        {getPaginationNumbers().map((num, index) => (
                          num === '...' ? (<span key={`ellipsis-${index}`} className="w-12 text-center text-gray-600 font-black">...</span>) : (
                            <button key={num} onClick={() => goToPage(num)} className={`w-12 h-12 border-2 transition-all duration-300 font-black ${currentPage === num ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white border-pink-600' : 'border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white'}`} style={{ fontFamily: 'Impact, sans-serif' }}>{num}</button>
                          )
                        ))}
                        <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`flex items-center justify-center w-12 h-12 border-2 transition-all duration-300 ${currentPage === totalPages ? 'border-gray-700 text-gray-700 cursor-not-allowed' : 'border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white'}`}><ChevronRight size={20} /></button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-purple-950 border-2 border-pink-600">
                  <div className="w-24 h-24 border-2 border-cyan-600 flex items-center justify-center mb-8"><ShoppingBag size={48} className="text-cyan-400" /></div>
                  <div className="text-center max-w-md">
                    <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>NO PRODUCTS FOUND</h3>
                    <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">No products match your filters. Try adjusting your search.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={clearFilters} className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase border-2 border-cyan-600 hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>CLEAR FILTERS</button>
                      <button onClick={() => navigate ? navigate('/') : window.location.href = '/'} className="px-8 py-4 border-2 border-pink-600 bg-black text-pink-400 font-black uppercase hover:bg-pink-600 hover:text-white transition-all duration-300" style={{ fontFamily: 'Impact, sans-serif' }}>BROWSE ALL</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {filterProducts.length > 0 && (
        <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-purple-950 border-2 border-pink-600 p-8">
              <RecentlyViewed />
            </div>
          </div>
        </section>
      )}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default Collection;
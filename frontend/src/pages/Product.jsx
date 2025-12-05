import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { ChevronDown, ChevronUp, Heart, Share2, Zap, ShoppingCart } from 'lucide-react';
import RelatedProducts from '../components/RelatedProducts';
import RecentlyViewed from '../components/RecentlyViewed';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, navigate, addProductToRecentlyViewed, toggleWishlist, isInWishlist, token } = useContext(ShopContext) || {};
  const [productData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const modalRef = useRef(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [expandedSection, setExpandedSection] = useState('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    if (isAddingToCart) return; // Prevent double clicks
    
    setIsAddingToCart(true);
    console.log('Adding to cart:', productData._id, 'quantity:', quantity);
    
    try {
      const success = await addToCart(productData._id, quantity);
      console.log('Add to cart result:', success);
      
      if (success) {
        setIsAddedToCart(true);
        setQuantity(1);
        
        // Reset the "added to cart" state after 3 seconds
        setTimeout(() => {
          setIsAddedToCart(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  const handleWishlistToggle = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    const wasAdded = await toggleWishlist(productId);
    if (wasAdded !== undefined) {
      setIsWishlisted(wasAdded);
    }
  };

  const handleShare = () => {
    const shareData = {
      title: productData.name,
      text: `Check out this product: ${productData.name}`,
      url: window.location.href,
    };
    if (navigator.share) {
      navigator.share(shareData).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert("Product link copied to clipboard!");
      });
    }
  };

  const zoomIn = () => {
    if (zoomLevel < 1.5) setZoomLevel(zoomLevel + 0.1);
  };

  const zoomOut = () => {
    if (zoomLevel > 0.5) setZoomLevel(zoomLevel - 0.1);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % productData.images.length;
    setCurrentIndex(nextIndex);
    if (isModalOpen) {
      setModalImage(productData.images[nextIndex]);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? productData.images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    if (isModalOpen) {
      setModalImage(productData.images[prevIndex]);
    }
  };

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
    setZoomLevel(1);
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setModalOpen(false);
    setModalImage('');
    setZoomLevel(1);
    document.body.style.overflow = 'unset';
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    openModal(productData.images[currentIndex]);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      switch (e.key) {
        case 'ArrowLeft':
          if (isModalOpen) handlePrev();
          break;
        case 'ArrowRight':
          if (isModalOpen) handleNext();
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, currentIndex, productData]);

  useEffect(() => {
    const product = products?.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      addProductToRecentlyViewed(product);
      setIsWishlisted(isInWishlist(productId));
    }
  }, [productId, products, addProductToRecentlyViewed, isInWishlist]);

  useEffect(() => {
    if (productData?.name) {
      document.title = `${productData.name} | Aharyas`;
    }
  }, [productData?.name]);

  useEffect(() => {
    if (productId) {
      setIsWishlisted(isInWishlist(productId));
    }
  }, [productId, isInWishlist]);

  useEffect(() => {
    setIsAddedToCart(false);
  }, [productId]);

  if (!productData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-600 mx-auto mb-4"></div>
          <span className="text-cyan-400 font-black uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>LOADING PRODUCT...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">
      {/* Grid overlay background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Product Section */}
      <section className="py-12 px-4 sm:px-8 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative group bg-purple-950 border-4 border-pink-600 p-4">
                <div className="relative overflow-hidden bg-black">
                  <img
                    src={productData.images[currentIndex]}
                    alt={productData.name}
                    onClick={handleImageClick}
                    className="w-full h-[70vh] object-contain transition-all duration-500 hover:scale-105 cursor-pointer"
                  />
                  
                  <div
                    onClick={(e) => { e.stopPropagation(); openModal(productData.images[currentIndex]); }}
                    className="absolute top-4 right-4 bg-cyan-600 text-white px-4 py-2 text-xs font-black cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider border-2 border-cyan-400"
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    CLICK TO ZOOM
                  </div>

                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pink-600 text-white border-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-700 font-black text-xl"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  >
                    ◀
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-pink-600 text-white border-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-700 font-black text-xl"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  >
                    ▶
                  </button>
                </div>
              </div>

              <div className="flex gap-3 overflow-x-auto p-3 bg-purple-950 border-2 border-pink-600">
                {productData.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`flex-shrink-0 w-20 h-20 overflow-hidden cursor-pointer transition-all duration-300 border-2 ${currentIndex === index ? 'border-cyan-600 shadow-lg shadow-cyan-600/50' : 'border-pink-600 hover:border-cyan-600'}`}
                  >
                    <img
                      src={img}
                      alt={`${productData.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative">
              <div className="p-6 border-b-2 border-pink-600 bg-black">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h1 className="text-2xl md:text-3xl tracking-wide text-cyan-400 font-black uppercase flex-1" style={{fontFamily: 'Impact, sans-serif'}}>
                    {productData.name}
                  </h1>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={handleWishlistToggle}
                      className={`p-3 border-2 transition-all duration-300 ${isWishlisted ? 'bg-pink-600 text-white border-pink-600' : 'bg-black text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-white'}`}
                      title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" />
                    </button>
                    <button
                      onClick={handleShare}
                      className="p-3 border-2 border-cyan-600 bg-black text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                      title="Share product"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex items-baseline justify-between mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-black text-purple-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                      {currency}
                    </span>
                    <span className="text-3xl font-black text-white" style={{fontFamily: 'Impact, sans-serif'}}>
                      {productData.price}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                    INCLUDES GST
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-purple-600 font-black mb-3" style={{fontFamily: 'Impact, sans-serif'}}>
                    QUANTITY
                  </label>
                  <div className="flex items-center border-2 border-cyan-600 w-fit bg-black">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="w-12 h-12 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors border-r-2 border-cyan-600 font-black text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity <= 1}
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-20 h-12 text-center focus:outline-none bg-black text-white font-black"
                      value={quantity}
                      min="1"
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value !== "" && value !== "0") {
                          setQuantity(Number(value));
                        }
                      }}
                      style={{fontFamily: 'Impact, sans-serif'}}
                    />
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="w-12 h-12 flex items-center justify-center hover:bg-cyan-600 hover:text-white transition-colors border-l-2 border-cyan-600 font-black text-cyan-400"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {!isAddedToCart ? (
                    <button
                      onClick={handleAddToCart}
                      disabled={isAddingToCart}
                      className="w-full py-4 bg-pink-600 text-white font-black tracking-wide hover:bg-pink-700 transition-all duration-300 border-2 border-pink-600 hover:border-cyan-600 uppercase flex items-center justify-center gap-2 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      <ShoppingCart size={20} />
                      {isAddingToCart ? 'ADDING...' : 'ADD TO CART'}
                    </button>
                  ) : (
                    <button
                      onClick={handleViewCart}
                      className="w-full py-4 bg-cyan-600 text-white font-black tracking-wide hover:bg-cyan-700 transition-all duration-300 border-2 border-cyan-600 uppercase flex items-center justify-center gap-2 text-lg shadow-lg"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      <Zap size={20} />
                      VIEW CART
                    </button>
                  )}
                </div>
              </div>

              {/* Product Information Dropdowns */}
              <div>
                {[
                  { key: 'description', title: 'DESCRIPTION', content: (
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
                      <p>{productData.description}</p>
                    </div>
                  )},
                  { key: 'delivery', title: 'DELIVERY TIMELINE', content: (
                    <div className="p-6 pt-0 text-gray-300">
                      <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
                      <p className="mb-2 text-sm">Standard delivery: 3-5 business days</p>
                      <p className="text-sm">Express delivery: 1-2 business days (additional charges apply)</p>
                    </div>
                  )},
                  { key: 'manufacturing', title: 'MANUFACTURING DETAILS', content: (
                    <div className="p-6 pt-0 text-gray-300">
                      <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
                      <p className="mb-2 text-sm">Handcrafted by skilled artisans</p>
                      <p className="mb-2 text-sm">Made in certified workshops</p>
                      <p className="mb-2 text-sm">Ethically sourced materials</p>
                      <p className="text-sm">Quality checked at multiple stages</p>
                    </div>
                  )},
                  { key: 'returns', title: 'RETURNS & EXCHANGES', content: (
                    <div className="p-6 pt-0 text-gray-300">
                      <div className="w-12 h-1 bg-cyan-600 mb-4"></div>
                      <p className="mb-2 text-sm">Easy return and exchange policy within 7 days of delivery</p>
                      <p className="mb-2 text-sm">Items must be unused, unwashed and in original packaging</p>
                      <p className="text-sm">Refunds will be processed within 5-7 business days</p>
                    </div>
                  )}
                ].map((section, idx, arr) => (
                  <div key={section.key} className={idx < arr.length - 1 ? 'border-b-2 border-pink-900' : ''}>
                    <button 
                      onClick={() => toggleSection(section.key)} 
                      className="w-full py-4 px-6 flex justify-between items-center text-left font-black transition-colors hover:bg-black/30 uppercase tracking-wider text-cyan-400"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      {section.title}
                      {expandedSection === section.key ? <ChevronUp size={20} className="text-pink-600" /> : <ChevronDown size={20} className="text-pink-600" />}
                    </button>
                    {expandedSection === section.key && section.content}
                  </div>
                ))}
              </div>

              {/* Bottom accent bar */}
              <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center border-4 border-pink-600" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImage}
              alt="Product Detail View"
              className="max-w-full max-h-[85vh] object-contain transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            />
          </div>

          <button
            className="absolute top-4 right-4 text-white bg-pink-600 w-12 h-12 flex items-center justify-center hover:bg-pink-700 transition-colors border-2 border-pink-400 font-black text-xl"
            onClick={closeModal}
            aria-label="Close modal"
          >
            ✖
          </button>
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-cyan-600 text-white p-3 w-12 h-12 flex items-center justify-center border-2 border-cyan-400 hover:bg-cyan-700 transition-colors font-black text-xl"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous image"
          >
            ◀
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-cyan-600 text-white p-3 w-12 h-12 flex items-center justify-center border-2 border-cyan-400 hover:bg-cyan-700 transition-colors font-black text-xl"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next image"
          >
            ▶
          </button>

          <div className="absolute bottom-10 right-10 flex gap-2">
            <button
              className="bg-purple-600 text-white p-2 w-12 h-12 flex items-center justify-center border-2 border-purple-400 hover:bg-purple-700 transition-colors font-black text-2xl"
              onClick={(e) => { e.stopPropagation(); zoomIn(); }}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              className="bg-purple-600 text-white p-2 w-12 h-12 flex items-center justify-center border-2 border-purple-400 hover:bg-purple-700 transition-colors font-black text-2xl"
              onClick={(e) => { e.stopPropagation(); zoomOut(); }}
              aria-label="Zoom out"
            >
              -
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-cyan-400 px-6 py-2 font-black border-2 border-cyan-600 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
            {currentIndex + 1} / {productData.images.length}
          </div>
        </div>
      )}

      {/* Related Products */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20">
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} currentProductId={productId} />
      </section>

      {/* Recently Viewed */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20 mb-20">
        <RecentlyViewed />
      </section>
    </div>
  );
};

export default Product;
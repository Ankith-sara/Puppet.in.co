import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Heart, ShoppingCart, Trash2, X, Package, Zap } from 'lucide-react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { 
    products, 
    currency, 
    wishlistItems, 
    removeFromWishlist, 
    addToCart,
    navigate,
    token 
  } = useContext(ShopContext) || {};

  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    if (products && wishlistItems) {
      const filteredProducts = products.filter(product => 
        wishlistItems.includes(product._id)
      );
      setWishlistProducts(filteredProducts);
      setLoading(false);
    }
  }, [products, wishlistItems]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  useEffect(() => {
    document.title = 'Wishlist | Puppet';
  }, []);

  const handleDeleteClick = (productId) => {
    setItemToDelete(productId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      await removeFromWishlist(itemToDelete);
      setShowDeleteModal(false);
      setItemToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-600 mx-auto mb-4"></div>
          <span className="text-cyan-400 font-black uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>LOADING WISHLIST...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 relative overflow-hidden">

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b-2 border-pink-600 flex items-center justify-between bg-black">
              <h3 className="text-xl font-black tracking-wider uppercase text-cyan-400" style={{fontFamily: 'Impact, sans-serif'}}>
                REMOVE ITEM
              </h3>
              <button
                onClick={cancelDelete}
                className="text-gray-400 hover:text-pink-600 transition-colors p-2 border-2 border-transparent hover:border-pink-600"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 leading-relaxed font-medium">
                Are you sure you want to remove this item from your wishlist?
              </p>
            </div>
            
            <div className="p-6 border-t-2 border-pink-600 flex gap-3 bg-black">
              <button
                onClick={cancelDelete}
                className="flex-1 py-3 border-2 border-cyan-600 text-cyan-400 font-black tracking-wide hover:bg-cyan-600 hover:text-white transition-all duration-300 uppercase"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                CANCEL
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 py-3 bg-pink-600 text-white border-2 border-pink-600 font-black tracking-wide hover:bg-pink-700 transition-all duration-300 uppercase"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <section className="py-12 px-4 sm:px-8 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-wider" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '3px 3px 0px rgb(219 39 119)',
            color: 'rgb(34 211 238)'
          }}>
            MY WISHLIST
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-6"></div>
          {wishlistProducts.length > 0 && (
            <p className="text-gray-400 font-bold uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
              {wishlistProducts.length} ITEM{wishlistProducts.length !== 1 ? 'S' : ''} SAVED
            </p>
          )}
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {wishlistProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-purple-950 border-4 border-pink-600 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-600"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-600"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-600"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-600"></div>

              <div className="w-24 h-24 border-4 border-pink-600 bg-black flex items-center justify-center mb-8">
                <Heart size={48} className="text-pink-600" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-wider uppercase text-cyan-400" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)'
              }}>
                WISHLIST EMPTY
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium mb-8">
                Save items you love and never lose track of them
              </p>
              <button
                onClick={() => navigate('/shop/collection')}
                className="px-8 py-4 bg-pink-600 text-white font-black tracking-wider hover:bg-pink-700 transition-all duration-300 border-2 border-pink-600 hover:border-cyan-600 uppercase flex items-center gap-2"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                <Zap size={20} />
                BROWSE PRODUCTS
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl">
                <div className="p-6 border-b-2 border-pink-600 bg-black">
                  <div className="flex items-center gap-4">
                    <Package size={20} className="text-cyan-400" />
                    <span className="text-sm font-black text-cyan-400 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                      ITEMS IN WISHLIST:
                    </span>
                    <span className="font-black text-pink-600 tracking-wide text-lg" style={{fontFamily: 'Impact, sans-serif'}}>
                      {wishlistProducts.length}
                    </span>
                  </div>
                </div>

                <div className="divide-y-2 divide-pink-900">
                  {wishlistProducts.map((product) => (
                    <div key={product._id} className="p-6 hover:bg-black/30 transition-colors duration-300">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <Link to={`/product/${product._id}`}>
                            <div className="w-full h-48 sm:w-32 sm:h-32 lg:w-40 lg:h-40 cursor-pointer border-2 border-cyan-600 bg-black p-2">
                              <img
                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                src={product.images?.[0]}
                                alt={product.name}
                              />
                            </div>
                          </Link>
                        </div>

                        <div className="flex-grow flex flex-col lg:flex-row justify-between gap-6">
                          <div className="flex-grow space-y-4">
                            <div>
                              <Link
                                to={`/product/${product._id}`}
                                className="group"
                              >
                                <h3 className="font-black text-xl text-cyan-400 mb-2 tracking-wide group-hover:text-pink-600 transition-colors line-clamp-2 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                                  {product.name}
                                </h3>
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <span className="block text-xs font-black text-pink-600 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                                  PRICE
                                </span>
                                <span className="font-black text-white text-2xl" style={{fontFamily: 'Impact, sans-serif'}}>
                                  {currency}{product.price}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                              <button
                                onClick={async () => {
                                  addToCart(product._id, 1);
                                  await removeFromWishlist(product._id);
                                }}
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white font-black tracking-wide hover:bg-pink-700 transition-all duration-300 uppercase border-2 border-pink-600 hover:border-cyan-600"
                                style={{fontFamily: 'Impact, sans-serif'}}
                              >
                                <ShoppingCart size={18} />
                                ADD TO CART
                              </button>
                              <button
                                onClick={() => navigate(`/product/${product._id}`)}
                                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-600 text-cyan-400 font-black tracking-wide hover:bg-cyan-600 hover:text-white transition-all duration-300 uppercase"
                                style={{fontFamily: 'Impact, sans-serif'}}
                              >
                                VIEW DETAILS
                              </button>
                            </div>
                          </div>

                          <div className="flex lg:flex-col items-center lg:items-end justify-end lg:justify-start">
                            <button
                              onClick={() => handleDeleteClick(product._id)}
                              className="p-3 text-gray-400 hover:text-pink-600 hover:bg-pink-600/20 border-2 border-transparent hover:border-pink-600 transition-all duration-300"
                              aria-label="Remove from wishlist"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate('/shop/collection')}
                  className="px-8 py-4 border-2 border-cyan-600 text-cyan-400 font-black tracking-wider hover:bg-cyan-600 hover:text-white transition-all duration-300 uppercase flex items-center gap-2 mx-auto"
                  style={{fontFamily: 'Impact, sans-serif'}}
                >
                  <Zap size={20} />
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Wishlist;
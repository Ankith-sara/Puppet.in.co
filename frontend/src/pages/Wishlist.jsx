import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Trash2, Sparkles, Zap } from 'lucide-react';

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([
    {
      _id: '1',
      name: 'Vintage Miami Vice Poster',
      images: ['https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500'],
      price: 299,
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      _id: '2',
      name: 'Neon Skull Table Lamp',
      images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500'],
      price: 899,
      sizes: ['One Size']
    },
    {
      _id: '3',
      name: 'Abstract Art Wall Piece',
      images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500'],
      price: 1499,
      sizes: ['Small', 'Medium', 'Large']
    }
  ]);
  
  const [loading, setLoading] = useState(true);
  const currency = '₹';

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistProducts(prev => prev.filter(p => p._id !== itemId));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ 
        background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
      }}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4" style={{
            borderColor: '#FF1493',
            borderTopColor: 'transparent',
            boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
          }}></div>
          <span className="text-lg font-bold uppercase" style={{ 
            color: '#00FFFF',
            fontFamily: 'Impact, sans-serif'
          }}>
            LOADING...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="fixed top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles size={32} style={{ color: '#FF1493' }} />
            <h1 className="text-5xl md:text-6xl font-black uppercase" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)'
            }}>
              MY WISHLIST
            </h1>
            <Sparkles size={32} style={{ color: '#FF1493' }} />
          </div>
          
          <div className="inline-block px-6 py-2 mb-2" style={{
            background: 'rgba(255,20,147,0.2)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 20px rgba(255,20,147,0.4)'
          }}>
            <span className="text-lg font-bold uppercase" style={{ color: '#00FFFF' }}>
              {wishlistProducts.length} {wishlistProducts.length === 1 ? 'ITEM' : 'ITEMS'}
            </span>
          </div>
        </div>

        {/* Empty Wishlist */}
        {wishlistProducts.length === 0 ? (
          <div className="p-12 text-center" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '3px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
          }}>
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center" style={{
                border: '3px solid #00FFFF',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                background: 'rgba(0, 255, 255, 0.1)'
              }}>
                <Heart size={50} style={{ color: '#00FFFF' }} />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4" style={{
                fontFamily: 'Impact, sans-serif',
                color: '#FF1493',
                textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3)'
              }}>
                WISHLIST IS EMPTY
              </h3>
              <p className="text-lg font-light mb-6" style={{ color: '#E0BBE4' }}>
                Save bold pieces you love and never lose track of them
              </p>
              <button
                className="px-10 py-4 font-black text-lg uppercase transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                  border: '3px solid #FF1493',
                  color: '#000000',
                  fontFamily: 'Impact, sans-serif',
                  boxShadow: '0 0 25px rgba(255, 20, 147, 0.6)'
                }}
              >
                START SHOPPING
              </button>
            </div>
          </div>
        ) : (
          /* Wishlist Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistProducts.map((product) => (
              <div 
                key={product._id} 
                className="group overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                }}
              >
                {/* Product Image */}
                <div className="relative aspect-[4/5] overflow-hidden cursor-pointer">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255, 20, 147, 0.4) 100%)'
                  }}></div>

                  {/* Remove button */}
                  <button
                    onClick={() => handleRemoveFromWishlist(product._id)}
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      border: '2px solid #FF1493',
                      boxShadow: '0 0 15px rgba(255, 20, 147, 0.6)'
                    }}
                  >
                    <Heart size={18} style={{ color: '#FF1493' }} className="fill-current" />
                  </button>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 opacity-50" style={{ borderColor: '#00FFFF' }}></div>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="font-black uppercase mb-2 cursor-pointer transition-colors line-clamp-2 text-base" style={{
                    fontFamily: 'Impact, sans-serif',
                    color: '#00FFFF'
                  }}>
                    {product.name}
                  </h3>
                  
                  <p className="text-2xl font-black mb-4" style={{ color: '#FFFFFF' }}>
                    {currency}{product.price}
                  </p>

                  {/* Available Sizes */}
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs uppercase font-bold mb-2 tracking-wider" style={{ color: '#FFB6C1' }}>
                        SIZES:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.slice(0, 4).map((size, index) => (
                          <span 
                            key={index}
                            className="text-xs font-bold uppercase px-3 py-1"
                            style={{
                              background: 'rgba(0, 255, 255, 0.1)',
                              border: '1px solid #00FFFF',
                              color: '#00FFFF'
                            }}
                          >
                            {size}
                          </span>
                        ))}
                        {product.sizes.length > 4 && (
                          <span className="text-xs font-bold" style={{ color: '#FFB6C1' }}>
                            +{product.sizes.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      className="w-full flex items-center justify-center gap-2 py-3 font-black text-sm uppercase transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                        border: '2px solid #FF1493',
                        color: '#000000',
                        fontFamily: 'Impact, sans-serif',
                        boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
                      }}
                    >
                      <ShoppingCart size={16} />
                      ADD TO CART
                    </button>
                    
                    <button
                      onClick={() => handleRemoveFromWishlist(product._id)}
                      className="w-full flex items-center justify-center gap-2 py-3 font-black text-sm uppercase transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'transparent',
                        border: '2px solid #FF1493',
                        color: '#FF1493',
                        fontFamily: 'Impact, sans-serif'
                      }}
                    >
                      <Trash2 size={16} />
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continue Shopping */}
        {wishlistProducts.length > 0 && (
          <div className="text-center mt-12">
            <button
              className="px-10 py-4 font-black text-lg uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: 'transparent',
                border: '3px solid #00FFFF',
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>

      {/* Scanlines effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-50" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,20,147,0.5) 2px, rgba(255,20,147,0.5) 4px)'
      }}></div>
    </div>
  );
};

export default Wishlist;
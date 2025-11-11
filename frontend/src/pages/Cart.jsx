import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { Trash2, ShoppingBag, Package, Minus, Plus, Sparkles, Zap } from 'lucide-react';
import RecentlyViewed from '../components/RecentlyViewed';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, token } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [promoCode, setPromoCode] = useState("");

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const handleDelete = (id, size) => {
    if (window.confirm('Remove this bold piece from your cart?')) {
      updateQuantity(id, size, 0);
    }
  };

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity > 0 && newQuantity <= 99) {
      updateQuantity(id, size, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (!token) {
      sessionStorage.setItem('returnUrl', '/cart');
      navigate('/login');
      return;
    }
    navigate('/place-order');
  };

  useEffect(() => {
    document.title = 'Shopping Cart | Puppet.co.in'
  })

  return (
    <div className="min-h-screen mt-16" style={{ 
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

      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>

      {/* Header Section */}
      <section className="py-12 px-4 sm:px-8 md:px-10 lg:px-20 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase mb-4" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)'
          }}>
            YOUR CART
          </h1>
          {cartData.length > 0 && (
            <div className="inline-block px-6 py-2 mb-2" style={{
              background: 'rgba(255,20,147,0.2)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 20px rgba(255,20,147,0.4)'
            }}>
              <span className="text-lg font-bold" style={{ color: '#00FFFF' }}>
                {cartData.length} {cartData.length === 1 ? 'ITEM' : 'ITEMS'}
              </span>
            </div>
          )}
          <p className="text-lg font-light mt-4" style={{ color: '#E0BBE4' }}>
            Review your bold selections
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20 relative">
        <div className="max-w-7xl mx-auto">
          {cartData.length === 0 ? (
            // Empty Cart State
            <div className="flex flex-col items-center justify-center py-20" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '3px solid #FF1493',
              boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
            }}>
              <div className="w-24 h-24 mb-6 flex items-center justify-center" style={{
                border: '3px solid #00FFFF',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                background: 'rgba(0, 255, 255, 0.1)'
              }}>
                <ShoppingBag size={50} style={{ color: '#00FFFF' }} />
              </div>
              <div className="text-center max-w-md mb-8">
                <h3 className="text-3xl font-black uppercase mb-4" style={{
                  fontFamily: 'Impact, sans-serif',
                  color: '#FF1493',
                  textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3)'
                }}>
                  CART IS EMPTY
                </h3>
                <p className="text-lg font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                  Time to add some bold pieces to your collection!
                </p>
              </div>
              <button
                onClick={() => navigate('/shop/collection')}
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
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartData.map((item, index) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  if (!productData) {
                    return (
                      <div key={index} className="p-6 text-center" style={{
                        background: 'rgba(255, 20, 147, 0.1)',
                        border: '2px solid #FF1493'
                      }}>
                        <p className="font-bold" style={{ color: '#FF1493' }}>PRODUCT NOT FOUND</p>
                        <p className="text-sm" style={{ color: '#E0BBE4' }}>This item may have been removed</p>
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="p-6 transition-all duration-300 hover:scale-[1.02]" style={{
                      background: 'rgba(26, 10, 46, 0.7)',
                      backdropFilter: 'blur(10px)',
                      border: '2px solid #00FFFF',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
                    }}>
                      <div className="flex gap-6">
                        {/* Product Image */}
                        <Link 
                          to={`/product/${item._id}`}
                          className="flex-shrink-0"
                        >
                          <div className="w-28 h-28 md:w-36 md:h-36 overflow-hidden relative" style={{
                            border: '2px solid #FF1493',
                            boxShadow: '0 0 15px rgba(255, 20, 147, 0.4)'
                          }}>
                            <img
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              src={productData.images[0]}
                              alt={productData.name}
                            />
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300" style={{
                              background: 'linear-gradient(180deg, transparent 0%, rgba(255, 20, 147, 0.3) 100%)'
                            }}></div>
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${item._id}`}
                            className="group"
                          >
                            <h3 className="font-black text-lg uppercase mb-3 group-hover:text-shadow transition-colors line-clamp-2" style={{
                              fontFamily: 'Impact, sans-serif',
                              color: '#00FFFF'
                            }}>
                              {productData.name}
                            </h3>
                          </Link>

                          <div className="flex flex-wrap gap-6 mb-4">
                            <div>
                              <span className="text-xs uppercase font-bold tracking-wider" style={{ color: '#FFB6C1' }}>
                                PRICE
                              </span>
                              <p className="font-black text-lg" style={{ color: '#FFFFFF' }}>
                                {currency}{productData.price}
                              </p>
                            </div>

                            <div>
                              <span className="text-xs uppercase font-bold tracking-wider" style={{ color: '#FFB6C1' }}>
                                SIZE
                              </span>
                              <p className="font-black text-lg" style={{ color: '#FFFFFF' }}>
                                {item.size}
                              </p>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center gap-3">
                              <button
                                className="h-10 w-10 flex items-center justify-center transition-all disabled:opacity-30"
                                onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                style={{
                                  border: '2px solid #FF1493',
                                  background: 'rgba(255, 20, 147, 0.1)',
                                  color: '#FF1493'
                                }}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-12 text-center font-black text-xl" style={{ color: '#00FFFF' }}>
                                {item.quantity}
                              </span>
                              <button
                                className="h-10 w-10 flex items-center justify-center transition-all disabled:opacity-30"
                                onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                                disabled={item.quantity >= 99}
                                style={{
                                  border: '2px solid #FF1493',
                                  background: 'rgba(255, 20, 147, 0.1)',
                                  color: '#FF1493'
                                }}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="flex items-center gap-4">
                              <p className="text-2xl font-black" style={{ color: '#00FFFF' }}>
                                {currency}{(productData.price * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => handleDelete(item._id, item.size)}
                                className="p-2 transition-all duration-300 hover:scale-110"
                                style={{
                                  border: '2px solid #FF1493',
                                  background: 'rgba(255, 20, 147, 0.1)',
                                  color: '#FF1493'
                                }}
                              >
                                <Trash2 size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={() => navigate('/shop/collection')}
                  className="w-full md:w-auto px-8 py-3 font-black uppercase transition-all duration-300 hover:scale-105"
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

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="p-8 space-y-6" style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '3px solid #FF1493',
                  boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
                }}>
                  <h2 className="text-2xl font-black uppercase" style={{
                    fontFamily: 'Impact, sans-serif',
                    color: '#FF1493',
                    textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3)'
                  }}>
                    ORDER SUMMARY
                  </h2>

                  <div className="space-y-6">
                    <CartTotal />

                    {/* Promo Code Input */}
                    <div className="pt-4" style={{ borderTop: '2px solid rgba(255, 20, 147, 0.3)' }}>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="PROMO CODE"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                          className="flex-1 px-4 py-3 font-bold uppercase focus:outline-none"
                          style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '2px solid #00FFFF',
                            color: '#00FFFF',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)'
                          }}
                        />
                        <button
                          onClick={() => {/* Add promo code logic */}}
                          className="px-6 py-3 font-black uppercase transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'rgba(0, 255, 255, 0.2)',
                            border: '2px solid #00FFFF',
                            color: '#00FFFF',
                            fontFamily: 'Impact, sans-serif'
                          }}
                        >
                          APPLY
                        </button>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <div className="space-y-4 pt-4">
                      <button
                        onClick={handleCheckout}
                        className="w-full py-5 font-black text-lg uppercase transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                          border: '3px solid #FF1493',
                          color: '#000000',
                          fontFamily: 'Impact, sans-serif',
                          boxShadow: '0 0 25px rgba(255, 20, 147, 0.6)'
                        }}
                      >
                        CHECKOUT NOW
                      </button>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-3" style={{ 
                      borderTop: '2px solid rgba(0, 255, 255, 0.3)'
                    }}>
                      <div className="w-3 h-3 rounded-full" style={{ 
                        background: '#00FF00',
                        boxShadow: '0 0 10px #00FF00'
                      }}></div>
                      <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#E0BBE4' }}>
                        🔒 SECURE CHECKOUT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recently Viewed */}
      {cartData.length > 0 && (
        <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20 relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black uppercase mb-8" style={{
              fontFamily: 'Impact, sans-serif',
              color: '#00FFFF',
              textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
            }}>
              COMPLETE YOUR LOOK
            </h2>
            <RecentlyViewed />
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
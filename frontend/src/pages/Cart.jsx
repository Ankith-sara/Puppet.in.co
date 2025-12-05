import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Trash2, ShoppingBag, Package, X, Zap, ShieldCheck } from 'lucide-react';
import RecentlyViewed from '../components/RecentlyViewed';
import { Link } from 'react-router-dom';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, token } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      const quantity = cartItems[productId];
      
      if (quantity > 0) {
        tempData.push({
          _id: productId,
          quantity: quantity,
        });
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      updateQuantity(productToDelete, 0);
      setShowDeleteModal(false);
      setProductToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
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
    document.title = 'Cart | Aharyas';
  }, []);

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
              <button onClick={cancelDelete} className="text-gray-400 hover:text-pink-600 transition-colors p-2 border-2 border-transparent hover:border-pink-600">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 leading-relaxed font-medium">
                Are you sure you want to remove this item from your cart?
              </p>
            </div>
            
            <div className="p-6 border-t-2 border-pink-600 flex gap-3 bg-black">
              <button onClick={cancelDelete} className="flex-1 py-3 border-2 border-cyan-600 text-cyan-400 font-black hover:bg-cyan-600 hover:text-white transition-all uppercase">
                CANCEL
              </button>
              <button onClick={confirmDelete} className="flex-1 py-3 bg-pink-600 text-white border-2 border-pink-600 font-black hover:bg-pink-700 transition-all uppercase">
                REMOVE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="py-12 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider" style={{
          fontFamily: 'Impact, sans-serif',
          textShadow: '3px 3px 0px rgb(219 39 119)',
          color: 'rgb(34 211 238)'
        }}>
          SHOPPING CART
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-6"></div>
        {cartData.length > 0 && (
          <p className="text-gray-400 font-bold uppercase tracking-wider">
            {cartData.length} ITEM{cartData.length !== 1 ? 'S' : ''} IN YOUR CART
          </p>
        )}
      </section>

      {/* Content */}
      <section className="px-4 lg:px-20 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {cartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-purple-950 border-4 border-pink-600 py-20 shadow-2xl relative">
              <ShoppingBag size={48} className="text-pink-600 mb-6" />
              <h3 className="text-3xl font-black uppercase text-cyan-400 mb-4">
                CART IS EMPTY
              </h3>
              <p className="text-gray-300 mb-8">
                Discover our amazing collection and add your favorite items
              </p>
              <button
                onClick={() => navigate('/shop/collection')}
                className="px-8 py-4 bg-pink-600 border-2 border-pink-600 hover:border-cyan-600 hover:bg-pink-700 transition uppercase font-black flex items-center gap-2"
              >
                <Zap size={20} />
                BROWSE PRODUCTS
              </button>
            </div>
          ) : (
            <div className="grid xl:grid-cols-[2fr_1fr] gap-8">
              {/* Cart Items */}
              <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl">
                <div className="p-6 border-b-2 border-pink-600 bg-black flex gap-4 items-center">
                  <Package size={20} className="text-cyan-400" />
                  <span className="text-sm font-black text-cyan-400 uppercase">Items in cart:</span>
                  <span className="font-black text-pink-600 text-lg">{cartData.length}</span>
                </div>

                <div className="divide-y-2 divide-pink-900">
                  {cartData.map((item, index) => {
                    const product = products.find(p => p._id === item._id);
                    
                    if (!product) {
                      return (
                        <div key={index} className="p-6 bg-red-900 text-white">
                          Product not found for ID: {item._id}
                        </div>
                      );
                    }

                    return (
                      <div key={index} className="p-6 hover:bg-black/30 transition">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Image */}
                          <div className="w-full sm:w-32 lg:w-40 h-48 sm:h-32 lg:h-40 border-2 border-cyan-600 p-2 bg-black">
                            <img src={product.images?.[0]} alt={product.name} className="w-full h-full object-contain" />
                          </div>

                          {/* Details */}
                          <div className="flex-grow flex flex-col lg:flex-row justify-between gap-6">
                            <div className="space-y-4">
                              <Link to={`/product/${item._id}`}>
                                <h3 className="text-xl font-black text-cyan-400 uppercase hover:text-pink-600 transition">
                                  {product.name}
                                </h3>
                              </Link>

                              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                  <span className="block text-xs font-black text-pink-600 uppercase">Price</span>
                                  <span className="text-2xl font-black">{currency}{product.price}</span>
                                </div>

                                <div>
                                  <span className="block text-xs font-black text-purple-600 uppercase">Subtotal</span>
                                  <span className="text-2xl font-black">{currency}{(product.price * item.quantity).toFixed(2)}</span>
                                </div>
                              </div>

                              {/* Quantity */}
                              <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-yellow-600 uppercase">Quantity:</span>
                                <div className="flex items-center border-2 border-cyan-600 bg-black">
                                  <button
                                    onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="w-10 h-10 flex items-center justify-center border-r-2 border-cyan-600 hover:bg-cyan-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                  >-</button>
                                  <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value) || 1)}
                                    className="w-16 h-10 text-center bg-black font-black outline-none"
                                  />
                                  <button
                                    onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                    className="w-10 h-10 flex items-center justify-center border-l-2 border-cyan-600 hover:bg-cyan-600 hover:text-white"
                                  >+</button>
                                </div>
                              </div>
                            </div>

                            {/* Delete Button */}
                            <button
                              onClick={() => handleDeleteClick(item._id)}
                              className="p-3 text-gray-400 hover:text-pink-600 hover:bg-pink-600/20 border-2 border-transparent hover:border-pink-600 transition"
                              title="Remove from cart"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
              </div>

              {/* Summary */}
              <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl sticky top-6">
                <div className="p-6 border-b-2 border-pink-600 bg-black">
                  <h3 className="text-xl font-black text-cyan-400 uppercase tracking-wide">Order Summary</h3>
                </div>

                <div className="p-6 space-y-6">
                  <CartTotal />

                  <button onClick={handleCheckout} className="w-full py-4 bg-pink-600 border-2 border-pink-600 hover:border-cyan-600 hover:bg-pink-700 text-white font-black uppercase flex justify-center gap-2">
                    <Zap size={20} />
                    PROCEED TO CHECKOUT
                  </button>

                  <button onClick={() => navigate('/shop/collection')} className="w-full py-4 border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white uppercase font-black">
                    CONTINUE SHOPPING
                  </button>

                  <div className="pt-4 border-t-2 border-pink-900 flex items-center justify-center gap-2 text-xs text-gray-400 font-bold uppercase">
                    <ShieldCheck size={16} className="text-green-500" />
                    SECURE CHECKOUT
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recently Viewed */}
      {cartData.length > 0 && (
        <section className="px-4 lg:px-20 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <RecentlyViewed />
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
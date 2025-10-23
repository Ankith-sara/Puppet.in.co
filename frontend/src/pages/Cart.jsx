import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { Trash2, ShoppingBag, Package, Minus, Plus } from 'lucide-react';
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
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      updateQuantity(id, size, 0);
    }
  };

  const handleQuantityChange = (id, size, newQuantity) => {
    if (newQuantity > 0 && newQuantity <= 99) {
      updateQuantity(id, size, newQuantity);
    }
  };

  // Handle checkout with login check
  const handleCheckout = () => {
    if (!token) {
      sessionStorage.setItem('returnUrl', '/cart');
      navigate('/login');
      return;
    }
    navigate('/place-order');
  };

  useEffect(() => {
    document.title = 'Shopping Cart | Puppet.in.co'
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-20 animate-fade-in">
      <section className="py-12 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-900 mb-3">
              Shopping Cart {cartData.length > 0 && `(${cartData.length})`}
            </h1>
            {cartData.length > 0 && (
              <p className="text-gray-600">
                Review your items before checkout
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {cartData.length === 0 ? (
            // Empty Cart State
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag size={40} className="text-blue-600" />
              </div>
              <div className="text-center max-w-md mb-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Your cart is empty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Looks like you haven't added anything yet. Start shopping to discover amazing products!
                </p>
              </div>
              <button
                onClick={() => navigate('/shop/collection')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartData.map((item, index) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  if (!productData) {
                    return (
                      <div key={index} className="p-6 text-center text-gray-700 bg-red-50 border border-red-200 rounded-xl">
                        <p className="font-semibold">Product not found or unavailable</p>
                        <p className="text-sm">This item may have been removed from our catalog</p>
                      </div>
                    );
                  }

                  return (
                    <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <Link 
                          to={`/product/${item._id}`}
                          className="flex-shrink-0"
                        >
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden bg-gray-100">
                            <img
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                              src={productData.images[0]}
                              alt={productData.name}
                            />
                          </div>
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${item._id}`}
                            className="group"
                          >
                            <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {productData.name}
                            </h3>
                          </Link>

                          <div className="flex flex-wrap gap-4 mb-4">
                            <div>
                              <span className="text-xs text-gray-500 uppercase">Price</span>
                              <p className="font-medium text-gray-900">
                                {currency}{productData.price}
                              </p>
                            </div>

                            <div>
                              <span className="text-xs text-gray-500 uppercase">Size</span>
                              <p className="font-medium text-gray-900">{item.size}</p>
                            </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <button
                                className="h-8 w-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => handleQuantityChange(item._id, item.size, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                className="h-8 w-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={() => handleQuantityChange(item._id, item.size, item.quantity + 1)}
                                disabled={item.quantity >= 99}
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <div className="flex items-center gap-4">
                              <p className="text-lg font-bold text-blue-600">
                                {currency}{(productData.price * item.quantity).toFixed(2)}
                              </p>
                              <button
                                onClick={() => handleDelete(item._id, item.size)}
                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
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
                  className="w-full md:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="bg-white rounded-xl p-6 shadow-lg space-y-4">
                  <h2 className="text-xl font-bold tracking-wide text-gray-900">Order Summary</h2>

                  <div className="space-y-4">
                    <CartTotal />

                    {/* Promo Code Input */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Enter promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          onClick={() => {/* Add promo code logic */}}
                          className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                    {/* Checkout Buttons */}
                    <div className="space-y-3 pt-4">
                      <button
                        onClick={handleCheckout}
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Proceed to Checkout
                      </button>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>🔒 Secure Checkout</span>
                      </div>
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
        <section className="px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold tracking-wide text-gray-900 mb-6">
              Complete Your Look
            </h2>
            <RecentlyViewed />
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart
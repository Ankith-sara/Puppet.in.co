import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';
import {
  Truck, Package, CheckCircle, RefreshCw, ShoppingBag, Calendar, CreditCard, Hash
} from 'lucide-react';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  const navigate = useNavigate();

  const loadOrderData = async () => {
    try {
      if (!token) return;

      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['orderId'] = order._id || `ORD-${Math.floor(Math.random() * 10000)}`;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  useEffect(() => {
    document.title = 'Order History | Puppet';
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'shipped':
      case 'out for delivery':
        return <Truck size={20} className="text-cyan-400" />;
      case 'processing':
        return <RefreshCw size={20} className="text-pink-400" />;
      default:
        return <Package size={20} className="text-purple-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'text-green-400 bg-green-950 border-green-600';
      case 'shipped':
      case 'out for delivery':
        return 'text-cyan-400 bg-cyan-950 border-cyan-600';
      case 'processing':
        return 'text-pink-400 bg-pink-950 border-pink-600';
      case 'cancelled':
        return 'text-red-400 bg-red-950 border-red-600';
      default:
        return 'text-purple-400 bg-purple-950 border-purple-600';
    }
  };

  const getFilteredOrders = () => {
    let filtered = orderData;

    if (filterStatus !== 'all') {
      filtered = filtered.filter(order =>
        order.status?.toLowerCase() === filterStatus.toLowerCase()
      );
    }

    if (sortOrder === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return filtered;
  };

  const filteredOrders = getFilteredOrders();

  if (loading) {
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

        <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)',
                transform: 'skewY(-2deg)'
              }}>
                ORDER HISTORY
              </h1>
            </div>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-400 mx-auto mb-6"></div>
                <span className="text-xl font-black uppercase text-gray-400" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>LOADING YOUR ORDERS...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
            ORDER HISTORY
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          {orderData.length > 0 && (
            <p className="text-2xl md:text-3xl text-gray-400 font-black uppercase" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              {orderData.length} ORDER{orderData.length !== 1 ? 'S' : ''} TRACKED
            </p>
          )}
        </div>
      </section>

      {/* Filters and Sort */}
      {orderData.length > 0 && (
        <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 p-6 bg-purple-950 border-2 border-pink-600">
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'all', label: 'ALL ORDERS', color: 'pink' },
                  { key: 'delivered', label: 'DELIVERED', color: 'cyan' },
                  { key: 'processing', label: 'PROCESSING', color: 'purple' }
                ].map(({ key, label, color }) => {
                  const isActive = filterStatus === key;
                  const colorMap = {
                    pink: isActive ? 'bg-pink-600 text-white border-pink-600' : 'bg-transparent text-pink-400 border-pink-600 hover:bg-pink-600 hover:text-white',
                    cyan: isActive ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-transparent text-cyan-400 border-cyan-600 hover:bg-cyan-600 hover:text-white',
                    purple: isActive ? 'bg-purple-600 text-white border-purple-600' : 'bg-transparent text-purple-400 border-purple-600 hover:bg-purple-600 hover:text-white'
                  };
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setFilterStatus(key)}
                      className={`px-6 py-3 text-sm font-black uppercase tracking-wider border-2 transition-all duration-300 ${colorMap[color]}`}
                      style={{ fontFamily: 'Impact, sans-serif' }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-black text-gray-400 uppercase tracking-wider" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>SORT:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none border-2 border-cyan-600 bg-purple-950 text-cyan-400 px-6 py-3 pr-10 font-black uppercase tracking-wider focus:border-pink-600 focus:outline-none transition-colors"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <option value="newest">NEWEST FIRST</option>
                  <option value="oldest">OLDEST FIRST</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Orders Content */}
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          {orderData.length === 0 ? (
            // Empty State
            <div className="flex flex-col items-center justify-center py-20 bg-purple-950 border-2 border-pink-600">
              <div className="w-24 h-24 border-2 border-cyan-600 flex items-center justify-center mb-8">
                <ShoppingBag size={48} className="text-cyan-400" />
              </div>
              <div className="text-center max-w-md mb-8">
                <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase text-pink-600" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>
                  NO ORDERS YET
                </h3>
                <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Your order history is empty. Time to make some bold choices!
                </p>
              </div>
              <button
                onClick={() => navigate('/shop/collection')}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase tracking-wider border-2 border-pink-600 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                BROWSE PRODUCTS
              </button>
            </div>
          ) : (
            // Orders List
            <div className="space-y-8">
              {filteredOrders.map((item, index) => {
                const statusColors = {
                  delivered: 'pink',
                  shipped: 'cyan',
                  processing: 'purple'
                };
                const mainColor = statusColors[item.status?.toLowerCase()] || 'pink';
                const borderColor = mainColor === 'pink' ? 'border-pink-600' : mainColor === 'cyan' ? 'border-cyan-600' : 'border-purple-600';
                
                return (
                  <div key={index} className={`bg-purple-950 border-2 ${borderColor} hover:scale-[1.02] transition-all duration-300 group`}>
                    {/* Order Header */}
                    <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-wrap">
                          <div className="flex items-center gap-2">
                            <Hash size={16} className="text-pink-400" />
                            <span className="text-xs font-black text-gray-400 uppercase tracking-wider" style={{
                              fontFamily: 'Impact, sans-serif'
                            }}>ORDER:</span>
                            <span className="font-black text-cyan-400 tracking-wide" style={{
                              fontFamily: 'Impact, sans-serif'
                            }}>{item.orderId}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-cyan-400" />
                            <span className="text-sm text-gray-400 font-bold">{formatDate(item.date)}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <CreditCard size={16} className="text-purple-400" />
                            <span className="text-sm text-gray-400 font-bold uppercase">{item.paymentMethod}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className={`flex items-center gap-2 px-4 py-2 border-2 ${getStatusColor(item.status)}`}>
                            {getStatusIcon(item.status)}
                            <span className="text-sm font-black uppercase tracking-wider" style={{
                              fontFamily: 'Impact, sans-serif'
                            }}>
                              {item.status || 'Processing'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Content */}
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Product Image */}
                        <div className="flex-shrink-0">
                          <div className="w-full h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 border-2 border-cyan-600 overflow-hidden group-hover:border-pink-600 transition-colors">
                            <img
                              className="w-full h-full object-contain bg-black"
                              src={item.image || item.images?.[0]}
                              alt={item.name}
                              onError={(e) => {
                                e.target.src = '/api/placeholder/224/224';
                              }}
                            />
                          </div>
                        </div>

                        {/* Order Details */}
                        <div className="flex-grow flex flex-col lg:flex-row justify-between gap-6">
                          <div className="flex-grow space-y-6">
                            <div>
                              <h3 className="font-black text-2xl md:text-3xl text-cyan-400 mb-3 uppercase group-hover:text-pink-400 transition-colors" style={{
                                fontFamily: 'Impact, sans-serif'
                              }}>
                                {item.name}
                              </h3>
                              <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                              <div className="space-y-2">
                                <span className="block text-xs font-black text-gray-500 uppercase tracking-wider" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  PRICE
                                </span>
                                <span className="font-black text-xl text-pink-400" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  {currency}{item.price}
                                </span>
                              </div>

                              <div className="space-y-2">
                                <span className="block text-xs font-black text-gray-500 uppercase tracking-wider" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  QUANTITY
                                </span>
                                <span className="font-black text-xl text-cyan-400" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>{item.quantity}</span>
                              </div>

                              <div className="space-y-2">
                                <span className="block text-xs font-black text-gray-500 uppercase tracking-wider" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  SIZE
                                </span>
                                <span className="font-black text-xl text-purple-400" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>{item.size}</span>
                              </div>

                              <div className="space-y-2">
                                <span className="block text-xs font-black text-gray-500 uppercase tracking-wider" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  TOTAL
                                </span>
                                <span className="font-black text-2xl text-pink-400" style={{
                                  fontFamily: 'Impact, sans-serif'
                                }}>
                                  {currency}{(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="flex items-center lg:items-start">
                            <button
                              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-black uppercase tracking-wider border-2 border-cyan-600 hover:scale-105 transition-all duration-300 w-full lg:w-auto"
                              onClick={() => navigate(`/trackorder/${item.orderId}`)}
                              style={{ fontFamily: 'Impact, sans-serif' }}
                            >
                              <Truck size={20} />
                              <span>TRACK</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Continue Shopping Section */}
              <div className="mt-16 bg-purple-950 border-2 border-pink-600 p-12 text-center">
                <h3 className="text-4xl md:text-5xl font-black text-pink-600 mb-4 uppercase" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>WANT MORE?</h3>
                <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                  Discover more bold pieces that make statements
                </p>
                <button
                  onClick={() => navigate('/shop/collection')}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase tracking-wider border-2 border-pink-600 hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <span>CONTINUE SHOPPING</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default Orders;
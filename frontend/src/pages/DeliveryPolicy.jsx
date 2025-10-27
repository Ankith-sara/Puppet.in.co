import React, { useEffect } from 'react';
import { Truck, Globe, Package, Clock, MapPin, Mail } from 'lucide-react';

const ShippingDeliveryPolicy = () => {
  useEffect(() => {
    document.title = 'Shipping & Delivery Policy | Puppet'
  });

  return (
    <div className="min-h-screen text-white mt-16" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background - subtle */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Reduced neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-black mb-4" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)',
              letterSpacing: '0.05em'
            }}>
              SHIPPING & DELIVERY
            </h1>
            <div className="h-1 w-32 mx-auto" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ 
            color: '#E0BBE4'
          }}>
            We ensure your bold statement pieces reach you safely and promptly, whether you're in India or anywhere across the globe.
          </p>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-widest uppercase mb-6" style={{ 
              color: '#FF1493',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
            }}>
              SHIPPING METHODS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* International Shipping */}
            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
            }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center" style={{
                  border: '2px solid #FF1493',
                  boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
                }}>
                  <Globe size={24} style={{ color: '#FF1493' }} />
                </div>
                <h3 className="text-xl font-black uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif'
                }}>International Shipping</h3>
              </div>

              <div className="space-y-4 font-light">
                <p style={{ color: '#E0BBE4' }}>For our global customers, we ship through registered international courier companies and international speed post services.</p>
                
                <div className="p-4" style={{
                  background: 'rgba(255, 20, 147, 0.08)',
                  border: '1px solid rgba(255, 20, 147, 0.3)'
                }}>
                  <h4 className="font-black mb-2 uppercase text-sm" style={{ 
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Available Services:</h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#FFB6C1' }}>
                    <li>▶ Registered International Courier Companies</li>
                    <li>▶ International Speed Post</li>
                  </ul>
                </div>

                <p className="text-sm italic" style={{ color: '#FFB6C1' }}>
                  All international shipments include tracking and insurance for your peace of mind.
                </p>
              </div>
            </div>

            {/* Domestic Shipping */}
            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
            }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center" style={{
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
                }}>
                  <MapPin size={24} style={{ color: '#00FFFF' }} />
                </div>
                <h3 className="text-xl font-black uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>Domestic Shipping</h3>
              </div>

              <div className="space-y-4 font-light">
                <p style={{ color: '#E0BBE4' }}>Within India, we ensure reliable delivery through registered domestic courier companies and speed post services.</p>
                
                <div className="p-4" style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.3)'
                }}>
                  <h4 className="font-black mb-2 uppercase text-sm" style={{ 
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>Available Services:</h4>
                  <ul className="space-y-1 text-sm" style={{ color: '#FFB6C1' }}>
                    <li>▶ Registered Domestic Courier Companies</li>
                    <li>▶ Speed Post</li>
                  </ul>
                </div>

                <p className="text-sm italic" style={{ color: '#FFB6C1' }}>
                  Fast and secure delivery across all major cities and towns in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing & Delivery Timeline */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #FF6B9D',
                boxShadow: '0 0 8px rgba(255, 107, 157, 0.4)'
              }}>
                <Clock size={24} style={{ color: '#FF6B9D' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{ 
                color: '#FF6B9D',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(255, 107, 157, 0.2)'
              }}>
                PROCESSING TIME
              </h2>
            </div>
          </div>

          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF6B9D',
            boxShadow: '0 0 15px rgba(255, 107, 157, 0.3)'
          }}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="text-5xl font-black mb-4" style={{
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3)'
                }}>0-7 DAYS</div>
                <h3 className="text-xl font-black mb-4 uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>Order Processing & Shipping</h3>
                <p className="font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                  Orders are processed and shipped within 0-7 days from order confirmation, 
                  or as per the delivery date agreed at the time of order placement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6" style={{
                  background: 'rgba(255, 20, 147, 0.08)',
                  border: '1px solid rgba(255, 20, 147, 0.3)'
                }}>
                  <Package className="mx-auto mb-3" size={24} style={{ color: '#FF1493' }} />
                  <h4 className="font-black mb-2 uppercase text-sm" style={{ 
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Order Confirmation</h4>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>Within 24 hours of payment</p>
                </div>
                
                <div className="p-6" style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.3)'
                }}>
                  <Truck className="mx-auto mb-3" size={24} style={{ color: '#00FFFF' }} />
                  <h4 className="font-black mb-2 uppercase text-sm" style={{ 
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>Processing</h4>
                  <p className="text-sm" style={{ color: '#E0BBE4' }}>0-7 days preparation time</p>
                </div>
                
                <div className="p-6" style={{
                  background: 'rgba(255, 107, 157, 0.08)',
                  border: '1px solid rgba(255, 107, 157, 0.3)'
                }}>
                  <Globe className="mx-auto mb-3" size={24} style={{ color: '#FF6B9D' }} />
                  <h4 className="font-black mb-2 uppercase text-sm" style={{ 
                    color: '#FF6B9D',
                    fontFamily: 'Impact, sans-serif'
                  }}>Shipment</h4>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>Handed to courier partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #00FFFF',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
          }}>
            <h2 className="text-2xl font-black tracking-widest uppercase mb-8 text-center" style={{ 
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
            }}>IMPORTANT NOTICE</h2>
            
            <div className="space-y-6 font-light leading-relaxed">
              <div className="p-6" style={{
                background: 'rgba(255, 20, 147, 0.08)',
                border: '1px solid rgba(255, 20, 147, 0.3)'
              }}>
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Clock size={18} />
                  Delivery Responsibility
                </h3>
                <p style={{ color: '#E0BBE4' }}>
                  <strong style={{ color: '#FFB6C1' }}>Puppet is not liable for any delay in delivery by courier companies or postal authorities.</strong> 
                  {' '}We guarantee to hand over the consignment to the courier company or postal authorities within 
                  the specified timeframe from the date of order and payment.
                </p>
              </div>

              <div className="p-6" style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '1px solid rgba(0, 255, 255, 0.3)'
              }}>
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <MapPin size={18} />
                  Delivery Address
                </h3>
                <p style={{ color: '#E0BBE4' }}>
                  All orders will be delivered to the address provided by the buyer at the time of order placement. 
                  Please ensure your address is complete and accurate to avoid delivery delays.
                </p>
              </div>

              <div className="p-6" style={{
                background: 'rgba(255, 107, 157, 0.08)',
                border: '1px solid rgba(255, 107, 157, 0.3)'
              }}>
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase" style={{ 
                  color: '#FF6B9D',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Mail size={18} />
                  Delivery Confirmation
                </h3>
                <p style={{ color: '#E0BBE4' }}>
                  Delivery confirmation will be sent to your registered email address. 
                  You'll receive tracking information once your order is dispatched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-widest uppercase mb-8" style={{ 
            color: '#FF1493',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
          }}>
            SHIPPING SUPPORT
          </h2>
          <p className="font-light mb-8 max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            For any issues with your shipment or delivery, our customer support team is ready to assist you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 12px rgba(255, 20, 147, 0.3)'
            }}>
              <h4 className="font-black mb-2 uppercase" style={{ 
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif'
              }}>Helpdesk Phone</h4>
              <p className="text-lg mb-1" style={{ color: '#00FFFF' }}>+91 9399336666</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>
            
            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 12px rgba(0, 255, 255, 0.3)'
            }}>
              <h4 className="font-black mb-2 uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif'
              }}>Email Support</h4>
              <p className="text-lg mb-1" style={{ color: '#FFB6C1' }}>dotpuppetk@gmail.com</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
            </div>
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto" style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 20px rgba(255, 20, 147, 0.4)'
          }}>
            <h3 className="font-black text-xl mb-4 uppercase" style={{ 
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif'
            }}>Tracking Your Order</h3>
            <p className="font-light leading-relaxed" style={{ color: '#FFB6C1' }}>
              Once your order is shipped, you'll receive a tracking number via email. 
              Use this number to track your package's journey from our facility to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Scanlines effect at bottom */}
      <div className="h-2 relative" style={{
        borderTop: '2px solid #FF1493',
        boxShadow: '0 -2px 15px rgba(255, 20, 147, 0.5)'
      }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>
      </div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
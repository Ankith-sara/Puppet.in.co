import React, { useEffect } from 'react';
import { Truck, Globe, Package, Clock, MapPin, Mail } from 'lucide-react';

const ShippingDeliveryPolicy = () => {
  useEffect(() => {
    document.title = 'Shipping & Delivery Policy | Puppet'
  });

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 pt-24 pb-12">
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(120 113 108) 1px, transparent 1px),
          linear-gradient(90deg, rgb(120 113 108) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-stone-800" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '3px 3px 0px rgb(168 162 158)',
            transform: 'skewY(-2deg)'
          }}>
            SHIPPING & DELIVERY
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>

          <p className="text-2xl md:text-3xl text-stone-700 max-w-3xl mx-auto">
            We ensure your bold statement pieces reach you safely and promptly, whether you're in India or anywhere across the globe.
          </p>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-stone-700" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              SHIPPING METHODS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* International Shipping */}
            <div className="group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 border-stone-700">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-stone-700">
                    <Globe size={24} className="text-stone-700" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-stone-700" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>International Shipping</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-stone-600 leading-relaxed">
                    For our global customers, we ship through registered international courier companies and international speed post services.
                  </p>
                  
                  <div className="p-4 bg-stone-50 border border-stone-700">
                    <h4 className="font-black mb-2 uppercase text-sm text-stone-700" style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>Available Services:</h4>
                    <ul className="space-y-1 text-sm text-stone-600">
                      <li>▶ Registered International Courier Companies</li>
                      <li>▶ International Speed Post</li>
                    </ul>
                  </div>

                  <p className="text-sm italic text-stone-500">
                    All international shipments include tracking and insurance for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Domestic Shipping */}
            <div className="group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 border-lime-800">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-800">
                    <MapPin size={24} className="text-lime-800" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-lime-800" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Domestic Shipping</h3>
                </div>

                <div className="space-y-4">
                  <p className="text-stone-600 leading-relaxed">
                    Within India, we ensure reliable delivery through registered domestic courier companies and speed post services.
                  </p>
                  
                  <div className="p-4 bg-stone-50 border border-lime-800">
                    <h4 className="font-black mb-2 uppercase text-sm text-lime-800" style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>Available Services:</h4>
                    <ul className="space-y-1 text-sm text-stone-600">
                      <li>▶ Registered Domestic Courier Companies</li>
                      <li>▶ Speed Post</li>
                    </ul>
                  </div>

                  <p className="text-sm italic text-stone-500">
                    Fast and secure delivery across all major cities and towns in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing & Delivery Timeline */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-emerald-700 bg-stone-100">
                <Clock size={48} className="text-emerald-700" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-emerald-700" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              PROCESSING TIME
            </h2>
          </div>

          <div className="bg-stone-100 border-2 border-emerald-700 p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="text-6xl md:text-7xl font-black mb-4 text-stone-800" style={{
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgb(168 162 158)'
                }}>0-7 DAYS</div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase text-stone-700" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Order Processing & Shipping</h3>
                <p className="text-lg leading-relaxed text-stone-600">
                  Orders are processed and shipped within 0-7 days from order confirmation, 
                  or as per the delivery date agreed at the time of order placement.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-stone-50 border border-stone-700 p-6">
                  <Package className="mx-auto mb-3 text-stone-700" size={32} />
                  <h4 className="font-black mb-2 uppercase text-sm text-stone-700" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Order Confirmation</h4>
                  <p className="text-sm text-stone-600">Within 24 hours of payment</p>
                </div>
                
                <div className="bg-stone-50 border border-lime-800 p-6">
                  <Truck className="mx-auto mb-3 text-lime-800" size={32} />
                  <h4 className="font-black mb-2 uppercase text-sm text-lime-800" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Processing</h4>
                  <p className="text-sm text-stone-600">0-7 days preparation time</p>
                </div>
                
                <div className="bg-stone-50 border border-emerald-700 p-6">
                  <Globe className="mx-auto mb-3 text-emerald-700" size={32} />
                  <h4 className="font-black mb-2 uppercase text-sm text-emerald-700" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Shipment</h4>
                  <p className="text-sm text-stone-600">Handed to courier partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-100 border-2 border-lime-800 p-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center text-stone-800" style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(168 162 158)'
            }}>IMPORTANT NOTICE</h2>
            
            <div className="space-y-6 leading-relaxed">
              <div className="p-6 bg-stone-50 border border-stone-700">
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase text-stone-700" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Clock size={20} />
                  Delivery Responsibility
                </h3>
                <p className="text-stone-600">
                  <strong className="text-stone-800">Puppet is not liable for any delay in delivery by courier companies or postal authorities.</strong> 
                  {' '}We guarantee to hand over the consignment to the courier company or postal authorities within 
                  the specified timeframe from the date of order and payment.
                </p>
              </div>

              <div className="p-6 bg-stone-50 border border-lime-800">
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase text-lime-800" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <MapPin size={20} />
                  Delivery Address
                </h3>
                <p className="text-stone-600">
                  All orders will be delivered to the address provided by the buyer at the time of order placement. 
                  Please ensure your address is complete and accurate to avoid delivery delays.
                </p>
              </div>

              <div className="p-6 bg-stone-50 border border-emerald-700">
                <h3 className="font-black mb-3 flex items-center gap-2 uppercase text-emerald-700" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Mail size={20} />
                  Delivery Confirmation
                </h3>
                <p className="text-stone-600">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-stone-700" style={{ 
            fontFamily: 'Impact, sans-serif'
          }}>
            SHIPPING SUPPORT
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-stone-600">
            For any issues with your shipment or delivery, our customer support team is ready to assist you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 border-stone-700 p-6">
              <h4 className="font-black mb-2 uppercase text-stone-700" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Helpdesk Phone</h4>
              <p className="text-xl mb-1 text-lime-800">+91 9399336666</p>
              <p className="text-sm text-stone-600">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            
            <div className="group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 border-lime-800 p-6">
              <h4 className="font-black mb-2 uppercase text-lime-800" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Email Support</h4>
              <p className="text-xl mb-1 text-stone-800">dotpuppetk@gmail.com</p>
              <p className="text-sm text-stone-600">Response within 24 hours</p>
            </div>
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto bg-stone-100 border-2 border-emerald-700">
            <h3 className="font-black text-2xl md:text-3xl mb-4 uppercase text-emerald-700" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>Tracking Your Order</h3>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
            <p className="leading-relaxed text-stone-600">
              Once your order is shipped, you'll receive a tracking number via email. 
              Use this number to track your package's journey from our facility to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-stone-400"></div>
    </div>
  );
};

export default ShippingDeliveryPolicy;
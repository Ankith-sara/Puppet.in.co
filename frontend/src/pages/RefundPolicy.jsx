import React, { useEffect } from 'react';
import { RotateCcw, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationRefundPolicy = () => {
  useEffect(() => {
    document.title = 'Cancellation & Refund Policy | Puppet'
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            transform: 'skewY(-2deg)'
          }}>
            CANCELLATION & REFUND
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            At Puppet, we believe in helping our customers as far as possible. Our liberal cancellation and refund policy reflects our commitment to your satisfaction.
          </p>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-pink-600">
                  <RotateCcw size={32} className="text-pink-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-pink-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  CANCELLATION POLICY
                </h2>
              </div>
              
              <div className="space-y-6 leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none text-gray-400">
                  <span className="text-pink-600">W</span>e understand that plans change. Our cancellation policy is designed to be fair and transparent while respecting the artisans and partners who craft each piece.
                </p>
                
                <div className="bg-purple-950 border-2 border-cyan-600 p-6">
                  <h4 className="font-black mb-3 flex items-center gap-2 uppercase text-cyan-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <Clock size={20} />
                    Time Limit for Cancellations
                  </h4>
                  <p className="text-gray-400">Cancellation requests will be considered only if made within <strong className="text-pink-400">2 days of placing the order</strong>.</p>
                </div>

                <div className="bg-purple-950 border-2 border-purple-600 p-6">
                  <h4 className="font-black mb-3 flex items-center gap-2 uppercase text-purple-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <AlertCircle size={20} />
                    Processing Limitations
                  </h4>
                  <p className="text-gray-400">Cancellation requests may not be entertained if orders have been communicated to vendors/merchants and they have initiated the shipping process.</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-950 border-2 border-pink-600 p-8">
              <h3 className="text-2xl font-black mb-6 uppercase text-pink-600" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Cancellation Restrictions</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-cyan-600">▶</div>
                  <div>
                    <p className="font-black text-cyan-600 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>PERISHABLE ITEMS</p>
                    <p className="text-sm text-gray-400">We do not accept cancellation requests for perishable items like flowers, eatables, etc.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-cyan-600">▶</div>
                  <div>
                    <p className="font-black text-cyan-600 uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>QUALITY ISSUES</p>
                    <p className="text-sm text-gray-400">Refund/replacement available if you can establish that the product quality is not satisfactory.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-cyan-600 bg-purple-950">
                <Shield size={48} className="text-cyan-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-cyan-400" style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)'
            }}>
              REFUND POLICY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={24} className="text-pink-600" />
                <h3 className="font-black uppercase text-pink-600" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Damaged/Defective Items</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Report damaged or defective items to our Customer Service team within <strong className="text-pink-400">2 days of receipt</strong>. 
                We'll process your request after merchant verification.
              </p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw size={24} className="text-cyan-600" />
                <h3 className="font-black uppercase text-cyan-600" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Product Expectations</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                If the product doesn't match the website description or your expectations, 
                contact us within <strong className="text-cyan-400">2 days</strong>. Our team will review and decide accordingly.
              </p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={24} className="text-purple-600" />
                <h3 className="font-black uppercase text-purple-600" style={{ 
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Warranty Items</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                For products with manufacturer warranty, 
                please refer warranty-related issues directly to the respective manufacturers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Processing */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-purple-950 border-2 border-purple-600 p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <CheckCircle size={48} className="text-cyan-600" />
              <h2 className="text-3xl md:text-4xl font-black uppercase text-cyan-400" style={{ 
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)'
              }}>
                REFUND PROCESSING TIME
              </h2>
            </div>
            
            <div className="leading-relaxed">
              <p className="text-lg mb-4 text-gray-400">
                Once your refund is approved by Puppet, it will take
              </p>
              <div className="text-6xl md:text-7xl font-black mb-4 text-pink-600" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(219, 39, 119, 0.3)'
              }}>6-8 DAYS</div>
              <p className="text-gray-400">
                for the refund to be processed to your account. Processing time may vary depending on your bank or payment method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-pink-600" style={{ 
            fontFamily: 'Impact, sans-serif'
          }}>
            NEED HELP?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            Our customer service team is here to assist you with any cancellation or refund queries. 
            We're committed to resolving your concerns promptly and fairly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <h4 className="font-black mb-2 uppercase text-pink-600" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Phone Support</h4>
              <p className="text-xl text-cyan-400">+91 9399336666</p>
              <p className="text-sm mt-1 text-gray-400">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <h4 className="font-black mb-2 uppercase text-cyan-600" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Email Support</h4>
              <p className="text-xl text-pink-400">dotpuppetk@gmail.com</p>
              <p className="text-sm mt-1 text-gray-400">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default CancellationRefundPolicy;
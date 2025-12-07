import React, { useEffect } from 'react';
import { RotateCcw, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationRefundPolicy = () => {
  useEffect(() => {
    document.title = 'Cancellation & Refund Policy | Puppet'
  });

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 pt-24 pb-12 relative overflow-hidden">
      {/* Background Grid */}
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
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-wider text-stone-800" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '3px 3px 0px rgb(168 162 158)'
          }}>
            CANCELLATION & REFUND
          </h1>
          
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>

          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-medium">
            At Puppet, we believe in helping our customers as far as possible. Our liberal cancellation and refund policy reflects our commitment to your satisfaction.
          </p>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-lime-800 bg-stone-100">
                  <RotateCcw size={32} className="text-lime-800" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-lime-800 tracking-wider" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  CANCELLATION POLICY
                </h2>
              </div>
              
              <div className="space-y-6 leading-relaxed">
                <p className="text-stone-700">
                  We understand that plans change. Our cancellation policy is designed to be fair and transparent while respecting the artisans and partners who craft each piece.
                </p>
                
                <div className="bg-stone-100 border-2 border-lime-800 shadow-xl">
                  <div className="p-4 border-b-2 border-lime-800 bg-stone-50">
                    <h4 className="font-black flex items-center gap-2 uppercase text-lime-800 text-sm tracking-wider" style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      <Clock size={18} />
                      Time Limit for Cancellations
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-700 text-sm">Cancellation requests will be considered only if made within <strong className="text-stone-900">2 days of placing the order</strong>.</p>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-lime-800 to-emerald-700"></div>
                </div>

                <div className="bg-stone-100 border-2 border-emerald-700 shadow-xl">
                  <div className="p-4 border-b-2 border-emerald-700 bg-stone-50">
                    <h4 className="font-black flex items-center gap-2 uppercase text-emerald-700 text-sm tracking-wider" style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      <AlertCircle size={18} />
                      Processing Limitations
                    </h4>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-700 text-sm">Cancellation requests may not be entertained if orders have been communicated to vendors/merchants and they have initiated the shipping process.</p>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-emerald-700 to-lime-800"></div>
                </div>
              </div>
            </div>

            <div className="bg-stone-100 border-4 border-stone-700 shadow-2xl">
              <div className="p-6 border-b-2 border-stone-700 bg-stone-50">
                <h3 className="text-xl font-black uppercase text-stone-800 tracking-wider" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Cancellation Restrictions</h3>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-lime-800 font-black">▶</div>
                  <div>
                    <p className="font-black text-lime-800 uppercase mb-2 text-sm tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>PERISHABLE ITEMS</p>
                    <p className="text-sm text-stone-600">We do not accept cancellation requests for perishable items like flowers, eatables, etc.</p>
                  </div>
                </div>
                
                <div className="h-px bg-stone-300"></div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-emerald-700 font-black">▶</div>
                  <div>
                    <p className="font-black text-emerald-700 uppercase mb-2 text-sm tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>QUALITY ISSUES</p>
                    <p className="text-sm text-stone-600">Refund/replacement available if you can establish that the product quality is not satisfactory.</p>
                  </div>
                </div>
              </div>
              
              <div className="h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-6 w-16 h-16 flex items-center justify-center border-2 border-lime-800 bg-stone-100">
              <Shield size={32} className="text-lime-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-stone-800 tracking-wider" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              REFUND POLICY
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stone-100 border-2 border-lime-800 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="p-4 border-b-2 border-lime-800 bg-stone-50 flex items-center gap-3">
                <AlertCircle size={20} className="text-lime-800" />
                <h3 className="font-black uppercase text-lime-800 text-xs tracking-wider" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Damaged/Defective Items</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-stone-700">
                  Report damaged or defective items to our Customer Service team within <strong className="text-stone-900">2 days of receipt</strong>. 
                  We'll process your request after merchant verification.
                </p>
              </div>
              <div className="h-2 bg-lime-800"></div>
            </div>

            <div className="bg-stone-100 border-2 border-emerald-700 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="p-4 border-b-2 border-emerald-700 bg-stone-50 flex items-center gap-3">
                <RotateCcw size={20} className="text-emerald-700" />
                <h3 className="font-black uppercase text-emerald-700 text-xs tracking-wider" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Product Expectations</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-stone-700">
                  If the product doesn't match the website description or your expectations, 
                  contact us within <strong className="text-stone-900">2 days</strong>. Our team will review and decide accordingly.
                </p>
              </div>
              <div className="h-2 bg-emerald-700"></div>
            </div>

            <div className="bg-stone-100 border-2 border-stone-700 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="p-4 border-b-2 border-stone-700 bg-stone-50 flex items-center gap-3">
                <Shield size={20} className="text-stone-700" />
                <h3 className="font-black uppercase text-stone-700 text-xs tracking-wider" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Warranty Items</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-stone-700">
                  For products with manufacturer warranty, 
                  please refer warranty-related issues directly to the respective manufacturers.
                </p>
              </div>
              <div className="h-2 bg-stone-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Processing */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-stone-100 border-4 border-stone-700 shadow-2xl">
            <div className="p-8 border-b-2 border-stone-700 bg-stone-50 flex flex-col items-center justify-center gap-4">
              <CheckCircle size={40} className="text-lime-800" />
              <h2 className="text-2xl md:text-3xl font-black uppercase text-stone-800 tracking-wider" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>
                REFUND PROCESSING TIME
              </h2>
            </div>
            
            <div className="p-12">
              <p className="text-base mb-6 text-stone-700 font-medium">
                Once your refund is approved by Puppet, it will take
              </p>
              <div className="text-6xl md:text-7xl font-black mb-6 text-lime-800" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '3px 3px 0px rgb(168 162 158)'
              }}>6-8 DAYS</div>
              <p className="text-stone-700 max-w-2xl mx-auto">
                for the refund to be processed to your account. Processing time may vary depending on your bank or payment method.
              </p>
            </div>
            
            <div className="h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase text-stone-800 tracking-wider" style={{ 
            fontFamily: 'Impact, sans-serif'
          }}>
            NEED HELP?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto text-stone-600 font-medium">
            Our customer service team is here to assist you with any cancellation or refund queries. 
            We're committed to resolving your concerns promptly and fairly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-stone-100 border-2 border-lime-800 p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black mb-2 uppercase text-lime-800 text-sm tracking-wider" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Phone Support</h4>
              <p className="text-lg text-stone-900 font-bold">+91 9399336666</p>
              <p className="text-sm mt-1 text-stone-600">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            
            <div className="bg-stone-100 border-2 border-emerald-700 p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black mb-2 uppercase text-emerald-700 text-sm tracking-wider" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Email Support</h4>
              <p className="text-lg text-stone-900 font-bold">dotpuppetk@gmail.com</p>
              <p className="text-sm mt-1 text-stone-600">Response within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationRefundPolicy;
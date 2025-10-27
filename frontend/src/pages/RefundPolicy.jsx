import React, { useEffect } from 'react';
import { RotateCcw, Shield, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationRefundPolicy = () => {
  useEffect(() => {
    document.title = 'Cancellation & Refund Policy | Puppet'
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
              CANCELLATION & REFUND
            </h1>
            <div className="h-1 w-32 mx-auto" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ 
            color: '#E0BBE4'
          }}>
            At Puppet, we believe in helping our customers as far as possible. Our liberal cancellation and refund policy reflects our commitment to your satisfaction.
          </p>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center" style={{
                  border: '2px solid #FF1493',
                  boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
                }}>
                  <RotateCcw size={24} style={{ color: '#FF1493' }} />
                </div>
                <h2 className="text-2xl font-black tracking-widest uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
                }}>
                  CANCELLATION POLICY
                </h2>
              </div>
              
              <div className="space-y-6 font-light leading-relaxed">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none" style={{ color: '#E0BBE4' }}>
                  <span style={{ color: '#FF1493' }}>W</span>e understand that plans change. Our cancellation policy is designed to be fair and transparent while respecting the artisans and partners who craft each piece.
                </p>
                
                <div className="p-6" style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 12px rgba(0, 255, 255, 0.25)'
                }}>
                  <h4 className="font-black mb-3 flex items-center gap-2 uppercase" style={{ 
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <Clock size={18} />
                    Time Limit for Cancellations
                  </h4>
                  <p style={{ color: '#FFB6C1' }}>Cancellation requests will be considered only if made within <strong style={{ color: '#FF1493' }}>2 days of placing the order</strong>.</p>
                </div>

                <div className="p-6" style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #FF6B9D',
                  boxShadow: '0 0 12px rgba(255, 107, 157, 0.25)'
                }}>
                  <h4 className="font-black mb-3 flex items-center gap-2 uppercase" style={{ 
                    color: '#FF6B9D',
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <AlertCircle size={18} />
                    Processing Limitations
                  </h4>
                  <p style={{ color: '#E0BBE4' }}>Cancellation requests may not be entertained if orders have been communicated to vendors/merchants and they have initiated the shipping process.</p>
                </div>
              </div>
            </div>

            <div className="p-8" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
            }}>
              <h3 className="text-xl font-black mb-6 uppercase" style={{ 
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif'
              }}>Cancellation Restrictions</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1" style={{ color: '#00FFFF' }}>▶</div>
                  <div>
                    <p className="font-black" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>PERISHABLE ITEMS</p>
                    <p className="text-sm" style={{ color: '#FFB6C1' }}>We do not accept cancellation requests for perishable items like flowers, eatables, etc.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1" style={{ color: '#00FFFF' }}>▶</div>
                  <div>
                    <p className="font-black" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>QUALITY ISSUES</p>
                    <p className="text-sm" style={{ color: '#FFB6C1' }}>Refund/replacement available if you can establish that the product quality is not satisfactory.</p>
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
              }}>
                <Shield size={24} style={{ color: '#00FFFF' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
              }}>
                REFUND POLICY
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 12px rgba(255, 20, 147, 0.25)'
            }}>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={20} style={{ color: '#FF1493' }} />
                <h3 className="font-black uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Damaged/Defective Items</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                Report damaged or defective items to our Customer Service team within <strong style={{ color: '#FFB6C1' }}>2 days of receipt</strong>. 
                We'll process your request after merchant verification.
              </p>
            </div>

            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 12px rgba(0, 255, 255, 0.25)'
            }}>
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw size={20} style={{ color: '#00FFFF' }} />
                <h3 className="font-black uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Product Expectations</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                If the product doesn't match the website description or your expectations, 
                contact us within <strong style={{ color: '#FFB6C1' }}>2 days</strong>. Our team will review and decide accordingly.
              </p>
            </div>

            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF6B9D',
              boxShadow: '0 0 12px rgba(255, 107, 157, 0.25)'
            }}>
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} style={{ color: '#FF6B9D' }} />
                <h3 className="font-black uppercase" style={{ 
                  color: '#FF6B9D',
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>Warranty Items</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
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
          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF6B9D',
            boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)'
          }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <CheckCircle size={32} style={{ color: '#00FFFF' }} />
              <h2 className="text-2xl font-black tracking-widest uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
              }}>
                REFUND PROCESSING TIME
              </h2>
            </div>
            
            <div className="font-light leading-relaxed">
              <p className="text-lg mb-4" style={{ color: '#E0BBE4' }}>
                Once your refund is approved by Puppet, it will take
              </p>
              <div className="text-5xl font-black mb-4" style={{
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif',
                textShadow: '3px 3px 0px rgba(255, 20, 147, 0.3)'
              }}>6-8 DAYS</div>
              <p style={{ color: '#FFB6C1' }}>
                for the refund to be processed to your account. Processing time may vary depending on your bank or payment method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-widest uppercase mb-8" style={{ 
            color: '#FF1493',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
          }}>
            NEED HELP?
          </h2>
          <p className="font-light mb-8 max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            Our customer service team is here to assist you with any cancellation or refund queries. 
            We're committed to resolving your concerns promptly and fairly.
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
              }}>Phone Support</h4>
              <p style={{ color: '#00FFFF' }}>+91 9399336666</p>
              <p className="text-sm mt-1" style={{ color: '#E0BBE4' }}>Mon-Sat: 9 AM - 6 PM</p>
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
              <p style={{ color: '#FFB6C1' }}>dotpuppetk@gmail.com</p>
              <p className="text-sm mt-1" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
            </div>
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

export default CancellationRefundPolicy;
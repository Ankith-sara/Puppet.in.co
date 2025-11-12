import React, { useEffect } from 'react';
import { Phone, Mail, Clock, HeadphonesIcon, HelpCircle, Truck, RefreshCw, CreditCard, MapPin } from 'lucide-react';

const Support = () => {
  useEffect(() => {
    document.title = 'Customer Support | Puppet'
  });

  const supportCategories = [
    {
      icon: Truck,
      title: "Orders & Shipping",
      description: "Track orders, shipping updates, delivery issues",
      topics: ["Order status", "Tracking", "Delivery delays", "Shipping charges"],
      color: "#FF1493"
    },
    {
      icon: RefreshCw,
      title: "Returns & Exchanges",
      description: "Return requests, refund status, exchange policies",
      topics: ["Return policy", "Refund status", "Exchange requests", "Return pickup"],
      color: "#00FFFF"
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment issues, billing queries, transaction problems",
      topics: ["Payment failed", "Refund queries", "Invoice requests", "Payment methods"],
      color: "#FF6B9D"
    },
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Account issues, technical problems, product queries",
      topics: ["Account access", "Technical issues", "Product information", "Website problems"],
      color: "#00FFFF"
    }
  ];

  return (
    <div className="min-h-screen text-white pt-24 pb-12" style={{ 
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
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)',
              letterSpacing: '0.05em'
            }}>
              CUSTOMER SUPPORT
            </h1>
            <div className="h-1 w-32 mx-auto" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ 
            color: '#E0BBE4'
          }}>
            We're here to help! Get in touch with our support team for assistance with orders, returns, or any questions about your bold Puppet experience.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="w-16 h-16 flex items-center justify-center" style={{
              border: '2px solid #FF1493',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
            }}>
              <HeadphonesIcon size={32} style={{ color: '#FF1493' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-widest uppercase mb-6" style={{ 
              color: '#FF1493',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
            }}>
              GET IN TOUCH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Support */}
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
                  <Phone size={24} style={{ color: '#FF1493' }} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase" style={{ 
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Phone Support</h3>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>Speak with our team</p>
                </div>
              </div>

              <div className="space-y-4 font-light">
                <p className="text-lg font-medium" style={{ color: '#00FFFF' }}>+91 9933996666</p>
                <div className="flex items-center text-sm" style={{ color: '#E0BBE4' }}>
                  <Clock size={16} className="mr-2" />
                  <span>Mon-Sat: 9:00 AM - 6:00 PM IST</span>
                </div>
                <p className="text-sm italic" style={{ color: '#FFB6C1' }}>Direct assistance for urgent matters</p>
              </div>
            </div>

            {/* Email Support */}
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
                  <Mail size={24} style={{ color: '#00FFFF' }} />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase" style={{ 
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>Email Support</h3>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>Get detailed assistance</p>
                </div>
              </div>

              <div className="space-y-4 font-light">
                <p className="text-lg font-medium" style={{ color: '#FF1493' }}>dotpuppetk@gmail.com</p>
                <p className="text-sm" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
                <p className="text-sm italic" style={{ color: '#FFB6C1' }}>Perfect for detailed inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-widest uppercase mb-6" style={{ 
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
            }}>
              SUPPORT CATEGORIES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;

              return (
                <div key={index} className="p-8 transition-all duration-300 hover:scale-105" style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${category.color}`,
                  boxShadow: `0 0 15px ${category.color}40`
                }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center" style={{
                      border: `2px solid ${category.color}`,
                      boxShadow: `0 0 8px ${category.color}66`
                    }}>
                      <IconComponent size={24} style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase" style={{ 
                        color: category.color,
                        fontFamily: 'Impact, sans-serif'
                      }}>{category.title}</h3>
                      <p className="text-sm" style={{ color: '#FFB6C1' }}>{category.description}</p>
                    </div>
                  </div>

                  <div className="p-4" style={{
                    background: `${category.color}10`,
                    border: `1px solid ${category.color}33`
                  }}>
                    <h4 className="font-black mb-3 uppercase text-sm" style={{ 
                      color: category.color,
                      fontFamily: 'Impact, sans-serif'
                    }}>Common Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-3 py-1 text-xs font-medium"
                          style={{
                            background: 'rgba(26, 10, 46, 0.6)',
                            color: '#E0BBE4',
                            border: '1px solid rgba(255, 20, 147, 0.3)'
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF6B9D',
            boxShadow: '0 0 15px rgba(255, 107, 157, 0.3)'
          }}>
            <div className="text-center mb-8">
              <h3 className="text-xl font-black uppercase mb-4" style={{ 
                color: '#FF6B9D',
                fontFamily: 'Impact, sans-serif'
              }}>Quick Tips for Faster Support</h3>
              <div className="w-16 h-0.5 mx-auto" style={{ background: '#FF6B9D' }}></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    background: '#FF1493',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
                  }}>
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>Include your order number for order-related inquiries</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    background: '#00FFFF',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
                  }}>
                    <span className="text-black text-xs font-bold">2</span>
                  </div>
                  <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>Provide screenshots for technical issues</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    background: '#FF6B9D',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(255, 107, 157, 0.4)'
                  }}>
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>Check our FAQ page first - your question might already be answered</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                    background: '#FF1493',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
                  }}>
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>Be as specific as possible about your issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-widest uppercase mb-8" style={{ 
            color: '#FF1493',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
          }}>
            PROFESSIONAL SUPPORT TEAM
          </h2>
          <p className="font-light mb-8 max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            Our dedicated customer support team understands the value of bold statement pieces and
            is committed to ensuring your complete satisfaction with every Puppet purchase.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 12px rgba(255, 20, 147, 0.3)'
            }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone size={18} style={{ color: '#FF1493' }} />
                <h4 className="font-black uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif'
                }}>Phone</h4>
              </div>
              <p className="text-lg mb-1" style={{ color: '#00FFFF' }}>+91 9399336666</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 12px rgba(0, 255, 255, 0.3)'
            }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={18} style={{ color: '#00FFFF' }} />
                <h4 className="font-black uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>Email</h4>
              </div>
              <p className="text-lg mb-1" style={{ color: '#FFB6C1' }}>dotpuppetk@gmail.com</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
            </div>

            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF6B9D',
              boxShadow: '0 0 12px rgba(255, 107, 157, 0.3)'
            }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin size={18} style={{ color: '#FF6B9D' }} />
                <h4 className="font-black uppercase" style={{ 
                  color: '#FF6B9D',
                  fontFamily: 'Impact, sans-serif'
                }}>Address</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                Hyderabad, Telangana 500094
              </p>
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
            }}>Always Here to Help</h3>
            <p className="font-light leading-relaxed" style={{ color: '#FFB6C1' }}>
              Whether you have questions about our bold collection, need help with an order,
              or want to learn more about our curated pieces, we're committed to providing
              exceptional customer service every step of the way.
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

export default Support;
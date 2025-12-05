import React, { useEffect } from 'react';
import { Phone, Mail, Clock, Headphones, HelpCircle, Truck, RefreshCw, CreditCard, MapPin } from 'lucide-react';

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
      color: "pink"
    },
    {
      icon: RefreshCw,
      title: "Returns & Exchanges",
      description: "Return requests, refund status, exchange policies",
      topics: ["Return policy", "Refund status", "Exchange requests", "Return pickup"],
      color: "cyan"
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment issues, billing queries, transaction problems",
      topics: ["Payment failed", "Refund queries", "Invoice requests", "Payment methods"],
      color: "purple"
    },
    {
      icon: HelpCircle,
      title: "General Support",
      description: "Account issues, technical problems, product queries",
      topics: ["Account access", "Technical issues", "Product information", "Website problems"],
      color: "cyan"
    }
  ];

  const colorMap = {
    pink: { border: 'border-pink-600', text: 'text-pink-600', bg: 'bg-pink-600' },
    cyan: { border: 'border-cyan-600', text: 'text-cyan-600', bg: 'bg-cyan-600' },
    purple: { border: 'border-purple-600', text: 'text-purple-600', bg: 'bg-purple-600' }
  };

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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            transform: 'skewY(-2deg)'
          }}>
            CUSTOMER SUPPORT
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto mb-8">
            We're here to help! Get in touch with our support team for assistance with orders, returns, or any questions about your bold Puppet experience.
          </p>
          
          <div className="inline-block">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-pink-600 bg-purple-950">
              <Headphones size={48} className="text-pink-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-pink-600" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              GET IN TOUCH
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Support */}
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-pink-600">
                  <Phone size={32} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-pink-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Phone Support</h3>
                  <p className="text-sm text-gray-400">Speak with our team</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-medium text-cyan-400">+91 9399336666</p>
                <div className="flex items-center text-sm text-gray-400">
                  <Clock size={16} className="mr-2" />
                  <span>Mon-Sat: 9:00 AM - 6:00 PM IST</span>
                </div>
                <p className="text-sm italic text-gray-500">Direct assistance for urgent matters</p>
              </div>
            </div>

            {/* Email Support */}
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-cyan-600">
                  <Mail size={32} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-cyan-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Email Support</h3>
                  <p className="text-sm text-gray-400">Get detailed assistance</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-2xl font-medium text-pink-400">dotpuppetk@gmail.com</p>
                <p className="text-sm text-gray-400">Response within 24 hours</p>
                <p className="text-sm italic text-gray-500">Perfect for detailed inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-cyan-600 bg-purple-950">
                <HelpCircle size={48} className="text-cyan-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-cyan-400" style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)'
            }}>
              SUPPORT CATEGORIES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colors = colorMap[category.color];

              return (
                <div key={index} className={`group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 ${colors.border} p-8`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 flex items-center justify-center border-2 ${colors.border}`}>
                      <IconComponent size={24} className={colors.text} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-black uppercase ${colors.text}`} style={{ 
                        fontFamily: 'Impact, sans-serif'
                      }}>{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-900 border border-gray-700">
                    <h4 className={`font-black mb-3 uppercase text-sm ${colors.text}`} style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>Common Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className={`px-3 py-1 text-xs font-medium border ${colors.border} text-gray-400`}
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
          <div className="bg-purple-950 border-2 border-purple-600 p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 text-purple-600" style={{ 
                fontFamily: 'Impact, sans-serif'
              }}>Quick Tips for Faster Support</h3>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 bg-pink-600 text-white font-black">
                    1
                  </div>
                  <p className="text-sm text-gray-400 pt-1">Include your order number for order-related inquiries</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 bg-cyan-600 text-black font-black">
                    2
                  </div>
                  <p className="text-sm text-gray-400 pt-1">Provide screenshots for technical issues</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 bg-purple-600 text-white font-black">
                    3
                  </div>
                  <p className="text-sm text-gray-400 pt-1">Check our FAQ page first - your question might already be answered</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 bg-pink-600 text-white font-black">
                    4
                  </div>
                  <p className="text-sm text-gray-400 pt-1">Be as specific as possible about your issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-pink-600" style={{ 
            fontFamily: 'Impact, sans-serif'
          }}>
            PROFESSIONAL SUPPORT TEAM
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            Our dedicated customer support team understands the value of bold statement pieces and
            is committed to ensuring your complete satisfaction with every Puppet purchase.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone size={20} className="text-pink-600" />
                <h4 className="font-black uppercase text-pink-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Phone</h4>
              </div>
              <p className="text-xl mb-1 text-cyan-400">+91 9399336666</p>
              <p className="text-sm text-gray-400">Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={20} className="text-cyan-600" />
                <h4 className="font-black uppercase text-cyan-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Email</h4>
              </div>
              <p className="text-xl mb-1 text-pink-400">dotpuppetk@gmail.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin size={20} className="text-purple-600" />
                <h4 className="font-black uppercase text-purple-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>Address</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Hyderabad, Telangana
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto bg-purple-950 border-2 border-pink-600">
            <h3 className="font-black text-2xl md:text-3xl mb-4 uppercase text-cyan-400" style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)'
            }}>Always Here to Help</h3>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
            <p className="leading-relaxed text-gray-400">
              Whether you have questions about our bold collection, need help with an order,
              or want to learn more about our curated pieces, we're committed to providing
              exceptional customer service every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default Support;
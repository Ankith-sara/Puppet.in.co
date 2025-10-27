import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Package, Truck, RotateCcw, Shield, User, HelpCircle } from 'lucide-react';

const FAQs = () => {
  const [openItems, setOpenItems] = useState(new Set());

  useEffect(() => {
    document.title = 'Frequently Asked Questions | Puppet';
  }, []);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    newOpenItems.has(index) ? newOpenItems.delete(index) : newOpenItems.add(index);
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Orders & Shopping",
      icon: Package,
      color: "#FF1493",
      faqs: [
        { question: "How do I place an order?", answer: "Browse our collection, add to cart, and checkout securely. You'll need an account or guest checkout to complete your purchase." },
        { question: "Can I modify or cancel my order?", answer: "Yes, within 2 hours of placing it. After that, contact support — we'll try our best before the order is processed." },
        { question: "What payment methods do you accept?", answer: "We accept cards, UPI, net banking, and major wallets — all secured with modern encryption." },
        { question: "Do you offer bulk or wholesale pricing?", answer: "Yes, for custom or bulk orders. Email us at aharyasofficial@gmail.com for a tailored quote." }
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      color: "#00FFFF",
      faqs: [
        { question: "What are your shipping charges?", answer: "Free shipping on orders above ₹999. For smaller orders, minimal delivery charges apply based on your location." },
        { question: "How long does delivery take?", answer: "0–7 business days for domestic orders. Timelines may vary based on courier and destination." },
        { question: "Do you ship internationally?", answer: "Yes, worldwide shipping available through trusted courier partners with tracking and insurance." },
        { question: "Can I track my order?", answer: "Absolutely! You'll receive a tracking link via email once your order ships." }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: RotateCcw,
      color: "#FF6B9D",
      faqs: [
        { question: "What is your return policy?", answer: "We accept returns within 15 days for unused items in original packaging. Personalized pieces may not qualify." },
        { question: "How do I initiate a return?", answer: "Email us at aharyasofficial@gmail.com with your order details and reason. We'll guide you through it." },
        { question: "When will I receive my refund?", answer: "Within 5–7 business days after we receive and verify the return." },
        { question: "Do you offer exchanges?", answer: "Yes — for size, color, or variant swaps (subject to availability)." }
      ]
    },
    {
      title: "Products & Quality",
      icon: Shield,
      color: "#00FFFF",
      faqs: [
        { question: "Are your products authentic handcrafted items?", answer: "100%. Each piece is made by skilled artisans with authentic materials and craftsmanship." },
        { question: "How do you ensure product quality?", answer: "Every item undergoes strict quality checks before shipping — handcrafted doesn't mean imperfect here." },
        { question: "Can I see more product images or details?", answer: "Yes! Check product pages or contact us for custom photos or artisan details." },
        { question: "Do you offer custom or personalized items?", answer: "Yes, custom handcrafted pieces are available upon request." }
      ]
    },
    {
      title: "Account & Support",
      icon: User,
      color: "#FF1493",
      faqs: [
        { question: "How do I create an account?", answer: "Click 'Sign Up' on top of any page or create one during checkout — quick and easy." },
        { question: "I forgot my password. How do I reset it?", answer: "Click 'Forgot Password', enter your email, and follow the reset link we send you." },
        { question: "Is my personal information secure?", answer: "Yes. All data is encrypted and protected — we never share it without consent." },
        { question: "How can I contact customer support?", answer: "Email aharyasofficial@gmail.com or call +91 9063284008 (Mon–Sat, 9AM–6PM)." }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white mt-16" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)'
          }}>
            FAQ
          </h1>
          <div className="w-32 h-1 mx-auto mb-6" style={{
            background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
            boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
          }}></div>
          <p className="text-lg sm:text-xl font-light" style={{ color: '#E0BBE4' }}>
            Everything you need to know about Puppet — from orders to quality and beyond.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-20">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="w-12 h-12 flex items-center justify-center" style={{
                    border: `2px solid ${category.color}`,
                    boxShadow: `0 0 15px ${category.color}66`
                  }}>
                    <IconComponent size={22} style={{ color: category.color }} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase" style={{
                    color: category.color,
                    fontFamily: 'Impact, sans-serif',
                    textShadow: `2px 2px 0px ${category.color}33`
                  }}>
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.has(itemIndex);
                    return (
                      <div
                        key={faqIndex}
                        className="transition-all duration-300 hover:scale-[1.02]"
                        style={{
                          background: 'rgba(26, 10, 46, 0.7)',
                          backdropFilter: 'blur(10px)',
                          border: `2px solid ${category.color}`,
                          boxShadow: `0 0 ${isOpen ? '20' : '12'}px ${category.color}40`
                        }}
                      >
                        <button
                          className="w-full px-6 py-5 text-left flex justify-between items-center"
                          onClick={() => toggleItem(itemIndex)}
                        >
                          <span className="font-black text-lg pr-4 uppercase" style={{
                            color: category.color,
                            fontFamily: 'Impact, sans-serif',
                            fontSize: '1rem'
                          }}>
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp size={20} style={{ color: category.color }} />
                          ) : (
                            <ChevronDown size={20} style={{ color: category.color }} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5" style={{
                            borderTop: `1px solid ${category.color}33`
                          }}>
                            <p className="font-light leading-relaxed pt-4" style={{ color: '#E0BBE4' }}>
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="relative py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center" style={{
              border: '2px solid #FF6B9D',
              boxShadow: '0 0 15px rgba(255, 107, 157, 0.5)'
            }}>
              <HelpCircle size={24} style={{ color: '#FF6B9D' }} />
            </div>
            <h2 className="text-2xl font-black tracking-wider uppercase" style={{
              color: '#FF6B9D',
              fontFamily: 'Impact, sans-serif'
            }}>
              NEED MORE HELP?
            </h2>
          </div>

          <p className="font-light leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#E0BBE4' }}>
            Couldn't find your answer? Our support team is here to help you with any queries about our bold collection.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 text-left transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
            }}>
              <h4 className="font-black mb-2 uppercase" style={{
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif'
              }}>Email Support</h4>
              <p className="text-lg mb-1" style={{ color: '#FFB6C1' }}>dotpuppetk@gmail.com</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
            </div>
            <div className="p-6 text-left transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
            }}>
              <h4 className="font-black mb-2 uppercase" style={{
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif'
              }}>Helpdesk Phone</h4>
              <p className="text-lg mb-1" style={{ color: '#00FFFF' }}>+91 9399336666</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Mon–Sat: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support */}
      <section className="relative py-16 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-wider mb-8 uppercase" style={{
            color: '#00FFFF',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
          }}>
            QUICK SUPPORT
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: "Order Issues", text: "Problems with placing or tracking orders", color: "#FF1493" },
              { icon: Truck, title: "Shipping Questions", text: "Delivery times and shipping policies", color: "#00FFFF" },
              { icon: RotateCcw, title: "Returns & Refunds", text: "Return process and refund status", color: "#FF6B9D" }
            ].map(({ icon: Icon, title, text, color }, i) => (
              <div key={i} className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${color}`,
                boxShadow: `0 0 12px ${color}40`
              }}>
                <Icon className="mx-auto mb-3" size={24} style={{ color: color }} />
                <h4 className="font-black mb-2 uppercase" style={{
                  color: color,
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.95rem'
                }}>{title}</h4>
                <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto" style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 20px rgba(255, 20, 147, 0.4)'
          }}>
            <h3 className="font-black text-xl mb-4 uppercase" style={{
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif'
            }}>Professional Support Team</h3>
            <p className="font-light leading-relaxed" style={{ color: '#FFB6C1' }}>
              Our team understands the value of bold statement pieces and ensures every Puppet purchase brings satisfaction and pride.
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

export default FAQs;
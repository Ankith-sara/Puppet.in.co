import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Package, Truck, RotateCcw, Shield, User, HelpCircle, Mail, Phone } from 'lucide-react';

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
      color: "pink",
      faqs: [
        { question: "How do I place an order?", answer: "Browse our bold collection, add to cart, and checkout securely. You'll need an account or guest checkout to complete your purchase." },
        { question: "Can I modify or cancel my order?", answer: "Yes, within 2 days of placing it. Contact support immediately — we'll do our best before the order is processed." },
        { question: "What payment methods do you accept?", answer: "We accept cards, UPI, net banking, and major wallets — all secured with modern encryption." },
        { question: "Do you offer bulk or wholesale pricing?", answer: "Yes, for custom or bulk orders. Email us at dotpuppetk@gmail.com for a tailored quote." }
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: Truck,
      color: "cyan",
      faqs: [
        { question: "What are your shipping charges?", answer: "Shipping rates vary based on location and order size. Contact us for specific pricing details." },
        { question: "How long does delivery take?", answer: "0–7 business days for processing, plus courier delivery time. International orders may take longer." },
        { question: "Do you ship internationally?", answer: "Yes, worldwide shipping available through trusted courier partners with tracking and insurance." },
        { question: "Can I track my order?", answer: "Absolutely! You'll receive a tracking link via email once your order ships." }
      ]
    },
    {
      title: "Returns & Refunds",
      icon: RotateCcw,
      color: "purple",
      faqs: [
        { question: "What is your return policy?", answer: "We accept returns within 2 days for damaged or defective items. Contact us immediately if there's an issue." },
        { question: "How do I initiate a return?", answer: "Email us at dotpuppetk@gmail.com with your order details and photos. We'll guide you through it." },
        { question: "When will I receive my refund?", answer: "Within 6-8 days after we approve and process your refund request." },
        { question: "Do you offer exchanges?", answer: "Returns and exchanges are handled on a case-by-case basis. Contact support for assistance." }
      ]
    },
    {
      title: "Products & Quality",
      icon: Shield,
      color: "pink",
      faqs: [
        { question: "Are your products authentic?", answer: "100%. Each piece is carefully curated for bold style and premium quality." },
        { question: "How do you ensure product quality?", answer: "Every item undergoes strict quality checks before shipping. We stand behind our provocative pieces." },
        { question: "Can I see more product images or details?", answer: "Yes! Check product pages or contact us for additional photos or details." },
        { question: "Do you offer custom or personalized items?", answer: "Contact us to discuss custom pieces and personalization options." }
      ]
    },
    {
      title: "Account & Support",
      icon: User,
      color: "cyan",
      faqs: [
        { question: "How do I create an account?", answer: "Click 'Sign Up' on top of any page or create one during checkout — quick and easy." },
        { question: "I forgot my password. How do I reset it?", answer: "Click 'Forgot Password', enter your email, and follow the reset link we send you." },
        { question: "Is my personal information secure?", answer: "Yes. All data is encrypted and protected — we never share it without consent." },
        { question: "How can I contact customer support?", answer: "Email dotpuppetk@gmail.com or call +91 9399336666 (Mon–Sat, 9AM–6PM)." }
      ]
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
            FAQs
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about Puppet — from orders to quality and beyond.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            const colors = colorMap[category.color];
            
            return (
              <div key={categoryIndex}>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className={`w-16 h-16 flex items-center justify-center border-2 ${colors.border} bg-purple-950`}>
                    <IconComponent className={colors.text} size={32} />
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-black uppercase ${colors.text}`} style={{
                    fontFamily: 'Impact, sans-serif'
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
                        className={`bg-purple-950 border-2 ${colors.border} transition-all duration-300 ${isOpen ? 'shadow-lg' : ''}`}
                      >
                        <button
                          className="w-full px-6 py-5 text-left flex justify-between items-center group"
                          onClick={() => toggleItem(itemIndex)}
                        >
                          <span className={`font-black text-lg ${colors.text} pr-4 uppercase`} style={{
                            fontFamily: 'Impact, sans-serif'
                          }}>{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp size={24} className={colors.text} />
                          ) : (
                            <ChevronDown size={24} className={colors.text} />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 border-t border-gray-700">
                            <p className="text-gray-400 leading-relaxed pt-4">
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
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="w-24 h-24 flex items-center justify-center border-2 border-purple-600 bg-purple-950">
              <HelpCircle size={48} className="text-purple-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-purple-600" style={{
            fontFamily: 'Impact, sans-serif'
          }}>NEED MORE HELP?</h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Couldn't find your answer? Our support team is here to help you with any queries about our bold collection.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={20} className="text-pink-600" />
                <h4 className="font-black uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>Email Support</h4>
              </div>
              <p className="text-xl mb-1 text-cyan-400">dotpuppetk@gmail.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>
            
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone size={20} className="text-cyan-600" />
                <h4 className="font-black uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Helpdesk Phone</h4>
              </div>
              <p className="text-xl mb-1 text-pink-400">+91 9399336666</p>
              <p className="text-sm text-gray-400">Mon–Sat: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Support */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)'
          }}>QUICK SUPPORT</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Package, title: "Order Issues", text: "Problems with placing or tracking orders", color: "pink" },
              { icon: Truck, title: "Shipping Questions", text: "Delivery times and shipping policies", color: "cyan" },
              { icon: RotateCcw, title: "Returns & Refunds", text: "Return process and refund status", color: "purple" }
            ].map(({ icon: Icon, title, text, color }, i) => {
              const colors = colorMap[color];
              return (
                <div key={i} className={`group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 ${colors.border} p-6`}>
                  <Icon className={`${colors.text} mx-auto mb-3`} size={32} />
                  <h4 className={`font-black mb-2 uppercase ${colors.text}`} style={{ fontFamily: 'Impact, sans-serif' }}>{title}</h4>
                  <p className="text-sm text-gray-400">{text}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-purple-950 border-2 border-pink-600 p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-black mb-4 uppercase text-pink-600" style={{
              fontFamily: 'Impact, sans-serif'
            }}>Professional Support Team</h3>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
            <p className="text-lg leading-relaxed text-gray-400">
              Our team understands the value of bold artistry and ensures every Puppet purchase brings satisfaction and makes a statement.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default FAQs;
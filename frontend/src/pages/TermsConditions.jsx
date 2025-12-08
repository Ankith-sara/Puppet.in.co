import React, { useEffect } from 'react';
import { Scale, FileText, AlertTriangle, Shield, Link, CreditCard, User, ShoppingCart, Gavel, Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Puppet'
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
            TERMS & CONDITIONS
          </h1>
          
          <div className="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>

          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-medium">
            These terms govern your use of our website and purchase of our bold, provocative home décor.
            Read carefully before making your statement.
          </p>
        </div>
      </section>

      {/* Company Information */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-100 border-4 border-stone-700 shadow-2xl">
            <div className="p-6 border-b-2 border-stone-700 bg-stone-50 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-lime-800">
                <FileText size={24} className="text-lime-800" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-lime-800" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                COMPANY INFORMATION
              </h2>
            </div>

            <div className="p-8 grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-stone-700">
                <p className="text-base leading-relaxed">
                  These terms and conditions apply to PUPPET LLP and all users of our website and services.
                </p>

                <div className="p-6 bg-white border-2 border-lime-800">
                  <h4 className="font-black mb-3 uppercase text-lime-800 text-sm tracking-wider" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>Legal Entity</h4>
                  <p className="text-stone-900 font-bold">PUPPET LLP</p>
                  <p className="text-sm mt-2 text-stone-600">
                    Registered/Operational Office:<br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white border-2 border-stone-700">
                <h3 className="font-black mb-4 uppercase text-stone-800 tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Definitions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-black text-emerald-700">"We", "Us", "Our"</p>
                    <p className="text-stone-600">Refers to PUPPET LLP</p>
                  </div>
                  <div>
                    <p className="font-black text-emerald-700">"You", "Your", "User", "Visitor"</p>
                    <p className="text-stone-600">Any natural or legal person visiting our website and/or purchasing from us</p>
                  </div>
                  <div>
                    <p className="font-black text-emerald-700">"Services"</p>
                    <p className="text-stone-600">Our website, products, and customer support</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
          </div>
        </div>
      </section>

      {/* Website Usage Terms */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6 w-16 h-16 flex items-center justify-center border-2 border-lime-800 bg-stone-100">
              <Scale size={32} className="text-lime-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-stone-800 tracking-wider" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              WEBSITE USAGE TERMS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: 'Content Changes', text: 'The content of our website pages is subject to change without notice. We reserve the right to modify information, prices, and product availability at any time.', color: 'lime' },
              { icon: AlertTriangle, title: 'Information Accuracy', text: 'While we strive for accuracy, neither we nor third parties provide any warranty regarding the accuracy, timeliness, or completeness of information on our website. Use of any information is entirely at your own risk.', color: 'emerald' },
              { icon: User, title: 'User Responsibilities', text: 'You are responsible for ensuring the confidentiality of your account information and for all activities under your account. Please notify us immediately of any unauthorized use.', color: 'stone' },
              { icon: Shield, title: 'Prohibited Uses', text: 'You may not use our site for any unlawful purpose or to solicit others to perform unlawful acts.', color: 'lime', list: ['Harassment or abuse of other users', 'Transmission of viruses or malicious code', 'Unauthorized data collection'] },
              { icon: Link, title: 'Third-Party Links', text: 'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.', color: 'emerald' },
              { icon: Gavel, title: 'Governing Law', text: 'These terms are governed by and construed in accordance with the laws of India, and you submit to the jurisdiction of the courts in Hyderabad, Telangana.', color: 'stone' }
            ].map((item, idx) => {
              const colorMap = {
                lime: { border: 'border-lime-800', text: 'text-lime-800', bg: 'bg-stone-50' },
                emerald: { border: 'border-emerald-700', text: 'text-emerald-700', bg: 'bg-stone-50' },
                stone: { border: 'border-stone-700', text: 'text-stone-700', bg: 'bg-stone-50' }
              };
              const colors = colorMap[item.color];
              
              return (
                <div key={idx} className={`bg-stone-100 border-2 ${colors.border} p-6 hover:shadow-xl transition-shadow`}>
                  <h3 className={`font-black mb-4 flex items-center gap-2 uppercase text-sm tracking-wider ${colors.text}`} style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <item.icon size={18} />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3 text-stone-700">
                    {item.text}
                  </p>
                  {item.list && (
                    <ul className="text-xs space-y-1 text-stone-600">
                      {item.list.map((li, i) => <li key={i}>▶ {li}</li>)}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Purchase Terms */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="mb-6 w-16 h-16 flex items-center justify-center border-2 border-lime-800 bg-stone-100">
              <ShoppingCart size={32} className="text-lime-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-stone-800 tracking-wider" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              PURCHASE TERMS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-stone-100 border-2 border-lime-800 shadow-xl">
              <div className="p-6 border-b-2 border-lime-800 bg-stone-50">
                <h3 className="font-black uppercase text-lime-800 text-sm tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Order Process</h3>
              </div>
              <div className="p-6 space-y-4 text-stone-700">
                <p className="text-sm">By placing an order with us, you agree to provide current, complete, and accurate purchase information.</p>

                <div className="p-4 bg-white border-2 border-lime-800">
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li>▶ Order confirmation sent within 24 hours</li>
                    <li>▶ Payment processing and verification</li>
                    <li>▶ Product preparation (0-7 days)</li>
                    <li>▶ Shipping and delivery tracking</li>
                  </ul>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-lime-800 to-emerald-700"></div>
            </div>

            <div className="bg-stone-100 border-2 border-emerald-700 shadow-xl">
              <div className="p-6 border-b-2 border-emerald-700 bg-stone-50 flex items-center gap-3">
                <CreditCard size={20} className="text-emerald-700" />
                <h3 className="font-black uppercase text-emerald-700 text-sm tracking-wider" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>Payment Terms</h3>
              </div>

              <div className="p-6 space-y-4 text-stone-700">
                <p className="text-sm leading-relaxed">
                  We reserve the right to refuse or cancel your order if fraud or unauthorized purchase is suspected.
                </p>

                <div className="p-4 bg-white border-2 border-emerald-700">
                  <h4 className="font-black mb-2 uppercase text-emerald-700 text-xs tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Accepted Payment Methods:</h4>
                  <ul className="space-y-1 text-sm text-stone-700">
                    <li>▶ Credit/Debit Cards</li>
                    <li>▶ Digital Wallets</li>
                    <li>▶ Bank Transfers</li>
                    <li>▶ UPI Payments</li>
                  </ul>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-emerald-700 to-lime-800"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Liability & Disclaimer */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-100 border-4 border-stone-700 shadow-2xl">
            <div className="p-6 border-b-2 border-stone-700 bg-stone-50">
              <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-stone-800 tracking-wider" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                LIABILITY & DISCLAIMER
              </h2>
            </div>

            <div className="p-8 space-y-6">
              {[
                { icon: AlertTriangle, title: 'Limitation of Liability', text: 'In no case shall PUPPET LLP be liable for any direct, indirect, punitive, incidental, special, consequential damages that result from the use of, or inability to use, this website or the purchase of products from us.', color: 'lime' },
                { icon: Shield, title: 'Product Quality', text: 'While we take great care in crafting our products, we acknowledge that handmade items may have natural variations. We provide detailed product descriptions and images to help you make informed decisions.', color: 'emerald' },
                { icon: Scale, title: 'Force Majeure', text: 'We shall not be liable for any failure to perform our obligations where such failure results from acts of nature, war, terrorism, labor disputes, or other causes beyond our reasonable control.', color: 'stone' }
              ].map((item, idx) => {
                const colorMap = {
                  lime: { border: 'border-lime-800', text: 'text-lime-800', bg: 'bg-white' },
                  emerald: { border: 'border-emerald-700', text: 'text-emerald-700', bg: 'bg-white' },
                  stone: { border: 'border-stone-700', text: 'text-stone-700', bg: 'bg-white' }
                };
                const colors = colorMap[item.color];
                
                return (
                  <div key={idx} className={`p-6 ${colors.bg} border-2 ${colors.border}`}>
                    <h3 className={`font-black mb-3 flex items-center gap-2 uppercase text-sm tracking-wider ${colors.text}`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      <item.icon size={18} />
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-700">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase text-stone-800 tracking-wider" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            QUESTIONS ABOUT THESE TERMS?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto text-stone-600 font-medium">
            If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-stone-100 border-2 border-lime-800 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone size={20} className="text-lime-800" />
                <h4 className="font-black uppercase text-lime-800 text-sm tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Phone Support</h4>
              </div>
              <p className="text-lg mb-1 text-stone-900 font-bold">+91 9399336666</p>
              <p className="text-sm text-stone-600">Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="bg-stone-100 border-2 border-emerald-700 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={20} className="text-emerald-700" />
                <h4 className="font-black uppercase text-emerald-700 text-sm tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>Email Support</h4>
              </div>
              <p className="text-lg mb-1 text-stone-900 font-bold">dotpuppetk@gmail.com</p>
              <p className="text-sm text-stone-600">Response within 24 hours</p>
            </div>
          </div>

          <div className="p-8 max-w-3xl mx-auto bg-stone-100 border-4 border-stone-700 shadow-2xl">
            <h3 className="font-black text-xl md:text-2xl mb-4 uppercase text-stone-800 tracking-wider" style={{
              fontFamily: 'Impact, sans-serif'
            }}>Agreement to Terms</h3>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
            <p className="leading-relaxed text-stone-700 text-sm">
              By using our website and services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms & Conditions. These terms may be updated
              periodically, and your continued use constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
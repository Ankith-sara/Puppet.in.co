import React, { useEffect } from 'react';
import { Scale, FileText, AlertTriangle, Shield, Link, CreditCard, User, ShoppingCart, Gavel, Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Puppet'
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
            TERMS & CONDITIONS
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            These terms govern your use of our website and purchase of our bold, provocative home décor.
            Read carefully before making your statement.
          </p>
        </div>
      </section>

      {/* Company Information */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-purple-950 border-2 border-pink-600 p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-cyan-600">
                <FileText size={32} className="text-cyan-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-cyan-400" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)'
              }}>
                COMPANY INFORMATION
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-400">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  <span className="text-pink-600">T</span>hese terms and conditions apply to TATHASTA WEAVES LLP and all users of our website and services.
                </p>

                <div className="p-6 bg-purple-900 border border-pink-600">
                  <h4 className="font-black mb-3 uppercase text-pink-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>Legal Entity</h4>
                  <p className="text-cyan-400"><strong>PUPPET LLP</strong></p>
                  <p className="text-sm mt-2 text-gray-400">
                    Registered/Operational Office:<br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-900 border border-cyan-600">
                <h3 className="font-black mb-4 uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Definitions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p><strong className="text-purple-400">"We", "Us", "Our"</strong></p>
                    <p className="text-gray-400">Refers to PUPPET LLP</p>
                  </div>
                  <div>
                    <p><strong className="text-purple-400">"You", "Your", "User", "Visitor"</strong></p>
                    <p className="text-gray-400">Any natural or legal person visiting our website and/or purchasing from us</p>
                  </div>
                  <div>
                    <p><strong className="text-purple-400">"Services"</strong></p>
                    <p className="text-gray-400">Our website, products, and customer support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Usage Terms */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-pink-600 bg-purple-950">
                <Scale size={48} className="text-pink-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-pink-600" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              WEBSITE USAGE TERMS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, title: 'Content Changes', text: 'The content of our website pages is subject to change without notice. We reserve the right to modify information, prices, and product availability at any time.', color: 'pink' },
              { icon: AlertTriangle, title: 'Information Accuracy', text: 'While we strive for accuracy, neither we nor third parties provide any warranty regarding the accuracy, timeliness, or completeness of information on our website. Use of any information is entirely at your own risk.', color: 'cyan' },
              { icon: User, title: 'User Responsibilities', text: 'You are responsible for ensuring the confidentiality of your account information and for all activities under your account. Please notify us immediately of any unauthorized use.', color: 'purple' },
              { icon: Shield, title: 'Prohibited Uses', text: 'You may not use our site for any unlawful purpose or to solicit others to perform unlawful acts.', color: 'cyan', list: ['Harassment or abuse of other users', 'Transmission of viruses or malicious code', 'Unauthorized data collection'] },
              { icon: Link, title: 'Third-Party Links', text: 'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.', color: 'pink' },
              { icon: Gavel, title: 'Governing Law', text: 'These terms are governed by and construed in accordance with the laws of India, and you submit to the jurisdiction of the courts in Hyderabad, Telangana.', color: 'purple' }
            ].map((item, idx) => {
              const colorMap = {
                pink: { border: 'border-pink-600', text: 'text-pink-600' },
                cyan: { border: 'border-cyan-600', text: 'text-cyan-600' },
                purple: { border: 'border-purple-600', text: 'text-purple-600' }
              };
              const colors = colorMap[item.color];
              
              return (
                <div key={idx} className={`group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 ${colors.border} p-6`}>
                  <h3 className={`font-black mb-4 flex items-center gap-2 uppercase ${colors.text}`} style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <item.icon size={20} />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3 text-gray-400">
                    {item.text}
                  </p>
                  {item.list && (
                    <ul className="text-xs space-y-1 text-gray-500">
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
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-cyan-600 bg-purple-950">
                <ShoppingCart size={48} className="text-cyan-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-cyan-400" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)'
            }}>
              PURCHASE TERMS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-8">
              <div className="space-y-4 text-gray-400">
                <p>By placing an order with us, you agree to provide current, complete, and accurate purchase information.</p>

                <div className="p-6 bg-purple-900 border border-pink-600">
                  <h4 className="font-black mb-3 uppercase text-pink-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>Order Process</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>▶ Order confirmation sent within 24 hours</li>
                    <li>▶ Payment processing and verification</li>
                    <li>▶ Product preparation (0-7 days)</li>
                    <li>▶ Shipping and delivery tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center border-2 border-cyan-600">
                  <CreditCard size={24} className="text-cyan-600" />
                </div>
                <h3 className="text-2xl font-black uppercase text-cyan-600" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>Payment Terms</h3>
              </div>

              <div className="space-y-4 text-gray-400">
                <p className="text-sm leading-relaxed">
                  We reserve the right to refuse or cancel your order if fraud or unauthorized purchase is suspected.
                </p>

                <div className="p-4 bg-purple-900 border border-cyan-600">
                  <h4 className="font-black mb-2 uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Accepted Payment Methods:</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>▶ Credit/Debit Cards</li>
                    <li>▶ Digital Wallets</li>
                    <li>▶ Bank Transfers</li>
                    <li>▶ UPI Payments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liability & Disclaimer */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-purple-950 border-2 border-purple-600 p-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center text-purple-600" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              LIABILITY & DISCLAIMER
            </h2>

            <div className="space-y-6 leading-relaxed">
              {[
                { icon: AlertTriangle, title: 'Limitation of Liability', text: 'In no case shall TATHASTA WEAVES LLP be liable for any direct, indirect, punitive, incidental, special, consequential damages that result from the use of, or inability to use, this website or the purchase of products from us.', color: 'pink' },
                { icon: Shield, title: 'Product Quality', text: 'While we take great care in crafting our products, we acknowledge that handmade items may have natural variations. We provide detailed product descriptions and images to help you make informed decisions.', color: 'cyan' },
                { icon: Scale, title: 'Force Majeure', text: 'We shall not be liable for any failure to perform our obligations where such failure results from acts of nature, war, terrorism, labor disputes, or other causes beyond our reasonable control.', color: 'purple' }
              ].map((item, idx) => {
                const colorMap = {
                  pink: { border: 'border-pink-600', text: 'text-pink-600', bg: 'bg-purple-900' },
                  cyan: { border: 'border-cyan-600', text: 'text-cyan-600', bg: 'bg-purple-900' },
                  purple: { border: 'border-purple-600', text: 'text-purple-600', bg: 'bg-purple-900' }
                };
                const colors = colorMap[item.color];
                
                return (
                  <div key={idx} className={`p-6 ${colors.bg} border ${colors.border}`}>
                    <h3 className={`font-black mb-3 flex items-center gap-2 uppercase ${colors.text}`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      <item.icon size={20} />
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)'
          }}>
            QUESTIONS ABOUT THESE TERMS?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone size={20} className="text-pink-600" />
                <h4 className="font-black uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>Phone Support</h4>
              </div>
              <p className="text-xl mb-1 text-cyan-400">+91 9399336666</p>
              <p className="text-sm text-gray-400">Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail size={20} className="text-cyan-600" />
                <h4 className="font-black uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Email Support</h4>
              </div>
              <p className="text-xl mb-1 text-pink-400">dotpuppetk@gmail.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto bg-purple-950 border-2 border-purple-600">
            <h3 className="font-black text-2xl md:text-3xl mb-4 uppercase text-purple-600" style={{
              fontFamily: 'Impact, sans-serif'
            }}>Agreement to Terms</h3>
            <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
            <p className="leading-relaxed text-gray-400">
              By using our website and services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms & Conditions. These terms may be updated
              periodically, and your continued use constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default TermsConditions;
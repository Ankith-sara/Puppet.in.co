import React, { useEffect } from 'react';
import { Scale, FileText, AlertTriangle, Shield, Link, CreditCard, User, ShoppingCart, Gavel, Mail, Phone } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Puppet'
  });

  return (
    <div className="min-h-screen text-white pt-24 pb-12" style={{
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-4" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.5)',
              transform: 'skewY(-2deg)',
              letterSpacing: '0.05em'
            }}>
              TERMS & CONDITIONS
            </h1>
            <div className="h-1 w-32 mx-auto" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 20px #FF1493'
            }}></div>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{
            color: '#FFB6C1',
            textShadow: '0 0 10px rgba(255, 20, 147, 0.3)'
          }}>
            These terms govern your use of our website and purchase of our bold, provocative home décor.
            Read carefully before making your statement.
          </p>
        </div>
      </section>

      {/* Company Information */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12" style={{
            background: 'rgba(26, 10, 46, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.5), inset 0 0 30px rgba(255, 20, 147, 0.1)'
          }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 15px #00FFFF'
              }}>
                <FileText size={24} style={{ color: '#00FFFF' }} />
              </div>
              <h2 className="text-2xl font-black tracking-widest uppercase" style={{
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
              }}>
                COMPANY INFORMATION
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-4 font-light" style={{ color: '#E0BBE4' }}>
                <p className="first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none" style={{
                  color: '#FFB6C1'
                }}>
                  <span style={{ color: '#FF1493', textShadow: '0 0 10px #FF1493' }}>T</span>hese terms and conditions apply to TATHASTA WEAVES LLP and all users of our website and services.
                </p>

                <div className="p-6" style={{
                  background: 'rgba(255, 20, 147, 0.1)',
                  border: '1px solid #FF1493',
                  boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
                }}>
                  <h4 className="font-black mb-3 uppercase tracking-wider" style={{
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Legal Entity</h4>
                  <p style={{ color: '#00FFFF' }}><strong>PUPPET LLP</strong></p>
                  <p className="text-sm mt-2" style={{ color: '#FFB6C1' }}>
                    Registered/Operational Office:<br />
                    Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <div className="p-6" style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '1px solid #00FFFF',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
              }}>
                <h3 className="font-black mb-4 uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Definitions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p><strong style={{ color: '#FF6B9D' }}>"We", "Us", "Our"</strong></p>
                    <p style={{ color: '#E0BBE4' }}>Refers to PUPPET LLP</p>
                  </div>
                  <div>
                    <p><strong style={{ color: '#FF6B9D' }}>"You", "Your", "User", "Visitor"</strong></p>
                    <p style={{ color: '#E0BBE4' }}>Any natural or legal person visiting our website and/or purchasing from us</p>
                  </div>
                  <div>
                    <p><strong style={{ color: '#FF6B9D' }}>"Services"</strong></p>
                    <p style={{ color: '#E0BBE4' }}>Our website, products, and customer support</p>
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
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #FF1493',
                boxShadow: '0 0 15px #FF1493'
              }}>
                <Scale size={24} style={{ color: '#FF1493' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3), 0 0 10px #FF1493'
              }}>
                WEBSITE USAGE TERMS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: FileText, title: 'Content Changes', text: 'The content of our website pages is subject to change without notice. We reserve the right to modify information, prices, and product availability at any time.', color: '#FF1493' },
              { icon: AlertTriangle, title: 'Information Accuracy', text: 'While we strive for accuracy, neither we nor third parties provide any warranty regarding the accuracy, timeliness, or completeness of information on our website. Use of any information is entirely at your own risk.', color: '#00FFFF' },
              { icon: User, title: 'User Responsibilities', text: 'You are responsible for ensuring the confidentiality of your account information and for all activities under your account. Please notify us immediately of any unauthorized use.', color: '#FF6B9D' },
              { icon: Shield, title: 'Prohibited Uses', text: 'You may not use our site for any unlawful purpose or to solicit others to perform unlawful acts.', color: '#00FFFF', list: ['Harassment or abuse of other users', 'Transmission of viruses or malicious code', 'Unauthorized data collection'] },
              { icon: Link, title: 'Third-Party Links', text: 'Our website may contain links to third-party sites. We are not responsible for the content or privacy practices of these external sites.', color: '#FF1493' },
              { icon: Gavel, title: 'Governing Law', text: 'These terms are governed by and construed in accordance with the laws of India, and you submit to the jurisdiction of the courts in Hyderabad, Telangana.', color: '#FF6B9D' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.6)',
                backdropFilter: 'blur(10px)',
                border: `2px solid ${item.color}`,
                boxShadow: `0 0 20px rgba(255, 20, 147, 0.3)`
              }}>
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase" style={{
                  color: item.color,
                  fontFamily: 'Impact, sans-serif',
                  textShadow: `0 0 10px ${item.color}`
                }}>
                  <item.icon size={20} />
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#E0BBE4' }}>
                  {item.text}
                </p>
                {item.list && (
                  <ul className="text-xs space-y-1" style={{ color: '#FFB6C1' }}>
                    {item.list.map((li, i) => <li key={i}>▶ {li}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Terms */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 15px #00FFFF'
              }}>
                <ShoppingCart size={24} style={{ color: '#00FFFF' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3), 0 0 10px #00FFFF'
              }}>
                PURCHASE TERMS
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 30px rgba(255, 20, 147, 0.4)'
            }}>
              <div className="space-y-4 font-light" style={{ color: '#E0BBE4' }}>
                <p>By placing an order with us, you agree to provide current, complete, and accurate purchase information.</p>

                <div className="p-6" style={{
                  background: 'rgba(255, 20, 147, 0.1)',
                  border: '1px solid #FF1493',
                  boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Order Process</h4>
                  <ul className="space-y-2 text-sm">
                    <li style={{ color: '#FFB6C1' }}>▶ Order confirmation sent within 24 hours</li>
                    <li style={{ color: '#FFB6C1' }}>▶ Payment processing and verification</li>
                    <li style={{ color: '#FFB6C1' }}>▶ Product preparation (0-7 days)</li>
                    <li style={{ color: '#FFB6C1' }}>▶ Shipping and delivery tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)'
            }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center" style={{
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 15px #00FFFF'
                }}>
                  <CreditCard size={24} style={{ color: '#00FFFF' }} />
                </div>
                <h3 className="text-xl font-black uppercase" style={{
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>Payment Terms</h3>
              </div>

              <div className="space-y-4 font-light" style={{ color: '#E0BBE4' }}>
                <p className="text-sm leading-relaxed">
                  We reserve the right to refuse or cancel your order if fraud or unauthorized purchase is suspected.
                </p>

                <div className="p-4" style={{
                  background: 'rgba(0, 255, 255, 0.1)',
                  border: '1px solid #00FFFF',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                }}>
                  <h4 className="font-black mb-2 uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Accepted Payment Methods:</h4>
                  <ul className="space-y-1 text-sm">
                    <li style={{ color: '#FFB6C1' }}>▶ Credit/Debit Cards</li>
                    <li style={{ color: '#FFB6C1' }}>▶ Digital Wallets</li>
                    <li style={{ color: '#FFB6C1' }}>▶ Bank Transfers</li>
                    <li style={{ color: '#FFB6C1' }}>▶ UPI Payments</li>
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
          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF6B9D',
            boxShadow: '0 0 40px rgba(255, 107, 157, 0.5)'
          }}>
            <h2 className="text-3xl font-black tracking-widest uppercase mb-8 text-center" style={{
              color: '#FF6B9D',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(255, 107, 157, 0.3), 0 0 15px #FF6B9D'
            }}>
              LIABILITY & DISCLAIMER
            </h2>

            <div className="space-y-6 font-light leading-relaxed">
              {[
                { icon: AlertTriangle, title: 'Limitation of Liability', text: 'In no case shall TATHASTA WEAVES LLP be liable for any direct, indirect, punitive, incidental, special, consequential damages that result from the use of, or inability to use, this website or the purchase of products from us.', color: '#FF1493' },
                { icon: Shield, title: 'Product Quality', text: 'While we take great care in crafting our products, we acknowledge that handmade items may have natural variations. We provide detailed product descriptions and images to help you make informed decisions.', color: '#00FFFF' },
                { icon: Scale, title: 'Force Majeure', text: 'We shall not be liable for any failure to perform our obligations where such failure results from acts of nature, war, terrorism, labor disputes, or other causes beyond our reasonable control.', color: '#FF6B9D' }
              ].map((item, idx) => (
                <div key={idx} className="p-6" style={{
                  background: `rgba(255, 20, 147, 0.05)`,
                  border: `1px solid ${item.color}`,
                  boxShadow: `0 0 15px rgba(255, 20, 147, 0.2)`
                }}>
                  <h3 className="font-black mb-3 flex items-center gap-2 uppercase" style={{
                    color: item.color,
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    <item.icon size={18} />
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#E0BBE4' }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-widest uppercase mb-8" style={{
            color: '#00FFFF',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3), 0 0 15px #00FFFF'
          }}>
            QUESTIONS ABOUT THESE TERMS?
          </h2>
          <p className="font-light mb-8 max-w-2xl mx-auto" style={{ color: '#FFB6C1' }}>
            If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.4)'
            }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone size={18} style={{ color: '#FF1493' }} />
                <h4 className="font-black uppercase" style={{ color: '#FF1493', fontFamily: 'Impact, sans-serif' }}>Phone Support</h4>
              </div>
              <p className="text-lg mb-1" style={{ color: '#00FFFF' }}>+91 9399336666</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Mon-Sat: 9 AM - 6 PM</p>
            </div>

            <div className="p-6 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)'
            }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Mail size={18} style={{ color: '#00FFFF' }} />
                <h4 className="font-black uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Email Support</h4>
              </div>
              <p className="text-lg mb-1" style={{ color: '#FF1493' }}>dotpuppetk@gmail.com</p>
              <p className="text-sm" style={{ color: '#E0BBE4' }}>Response within 24 hours</p>
            </div>
          </div>

          <div className="mt-12 p-8 max-w-3xl mx-auto" style={{
            background: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.5), inset 0 0 30px rgba(255, 20, 147, 0.1)'
          }}>
            <h3 className="font-black text-xl mb-4 uppercase" style={{
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif',
              textShadow: '0 0 10px #00FFFF'
            }}>Agreement to Terms</h3>
            <p className="font-light leading-relaxed" style={{ color: '#FFB6C1' }}>
              By using our website and services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms & Conditions. These terms may be updated
              periodically, and your continued use constitutes acceptance of any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Scanlines effect at bottom */}
      <div className="h-2 relative" style={{
        borderTop: '2px solid #FF1493',
        boxShadow: '0 -2px 20px rgba(255, 20, 147, 0.7)'
      }}>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>
      </div>
    </div>
  );
};

export default TermsConditions;
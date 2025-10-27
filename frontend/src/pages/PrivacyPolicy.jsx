import React, { useEffect } from 'react';
import { Shield, Eye, Lock, Cookie, Users, Mail, Phone, MapPin, Database, Settings, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Puppet'
  });

  return (
    <div className="min-h-screen text-white mt-16" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background - more subtle */}
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
              PRIVACY POLICY
            </h1>
            <div className="h-1 w-32 mx-auto" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
          </div>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ 
            color: '#E0BBE4'
          }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you visit our website or purchase our bold statement pieces.
          </p>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF1493',
            boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
          }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
              }}>
                <Shield size={24} style={{ color: '#00FFFF' }} />
              </div>
              <h2 className="text-2xl font-black tracking-widest uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
              }}>
                OUR COMMITMENT TO PRIVACY
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-4 font-light" style={{ color: '#E0BBE4' }}>
                <p>PUPPET LLP is committed to ensuring that your privacy is protected. When you provide information that identifies you on our website, you can be assured it will only be used in accordance with this privacy statement.</p>
                
                <div className="p-6" style={{
                  background: 'rgba(255, 20, 147, 0.08)',
                  border: '1px solid rgba(255, 20, 147, 0.3)',
                  boxShadow: '0 0 8px rgba(255, 20, 147, 0.2)'
                }}>
                  <h4 className="font-black mb-3 uppercase tracking-wider" style={{ 
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>About This Policy</h4>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>
                    This privacy policy sets out how TATHASTA WEAVES LLP uses and protects any information 
                    you provide when you visit our website and/or agree to purchase from us.
                  </p>
                </div>
              </div>

              <div className="p-6" style={{
                background: 'rgba(0, 255, 255, 0.05)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.15)'
              }}>
                <h3 className="font-black mb-4 uppercase flex items-center gap-2" style={{ 
                  color: '#00FFFF', 
                  fontFamily: 'Impact, sans-serif' 
                }}>
                  <AlertCircle size={18} />
                  Policy Updates
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                  We may change this policy from time to time by updating this page. 
                  You should check this page periodically to ensure that you adhere to these changes. 
                  Your continued use of our services after any modifications constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #FF1493',
                boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
              }}>
                <Database size={24} style={{ color: '#FF1493' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{ 
                color: '#FF1493',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
              }}>
                INFORMATION WE COLLECT
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #FF1493',
                boxShadow: '0 0 12px rgba(255, 20, 147, 0.25)'
              }}>
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase" style={{ 
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Users size={18} />
                  Personal Information
                </h3>
                <div className="space-y-2 text-sm" style={{ color: '#E0BBE4' }}>
                  <p>We may collect the following information:</p>
                  <ul className="space-y-1 ml-4" style={{ color: '#FFB6C1' }}>
                    <li>▶ <strong>Name</strong> - For order processing and communication</li>
                    <li>▶ <strong>Contact Information</strong> - Including email address</li>
                    <li>▶ <strong>Demographic Information</strong> - Such as postcode, preferences, and interests</li>
                    <li>▶ <strong>Survey Information</strong> - Relevant to customer surveys and/or offers</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #00FFFF',
                boxShadow: '0 0 12px rgba(0, 255, 255, 0.25)'
              }}>
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Eye size={18} />
                  When We Collect Information
                </h3>
                <div className="p-4" style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.2)'
                }}>
                  <ul className="space-y-2 text-sm" style={{ color: '#E0BBE4' }}>
                    <li>▶ When you create an account on our website</li>
                    <li>▶ During the purchase process</li>
                    <li>▶ When you subscribe to our newsletter</li>
                    <li>▶ When you participate in surveys or feedback</li>
                    <li>▶ When you contact our customer support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #FF6B9D',
                boxShadow: '0 0 12px rgba(255, 107, 157, 0.25)'
              }}>
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase" style={{ 
                  color: '#FF6B9D',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Settings size={18} />
                  How We Use Your Information
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: '#E0BBE4' }}>
                  We require this information to understand your needs and provide you with better service, particularly for:
                </p>
                <div className="p-4" style={{
                  background: 'rgba(255, 107, 157, 0.05)',
                  border: '1px solid rgba(255, 107, 157, 0.2)'
                }}>
                  <ul className="space-y-1 text-sm" style={{ color: '#FFB6C1' }}>
                    <li>▶ Internal record keeping</li>
                    <li>▶ Improving our products and services</li>
                    <li>▶ Sending promotional emails about new products and offers</li>
                    <li>▶ Market research purposes</li>
                    <li>▶ Customizing the website according to your interests</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #00FFFF',
                boxShadow: '0 0 12px rgba(0, 255, 255, 0.25)'
              }}>
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase" style={{ 
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Lock size={18} />
                  Information Security
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                  We are committed to ensuring that your information is secure. To prevent unauthorized access 
                  or disclosure, we have implemented suitable physical, electronic, and managerial procedures 
                  to safeguard and secure the information we collect online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #FF6B9D',
                boxShadow: '0 0 8px rgba(255, 107, 157, 0.4)'
              }}>
                <Cookie size={24} style={{ color: '#FF6B9D' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{ 
                color: '#FF6B9D',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(255, 107, 157, 0.2)'
              }}>
                HOW WE USE COOKIES
              </h2>
            </div>
          </div>

          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '2px solid #FF6B9D',
            boxShadow: '0 0 15px rgba(255, 107, 157, 0.3)'
          }}>
            <div className="space-y-6">
              <p className="font-light leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none" style={{ color: '#E0BBE4' }}>
                <span style={{ color: '#FF6B9D' }}>A</span> cookie is a small file which asks permission to be placed on your computer's hard drive. 
                Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-6" style={{
                  background: 'rgba(255, 107, 157, 0.08)',
                  border: '1px solid rgba(255, 107, 157, 0.3)',
                  boxShadow: '0 0 8px rgba(255, 107, 157, 0.2)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{ 
                    color: '#FF6B9D',
                    fontFamily: 'Impact, sans-serif'
                  }}>What Cookies Do</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#FFB6C1' }}>
                    <li>▶ Allow web applications to respond to you as an individual</li>
                    <li>▶ Tailor operations to your needs, likes, and dislikes</li>
                    <li>▶ Gather and remember information about your preferences</li>
                    <li>▶ Help us analyze webpage traffic and improve our website</li>
                  </ul>
                </div>

                <div className="p-6" style={{
                  background: 'rgba(0, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.15)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{ 
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>Traffic Log Cookies</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                    We use traffic log cookies to identify which pages are being used. This helps us analyze 
                    data about webpage traffic and improve our website to tailor it to customer needs. 
                    We only use this information for statistical analysis purposes and then the data is removed from the system.
                  </p>
                </div>
              </div>

              <div className="p-6" style={{
                border: '1px solid rgba(255, 20, 147, 0.3)',
                background: 'rgba(255, 20, 147, 0.05)'
              }}>
                <h4 className="font-black mb-3 uppercase" style={{ color: '#FF1493', fontFamily: 'Impact, sans-serif' }}>Your Cookie Choices</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                  You can choose to accept or decline cookies. Most web browsers automatically accept cookies, 
                  but you can usually modify your browser setting to decline cookies if you prefer. 
                  This may prevent you from taking full advantage of the website. A cookie in no way gives us 
                  access to your computer or any information about you, other than the data you choose to share with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controlling Your Information */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
              }}>
                <Settings size={24} style={{ color: '#00FFFF' }} />
              </div>
              <h2 className="text-3xl font-black tracking-widest uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
              }}>
                CONTROLLING YOUR PERSONAL INFORMATION
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
            }}>
              <h3 className="font-black mb-6 uppercase" style={{ color: '#FF1493', fontFamily: 'Impact, sans-serif' }}>Your Rights & Choices</h3>
              
              <div className="space-y-4 font-light" style={{ color: '#E0BBE4' }}>
                <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                
                <div className="p-6" style={{
                  background: 'rgba(255, 20, 147, 0.08)',
                  border: '1px solid rgba(255, 20, 147, 0.3)',
                  boxShadow: '0 0 8px rgba(255, 20, 147, 0.2)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{ 
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>Restricting Data Collection</h4>
                  <ul className="space-y-2 text-sm" style={{ color: '#FFB6C1' }}>
                    <li>▶ Look for opt-out boxes when filling forms on our website</li>
                    <li>▶ Indicate if you don't want information used for direct marketing</li>
                    <li>▶ Change your mind at any time by contacting us</li>
                    <li>▶ Update your preferences through your account settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8 transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
            }}>
              <h3 className="font-black mb-6 uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Third-Party Information Sharing</h3>
              
              <div className="space-y-4 font-light">
                <div className="p-6" style={{
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  background: 'rgba(0, 255, 255, 0.05)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Our Promise</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                    <strong style={{ color: '#FFB6C1' }}>We will not sell, distribute, or lease your personal information to third parties</strong> 
                    {' '}unless we have your permission or are required by law to do so. We may use your personal 
                    information to send you promotional information about third parties which we think you may 
                    find interesting if you tell us that you wish this to happen.
                  </p>
                </div>

                <div className="p-6" style={{
                  border: '1px solid rgba(255, 107, 157, 0.3)',
                  background: 'rgba(255, 107, 157, 0.05)'
                }}>
                  <h4 className="font-black mb-3 uppercase" style={{ color: '#FF6B9D', fontFamily: 'Impact, sans-serif' }}>Data Accuracy</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                    If you believe that any information we are holding about you is incorrect or incomplete, 
                    please contact us as soon as possible. We will promptly correct any information found to be incorrect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black tracking-widest uppercase mb-8" style={{ 
            color: '#FF1493',
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
          }}>
            CONTACT US ABOUT PRIVACY
          </h2>
          <p className="font-light mb-8 max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            If you believe that any information we are holding about you is incorrect or incomplete, 
            or if you have questions about our privacy practices, please contact us immediately.
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
                <h4 className="font-black uppercase" style={{ color: '#FF1493', fontFamily: 'Impact, sans-serif' }}>Phone</h4>
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
                <h4 className="font-black uppercase" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>Email</h4>
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
                <h4 className="font-black uppercase" style={{ color: '#FF6B9D', fontFamily: 'Impact, sans-serif' }}>Address</h4>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#E0BBE4' }}>
                Hyderabad, Telangana 
              </p>
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

export default PrivacyPolicy;
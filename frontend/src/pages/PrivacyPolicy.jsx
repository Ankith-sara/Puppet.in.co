import React, { useEffect } from 'react';
import { Shield, Eye, Lock, Cookie, Users, Mail, Phone, MapPin, Database, Settings, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Puppet'
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
            PRIVACY POLICY
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you visit our website or purchase our bold statement pieces.
          </p>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-purple-950 border-2 border-pink-600 p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-cyan-600">
                <Shield size={32} className="text-cyan-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-cyan-400" style={{ 
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)'
              }}>
                OUR COMMITMENT TO PRIVACY
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>PUPPET LLP is committed to ensuring that your privacy is protected. When you provide information that identifies you on our website, you can be assured it will only be used in accordance with this privacy statement.</p>
                
                <div className="p-6 bg-purple-900 border border-pink-600">
                  <h4 className="font-black mb-3 uppercase text-pink-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>About This Policy</h4>
                  <p className="text-sm text-gray-400">
                    This privacy policy sets out how TATHASTA WEAVES LLP uses and protects any information 
                    you provide when you visit our website and/or agree to purchase from us.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-900 border border-cyan-600">
                <h3 className="font-black mb-4 uppercase flex items-center gap-2 text-cyan-600" style={{ 
                  fontFamily: 'Impact, sans-serif' 
                }}>
                  <AlertCircle size={20} />
                  Policy Updates
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
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
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-pink-600 bg-purple-950">
                <Database size={48} className="text-pink-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-pink-600" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              INFORMATION WE COLLECT
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-pink-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Users size={20} />
                  Personal Information
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>We may collect the following information:</p>
                  <ul className="space-y-1 ml-4 text-gray-500">
                    <li>▶ <strong className="text-pink-400">Name</strong> - For order processing and communication</li>
                    <li>▶ <strong className="text-pink-400">Contact Information</strong> - Including email address</li>
                    <li>▶ <strong className="text-pink-400">Demographic Information</strong> - Such as postcode, preferences, and interests</li>
                    <li>▶ <strong className="text-pink-400">Survey Information</strong> - Relevant to customer surveys and/or offers</li>
                  </ul>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-cyan-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Eye size={20} />
                  When We Collect Information
                </h3>
                <div className="p-4 bg-purple-900 border border-cyan-600">
                  <ul className="space-y-2 text-sm text-gray-400">
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
              <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600 p-6">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-purple-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Settings size={20} />
                  How We Use Your Information
                </h3>
                <p className="text-sm leading-relaxed mb-3 text-gray-400">
                  We require this information to understand your needs and provide you with better service, particularly for:
                </p>
                <div className="p-4 bg-purple-900 border border-purple-600">
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>▶ Internal record keeping</li>
                    <li>▶ Improving our products and services</li>
                    <li>▶ Sending promotional emails about new products and offers</li>
                    <li>▶ Market research purposes</li>
                    <li>▶ Customizing the website according to your interests</li>
                  </ul>
                </div>
              </div>

              <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase text-cyan-600" style={{ 
                  fontFamily: 'Impact, sans-serif'
                }}>
                  <Lock size={20} />
                  Information Security
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
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
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-purple-600 bg-purple-950">
                <Cookie size={48} className="text-purple-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-purple-600" style={{ 
              fontFamily: 'Impact, sans-serif'
            }}>
              HOW WE USE COOKIES
            </h2>
          </div>

          <div className="bg-purple-950 border-2 border-purple-600 p-12">
            <div className="space-y-6">
              <p className="leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none text-gray-400">
                <span className="text-purple-600">A</span> cookie is a small file which asks permission to be placed on your computer's hard drive. 
                Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-6 bg-purple-900 border border-purple-600">
                  <h4 className="font-black mb-3 uppercase text-purple-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>What Cookies Do</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>▶ Allow web applications to respond to you as an individual</li>
                    <li>▶ Tailor operations to your needs, likes, and dislikes</li>
                    <li>▶ Gather and remember information about your preferences</li>
                    <li>▶ Help us analyze webpage traffic and improve our website</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-900 border border-cyan-600">
                  <h4 className="font-black mb-3 uppercase text-cyan-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Traffic Log Cookies</h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    We use traffic log cookies to identify which pages are being used. This helps us analyze 
                    data about webpage traffic and improve our website to tailor it to customer needs. 
                    We only use this information for statistical analysis purposes and then the data is removed from the system.
                  </p>
                </div>
              </div>

              <div className="p-6 border border-pink-600 bg-purple-900">
                <h4 className="font-black mb-3 uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>Your Cookie Choices</h4>
                <p className="text-sm leading-relaxed text-gray-400">
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
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center border-2 border-cyan-600 bg-purple-950">
                <Settings size={48} className="text-cyan-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-cyan-400" style={{ 
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgb(219 39 119)'
            }}>
              CONTROLLING YOUR PERSONAL INFORMATION
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-8">
              <h3 className="font-black mb-6 uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>Your Rights & Choices</h3>
              
              <div className="space-y-4 text-gray-400">
                <p>You may choose to restrict the collection or use of your personal information in the following ways:</p>
                
                <div className="p-6 bg-purple-900 border border-pink-600">
                  <h4 className="font-black mb-3 uppercase text-pink-600" style={{ 
                    fontFamily: 'Impact, sans-serif'
                  }}>Restricting Data Collection</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>▶ Look for opt-out boxes when filling forms on our website</li>
                    <li>▶ Indicate if you don't want information used for direct marketing</li>
                    <li>▶ Change your mind at any time by contacting us</li>
                    <li>▶ Update your preferences through your account settings</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-8">
              <h3 className="font-black mb-6 uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Third-Party Information Sharing</h3>
              
              <div className="space-y-4">
                <div className="p-6 border border-cyan-600 bg-purple-900">
                  <h4 className="font-black mb-3 uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Our Promise</h4>
                  <p className="text-sm leading-relaxed text-gray-400">
                    <strong className="text-cyan-400">We will not sell, distribute, or lease your personal information to third parties</strong> 
                    {' '}unless we have your permission or are required by law to do so. We may use your personal 
                    information to send you promotional information about third parties which we think you may 
                    find interesting if you tell us that you wish this to happen.
                  </p>
                </div>

                <div className="p-6 border border-purple-600 bg-purple-900">
                  <h4 className="font-black mb-3 uppercase text-purple-600" style={{ fontFamily: 'Impact, sans-serif' }}>Data Accuracy</h4>
                  <p className="text-sm leading-relaxed text-gray-400">
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
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-pink-600" style={{ 
            fontFamily: 'Impact, sans-serif'
          }}>
            CONTACT US ABOUT PRIVACY
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
            If you believe that any information we are holding about you is incorrect or incomplete, 
            or if you have questions about our privacy practices, please contact us immediately.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Phone size={20} className="text-pink-600" />
                <h4 className="font-black uppercase text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>Phone</h4>
              </div>
              <p className="text-xl mb-1 text-cyan-400">+91 9399336666</p>
              <p className="text-sm text-gray-400">Mon-Sat: 9 AM - 6 PM</p>
            </div>
            
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={20} className="text-cyan-600" />
                <h4 className="font-black uppercase text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>Email</h4>
              </div>
              <p className="text-xl mb-1 text-pink-400">dotpuppetk@gmail.com</p>
              <p className="text-sm text-gray-400">Response within 24 hours</p>
            </div>

            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600 p-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin size={20} className="text-purple-600" />
                <h4 className="font-black uppercase text-purple-600" style={{ fontFamily: 'Impact, sans-serif' }}>Address</h4>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Hyderabad, Telangana 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default PrivacyPolicy;
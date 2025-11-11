import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, Phone, Shield, Truck, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const PuppetLogo = () => (
    <div className="relative">
      <div className="text-5xl font-black tracking-tight" style={{
        fontFamily: 'Impact, "Arial Black", sans-serif',
        textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.3)',
        color: '#00FFFF',
        transform: 'skewY(-2deg)'
      }}>
        PUPPET
      </div>
    </div>
  );

  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #1a0a2e 0%, #0f051d 50%, #000000 100%)'
    }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(#FF1493 2px, transparent 2px),
          linear-gradient(90deg, #FF1493 2px, transparent 2px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <PuppetLogo />
              <p className="mt-6 leading-relaxed font-light text-base" style={{
                color: '#FFB6C1',
                textShadow: '0 0 10px rgba(255, 20, 147, 0.3)'
              }}>
                Bold Art for Bold Spaces. We curate provocative, statement-making home décor that transforms ordinary rooms into extraordinary personal galleries. Life's too short for boring décor.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 group"
                style={{
                  border: '2px solid #FF1493',
                  boxShadow: '0 0 10px #FF1493, inset 0 0 10px rgba(255, 20, 147, 0.2)',
                  background: 'rgba(255, 20, 147, 0.1)'
                }}
              >
                <Instagram size={20} style={{ color: '#FF1493' }} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                  boxShadow: '0 0 20px #FF1493, inset 0 0 20px rgba(255, 20, 147, 0.4)'
                }}></div>
              </a>
              <a
                href="https://in.linkedin.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 group"
                style={{
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 10px #00FFFF, inset 0 0 10px rgba(0, 255, 255, 0.2)',
                  background: 'rgba(0, 255, 255, 0.1)'
                }}
              >
                <Linkedin size={20} style={{ color: '#00FFFF' }} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                  boxShadow: '0 0 20px #00FFFF, inset 0 0 20px rgba(0, 255, 255, 0.4)'
                }}></div>
              </a>
              <a
                href="https://www.pinterest.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 group"
                style={{
                  border: '2px solid #FF6B9D',
                  boxShadow: '0 0 10px #FF6B9D, inset 0 0 10px rgba(255, 107, 157, 0.2)',
                  background: 'rgba(255, 107, 157, 0.1)'
                }}
              >
                <Twitter size={20} style={{ color: '#FF6B9D' }} className="group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{
                  boxShadow: '0 0 20px #FF6B9D, inset 0 0 20px rgba(255, 107, 157, 0.4)'
                }}></div>
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="space-y-5">
                <h4 className="text-sm font-black tracking-widest uppercase" style={{
                  color: '#FF1493',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgba(255, 20, 147, 0.3), 0 0 10px #FF1493'
                }}>
                  EXPLORE
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'About Us', path: '/about' },
                    { name: 'Contact Us', path: '/contact' },
                    { name: 'Shop Collection', path: '/shop/collection' },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={item.path} className="font-light flex items-center group text-sm transition-all duration-300"
                        style={{ color: '#E0BBE4' }}>
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3" style={{ color: '#FF1493' }}>▶</span>
                        <span className="group-hover:tracking-wider transition-all duration-300" style={{
                          textShadow: '0 0 0px #FF1493'
                        }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px #FF1493'}
                          onMouseLeave={(e) => e.target.style.textShadow = '0 0 0px #FF1493'}>
                          {item.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="space-y-5">
                <h4 className="text-sm font-black tracking-widest uppercase" style={{
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3), 0 0 10px #00FFFF'
                }}>
                  POLICIES
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Shipping Policy', path: '/shippingpolicy' },
                    { name: 'Return Policy', path: '/refundpolicy' },
                    { name: 'Privacy Policy', path: '/privacypolicy' },
                    { name: 'Terms & Conditions', path: '/termsconditions' }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={item.path} className="font-light flex items-center group text-sm transition-all duration-300"
                        style={{ color: '#E0BBE4' }}>
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3" style={{ color: '#00FFFF' }}>▶</span>
                        <span className="group-hover:tracking-wider transition-all duration-300" style={{
                          textShadow: '0 0 0px #00FFFF'
                        }} onMouseEnter={(e) => e.target.style.textShadow = '0 0 8px #00FFFF'}
                          onMouseLeave={(e) => e.target.style.textShadow = '0 0 0px #00FFFF'}>
                          {item.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-5 sm:col-span-2 lg:col-span-1">
                <h4 className="text-sm font-black tracking-widest uppercase" style={{
                  color: '#FF6B9D',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '2px 2px 0px rgba(255, 107, 157, 0.3), 0 0 10px #FF6B9D'
                }}>
                  SUPPORT
                </h4>
                <ul className="space-y-3">
                  <li>
                    <NavLink to='/support' className="font-light flex items-center group text-sm transition-all duration-300"
                      style={{ color: '#E0BBE4' }}>
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3" style={{ color: '#FF6B9D' }}>▶</span>
                      <span className="group-hover:tracking-wider transition-all duration-300">Get Help</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/faqs' className="font-light flex items-center group text-sm transition-all duration-300"
                      style={{ color: '#E0BBE4' }}>
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3" style={{ color: '#FF6B9D' }}>▶</span>
                      <span className="group-hover:tracking-wider transition-all duration-300">FAQs</span>
                    </NavLink>
                  </li>
                  <li className="font-light flex items-center text-sm pt-2" style={{ color: '#FFB6C1' }}>
                    <Phone size={14} className="mr-2 flex-shrink-0" style={{ color: '#FF1493' }} />
                    +91 9399336666
                  </li>
                  <li className="font-light flex items-center text-sm" style={{ color: '#FFB6C1' }}>
                    <Mail size={14} className="mr-2 flex-shrink-0" style={{ color: '#FF1493' }} />
                    dotpuppetk@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative" style={{
        borderTop: '2px solid #FF1493',
        boxShadow: '0 -2px 10px rgba(255, 20, 147, 0.5)'
      }}>
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm font-light mb-1" style={{
                color: '#00FFFF',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
              }}>
                &copy; {currentYear} PUPPET. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs font-light" style={{
                color: '#FF6B9D',
                fontFamily: 'Impact, sans-serif',
                letterSpacing: '0.1em'
              }}>
                YOUR SPACE. YOUR RULES. YOUR STATEMENT.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs order-3 lg:order-2">
              {[
                { name: 'FAQs', path: '/faqs' },
                { name: 'Support', path: '/support' },
                { name: 'Sitemap', path: '/sitemap' }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <NavLink to={item.path} className="font-light transition-all duration-300 uppercase tracking-wider"
                    style={{ color: '#FFB6C1', textShadow: '0 0 0px #FF1493' }}
                    onMouseEnter={(e) => e.target.style.textShadow = '0 0 10px #FF1493'}
                    onMouseLeave={(e) => e.target.style.textShadow = '0 0 0px #FF1493'}>
                    {item.name}
                  </NavLink>
                  {idx < arr.length - 1 && (
                    <span style={{ color: '#FF1493' }}>●</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 order-1 lg:order-3">
              <div className="flex items-center text-xs px-3 py-2 transition-all duration-300 hover:scale-105"
                style={{
                  border: '1px solid #00FF00',
                  boxShadow: '0 0 8px rgba(0, 255, 0, 0.5), inset 0 0 8px rgba(0, 255, 0, 0.1)',
                  color: '#00FF00',
                  background: 'rgba(0, 255, 0, 0.05)'
                }}>
                <Shield size={12} className="mr-1.5 flex-shrink-0" />
                <span className="font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>SECURE</span>
              </div>
              <div className="flex items-center text-xs px-3 py-2 transition-all duration-300 hover:scale-105"
                style={{
                  border: '1px solid #00FFFF',
                  boxShadow: '0 0 8px rgba(0, 255, 255, 0.5), inset 0 0 8px rgba(0, 255, 255, 0.1)',
                  color: '#00FFFF',
                  background: 'rgba(0, 255, 255, 0.05)'
                }}>
                <Truck size={12} className="mr-1.5 flex-shrink-0" />
                <span className="font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>FAST</span>
              </div>
              <div className="flex items-center text-xs px-3 py-2 transition-all duration-300 hover:scale-105"
                style={{
                  border: '1px solid #FF1493',
                  boxShadow: '0 0 8px rgba(255, 20, 147, 0.5), inset 0 0 8px rgba(255, 20, 147, 0.1)',
                  color: '#FF1493',
                  background: 'rgba(255, 20, 147, 0.05)'
                }}>
                <Heart size={12} className="mr-1.5 flex-shrink-0" />
                <span className="font-bold" style={{ fontFamily: 'Impact, sans-serif' }}>CURATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, Shield, Truck, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const PuppetLogo = () => (
    <div className="relative">
      <div className="text-6xl font-black tracking-tighter text-cyan-400" style={{
        fontFamily: 'Impact, "Arial Black", sans-serif',
        textShadow: '2px 2px 0px rgb(219 39 119)',
        transform: 'skewY(-2deg)'
      }}>
        PUPPET
      </div>
    </div>
  );

  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <PuppetLogo />
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                Bold Art for Bold Spaces. We curate provocative, statement-making home décor that transforms ordinary rooms into extraordinary personal galleries. Life's too short for boring décor.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-purple-950 border-2 border-pink-600 hover:border-pink-500 hover:bg-purple-900"
              >
                <Instagram size={22} className="text-pink-600 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://in.linkedin.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-purple-950 border-2 border-cyan-600 hover:border-cyan-500 hover:bg-purple-900"
              >
                <Linkedin size={22} className="text-cyan-600 group-hover:text-cyan-500 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.pinterest.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-purple-950 border-2 border-purple-600 hover:border-purple-500 hover:bg-purple-900"
              >
                <Twitter size={22} className="text-purple-600 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="space-y-5">
                <h4 className="text-sm font-black tracking-widest uppercase text-pink-600" style={{
                  fontFamily: 'Impact, sans-serif'
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
                      <a href={item.path} className="flex items-center group text-sm transition-all duration-300 text-gray-400 hover:text-pink-500">
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-pink-600">▶</span>
                        <span className="group-hover:tracking-wide transition-all duration-300">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="space-y-5">
                <h4 className="text-sm font-black tracking-widest uppercase text-cyan-600" style={{
                  fontFamily: 'Impact, sans-serif'
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
                      <a href={item.path} className="flex items-center group text-sm transition-all duration-300 text-gray-400 hover:text-cyan-500">
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-cyan-600">▶</span>
                        <span className="group-hover:tracking-wide transition-all duration-300">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="space-y-5 sm:col-span-2 lg:col-span-1">
                <h4 className="text-sm font-black tracking-widest uppercase text-purple-600" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>
                  SUPPORT
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href='/support' className="flex items-center group text-sm transition-all duration-300 text-gray-400 hover:text-purple-500">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-purple-600">▶</span>
                      <span className="group-hover:tracking-wide transition-all duration-300">Get Help</span>
                    </a>
                  </li>
                  <li>
                    <a href='/faqs' className="flex items-center group text-sm transition-all duration-300 text-gray-400 hover:text-purple-500">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-purple-600">▶</span>
                      <span className="group-hover:tracking-wide transition-all duration-300">FAQs</span>
                    </a>
                  </li>
                  <li className="flex items-center text-sm pt-2 text-gray-400">
                    <Phone size={14} className="mr-2 flex-shrink-0 text-pink-600" />
                    +91 9399336666
                  </li>
                  <li className="flex items-center text-sm text-gray-400">
                    <Mail size={14} className="mr-2 flex-shrink-0 text-pink-600" />
                    dotpuppetk@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-pink-900">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm font-bold mb-1 text-cyan-600">
                &copy; {currentYear} PUPPET. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs font-black text-pink-600 tracking-widest" style={{
                fontFamily: 'Impact, sans-serif'
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
                  <a href={item.path} className="uppercase tracking-wider transition-all duration-300 text-gray-500 hover:text-pink-500">
                    {item.name}
                  </a>
                  {idx < arr.length - 1 && (
                    <span className="text-pink-900">●</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
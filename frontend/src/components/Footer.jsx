import React from 'react';
import { Instagram, Linkedin, Twitter, Mail, Phone, Shield, Truck, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const PuppetLogo = () => (
    <div className="relative">
      <div className="text-6xl font-black tracking-tighter text-stone-800" style={{
        fontFamily: 'Impact, "Arial Black", sans-serif',
        textShadow: '2px 2px 0px rgb(120 113 108)',
        transform: 'skewY(-2deg)'
      }}>
        PUPPET
      </div>
    </div>
  );

  return (
    <footer className="relative overflow-hidden bg-stone-200">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgb(120 113 108) 1px, transparent 1px),
          linear-gradient(90deg, rgb(120 113 108) 1px, transparent 1px)
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
              <p className="mt-6 text-base leading-relaxed text-stone-700">
                Bold Art for Bold Spaces. We curate provocative, statement-making home décor that transforms ordinary rooms into extraordinary personal galleries. Life's too short for boring décor.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-stone-100 border-2 border-stone-700 hover:border-stone-800 hover:bg-stone-50"
              >
                <Instagram size={22} className="text-stone-700 group-hover:text-stone-800 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://in.linkedin.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-stone-100 border-2 border-lime-800 hover:border-lime-900 hover:bg-stone-50"
              >
                <Linkedin size={22} className="text-lime-800 group-hover:text-lime-900 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.pinterest.com/"
                target='_blank'
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group bg-stone-100 border-2 border-emerald-700 hover:border-emerald-800 hover:bg-stone-50"
              >
                <Twitter size={22} className="text-emerald-700 group-hover:text-emerald-800 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="space-y-5">
                <h4 className="text-sm font-black tracking-widest uppercase text-stone-800" style={{
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
                      <a href={item.path} className="flex items-center group text-sm transition-all duration-300 text-stone-600 hover:text-stone-900">
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-stone-700">▶</span>
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
                <h4 className="text-sm font-black tracking-widest uppercase text-lime-800" style={{
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
                      <a href={item.path} className="flex items-center group text-sm transition-all duration-300 text-stone-600 hover:text-lime-900">
                        <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-lime-800">▶</span>
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
                <h4 className="text-sm font-black tracking-widest uppercase text-emerald-700" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>
                  SUPPORT
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href='/support' className="flex items-center group text-sm transition-all duration-300 text-stone-600 hover:text-emerald-800">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-emerald-700">▶</span>
                      <span className="group-hover:tracking-wide transition-all duration-300">Get Help</span>
                    </a>
                  </li>
                  <li>
                    <a href='/faqs' className="flex items-center group text-sm transition-all duration-300 text-stone-600 hover:text-emerald-800">
                      <span className="mr-2 transition-all duration-300 group-hover:mr-3 text-emerald-700">▶</span>
                      <span className="group-hover:tracking-wide transition-all duration-300">FAQs</span>
                    </a>
                  </li>
                  <li className="flex items-center text-sm pt-2 text-stone-700">
                    <Phone size={14} className="mr-2 flex-shrink-0 text-stone-700" />
                    +91 9399336666
                  </li>
                  <li className="flex items-center text-sm text-stone-700">
                    <Mail size={14} className="mr-2 flex-shrink-0 text-stone-700" />
                    dotpuppetk@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-stone-400">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm font-bold mb-1 text-lime-800">
                &copy; {currentYear} PUPPET. ALL RIGHTS RESERVED.
              </p>
              <p className="text-xs font-black text-stone-700 tracking-widest" style={{
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
                  <a href={item.path} className="uppercase tracking-wider transition-all duration-300 text-stone-600 hover:text-stone-900 font-medium">
                    {item.name}
                  </a>
                  {idx < arr.length - 1 && (
                    <span className="text-stone-400">●</span>
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
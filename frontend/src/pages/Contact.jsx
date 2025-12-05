import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Briefcase, ArrowRight } from 'lucide-react';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Customer Service | Puppet'
  });

  const contactImageUrl = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop';

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Grid background */}
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
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden border-2 border-pink-600">
                <img
                  className="w-full h-[600px] object-cover"
                  src={contactImageUrl}
                  alt="Puppet Contact"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-cyan-600"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-purple-600"></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase text-cyan-400" style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)',
                transform: 'skewY(-2deg)'
              }}>
                CONTACT US
              </h1>

              <div className="w-32 h-1 mb-8 bg-gradient-to-r from-pink-600 to-cyan-600"></div>

              <div className="space-y-4 text-lg leading-loose">
                <p className="text-gray-400 first-letter:text-3xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-pink-600">
                  We believe in the power of connection — between creator and buyer, tradition and modernity, story and style. At Puppet, every conversation matters.
                </p>

                <p className="text-gray-500">Whether you have questions about our bold pieces, need assistance with your order, or want to learn more about the curators behind your favorite statement décor, we're here to help.</p>

                <p className="text-gray-400">Our customer service team understands that each Puppet piece carries a story, and we're committed to ensuring your experience with us is as meaningful as the craftsmanship we celebrate.</p>

                <div className="p-6 mt-6 bg-purple-950 border-l-4 border-cyan-600">
                  <p className="italic text-xl text-cyan-400">
                    "Every question is an opportunity to share our passion for bold design and fearless expression."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 uppercase text-pink-600" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            GET IN TOUCH
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visit Us */}
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-pink-600">
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-pink-600">
                    <MapPin size={24} className="text-pink-600" />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase text-pink-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>VISIT US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4 bg-pink-600"></div>
                <div className="space-y-2 text-gray-500">
                  <p>Hyderabad, Telangana</p>
                  <p className="font-medium text-cyan-600">PIN: 500064</p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-cyan-600">
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-cyan-600">
                    <Phone size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase text-cyan-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>CALL US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4 bg-cyan-600"></div>
                <div className="space-y-2 text-gray-400">
                  <p>Customer Service</p>
                  <p className="text-xl font-medium text-cyan-600">+91 9399336666</p>
                  <p className="text-sm text-gray-500">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="group transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600">
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-purple-600">
                    <Mail size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase text-purple-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>EMAIL US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4 bg-purple-600"></div>
                <div className="space-y-2 text-gray-400">
                  <p>General Inquiries</p>
                  <p className="text-lg font-medium text-purple-600">dotpuppetk@gmail.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-12 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase text-cyan-600" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                JOIN OUR MISSION
              </h2>

              <div className="space-y-6 text-lg leading-loose">
                <p className="text-gray-400 first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:text-pink-600">
                  At Puppet, we're building more than a brand — we're nurturing a movement that celebrates bold design, empowers creators, and makes statements for the world.
                </p>

                <p className="text-gray-500">We're looking for passionate individuals who believe in the power of expression, the beauty of provocation, and the importance of fearless design. Join our team and help us bridge the gap between art and everyday living.</p>

                <p className="text-gray-400">Whether you're interested in design, technology, marketing, or operations, there's a place for you in our growing family.</p>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  className="px-8 py-4 font-black tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 group bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-pink-600 text-white hover:from-cyan-600 hover:to-cyan-500 hover:border-cyan-600"
                  style={{
                    fontFamily: 'Impact, sans-serif'
                  }}
                >
                  EXPLORE OPPORTUNITIES
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-sm text-gray-500">
                  Send your resume to: careers@puppet.com
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="p-12 transition-all duration-300 hover:scale-105 bg-purple-950 border-2 border-purple-600">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center border-2 border-purple-600">
                    <Briefcase size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-black tracking-wider uppercase text-purple-600" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    Why Work With Us?
                  </h3>
                </div>

                <div className="space-y-6 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-pink-600">▶</div>
                    <p className="text-gray-400">
                      <strong className="font-black text-pink-600" style={{ fontFamily: 'Impact, sans-serif' }}>MEANINGFUL IMPACT:</strong> Every day, you'll contribute to bold design and empowering creative communities.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-cyan-600">▶</div>
                    <p className="text-gray-400">
                      <strong className="font-black text-cyan-600" style={{ fontFamily: 'Impact, sans-serif' }}>GROWTH & LEARNING:</strong> Work with cutting-edge design, provocative art, and passionate team members.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 text-purple-600">▶</div>
                    <p className="text-gray-400">
                      <strong className="font-black text-purple-600" style={{ fontFamily: 'Impact, sans-serif' }}>CREATIVE FREEDOM:</strong> Bring your ideas to life in an environment that values innovation and authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-10 px-4 sm:px-8 md:px-16">
        <NewsletterBox />
      </section>

      {/* Bottom border */}
      <div className="h-2 mt-12 border-t-2 border-pink-900"></div>
    </div>
  );
};

export default Contact;
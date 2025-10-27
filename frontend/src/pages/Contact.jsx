import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Briefcase, ArrowRight } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Customer Service | Puppet'
  });

  // Placeholder image - replace with actual contact image
  const contactImageUrl = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1200&fit=crop';

  return (
    <div className="min-h-screen text-white mt-16" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden" style={{
                border: '3px solid #FF1493',
                boxShadow: '0 0 30px rgba(255, 20, 147, 0.4)'
              }}>
                <img
                  className="w-full h-[600px] object-cover transition-all duration-700"
                  src={contactImageUrl}
                  alt="Puppet Contact"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(255, 20, 147, 0.2) 100%)'
                }}></div>
              </div>
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-16 h-16" style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16" style={{
                border: '2px solid #FF6B9D',
                boxShadow: '0 0 15px rgba(255, 107, 157, 0.5)'
              }}></div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase" style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                color: '#00FFFF',
                textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
                transform: 'skewY(-2deg)'
              }}>
                CONTACT US
              </h1>

              <div className="w-32 h-1 mb-8" style={{
                background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
                boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
              }}></div>

              <div className="space-y-4 text-lg leading-loose font-light">
                <p className="first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none" style={{ color: '#E0BBE4' }}>
                  <span style={{ color: '#FF1493' }}>W</span>e believe in the power of connection — between creator and buyer, tradition and modernity, story and style. At Puppet, every conversation matters.
                </p>

                <p style={{ color: '#FFB6C1' }}>Whether you have questions about our bold pieces, need assistance with your order, or want to learn more about the curators behind your favorite statement décor, we're here to help.</p>

                <p style={{ color: '#E0BBE4' }}>Our customer service team understands that each Puppet piece carries a story, and we're committed to ensuring your experience with us is as meaningful as the craftsmanship we celebrate.</p>

                <div className="p-6 mt-6" style={{
                  borderLeft: '4px solid #00FFFF',
                  background: 'rgba(0, 255, 255, 0.05)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
                }}>
                  <p className="italic text-xl font-light" style={{ color: '#00FFFF' }}>
                    "Every question is an opportunity to share our passion for bold design and fearless expression."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12 uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#FF1493',
            textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
          }}>
            GET IN TOUCH
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visit Us */}
            <div className="group transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF1493',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.3)'
            }}>
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center" style={{
                    border: '2px solid #FF1493',
                    boxShadow: '0 0 8px rgba(255, 20, 147, 0.4)'
                  }}>
                    <MapPin size={24} style={{ color: '#FF1493' }} />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase" style={{
                    color: '#FF1493',
                    fontFamily: 'Impact, sans-serif'
                  }}>VISIT US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4" style={{ background: '#FF1493' }}></div>
                <div className="space-y-2 font-light" style={{ color: '#FFB6C1' }}>
                  <p>Hyderabad, Telangana</p>
                  <p className="font-medium" style={{ color: '#00FFFF' }}>PIN: 500064</p>
                </div>
              </div>
            </div>

            {/* Call Us */}
            <div className="group transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #00FFFF',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
            }}>
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center" style={{
                    border: '2px solid #00FFFF',
                    boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)'
                  }}>
                    <Phone size={24} style={{ color: '#00FFFF' }} />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase" style={{
                    color: '#00FFFF',
                    fontFamily: 'Impact, sans-serif'
                  }}>CALL US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4" style={{ background: '#00FFFF' }}></div>
                <div className="space-y-2 font-light" style={{ color: '#E0BBE4' }}>
                  <p>Customer Service</p>
                  <p className="text-xl font-medium" style={{ color: '#00FFFF' }}>+91 9399336666</p>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="group transition-all duration-300 hover:scale-105" style={{
              background: 'rgba(26, 10, 46, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '2px solid #FF6B9D',
              boxShadow: '0 0 15px rgba(255, 107, 157, 0.3)'
            }}>
              <div className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center" style={{
                    border: '2px solid #FF6B9D',
                    boxShadow: '0 0 8px rgba(255, 107, 157, 0.4)'
                  }}>
                    <Mail size={24} style={{ color: '#FF6B9D' }} />
                  </div>
                  <h3 className="text-xl font-black tracking-wider uppercase" style={{
                    color: '#FF6B9D',
                    fontFamily: 'Impact, sans-serif'
                  }}>EMAIL US</h3>
                </div>
                <div className="w-12 h-0.5 mb-4" style={{ background: '#FF6B9D' }}></div>
                <div className="space-y-2 font-light" style={{ color: '#E0BBE4' }}>
                  <p>General Inquiries</p>
                  <p className="text-lg font-medium" style={{ color: '#FF6B9D' }}>dotpuppetk@gmail.com</p>
                  <p className="text-sm" style={{ color: '#FFB6C1' }}>We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                color: '#00FFFF',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
              }}>
                JOIN OUR MISSION
              </h2>

              <div className="space-y-6 text-lg leading-loose font-light">
                <p className="first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none" style={{ color: '#E0BBE4' }}>
                  <span style={{ color: '#FF1493' }}>A</span>t Puppet, we're building more than a brand — we're nurturing a movement that celebrates bold design, empowers creators, and makes statements for the world.
                </p>

                <p style={{ color: '#FFB6C1' }}>We're looking for passionate individuals who believe in the power of expression, the beauty of provocation, and the importance of fearless design. Join our team and help us bridge the gap between art and everyday living.</p>

                <p style={{ color: '#E0BBE4' }}>Whether you're interested in design, technology, marketing, or operations, there's a place for you in our growing family.</p>
              </div>

              <div className="mt-8 space-y-4">
                <button 
                  className="px-8 py-4 font-black tracking-wider uppercase transition-all duration-300 inline-flex items-center gap-2 group"
                  style={{
                    background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                    border: '2px solid #FF1493',
                    color: '#000000',
                    fontFamily: 'Impact, sans-serif',
                    boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)';
                    e.currentTarget.style.borderColor = '#00FFFF';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)';
                    e.currentTarget.style.borderColor = '#FF1493';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
                  }}
                >
                  EXPLORE OPPORTUNITIES
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-sm font-light" style={{ color: '#FFB6C1' }}>
                  Send your resume to: careers@puppet.com
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="p-12 transition-all duration-300 hover:scale-105" style={{
                background: 'rgba(26, 10, 46, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '2px solid #FF6B9D',
                boxShadow: '0 0 20px rgba(255, 107, 157, 0.4)'
              }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center" style={{
                    border: '2px solid #FF6B9D',
                    boxShadow: '0 0 8px rgba(255, 107, 157, 0.4)'
                  }}>
                    <Briefcase size={24} style={{ color: '#FF6B9D' }} />
                  </div>
                  <h3 className="text-2xl font-black tracking-wider uppercase" style={{
                    color: '#FF6B9D',
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    Why Work With Us?
                  </h3>
                </div>

                <div className="space-y-6 font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1" style={{ color: '#FF1493' }}>▶</div>
                    <p style={{ color: '#E0BBE4' }}>
                      <strong className="font-black" style={{ color: '#FF1493', fontFamily: 'Impact, sans-serif' }}>MEANINGFUL IMPACT:</strong> Every day, you'll contribute to bold design and empowering creative communities.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1" style={{ color: '#00FFFF' }}>▶</div>
                    <p style={{ color: '#E0BBE4' }}>
                      <strong className="font-black" style={{ color: '#00FFFF', fontFamily: 'Impact, sans-serif' }}>GROWTH & LEARNING:</strong> Work with cutting-edge design, provocative art, and passionate team members.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1" style={{ color: '#FF6B9D' }}>▶</div>
                    <p style={{ color: '#E0BBE4' }}>
                      <strong className="font-black" style={{ color: '#FF6B9D', fontFamily: 'Impact, sans-serif' }}>CREATIVE FREEDOM:</strong> Bring your ideas to life in an environment that values innovation and authenticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scanlines effect at bottom */}
      <div className="h-2 relative mt-20" style={{
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

export default Contact;
import React, { useState } from 'react';
import { Heart, Award, Users, Star, Sparkles, Zap, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every piece tells a unique story and celebrates bold self-expression",
      color: "#FF1493"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Curated selection of premium materials and craftsmanship",
      color: "#00FFFF"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a tribe of fearless individuals who embrace their unique style",
      color: "#FF6B9D"
    }
  ];

  const team = [
    {
      name: "Sofia Rodriguez",
      title: "Founder & Creative Director",
      bio: "Former gallery owner with a passion for provocative art and Miami's vibrant culture",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Chen",
      title: "Head of Curation",
      bio: "Art historian specializing in contemporary and boundary-pushing artists",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Isabella Martinez",
      title: "Customer Experience Lead",
      bio: "Dedicated to making every interaction as memorable as our pieces",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const testimonials = [
    {
      text: "Puppet.co.in transformed my living room into a conversation starter. Every guest asks about my new art piece!",
      author: "Priya M.",
      location: "Mumbai, India",
      rating: 5
    },
    {
      text: "Finally, a store that gets it. Bold, beautiful, and unapologetically different. Exactly what I was looking for.",
      author: "Rahul K.",
      location: "Bangalore, India",
      rating: 5
    },
    {
      text: "The quality is exceptional and the customer service is top-notch. I've already made three purchases!",
      author: "Anjali S.",
      location: "Delhi, India",
      rating: 5
    }
  ];

  const styles = [
    {
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
      title: "Vintage Wall Art",
      description: "Bold collages and retro advertisements that transform walls into storytelling canvases."
    },
    {
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
      title: "Sculptural Lighting",
      description: "Provocative lamps that blur the line between functional lighting and gallery-worthy art."
    },
    {
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
      title: "Statement Furniture",
      description: "Upcycled cabinets and unique pieces that demand attention and spark conversation."
    },
    {
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500",
      title: "Mosaic & Mirror Art",
      description: "Reflective displays that play with light, creating mesmerizing visual experiences."
    }
  ];

  return (
    <div className="min-h-screen text-white mt-16" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)'
          }}>
            OUR STORY
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8" style={{
            background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
            boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
          }}></div>

          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto" style={{ color: '#E0BBE4' }}>
            Curating boldness for fearless spaces since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto" style={{
                border: '4px solid #FFD700',
                boxShadow: '0 0 40px rgba(255, 215, 0, 0.6)'
              }}>
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
                  alt="Founder"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, transparent 0%, rgba(255, 20, 147, 0.2) 100%)'
                }}></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                color: '#FF1493',
                textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
              }}>
                BORN FROM BOLD SPIRIT
              </h2>

              <div className="space-y-6 text-lg leading-loose font-light">
                <p className="first-letter:text-3xl first-letter:font-black first-letter:float-left first-letter:leading-none" style={{ color: '#E0BBE4' }}>
                  <span style={{ color: '#FF1493' }}>P</span>uppet.co.in started in a small studio where art met audacity. Our founder noticed a gap in the market: beautiful homes filled with safe, boring art. She set out to change that.
                </p>

                <p style={{ color: '#FFB6C1' }}>
                  We believe your space should be as fearless as you are. Every piece we curate is selected to spark conversation, challenge norms, and celebrate the beauty of being unapologetically yourself.
                </p>

                <p style={{ color: '#E0BBE4' }}>
                  Today, we work with over 50 boundary-pushing artists from around the world, bringing provocative, premium pieces to bold individuals who refuse to blend in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '3px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
          }}>
            <blockquote className="text-center">
              <p className="text-3xl md:text-4xl font-black mb-6 leading-relaxed uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                color: '#00FFFF',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
              }}>
                "ART SHOULD MAKE YOU FEEL SOMETHING. YOUR HOME SHOULD TELL YOUR STORY. WE'RE HERE TO HELP YOU LIVE BOLDLY."
              </p>
              <footer className="text-lg font-light" style={{ color: '#FFB6C1' }}>
                — Sumit Mishra, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#FF1493',
            textShadow: '3px 3px 0px rgba(255, 20, 147, 0.2)'
          }}>
            OUR VALUES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${value.color}`,
                  boxShadow: `0 0 15px ${value.color}40`
                }}
              >
                <div className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{
                    border: `2px solid ${value.color}`,
                    boxShadow: `0 0 15px ${value.color}60`
                  }}>
                    <value.icon size={32} style={{ color: value.color }} />
                  </div>
                  <h3 className="text-2xl font-black tracking-wider uppercase mb-4" style={{
                    color: value.color,
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    {value.title}
                  </h3>
                  <div className="w-12 h-0.5 mx-auto mb-4" style={{ background: value.color }}></div>
                  <p className="text-base font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px rgba(0, 255, 255, 0.2)'
          }}>
            MEET THE TEAM
          </h2>
          <p className="text-center text-lg font-light mb-12 max-w-2xl mx-auto" style={{ color: '#FFB6C1' }}>
            The passionate individuals behind Puppet.co.in's bold curation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const colors = ['#FF1493', '#00FFFF', '#FF6B9D'];
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={member.name}
                  className="group transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(26, 10, 46, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${color}`,
                    boxShadow: `0 0 15px ${color}40`
                  }}
                >
                  <div className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                        style={{
                          border: `3px solid ${color}`,
                          boxShadow: `0 0 20px ${color}60`
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-black tracking-wider uppercase mb-2" style={{
                      color: color,
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {member.name}
                    </h3>
                    <div className="text-sm font-medium mb-4" style={{ color: '#FFB6C1' }}>
                      {member.title}
                    </div>
                    <div className="w-12 h-0.5 mx-auto mb-4" style={{ background: color }}></div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#FF1493',
            textShadow: '3px 3px 0px rgba(255, 20, 147, 0.2)'
          }}>
            WHAT OUR CUSTOMERS SAY
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid #00FFFF',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
                }}
              >
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-current" style={{ color: '#FFD700' }} />
                    ))}
                  </div>
                  <p className="mb-4 leading-relaxed italic font-light" style={{ color: '#E0BBE4' }}>
                    "{testimonial.text}"
                  </p>
                  <div className="w-12 h-0.5 mb-3" style={{ background: '#00FFFF' }}></div>
                  <div>
                    <div className="font-black text-sm uppercase" style={{ 
                      color: '#00FFFF',
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {testimonial.author}
                    </div>
                    <div className="text-xs font-light" style={{ color: '#FFB6C1' }}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Styles We Curate */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase" style={{
            fontFamily: 'Impact, sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px rgba(0, 255, 255, 0.2)'
          }}>
            THE STYLES WE CURATE
          </h2>
          <p className="text-center text-lg font-light mb-12 max-w-2xl mx-auto" style={{ color: '#FFB6C1' }}>
            Provocative pieces with unapologetic presence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => {
              const colors = ['#FF1493', '#00FFFF', '#FF6B9D', '#FFD700'];
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="group transition-all duration-300 hover:scale-105">
                  <div className="overflow-hidden" style={{
                    background: 'rgba(26, 10, 46, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${color}`,
                    boxShadow: `0 0 15px ${color}40`
                  }}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                        background: `linear-gradient(180deg, transparent 0%, ${color}60 100%)`
                      }} />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-black mb-3 uppercase" style={{
                        color: color,
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        {style.title}
                      </h4>
                      <div className="w-12 h-0.5 mb-4" style={{ background: color }}></div>
                      <p className="text-sm font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                        {style.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-8">
              <div className="w-24 h-24 flex items-center justify-center" style={{
                border: '3px solid #FF1493',
                boxShadow: '0 0 30px rgba(255, 20, 147, 0.6)',
                background: 'rgba(255, 20, 147, 0.1)'
              }}>
                <Heart size={48} style={{ color: '#FF1493' }} fill="#FF1493" />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase" style={{
              fontFamily: 'Impact, sans-serif',
              color: '#00FFFF',
              textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.4)'
            }}>
              OUR PHILOSOPHY
            </h2>

            <div className="text-3xl md:text-4xl font-black mb-8 uppercase" style={{
              fontFamily: 'Impact, sans-serif',
              background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              BOLD ART FOR BOLD SPACES
            </div>
          </div>

          <div className="p-12" style={{
            background: 'rgba(26, 10, 46, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '3px solid #FF1493',
            boxShadow: '0 0 30px rgba(255, 20, 147, 0.5)'
          }}>
            <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 text-center" style={{ color: '#E0BBE4' }}>
              We believe your home should be as unique as you are. Every piece we curate challenges the ordinary, celebrates individuality, and transforms spaces into personal galleries.
            </p>
            
            <div className="w-24 h-1 mx-auto my-8" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
            
            <p className="text-lg leading-relaxed font-light text-center" style={{ color: '#FFB6C1' }}>
              From Miami-inspired aesthetics to provocative artistry, we're here to help you create environments that don't just look good — they make people stop, stare, and remember.
            </p>
            
            <div className="mt-8 text-center">
              <div className="inline-block px-8 py-3 font-black text-lg uppercase" style={{
                background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                border: '2px solid #FF1493',
                color: '#000000',
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
              }}>
                LIFE'S TOO SHORT FOR BORING DECOR
              </div>
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

export default About;
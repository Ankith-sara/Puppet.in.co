import React from 'react';
import { Heart, Award, Users, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every piece tells a unique story and celebrates bold self-expression",
      color: "pink"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Curated selection of premium materials and craftsmanship",
      color: "cyan"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a tribe of fearless individuals who embrace their unique style",
      color: "purple"
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

  const colorClasses = {
    pink: {
      border: "border-stone-700",
      text: "text-stone-700",
      hover: "hover:border-stone-800",
      bg: "bg-stone-700"
    },
    cyan: {
      border: "border-lime-800",
      text: "text-lime-800",
      hover: "hover:border-lime-900",
      bg: "bg-lime-800"
    },
    purple: {
      border: "border-emerald-700",
      text: "text-emerald-700",
      hover: "hover:border-emerald-800",
      bg: "bg-emerald-700"
    }
  };

  return (
    <div className="min-h-screen bg-stone-200 text-stone-900 pt-24 pb-12">
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(120 113 108) 1px, transparent 1px),
          linear-gradient(90deg, rgb(120 113 108) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-stone-800" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '3px 3px 0px rgb(168 162 158)',
            transform: 'skewY(-2deg)'
          }}>
            OUR STORY
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>

          <p className="text-2xl md:text-3xl text-stone-700 max-w-3xl mx-auto">
            Curating boldness for fearless spaces since 2025
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-full w-80 h-80 mx-auto border-2 border-stone-700">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
                  alt="Founder"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase text-stone-700" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                BORN FROM BOLD SPIRIT
              </h2>

              <div className="space-y-6 text-lg leading-loose">
                <p className="text-stone-700">
                  Puppet.co.in started in a small studio where art met audacity. Our founder noticed a gap in the market: beautiful homes filled with safe, boring art. She set out to change that.
                </p>

                <p className="text-stone-600">
                  We believe your space should be as fearless as you are. Every piece we curate is selected to spark conversation, challenge norms, and celebrate the beauty of being unapologetically yourself.
                </p>

                <p className="text-stone-700">
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
          <div className="p-12 bg-stone-100 border-2 border-stone-700">
            <blockquote className="text-center">
              <p className="text-3xl md:text-4xl font-black mb-6 leading-relaxed uppercase text-stone-800" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                "ART SHOULD MAKE YOU FEEL SOMETHING. YOUR HOME SHOULD TELL YOUR STORY. WE'RE HERE TO HELP YOU LIVE BOLDLY."
              </p>
              <footer className="text-lg text-stone-600">
                — Sumit Mishra, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase text-lime-800" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            OUR VALUES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => {
              const colors = colorClasses[value.color];
              return (
                <div
                  key={value.title}
                  className={`group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 ${colors.border}`}
                >
                  <div className="p-8 text-center h-full">
                    <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 ${colors.border}`}>
                      <value.icon size={32} className={colors.text} />
                    </div>
                    <h3 className={`text-2xl font-black tracking-wider uppercase mb-4 ${colors.text}`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {value.title}
                    </h3>
                    <div className={`w-12 h-0.5 mx-auto mb-4 ${colors.bg}`}></div>
                    <p className="text-base leading-relaxed text-stone-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase text-stone-800" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            MEET THE TEAM
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-stone-700">
            The passionate individuals behind Puppet.co.in's bold curation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const colorKeys = ['pink', 'cyan', 'purple'];
              const colorKey = colorKeys[index % colorKeys.length];
              const colors = colorClasses[colorKey];
              
              return (
                <div
                  key={member.name}
                  className={`group transition-all duration-300 hover:scale-105 bg-stone-100 border-2 ${colors.border}`}
                >
                  <div className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full rounded-full object-cover border-2 ${colors.border}`}
                      />
                    </div>
                    <h3 className={`text-xl font-black tracking-wider uppercase mb-2 ${colors.text}`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {member.name}
                    </h3>
                    <div className="text-sm font-medium mb-4 text-stone-600">
                      {member.title}
                    </div>
                    <div className={`w-12 h-0.5 mx-auto mb-4 ${colors.bg}`}></div>
                    <p className="text-sm leading-relaxed text-stone-600">
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
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 uppercase text-stone-700" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            WHAT OUR CUSTOMERS SAY
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:scale-105 bg-stone-100 border-2 border-emerald-700"
              >
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-600 text-amber-600" />
                    ))}
                  </div>
                  <p className="mb-4 leading-relaxed italic text-stone-700">
                    "{testimonial.text}"
                  </p>
                  <div className="w-12 h-0.5 mb-3 bg-emerald-700"></div>
                  <div>
                    <div className="font-black text-sm uppercase text-emerald-700" style={{ 
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-stone-600">
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
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6 uppercase text-lime-800" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            THE STYLES WE CURATE
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-stone-700">
            Provocative pieces with unapologetic presence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map((style, index) => {
              const colorKeys = ['pink', 'cyan', 'purple', 'pink'];
              const colorKey = colorKeys[index % colorKeys.length];
              const colors = colorClasses[colorKey];
              
              return (
                <div key={index} className="group transition-all duration-300 hover:scale-105">
                  <div className={`overflow-hidden bg-stone-100 border-2 ${colors.border}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={style.image}
                        alt={style.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className={`text-xl font-black mb-3 uppercase ${colors.text}`} style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        {style.title}
                      </h4>
                      <div className={`w-12 h-0.5 mb-4 ${colors.bg}`}></div>
                      <p className="text-sm leading-relaxed text-stone-600">
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
              <div className="w-24 h-24 flex items-center justify-center border-2 border-stone-700 bg-stone-100">
                <Heart size={48} className="text-stone-700" fill="rgb(68 64 60)" />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase text-stone-800" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '3px 3px 0px rgb(168 162 158)'
            }}>
              OUR PHILOSOPHY
            </h2>

            <div className="text-3xl md:text-4xl font-black mb-8 uppercase bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700 bg-clip-text text-transparent" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              BOLD ART FOR BOLD SPACES
            </div>
          </div>

          <div className="p-12 bg-stone-100 border-2 border-stone-700">
            <p className="text-xl md:text-2xl leading-relaxed mb-6 text-center text-stone-700">
              We believe your home should be as unique as you are. Every piece we curate challenges the ordinary, celebrates individuality, and transforms spaces into personal galleries.
            </p>
            
            <div className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
            
            <p className="text-lg leading-relaxed text-center text-stone-600">
              From Miami-inspired aesthetics to provocative artistry, we're here to help you create environments that don't just look good — they make people stop, stare, and remember.
            </p>
            
            <div className="mt-8 text-center">
              <div className="inline-block px-8 py-3 font-black text-lg uppercase bg-gradient-to-r from-stone-700 to-lime-900 border-2 border-stone-700 text-white" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                LIFE'S TOO SHORT FOR BORING DECOR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-stone-400"></div>
    </div>
  );
};

export default About;
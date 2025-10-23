import React, { useState, useEffect } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import OurPolicy from '../components/OurPolicy';
import Title from '../components/Title';
import { ChevronDown, ChevronUp, Sparkles, Palette, Heart, Award, Users, Star } from "lucide-react";

const About = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  useEffect(() => {
    document.title = 'About Puppet.co.in | Bold Art for Bold Spaces';
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every piece tells a unique story and celebrates bold self-expression"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Curated selection of premium materials and craftsmanship"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a tribe of fearless individuals who embrace their unique style"
    }
  ];

  const milestones = [
    { year: "2020", event: "Puppet.co.in founded with a vision for bold living" },
    { year: "2021", event: "Opened first curated showroom" },
    { year: "2022", event: "Expanded to 50+ artist collaborations" },
    { year: "2023", event: "Launched nationwide shipping across India" },
    { year: "2024", event: "10,000+ bold spaces transformed" }
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F61]/20 via-[#B4E7FF]/20 to-[#FFD4B2]/20" />
        <img
          src={assets.about_img}
          alt="Puppet.co.in showroom"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-[#FF6F61] mb-4" style={{
            textShadow: '0 0 20px rgba(255, 111, 97, 0.5)',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}>
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto">
            Curating boldness for fearless spaces since 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-[#FFD700]/10 rounded-full blur-2xl" />
              <img
                src={assets.mallesh_img}
                alt="Founder"
                className="relative rounded-full w-80 h-80 object-cover mx-auto border-4 border-[#FFD700] shadow-2xl hover:shadow-[0_20px_40px_rgba(255,111,97,0.3)] transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-wide text-[#FF6F61]">
                Born from Bold Spirit
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Puppet.co.in started in a small studio where art met audacity. 
                Our founder noticed a gap in the market: beautiful homes 
                filled with safe, boring art. She set out to change that.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We believe your space should be as fearless as you are. Every piece we curate 
                is selected to spark conversation, challenge norms, and celebrate the beauty 
                of being unapologetically yourself.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Today, we work with over 50 boundary-pushing artists from around the world, 
                bringing provocative, premium pieces to bold individuals who refuse to blend in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 bg-gradient-to-r from-[#FF6F61]/10 via-[#B4E7FF]/10 to-[#FFD4B2]/10">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-bold tracking-wide text-[#FF6F61] mb-6 leading-relaxed">
              "Art should make you feel something. Your home should tell your story. 
              We're here to help you live boldly."
            </p>
            <footer className="text-lg text-gray-600">— Sofia Rodriguez, Founder</footer>
          </blockquote>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-wide text-center text-[#FF6F61] mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF6F61] to-[#FFD4B2] flex items-center justify-center shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-[#FF6F61] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-wide text-center text-[#FF6F61] mb-4">
            Meet the Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The passionate individuals behind Puppet.co.in's bold curation
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-md">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#FF6F61] via-[#B4E7FF] to-[#FFD4B2] rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-wide text-[#FF6F61] mb-1">
                    {member.name}
                  </h3>
                  <div className="text-sm text-[#FF6F61] mb-3 font-medium">{member.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#FF6F61]/5 via-[#B4E7FF]/5 to-[#FFD4B2]/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-wide text-center text-[#FF6F61] mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-[#FF6F61]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Styles We Curate */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-wide text-center text-[#FF6F61] mb-4">
            The Styles We Curate
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Provocative pieces with unapologetic presence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
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
            ].map((style, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FF6F61]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-[#FF6F61]">{style.title}</h4>
                    <div className="w-12 h-1 bg-gradient-to-r from-[#FF6F61] to-[#FFD4B2] mb-4 rounded-full" />
                    <p className="text-gray-600 leading-relaxed text-sm">{style.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={assets.about_img}
            alt="Puppet Philosophy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6F61]/70 via-[#FFD4B2]/60 to-[#B4E7FF]/70" style={{ mixBlendMode: 'multiply' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
        </div>

        <div className="relative px-4 sm:px-8 md:px-10 lg:px-20 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-8" style={{
              animation: 'float 6s ease-in-out infinite'
            }}>
              <div className="w-24 h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <Heart size={48} className="text-[#FF6F61]" fill="#FF6F61" />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              Our Philosophy:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB5E8] to-white">
                Bold Art for Bold Spaces
              </span>
            </h2>

            <div className="bg-white/95 backdrop-blur-lg p-12 md:p-16 rounded-3xl shadow-2xl max-w-4xl mx-auto border-4 border-white">
              <p className="text-gray-800 text-xl md:text-2xl leading-relaxed font-light mb-6">
                We believe your home should be as unique as you are. Every piece we curate challenges the ordinary, celebrates individuality, and transforms spaces into personal galleries.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF6F61] via-[#FFD4B2] to-[#FFD700] mx-auto rounded-full my-8" />
              <p className="text-gray-700 text-lg leading-relaxed">
                From Miami-inspired aesthetics to provocative artistry, we're here to help you create environments that don't just look good — they make people stop, stare, and remember.
              </p>
              <div className="mt-8 inline-block bg-gradient-to-r from-[#FF6F61] to-[#FFD700] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg">
                Life's Too Short for Boring Decor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-white/70 backdrop-blur-sm">
        <OurPolicy />
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-[#FFD4B2]/30 via-[#FFB5E8]/20 to-[#B4E7FF]/30">
        <NewsletterBox />
      </section>

      {/* Animation Styles */}
      <style>{`
        @keyframes glow {
          from { text-shadow: 0 0 10px rgba(255, 111, 97, 0.3); }
          to { text-shadow: 0 0 20px rgba(255, 111, 97, 0.8); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
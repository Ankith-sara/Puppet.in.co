import React from 'react';
import { Heart, Palette, Sparkles } from 'lucide-react';
import Title from './Title';

const OurPolicy = () => {
  const principles = [
    {
      icon: <Heart className="w-10 h-10 text-white transition-all duration-500" />,
      title: 'CURATED WITH PASSION',
      gradient: 'from-[#FF6F61] to-[#FFD4B2]'
    },
    {
      icon: <Palette className="w-10 h-10 text-white transition-all duration-500" />,
      title: 'BOLD BY DESIGN',
      gradient: 'from-[#FFB5E8] to-[#B4E7FF]'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-white transition-all duration-500" />,
      title: 'UNIQUE IN SPIRIT',
      gradient: 'from-[#FFD700] to-[#FFD4B2]'
    },
  ];

  return (
    <div className="py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-4">
            <span className="text-[#FF6F61]">WHY CHOOSE</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#FFD700]">PUPPET?</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF6F61] via-[#FFD4B2] to-[#FFD700] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-700 text-xl mt-6 font-light">
            Because we don't do ordinary—we do <em className="text-[#FF6F61] font-medium">extraordinary</em>.
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4 text-lg">
            At Puppet, luxury isn't just in the object. It's in the boldness it inspires, 
            the conversations it sparks, and the statement it makes.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative flex flex-col items-center p-8 h-full">
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${principle.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {principle.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold tracking-widest text-center text-gray-800 group-hover:text-white transition-colors duration-500">
                  {principle.title}
                </h3>
                
                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${principle.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#FF6F61]/10 via-[#FFD4B2]/10 to-[#B4E7FF]/10 rounded-2xl p-8">
          <p className="text-xl text-gray-800 font-light">
            We curate decor that <em className="text-[#FF6F61] font-medium">inspires, transforms,</em> and becomes a part of your story.
          </p>
          <p className="text-xl text-gray-800 mt-4 font-light">
            Because at Puppet, we don't just sell products—we create experiences that make spaces unforgettable.
          </p>
          
          <div className="mt-6 inline-block bg-gradient-to-r from-[#FF6F61] to-[#FFD700] text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg">
            BOLD • UNIQUE • UNFORGETTABLE
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
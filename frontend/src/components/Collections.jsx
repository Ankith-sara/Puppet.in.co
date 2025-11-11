import React from 'react';
import { Heart, Award, Users, Sparkles, ArrowRight } from 'lucide-react';

const Collections = () => {
  const categories = [
    {
      name: 'Vintage Wall Art',
      icon: Sparkles,
      imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500',
      description: 'Bold collages and retro advertisements',
      color: '#FF1493'
    },
    {
      name: 'Sculptural Lighting',
      icon: Award,
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      description: 'Provocative lamps and gallery-worthy art',
      color: '#00FFFF'
    },
    {
      name: 'Statement Furniture',
      icon: Heart,
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      description: 'Upcycled cabinets and unique pieces',
      color: '#FF6B9D'
    },
    {
      name: 'Mosaic & Mirror Art',
      icon: Users,
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500',
      description: 'Reflective displays with light',
      color: '#FFD700'
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-10 lg:px-20" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Background Grid Effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Gradient Orbs */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-4 uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '4px 4px 0px #FF1493, 8px 8px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)'
          }}>
            THE STYLES WE
          </h2>
          <h2 className="text-5xl md:text-7xl font-black uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#FF1493',
            textShadow: '4px 4px 0px #00FFFF, 8px 8px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)'
          }}>
            CURATE
          </h2>
          
          <div className="w-48 h-1 mx-auto my-8" style={{
            background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
            boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
          }}></div>

          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            Provocative pieces with unapologetic presence
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div 
                key={category.name} 
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${category.color}`,
                  boxShadow: `0 0 15px ${category.color}40`
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                    style={{
                      background: `linear-gradient(180deg, transparent 0%, ${category.color}60 100%)`
                    }}
                  />
                  
                  {/* Icon Overlay */}
                  <div 
                    className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.8)',
                      border: `2px solid ${category.color}`,
                      boxShadow: `0 0 15px ${category.color}80`
                    }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-black uppercase flex-1" style={{
                      color: category.color,
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {category.name}
                    </h3>
                    <div 
                      className="w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        border: `2px solid ${category.color}`,
                        boxShadow: `0 0 10px ${category.color}60`
                      }}
                    >
                      <ArrowRight size={16} style={{ color: category.color }} />
                    </div>
                  </div>
                  
                  <div className="w-12 h-0.5 mb-4" style={{ background: category.color }}></div>
                  
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#E0BBE4' }}>
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <button 
              className="px-8 py-4 font-black text-lg uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                border: '2px solid #FF1493',
                color: '#000000',
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
                cursor: 'pointer'
              }}
            >
              EXPLORE ALL STYLES
            </button>
          </div>
        </div>
      </div>

      {/* Scanlines effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{
        borderTop: '2px solid #FF1493',
        boxShadow: '0 -2px 15px rgba(255, 20, 147, 0.5)'
      }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>
      </div>
    </section>
  );
};

export default Collections;
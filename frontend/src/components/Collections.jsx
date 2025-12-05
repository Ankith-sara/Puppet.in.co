import React from 'react';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const handleCategoryClick = (subCategory) => {
    console.log('Category clicked:', subCategory);
  };

  const categories = [
    {
      name: 'Vintage Wall Art',
      imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500',
      description: 'Bold collages and retro advertisements',
      color: 'pink'
    },
    {
      name: 'Sculptural Lighting',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      description: 'Provocative lamps and gallery-worthy art',
      color: 'cyan'
    },
    {
      name: 'Statement Furniture',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      description: 'Upcycled cabinets and unique pieces',
      color: 'pink'
    },
    {
      name: 'Mosaic & Mirror Art',
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500',
      description: 'Reflective displays with light',
      color: 'cyan'
    },
  ];

  const colorMap = {
    pink: { border: 'border-pink-600', text: 'text-pink-600', bg: 'bg-pink-600', hover: 'group-hover:border-pink-600' },
    cyan: { border: 'border-cyan-600', text: 'text-cyan-600', bg: 'bg-cyan-600', hover: 'group-hover:border-cyan-600' },
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 text-cyan-400" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            transform: 'skewY(-2deg)'
          }}>
            EXPLORE THE<br />COLLECTIONS
          </h2>
          <div className="w-48 h-1 mx-auto bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const colors = colorMap[category.color];
            
            return (
              <div key={category.name} className="flex flex-col h-full">
                <a 
                  href={`/shop/${category.name}`} 
                  onClick={() => handleCategoryClick(category.name)} 
                  className="group h-full"
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden aspect-[3/4] mb-4 border-2 ${colors.border} bg-purple-950 transition-all duration-300 group-hover:scale-105`}>
                    <img 
                      src={category.imageUrl} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                    {/* Category number */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-6xl font-black ${colors.text} opacity-60`} style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2">
                    <h3 className={`text-xl md:text-2xl font-black uppercase mb-2 ${colors.text} transition-all duration-300`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                    
                    {/* View More Link */}
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className={`text-xs uppercase tracking-wider font-black ${colors.text}`} style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        VIEW MORE
                      </span>
                      <div className={`w-8 h-0.5 ${colors.bg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="/shop/collection"
            className="inline-block px-12 py-5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 border-2 border-pink-600"
            style={{
              fontFamily: 'Impact, sans-serif',
              boxShadow: '0 0 20px rgba(219, 39, 119, 0.6)'
            }}
          >
            VIEW ALL COLLECTIONS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Collections;
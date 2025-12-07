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
      color: 'lime'
    },
    {
      name: 'Sculptural Lighting',
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      description: 'Provocative lamps and gallery-worthy art',
      color: 'emerald'
    },
    {
      name: 'Statement Furniture',
      imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
      description: 'Upcycled cabinets and unique pieces',
      color: 'lime'
    },
    {
      name: 'Mosaic & Mirror Art',
      imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500',
      description: 'Reflective displays with light',
      color: 'emerald'
    },
  ];

  const colorMap = {
    lime: { border: 'border-lime-800', text: 'text-lime-800', bg: 'bg-lime-800', hover: 'group-hover:border-lime-800' },
    emerald: { border: 'border-emerald-700', text: 'text-emerald-700', bg: 'bg-emerald-700', hover: 'group-hover:border-emerald-700' },
  };

  return (
    <section className="bg-stone-200 py-16 px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Retro grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(120 113 108) 1px, transparent 1px),
          linear-gradient(90deg, rgb(120 113 108) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-6 text-stone-800 tracking-wider" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '3px 3px 0px rgb(168 162 158)'
          }}>
            EXPLORE THE<br />COLLECTIONS
          </h2>
          <div className="w-48 h-1 mx-auto bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
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
                  <div className={`relative overflow-hidden aspect-[3/4] mb-4 border-4 ${colors.border} bg-stone-100 transition-all duration-300 group-hover:scale-105 shadow-xl group-hover:shadow-2xl`}>
                    <img 
                      src={category.imageUrl} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                    {/* Category number */}
                    <div className="absolute bottom-4 left-4">
                      <span className={`text-6xl font-black ${colors.text} opacity-70`} style={{
                        fontFamily: 'Impact, sans-serif',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                      }}>
                        0{index + 1}
                      </span>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Text Content */}
                  <div className="px-2">
                    <h3 className={`text-xl md:text-2xl font-black uppercase mb-2 ${colors.text} transition-all duration-300`} style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      {category.name}
                    </h3>
                    <p className="text-sm text-stone-600 font-medium">{category.description}</p>
                    
                    {/* View More Link */}
                    <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className={`text-xs uppercase tracking-wider font-black ${colors.text}`} style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        VIEW MORE
                      </span>
                      <ArrowRight size={16} className={colors.text} />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-10 h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
      </div>
    </section>
  );
};

export default Collections;
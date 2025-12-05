import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Eye } from 'lucide-react';

const RecentlyViewed = () => {
  const { getRecentlyViewed } = useContext(ShopContext);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const viewed = getRecentlyViewed();
    setRecentlyViewed(viewed);
  }, [getRecentlyViewed]);

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="mt-10 relative">
      {/* Container with border and background */}
      <div className="p-8 relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgb(219 39 119) 1px, transparent 1px),
            linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>

        {/* Section Header */}
        <div className="text-center mb-8 relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-black border-2 border-cyan-600 flex items-center justify-center">
              <Eye size={32} className="text-cyan-400" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            color: 'rgb(34 211 238)' // cyan-400
          }}>
            RECENTLY VIEWED
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-4"></div>

          {/* Subtitle */}
          <p className="text-gray-400 font-medium uppercase tracking-wider text-sm" style={{fontFamily: 'Impact, sans-serif'}}>
            {recentlyViewed.length} PRODUCT{recentlyViewed.length !== 1 ? 'S' : ''} YOU CHECKED OUT
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 relative z-10">
          {recentlyViewed.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.images}
              company={item.company}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
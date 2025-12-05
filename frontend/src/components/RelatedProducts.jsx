import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { Sparkles, Zap } from 'lucide-react';

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0 && category && subCategory) {
      let filteredProducts = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .filter((item) => item._id !== currentProductId);
      setRelated(filteredProducts.slice(0, 5));
    }
  }, [products, category, subCategory, currentProductId]);

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
            <div className="w-16 h-16 bg-black border-2 border-pink-600 flex items-center justify-center relative">
              <Sparkles size={32} className="text-pink-600" />
              <div className="absolute inset-0 bg-pink-600 blur-xl opacity-30"></div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-wider" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            color: 'rgb(34 211 238)' // cyan-400
          }}>
            RELATED PRODUCTS
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-4"></div>

          {/* Subtitle */}
          <p className="text-gray-400 font-medium uppercase tracking-wider text-sm" style={{fontFamily: 'Impact, sans-serif'}}>
            {related.length > 0 
              ? `${related.length} PRODUCT${related.length !== 1 ? 'S' : ''} YOU MIGHT LIKE` 
              : 'DISCOVER MORE ITEMS'}
          </p>
        </div>

        {/* Products Grid or Empty State */}
        <div className="relative z-10">
          {related.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-black border-2 border-cyan-600">
              <div className="w-20 h-20 border-2 border-pink-600 bg-purple-950 flex items-center justify-center mb-6">
                <Zap size={40} className="text-pink-600" />
              </div>
              <p className="text-gray-400 font-black uppercase tracking-wider text-lg" style={{fontFamily: 'Impact, sans-serif'}}>
                NO RELATED PRODUCTS FOUND
              </p>
              <p className="text-gray-500 font-medium uppercase tracking-wide text-sm mt-2" style={{fontFamily: 'Impact, sans-serif'}}>
                CHECK OUT OUR OTHER COLLECTIONS
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
              {related.map((item) => (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
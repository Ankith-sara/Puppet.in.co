import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Heart, Zap } from 'lucide-react';

const ProductItem = ({ id, image, name, price, company }) => {
  const { currency, toggleWishlist, isInWishlist, navigate, token } = useContext(ShopContext);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);

  const handleWishlistToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!token) {
      navigate('/login');
      return;
    }

    setIsWishlistLoading(true);
    try {
      await toggleWishlist(id);
    } finally {
      setIsWishlistLoading(false);
    }
  };

  const isWishlisted = isInWishlist(id);
  const showCompanyName = company && company.toLowerCase() === 'anemone vinkel';

  return (
    <Link
      className="group cursor-pointer block"
      to={`/product/${id}`}
    >
      <div className="relative bg-purple-950 border-2 border-pink-600 overflow-hidden transition-all duration-300 hover:border-cyan-600 hover:shadow-2xl hover:shadow-pink-600/50">
        <div className="relative">
          <div className="relative overflow-hidden bg-black">
            <div className="relative h-90 overflow-hidden">
              <img
                className="w-full h-full object-cover filter transition-all duration-700 group-hover:scale-110"
                src={image[0]}
                alt={name}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

              {/* Grid Overlay on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{
                backgroundImage: `
                  linear-gradient(rgb(219 39 119) 1px, transparent 1px),
                  linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>

              {image[1] && (
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                  src={image[1]}
                  alt={`${name} alternate view`}
                />
              )}

              {/* Wishlist Button */}
              <button
                onClick={handleWishlistToggle}
                disabled={isWishlistLoading}
                className={`absolute top-3 right-3 p-2.5 shadow-lg transition-all duration-300 z-20 border-2 ${
                  isWishlisted
                    ? 'bg-pink-600 text-white border-pink-600 opacity-100 transform translate-x-0'
                    : 'bg-black/80 hover:bg-pink-600 text-cyan-400 hover:text-white border-cyan-600 hover:border-pink-600 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                } ${isWishlistLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart
                  size={18}
                  className={`${isWishlisted ? 'fill-current' : ''} transition-all duration-200`}
                />
              </button>

              {/* View Badge - Appears on Hover */}
              <div className="absolute bottom-3 left-3 right-3 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-black/90 border-2 border-cyan-600 px-4 py-2 flex items-center justify-center gap-2">
                  <Zap size={16} className="text-cyan-400" />
                  <span className="text-cyan-400 font-black uppercase tracking-wider text-sm" style={{fontFamily: 'Impact, sans-serif'}}>
                    VIEW PRODUCT
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4 bg-black border-t-2 border-pink-600">
            {showCompanyName && (
              <p className="text-xs uppercase tracking-widest text-pink-600 font-black mb-2" style={{fontFamily: 'Impact, sans-serif'}}>
                {company}
              </p>
            )}

            <h3 className="text-sm font-black text-cyan-400 mb-3 tracking-wide leading-relaxed group-hover:text-pink-600 transition-colors duration-300 line-clamp-2 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
              {name}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-black text-purple-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                  {currency}
                </span>
                <p className="text-2xl text-white font-black tracking-wide" style={{fontFamily: 'Impact, sans-serif'}}>
                  {price}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Accent Bar */}
          <div className="h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
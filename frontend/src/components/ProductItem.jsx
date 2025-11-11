import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const ProductItem = ({ id, image, name, price }) => {
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

  return (
    <Link
      className="group cursor-pointer block"
      to={`/product/${id}`}
    >
      <div className="relative">
        <div className="relative overflow-hidden transition-all duration-300" style={{
          border: '2px solid rgba(255, 20, 147, 0.2)',
          boxShadow: '0 0 10px rgba(255, 20, 147, 0.2)'
        }}>
          <div className="relative h-90 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              src={image[0]}
              alt={name}
            />

            {/* Neon overlay gradient on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500" 
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(255, 20, 147, 0.3) 100%)'
              }}
            ></div>

            {image[1] && (
              <img
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                src={image[1]}
                alt={`${name} alternate view`}
              />
            )}

            {/* Neon border on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                border: '2px solid #00FFFF',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.5), inset 0 0 15px rgba(0, 255, 255, 0.1)'
              }}
            ></div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              disabled={isWishlistLoading}
              className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-300 ${
                isWishlisted
                  ? 'opacity-100 transform translate-x-0'
                  : 'transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                } ${isWishlistLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              style={{
                background: isWishlisted 
                  ? 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)' 
                  : 'rgba(26, 10, 46, 0.9)',
                border: `2px solid ${isWishlisted ? '#FF1493' : '#00FFFF'}`,
                boxShadow: isWishlisted 
                  ? '0 0 15px rgba(255, 20, 147, 0.6)' 
                  : '0 0 10px rgba(0, 255, 255, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
              title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              onMouseEnter={(e) => {
                if (!isWishlisted) {
                  e.currentTarget.style.borderColor = '#FF1493';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isWishlisted) {
                  e.currentTarget.style.borderColor = '#00FFFF';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
                }
              }}
            >
              <Heart
                size={16}
                style={{ color: isWishlisted ? '#000000' : '#00FFFF' }}
                className={`${isWishlisted ? 'fill-current' : ''} transition-all duration-200`}
              />
            </button>
          </div>
        </div>

        <div className="p-2 mt-3">
          <h3 
            className="text-sm font-light mb-2 tracking-wide leading-relaxed transition-colors duration-300 line-clamp-2"
            style={{ color: '#E0BBE4' }}
          >
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-xl tracking-wide font-black" style={{
              color: '#FF1493',
              fontFamily: 'Impact, sans-serif'
            }}>
              <span className="text-xs font-light mr-1" style={{ color: '#FFB6C1' }}>{currency}</span>
              {price}
            </p>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <span 
                className="text-xs font-black tracking-wider uppercase"
                style={{
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
                }}
              >
                VIEW
              </span>
              <ArrowRight size={12} style={{ color: '#00FFFF' }} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Helper function to get products by category/subcategory
  const getProductsByCategory = (products, categoryName, subcategories) => {
    return products.filter(item => {
      const itemCategory = item.category?.toLowerCase();
      const itemSubCategory = item.subCategory?.toLowerCase();

      return subcategories.some(sub =>
        itemCategory?.includes(sub.toLowerCase()) ||
        itemSubCategory?.includes(sub.toLowerCase())
      );
    });
  };

  // Helper function to select at least minCount products from each subcategory
  const selectBalancedProducts = (products, categories, minPerCategory = 2) => {
    const selectedProducts = [];
    const usedProductIds = new Set();

    categories.forEach(({ name, subcategories }) => {
      const categoryProducts = getProductsByCategory(products, name, subcategories);

      // Group by subcategory for more balanced selection
      const productsBySubcategory = {};
      subcategories.forEach(sub => {
        productsBySubcategory[sub] = categoryProducts.filter(item =>
          item.category?.toLowerCase().includes(sub.toLowerCase()) ||
          item.subCategory?.toLowerCase().includes(sub.toLowerCase())
        );
      });

      // Select at least minPerCategory from each subcategory if available
      Object.values(productsBySubcategory).forEach(subProducts => {
        const availableProducts = subProducts.filter(p => !usedProductIds.has(p._id));
        const toSelect = Math.min(minPerCategory, availableProducts.length);

        for (let i = 0; i < toSelect; i++) {
          selectedProducts.push(availableProducts[i]);
          usedProductIds.add(availableProducts[i]._id);
        }
      });
    });

    const remainingProducts = products.filter(p => !usedProductIds.has(p._id));
    const remainingSlots = Math.max(0, 10 - selectedProducts.length);

    for (let i = 0; i < Math.min(remainingSlots, remainingProducts.length); i++) {
      selectedProducts.push(remainingProducts[i]);
    }

    return selectedProducts.slice(0, 10);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      if (selectedCategory === 'All') {
        // Define all categories and their subcategories
        const allCategories = [
          {
            name: 'Women',
            subcategories: ['Kurtis', 'Kurta Sets', 'Dresses']
          },
          {
            name: 'Men',
            subcategories: ['Shirts', 'Sleeve Shirts', 'Trousers']
          },
          {
            name: 'Home',
            subcategories: ['Home', 'Wall Decor', 'Kitchenware']
          },
          {
            name: 'Accessories',
            subcategories: ['Bags', 'Pouches', 'Accessories']
          }
        ];

        const balancedProducts = selectBalancedProducts(products, allCategories, 2);
        setLatestProducts(balancedProducts);

      } else {
        const balancedProducts = selectBalancedProducts(products, [categoryConfig], 2);
        setLatestProducts(balancedProducts);
      }
    } else {
      setLatestProducts([]);
    }
  }, [products, selectedCategory]);

  return (
<section className="relative py-16 px-4 sm:px-6 md:px-10 lg:px-20" style={{
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-2" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              color: '#00FFFF',
              textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)'
            }}>
              LATEST COLLECTION
            </h2>
            <div className="w-32 h-1 mx-auto md:mx-0" style={{
              background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
              boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
            }}></div>
          </div>

          <NavLink 
            to="/shop/collection" 
            className="group flex items-center gap-2 px-6 py-3 font-black uppercase transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
              border: '2px solid #FF1493',
              color: '#000000',
              fontFamily: 'Impact, sans-serif',
              fontSize: '0.875rem',
              boxShadow: '0 0 15px rgba(255, 20, 147, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)';
              e.currentTarget.style.borderColor = '#00FFFF';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)';
              e.currentTarget.style.borderColor = '#FF1493';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 20, 147, 0.5)';
            }}
          >
            View All
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </NavLink>
        </div>

        {/* Products Grid */}
        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-6">
            {latestProducts.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden transition-all duration-300 hover:scale-105" style={{
                  border: '2px solid rgba(255, 20, 147, 0.2)',
                  boxShadow: '0 0 15px rgba(255, 20, 147, 0.2)'
                }}>
                  <ProductItem
                    id={item._id}
                    image={item.images}
                    name={item.name}
                    price={item.price}
                  />
                  {index < 2 && (
                    <div 
                      className="absolute top-3 right-3 px-3 py-1 font-black text-xs"
                      style={{
                        background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                        color: '#000000',
                        fontFamily: 'Impact, sans-serif',
                        boxShadow: '0 0 15px rgba(255, 20, 147, 0.6)',
                        border: '1px solid #FF1493'
                      }}
                    >
                      NEW
                    </div>
                  )}
                  
                  {/* Neon border on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: '2px solid #00FFFF',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.1)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 flex items-center justify-center mb-6" style={{
              border: '2px solid #FF1493',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
            }}>
              <Package size={32} style={{ color: '#FF1493' }} />
            </div>
            <p className="text-xl font-black uppercase mb-2" style={{
              color: '#00FFFF',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(0, 255, 255, 0.2)'
            }}>
              No products available
            </p>
            <p className="text-sm font-light" style={{ color: '#FFB6C1' }}>
              New arrivals coming soon
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default LatestCollection;
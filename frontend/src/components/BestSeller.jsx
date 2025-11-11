import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
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
  const selectBalancedBestsellers = (products, categories, minPerCategory = 1) => {
    // First filter only bestseller products
    const bestsellerProducts = products.filter(item => item.bestseller);

    if (bestsellerProducts.length === 0) {
      return [];
    }

    const selectedProducts = [];
    const usedProductIds = new Set();

    // First pass: ensure minimum products from each category
    categories.forEach(({ name, subcategories }) => {
      const categoryProducts = getProductsByCategory(bestsellerProducts, name, subcategories);

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

    // Second pass: fill remaining slots with any unused bestseller products
    const remainingProducts = bestsellerProducts.filter(p => !usedProductIds.has(p._id));
    const remainingSlots = Math.max(0, 10 - selectedProducts.length);

    for (let i = 0; i < Math.min(remainingSlots, remainingProducts.length); i++) {
      selectedProducts.push(remainingProducts[i]);
    }

    return selectedProducts.slice(0, 5);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      if (selectedCategory === 'All') {
        // Define all categories and their subcategories
        const allCategories = [
          {
            name: 'Women',
            subcategories: ['Kurtis', 'Kutra Sets', 'Tops', 'Dresses']
          },
          {
            name: 'Men',
            subcategories: ['Shirts', 'Sleeve Shirts', 'Trousers']
          }
        ];

        const balancedBestsellers = selectBalancedBestsellers(products, allCategories, 1);
        setBestSeller(balancedBestsellers);

      } else {
        // Handle specific category selection
        let categoryConfig = {};

        if (selectedCategory === 'Women') {
          categoryConfig = {
            name: 'Women',
            subcategories: ['Kurtis', 'Kurta Sets', 'Tops', 'Dresses']
          };
        } else if (selectedCategory === 'Men') {
          categoryConfig = {
            name: 'Men',
            subcategories: ['Shirts', 'Sleeve Shirts', 'Trousers']
          };
        }

        if (categoryConfig.name) {
          const balancedBestsellers = selectBalancedBestsellers(products, [categoryConfig], 1);
          setBestSeller(balancedBestsellers);
        } else {
          // Fallback to original logic
          const bestProduct = products.filter((item) => item.bestseller);
          setBestSeller(bestProduct.slice(0, 5));
        }
      }
    } else {
      setBestSeller([]);
    }
  }, [products, selectedCategory]);

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-10 lg:px-20" style={{
      background: 'linear-gradient(180deg, #1a0a2e 0%, #0a0015 50%, #0f051d 100%)'
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
              color: '#FF1493',
              textShadow: '3px 3px 0px #00FFFF, 6px 6px 0px rgba(0,0,0,0.4)',
              transform: 'skewY(-2deg)'
            }}>
              BEST SELLERS
            </h2>
            <div className="w-32 h-1 mx-auto md:mx-0" style={{
              background: 'linear-gradient(90deg, #00FFFF, #FF1493)',
              boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
            }}></div>
          </div>

          <Link
            to="/shop/collection"
            className="group flex items-center gap-2 px-6 py-3 font-black uppercase transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)',
              border: '2px solid #00FFFF',
              color: '#000000',
              fontFamily: 'Impact, sans-serif',
              fontSize: '0.875rem',
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)';
              e.currentTarget.style.borderColor = '#FF1493';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 20, 147, 0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)';
              e.currentTarget.style.borderColor = '#00FFFF';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.5)';
            }}
          >
            View All
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {bestSeller.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-6">
            {bestSeller.map((item, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden transition-all duration-300 hover:scale-105" style={{
                  border: '2px solid rgba(0, 255, 255, 0.2)',
                  boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
                }}>
                  <ProductItem
                    id={item._id}
                    image={item.images}
                    name={item.name}
                    price={item.price}
                  />
                  {index < 1 && (
                    <div
                      className="absolute top-3 right-3 px-3 py-1 font-black text-xs flex items-center gap-1"
                      style={{
                        background: 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)',
                        color: '#000000',
                        fontFamily: 'Impact, sans-serif',
                        boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)',
                        border: '1px solid #00FFFF'
                      }}
                    >
                      <TrendingUp size={12} />
                      BESTSELLER
                    </div>
                  )}

                  {/* Neon border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      border: '2px solid #FF1493',
                      boxShadow: '0 0 20px rgba(255, 20, 147, 0.6), inset 0 0 20px rgba(255, 20, 147, 0.1)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 flex items-center justify-center mb-6" style={{
              border: '2px solid #00FFFF',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
            }}>
              <TrendingUp size={32} style={{ color: '#00FFFF' }} />
            </div>
            <p className="text-xl font-black uppercase mb-2" style={{
              color: '#FF1493',
              fontFamily: 'Impact, sans-serif',
              textShadow: '2px 2px 0px rgba(255, 20, 147, 0.2)'
            }}>
              No bestsellers available
            </p>
            <p className="text-sm font-light" style={{ color: '#E0BBE4' }}>
              Check back soon for our bestselling items
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
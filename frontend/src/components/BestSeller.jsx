import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { ChevronRight, Award } from 'lucide-react';

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
            name: 'Vintage Wall Art',
            subcategories: ['Bold Collages', 'Retro Posters', 'Wall Art']
          },
          {
            name: 'Sculptural Lighting',
            subcategories: ['Provocative Lamps', 'Gallery Art Lights']
          }
        ];

        const balancedBestsellers = selectBalancedBestsellers(products, allCategories, 1);
        setBestSeller(balancedBestsellers);
        
      } else {
        // Handle specific category selection
        let categoryConfig = {};
        
        if (selectedCategory === 'Women') {
          categoryConfig = {
            name: 'Vintage Wall Art',
            subcategories: ['Bold Collages', 'Retro Posters', 'Wall Art']
          };
        } else if (selectedCategory === 'Men') {
          categoryConfig = {
            name: 'Sculptural Lighting',
            subcategories: ['Provocative Lamps', 'Gallery Art Lights']
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
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-pink-600 mb-4" style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              textShadow: '2px 2px 0px rgb(0 255 255)',
              transform: 'skewY(-2deg)'
            }}>
              BEST<br className="md:hidden" /> SELLERS
            </h2>
            <div className="w-48 h-1 mx-auto md:mx-0 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>
          
          <a 
            href="/shop/collection" 
            className="group flex items-center gap-2 px-8 py-4 bg-purple-950 border-2 border-cyan-600 text-cyan-600 font-black text-sm uppercase tracking-widest hover:bg-cyan-600 hover:text-black transition-all duration-300"
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            VIEW ALL
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {bestSeller.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-6">
            {bestSeller.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden">
                  <ProductItem 
                    id={item._id} 
                    image={item.images} 
                    name={item.name} 
                    price={item.price}
                    company={item.company}
                  />
                  {index < 1 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-xs px-4 py-2 font-black uppercase z-10 border border-cyan-600 flex items-center gap-1" style={{
                      fontFamily: 'Impact, sans-serif',
                      boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)'
                    }}>
                      <Award size={14} />
                      BESTSELLER
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 border-2 border-cyan-600 bg-purple-950 flex items-center justify-center mb-6">
              <Award size={48} className="text-cyan-600" />
            </div>
            <h3 className="text-3xl font-black uppercase text-pink-600 mb-3" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              NO BESTSELLERS AVAILABLE
            </h3>
            <p className="text-gray-400 text-lg">Check back soon for our bestselling items</p>
            <div className="w-32 h-1 mt-4 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
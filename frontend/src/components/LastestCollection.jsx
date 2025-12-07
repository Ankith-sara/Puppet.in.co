import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import { ChevronRight, Package } from 'lucide-react';

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
            name: 'Vintage Wall Art',
            subcategories: ['Wall Art', 'Retro Posters', 'Bold Collages']
          },
          {
            name: 'Sculptural Lighting',
            subcategories: ['Provocative Lamps', 'Gallery Art Lights']
          },
          {
            name: 'statment Furniture',
            subcategories: ['Upcycled Cabinets', 'Unique Pieces', 'Design Tables', 'Custom Shelving']
          },
          {
            name: 'Mosaic & Mirror Art',
            subcategories: ['Reflective Displays', 'Light Art', 'Mosaic Pieces']
          }
        ];

        const balancedProducts = selectBalancedProducts(products, allCategories, 2);
        setLatestProducts(balancedProducts);

      } else {
        const categoryConfig = {
          name: selectedCategory,
          subcategories: []
        };
        if (categoryConfig.name) {
          const balancedProducts = selectBalancedProducts(products, [categoryConfig], 2);
          setLatestProducts(balancedProducts);
        } else {
          setLatestProducts(products.slice(0, 10));
        }
      }
    } else {
      setLatestProducts([]);
    }
  }, [products, selectedCategory]);

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
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-stone-800 mb-4 tracking-wider" style={{
              fontFamily: 'Impact, sans-serif',
              textShadow: '3px 3px 0px rgb(168 162 158)'
            }}>
              LATEST<br className="md:hidden" /> COLLECTION
            </h2>
            <div className="w-48 h-1 mx-auto md:mx-0 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
          </div>
          
          <a 
            href="/shop/collection" 
            className="group flex items-center gap-2 px-8 py-4 bg-stone-100 border-4 border-lime-800 text-lime-800 font-black text-sm uppercase tracking-widest hover:bg-lime-800 hover:text-stone-900 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            VIEW ALL
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {latestProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-6">
            {latestProducts.map((item, index) => (
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
                    <div className="absolute top-3 right-3 bg-lime-800 text-stone-900 text-xs px-4 py-2 font-black uppercase z-10 border-2 border-lime-800 shadow-lg" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      NEW
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-stone-100 border-4 border-stone-700 shadow-2xl">
            <div className="w-24 h-24 border-2 border-lime-800 bg-stone-50 flex items-center justify-center mb-6">
              <Package size={48} className="text-lime-800" />
            </div>
            <h3 className="text-3xl font-black uppercase text-stone-800 mb-3 tracking-wider" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              NO PRODUCTS AVAILABLE
            </h3>
            <p className="text-stone-600 text-lg font-medium">New bold arrivals coming soon</p>
            <div className="w-32 h-1 mt-4 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
          </div>
        )}

        {/* Bottom decorative line */}
        {latestProducts.length > 0 && (
          <div className="mt-16 h-2 bg-gradient-to-r from-stone-700 via-lime-800 to-emerald-700"></div>
        )}
      </div>
    </section>
  );
}

export default LatestCollection;
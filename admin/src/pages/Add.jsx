import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { Upload, Package, Tag, Star, Image as ImageIcon, AlertCircle, Trash2, IndianRupee, Zap } from 'lucide-react';

const ImageUpload = ({ id, image, setImage, onRemove, index }) => (
  <div className="relative group">
    <label
      htmlFor={id}
      className="w-28 h-28 bg-black border-2 border-cyan-600 hover:border-pink-600 flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-cyan-600/50"
    >
      {image ? (
        <>
          <img src={URL.createObjectURL(image)} alt={`Upload ${id}`} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200 flex items-center justify-center">
            <ImageIcon className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" size={20} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-cyan-400">
          <Upload size={20} className="mb-1" />
          <span className="text-xs font-black uppercase" style={{fontFamily: 'Impact, sans-serif'}}>ADD</span>
        </div>
      )}
    </label>
    {image && (
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="absolute -top-2 -right-2 bg-pink-600 hover:bg-pink-700 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg border-2 border-pink-400"
      >
        <Trash2 size={12} />
      </button>
    )}
    <input
      type="file"
      id={id}
      hidden
      onChange={(e) => setImage(e.target.files[0])}
      accept="image/*"
    />
  </div>
);

const Add = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null, null, null]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Women');
  const [subCategory, setSubCategory] = useState('');
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  const categoryData = {
    "Vintage Wall Art": {
      subCategories: ["", "Wall Art", "Retro Posters", "Bold Collages"]
    },
    "Sculptural Lighting": {
      subCategories: ["", "Provocative Lamps", "Gallery Art Lights"]
    },
    "Statement Furniture": {
      subCategories: ["", "Upcycled Cabinets", "Unique Chairs", "Designer Tables", "Custom Shelving"]
    },
    "Mosaic & Mirror Art": {
      subCategories: ["", "Reflective Displays", "Light Art", "Mosaic Pieces"]
    }
  };

  const currentCategoryData = categoryData[category] || { subCategories: []};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price || !subCategory) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const hasImages = images.some(img => img !== null);
    if (!hasImages) {
      toast.error("Please upload at least one product image.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);

      images.forEach((image, index) => {
        if (image) formData.append(`image${index + 1}`, image);
      });

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
      });

      if (response.data.success) {
        toast.success(`Success: ${response.data.message}`);
        resetForm();
      } else {
        toast.error(`Error: ${response.data.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error("Error while submitting the product:", error);
      if (error.response) {
        if (error.response.status === 401) {
          toast.error('Session expired. Please login again.');
          window.location.href = '/login';
        } else {
          toast.error(`Server Error: ${error.response.data?.message || 'Unable to process your request.'}`);
        }
      } else if (error.request) {
        toast.error('Network Error: Could not connect to the server. Please check your internet connection.');
      } else {
        toast.error(`Unexpected Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setCategory('Women');
    setSubCategory('');
    setBestseller(false);
    setImages([null, null, null, null, null, null]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.map((img, i) => i === index ? null : img));
  };

  const uploadedImagesCount = images.filter(img => img !== null).length;

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-20 py-10 relative overflow-hidden">
      {/* Grid overlay background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
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
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-wider" style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '3px 3px 0px rgb(219 39 119)',
            color: 'rgb(34 211 238)'
          }}>
            ADD NEW <span className="text-pink-600">PRODUCT</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
            Fill in the details to add a new item
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Images */}
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-600"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-600"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-600"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-600"></div>

            <div className="bg-black text-white p-6 border-b-2 border-pink-600">
              <div className="flex items-center gap-3">
                <ImageIcon size={24} className="text-cyan-400" />
                <h2 className="text-xl font-black uppercase tracking-wider text-cyan-400" style={{fontFamily: 'Impact, sans-serif'}}>
                  Product Images ({uploadedImagesCount}/6)
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                {images.map((image, index) => (
                  <ImageUpload
                    key={index}
                    id={`image${index + 1}`}
                    image={image}
                    setImage={(img) => setImages(prev => prev.map((val, i) => (i === index ? img : val)))}
                    onRemove={removeImage}
                    index={index}
                  />
                ))}
              </div>

              {uploadedImagesCount === 0 && (
                <div className="bg-pink-950 border-2 border-pink-600 p-4">
                  <div className="flex items-center gap-2 text-pink-400">
                    <AlertCircle size={18} />
                    <span className="text-sm font-black uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                      Upload at least one image
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>

          {/* Product Information */}
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-600"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-600"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-600"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-600"></div>

            <div className="bg-black text-white p-6 border-b-2 border-pink-600">
              <div className="flex items-center gap-3">
                <Package size={24} className="text-cyan-400" />
                <h2 className="text-xl font-black uppercase tracking-wider text-cyan-400" style={{fontFamily: 'Impact, sans-serif'}}>
                  Product Information
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-black text-pink-600 mb-2 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                  Product Name *
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-white focus:outline-none focus:border-pink-600 transition-colors font-medium"
                  type="text"
                  placeholder="Enter product name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-black text-purple-600 mb-2 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                  Product Description *
                </label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-white focus:outline-none focus:border-pink-600 transition-colors resize-none font-medium"
                  rows="4"
                  placeholder="Describe your product"
                  required
                />
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>

          {/* Category & Pricing */}
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-600"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-600"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-600"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-600"></div>

            <div className="bg-black text-white p-6 border-b-2 border-pink-600">
              <div className="flex items-center gap-3">
                <Tag size={24} className="text-cyan-400" />
                <h2 className="text-xl font-black uppercase tracking-wider text-cyan-400" style={{fontFamily: 'Impact, sans-serif'}}>
                  Category & Pricing
                </h2>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-black text-pink-600 mb-2 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                    Category *
                  </label>
                  <select
                    onChange={(e) => { setCategory(e.target.value); setSubCategory("") }}
                    value={category}
                    className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-white focus:outline-none focus:border-pink-600 transition-colors font-black uppercase"
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    {Object.keys(categoryData).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-purple-600 mb-2 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                    Sub-Category *
                  </label>
                  <select
                    onChange={(e) => setSubCategory(e.target.value)}
                    value={subCategory}
                    className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-white focus:outline-none focus:border-pink-600 transition-colors font-black uppercase"
                    style={{fontFamily: 'Impact, sans-serif'}}
                    required
                  >
                    {currentCategoryData.subCategories.map((subCat, index) => (
                      <option key={index} value={subCat}>{subCat || "Select Sub-Category"}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-cyan-600 mb-2 uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                    Price ({currency}) *
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={18} />
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      className="w-full pl-10 pr-4 py-3 border-2 border-cyan-600 bg-black text-white focus:outline-none focus:border-pink-600 transition-colors font-black"
                      style={{fontFamily: 'Impact, sans-serif'}}
                      type="number"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>

          {/* Bestseller */}
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 p-4 bg-black border-2 border-yellow-600">
                <input
                  type="checkbox"
                  id="bestseller"
                  checked={bestseller}
                  onChange={() => setBestseller(prev => !prev)}
                  className="w-6 h-6 text-yellow-600 border-2 border-yellow-600 focus:ring-yellow-500 bg-black"
                />
                <label htmlFor="bestseller" className="cursor-pointer flex items-center gap-2 text-yellow-400 font-black uppercase tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
                  <Star className="text-yellow-500" size={20} fill="currentColor" />
                  Mark as Bestseller
                </label>
              </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>

          {/* Submit Buttons */}
          <div className="bg-purple-950 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border-2 border-cyan-600 text-cyan-400 font-black uppercase tracking-wider hover:bg-cyan-600 hover:text-white transition-all duration-200"
                  style={{fontFamily: 'Impact, sans-serif'}}
                  disabled={loading}
                >
                  Reset Form
                </button>
                <button
                  className="px-8 py-3 bg-pink-600 text-white font-black uppercase tracking-wider transition-all duration-200 hover:bg-pink-700 border-2 border-pink-600 hover:border-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[180px]"
                  style={{fontFamily: 'Impact, sans-serif'}}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ADDING...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Add Product
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
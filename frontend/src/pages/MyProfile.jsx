import React, { useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import {
  ChevronRight, Heart, Clock, User, ShoppingBag, Settings, LogOut, Edit2, Trash2,
  MapPinHouse, X, Camera, Mail, Calendar, Plus, ArrowRight, AlertCircle, Zap
} from "lucide-react";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [editProfile, setEditProfile] = useState({ name: "", email: "", image: "" });
  const [addressModal, setAddressModal] = useState({ open: false, address: {}, index: -1 });
  const [loading, setLoading] = useState(false);

  // Custom modal states
  const [logoutModal, setLogoutModal] = useState(false);
  const [deleteAddressModal, setDeleteAddressModal] = useState({ open: false, index: -1 });
  const [errorModal, setErrorModal] = useState({ open: false, message: "" });

  const { backendUrl, setToken, navigate } = useContext(ShopContext);

  // Fetch user details
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    let userId;
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch (err) {
      navigate("/login");
      return;
    }
    axios
      .get(backendUrl + `/api/user/profile/${userId}`, { headers: { token } })
      .then((res) => {
        if (res.data.success) {
          setUserData(res.data.user);
          setEditProfile({
            name: res.data.user.name,
            email: res.data.user.email,
            image: res.data.user.image || "",
          });
        } else {
          navigate("/login");
        }
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  // Fetch recently viewed products
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(storedProducts);
  }, []);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
  };

  // --- Profile Image Upload ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setEditProfile((prev) => ({
      ...prev,
      imageFile: file,
      image: URL.createObjectURL(file),
    }));
  };

  // --- Edit Profile Submit ---
  const handleEditProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("name", editProfile.name);
      formData.append("email", editProfile.email);
      if (editProfile.imageFile) {
        formData.append("image", editProfile.imageFile);
      }

      const res = await axios.put(
        `${backendUrl}/api/user/profile/${userData._id}`,
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        setUserData(res.data.user);
        setEditProfile({
          name: res.data.user.name,
          email: res.data.user.email,
          image: res.data.user.image || "",
        });
        setActiveSection(null);
      } else {
        setErrorModal({ open: true, message: res.data.message || "Failed to update profile." });
      }
    } catch (err) {
      console.error("Edit profile failed:", err);
      setErrorModal({ open: true, message: "Failed to update profile." });
    } finally {
      setLoading(false);
    }
  };

  // --- Address Management ---
  const saveAddress = async (addressObj, index = -1) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/address/${userData._id}`,
        { addressObj, index },
        { headers: { token } }
      );
      if (res.data.success) {
        setUserData((prev) => ({ ...prev, addresses: res.data.addresses }));
        setAddressModal({ open: false, address: {}, index: -1 });
      } else {
        setErrorModal({ open: true, message: res.data.message || "Failed to save address." });
      }
    } catch (err) {
      setErrorModal({ open: true, message: "Failed to save address." });
    }
    setLoading(false);
  };

  const confirmDeleteAddress = async () => {
    const index = deleteAddressModal.index;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/address/${userData._id}`,
        { data: { index }, headers: { token } }
      );
      if (res.data.success) {
        setUserData((prev) => ({ ...prev, addresses: res.data.addresses }));
        setDeleteAddressModal({ open: false, index: -1 });
      } else {
        setErrorModal({ open: true, message: res.data.message || "Failed to delete address." });
      }
    } catch (err) {
      setErrorModal({ open: true, message: "Failed to delete address." });
    }
    setLoading(false);
  };

  const menuItems = [
    { icon: <MapPinHouse size={20} />, text: "Delivery Address", description: "Manage your delivery locations", color: 'pink' },
    { icon: <ShoppingBag size={20} />, text: "Order History", link: "/orders", description: "View your past orders", color: 'cyan' },
    { icon: <Heart size={20} />, text: "Wishlist", link: "/wishlist", description: "Items you've saved for later", color: 'purple' },
    { icon: <Settings size={20} />, text: "Account Settings", description: "Notifications, password, privacy", color: 'pink' },
  ];

  if (!userData) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 pb-12">
        {/* Grid overlay */}
        <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgb(219 39 119) 1px, transparent 1px),
            linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(800px) rotateX(75deg) scale(2)',
          transformOrigin: 'center bottom'
        }}></div>

        <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
                fontFamily: 'Impact, "Arial Black", sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)',
                transform: 'skewY(-2deg)'
              }}>
                MY PROFILE
              </h1>
            </div>
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-600 border-t-cyan-400 mx-auto mb-6"></div>
                <span className="text-xl font-black uppercase text-gray-400" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>LOADING PROFILE...</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Logout Confirmation Modal */}
      {logoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm animate-fadeIn">
          <div className="bg-purple-950 border-2 border-pink-600 shadow-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40 flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{
                fontFamily: 'Impact, sans-serif'
              }}>Confirm Logout</h3>
              <button
                onClick={() => setLogoutModal(false)}
                className="text-cyan-400 hover:text-pink-400 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-400 leading-relaxed text-lg">
                Are you sure you want to log out of your account?
              </p>
            </div>

            <div className="p-6 border-t-2 border-pink-900 bg-black bg-opacity-40 flex gap-3">
              <button
                onClick={() => setLogoutModal(false)}
                className="flex-1 py-3 border-2 border-cyan-600 bg-black text-cyan-400 font-black uppercase hover:bg-cyan-600 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Cancel
              </button>
              <button
                onClick={() => { setLogoutModal(false); logout(); }}
                className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white border-2 border-pink-600 font-black uppercase hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Address Confirmation Modal */}
      {deleteAddressModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm animate-fadeIn">
          <div className="bg-purple-950 border-2 border-pink-600 shadow-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40 flex items-center justify-between">
              <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{
                fontFamily: 'Impact, sans-serif'
              }}>Delete Address</h3>
              <button
                onClick={() => setDeleteAddressModal({ open: false, index: -1 })}
                className="text-cyan-400 hover:text-pink-400 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-400 leading-relaxed text-lg">
                Are you sure you want to delete this delivery address? This action cannot be undone.
              </p>
            </div>

            <div className="p-6 border-t-2 border-pink-900 bg-black bg-opacity-40 flex gap-3">
              <button
                onClick={() => setDeleteAddressModal({ open: false, index: -1 })}
                className="flex-1 py-3 border-2 border-cyan-600 bg-black text-cyan-400 font-black uppercase hover:bg-cyan-600 hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteAddress}
                disabled={loading}
                className="flex-1 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white border-2 border-pink-600 font-black uppercase hover:scale-105 transition-all duration-300 disabled:opacity-50"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm animate-fadeIn">
          <div className="bg-purple-950 border-2 border-pink-600 shadow-2xl max-w-md w-full animate-slideUp">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle size={24} className="text-pink-600" />
                <h3 className="text-2xl font-black uppercase tracking-wider text-pink-600" style={{
                  fontFamily: 'Impact, sans-serif'
                }}>Error</h3>
              </div>
              <button
                onClick={() => setErrorModal({ open: false, message: "" })}
                className="text-cyan-400 hover:text-pink-400 transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-400 leading-relaxed text-lg">
                {errorModal.message}
              </p>
            </div>

            <div className="p-6 border-t-2 border-pink-900 bg-black bg-opacity-40">
              <button
                onClick={() => setErrorModal({ open: false, message: "" })}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 font-black uppercase hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <section className="relative py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase text-cyan-400" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '2px 2px 0px rgb(219 39 119)',
            transform: 'skewY(-2deg)'
          }}>
            MY PROFILE
          </h1>
          
          <div className="w-48 h-1 mx-auto mb-8 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>

          <p className="text-2xl md:text-3xl text-gray-400 font-black uppercase" style={{
            fontFamily: 'Impact, sans-serif'
          }}>
            YOUR DIGITAL IDENTITY
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="relative px-4 sm:px-8 md:px-10 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid xl:grid-cols-[1fr_2fr] gap-8">
            {/* Profile Information Card */}
            <div className="space-y-6">
              <div className="bg-purple-950 border-2 border-pink-600 shadow-lg hover:scale-[1.02] transition-all duration-300">
                <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-pink-400" />
                    <span className="text-xs font-black text-cyan-400 uppercase tracking-wider" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      Profile Information
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative group">
                      <div className="w-32 h-32 overflow-hidden border-4 border-cyan-600 rounded-full">
                        <img
                          src={userData.image}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        className="absolute inset-0 flex items-center justify-center opacity-0 rounded-full group-hover:opacity-100 bg-pink-600 bg-opacity-80 transition-all duration-200 border-4 border-cyan-600"
                        onClick={() => setActiveSection("Edit Profile")}
                        title="Edit Photo"
                      >
                        <Camera className="text-white" size={24} />
                      </button>
                    </div>

                    <h3 className="text-3xl font-black text-cyan-400 mt-6 mb-3 uppercase tracking-wide" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>{userData.name}</h3>

                    <div className="flex items-center gap-2 mb-4 px-4 py-2 bg-black border border-green-600">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm text-green-400 font-bold uppercase tracking-wider">Active Member</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="border-2 border-cyan-600 p-4 bg-black bg-opacity-40">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail size={16} className="text-pink-400" />
                        <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Email</span>
                      </div>
                      <p className="text-sm text-cyan-400 font-bold">{userData.email}</p>
                    </div>

                    <div className="border-2 border-purple-600 p-4 bg-black bg-opacity-40">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-pink-400" />
                        <span className="text-xs font-black text-gray-500 uppercase tracking-wider">Member Since</span>
                      </div>
                      <p className="text-sm text-purple-400 font-bold">
                        {new Date(userData.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <button 
                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 font-black uppercase tracking-wider hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveSection("Edit Profile")}
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    <Edit2 size={16} className="inline mr-2" />
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Sign Out Card */}
              <div className="bg-purple-950 border-2 border-pink-600 shadow-lg hover:scale-[1.02] transition-all duration-300">
                <button
                  className="w-full flex items-center justify-center gap-3 p-6 text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 font-black uppercase tracking-wider"
                  onClick={() => setLogoutModal(true)}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <LogOut size={20} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Account Management */}
            <div className="space-y-8">
              <div className="bg-purple-950 border-2 border-cyan-600 shadow-lg">
                <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
                  <div className="flex items-center gap-2">
                    <Settings size={20} className="text-cyan-400" />
                    <span className="text-xl font-black text-pink-600 uppercase tracking-wider" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>
                      Account Management
                    </span>
                  </div>
                </div>

                <div className="divide-y-2 divide-pink-900">
                  {menuItems.map((item, index) => {
                    const colorMap = {
                      pink: 'border-pink-600 text-pink-400 hover:bg-pink-600',
                      cyan: 'border-cyan-600 text-cyan-400 hover:bg-cyan-600',
                      purple: 'border-purple-600 text-purple-400 hover:bg-purple-600'
                    };
                    const colors = colorMap[item.color];
                    
                    const content = (
                      <div
                        key={index}
                        className="flex items-center justify-between p-6 hover:bg-black hover:bg-opacity-40 transition-all duration-300 cursor-pointer group"
                        onClick={() => !item.link && setActiveSection(item.text)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 flex items-center justify-center border-2 ${colors} bg-black transition-all duration-300 group-hover:scale-110`}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-black text-lg text-white uppercase tracking-wide mb-1 group-hover:text-cyan-400 transition-colors" style={{
                              fontFamily: 'Impact, sans-serif'
                            }}>{item.text}</p>
                            <p className="text-sm text-gray-400 font-bold">{item.description}</p>
                          </div>
                        </div>
                        <ChevronRight size={24} className="text-pink-400 group-hover:translate-x-2 transition-transform" />
                      </div>
                    );

                    return item.link ? (
                      <Link to={item.link} key={index}>
                        {content}
                      </Link>
                    ) : (
                      content
                    );
                  })}
                </div>
              </div>

              {/* Recently Viewed Section */}
              <div className="bg-purple-950 border-2 border-pink-600 shadow-lg">
                <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={20} className="text-pink-400" />
                      <span className="text-xl font-black text-cyan-400 uppercase tracking-wider" style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>
                        Recently Viewed
                      </span>
                    </div>
                  </div>
                </div>

                {recentlyViewed.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 px-6">
                    <div className="w-24 h-24 border-2 border-cyan-600 flex items-center justify-center mb-8">
                      <Clock size={48} className="text-cyan-400" />
                    </div>
                    <div className="text-center max-w-md mb-8">
                      <h3 className="text-3xl font-black mb-4 uppercase text-pink-600" style={{
                        fontFamily: 'Impact, sans-serif'
                      }}>No Recent Activity</h3>
                      <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        Start browsing our collection to see your recently viewed items
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/collection')}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 font-black uppercase hover:scale-105 transition-all duration-300"
                      style={{ fontFamily: 'Impact, sans-serif' }}
                    >
                      <Zap size={18} />
                      <span>DISCOVER PRODUCTS</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                      {recentlyViewed.slice(0, 8).map((item) => (
                        <div key={item._id} className="border-2 border-cyan-600 hover:border-pink-600 transition-all duration-300 hover:scale-105">
                          <ProductItem
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.images}
                          />
                        </div>
                      ))}
                    </div>
                    {recentlyViewed.length > 8 && (
                      <div className="text-center mt-6">
                        <button className="px-8 py-3 border-2 border-cyan-600 text-cyan-400 bg-black font-black uppercase hover:bg-cyan-600 hover:text-white transition-all duration-300" style={{
                          fontFamily: 'Impact, sans-serif'
                        }}>
                          View More
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Profile Modal */}
      {activeSection === "Edit Profile" && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-purple-950 border-2 border-pink-600 w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40 flex items-center justify-between">
              <h2 className="text-2xl font-black uppercase tracking-wider text-cyan-400" style={{
                fontFamily: 'Impact, sans-serif'
              }}>Edit Profile</h2>
              <button
                onClick={() => setActiveSection(null)}
                className="text-cyan-400 hover:text-pink-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <form className="p-6 space-y-6" onSubmit={handleEditProfileSubmit}>
              {/* Profile Image */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-24 h-24 bg-black border-2 border-cyan-600 overflow-hidden rounded-full flex items-center justify-center">
                    {editProfile.image ? (
                      <img src={editProfile.image} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={32} className="text-gray-400" />
                    )}
                  </div>
                  <label className="absolute -bottom-2 -right-2 bg-pink-600 text-white p-2 cursor-pointer hover:bg-pink-700 transition-colors border-2 border-black rounded-full">
                    <Camera size={16} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-400 font-bold">Click camera to change photo</p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-pink-400 uppercase tracking-wider mb-2 font-black" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
                    value={editProfile.name}
                    onChange={e => setEditProfile({ ...editProfile, name: e.target.value })}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-pink-400 uppercase tracking-wider mb-2 font-black" style={{
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
                    value={editProfile.email}
                    onChange={e => setEditProfile({ ...editProfile, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 px-6 py-4 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-black uppercase tracking-wider"
                  disabled={loading}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  className="px-6 py-4 border-2 border-pink-600 bg-black text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300 font-black uppercase tracking-wider"
                  onClick={() => setActiveSection(null)}
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Address Management Modal */}
      {activeSection === "Delivery Address" && (
        <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-purple-950 border-2 border-pink-600 w-full max-w-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPinHouse size={24} className="text-pink-400" />
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-wider text-cyan-400" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>Delivery Addresses</h2>
                    <p className="text-gray-400 text-sm font-bold mt-1">Manage your delivery locations</p>
                  </div>
                </div>
                <button
                  onClick={() => setAddressModal({ open: true, address: {}, index: -1 })}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 px-6 py-3 font-black hover:scale-105 transition-all duration-300 uppercase"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  <Plus size={18} />
                  Add New
                </button>
              </div>
            </div>

            <div className="p-6">
              {(!userData.addresses || userData.addresses.length === 0) ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 border-2 border-cyan-600 flex items-center justify-center mx-auto mb-8">
                    <MapPinHouse size={48} className="text-cyan-400" />
                  </div>
                  <div className="text-center max-w-md mb-8 mx-auto">
                    <h3 className="text-3xl font-black text-pink-600 mb-4 uppercase" style={{
                      fontFamily: 'Impact, sans-serif'
                    }}>No Addresses Found</h3>
                    <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-pink-600 to-cyan-600"></div>
                    <p className="text-gray-400 leading-relaxed text-lg">Add your first delivery address to get started</p>
                  </div>
                  <button
                    onClick={() => setAddressModal({ open: true, address: {}, index: -1 })}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 font-black uppercase hover:scale-105 transition-all duration-300"
                    style={{ fontFamily: 'Impact, sans-serif' }}
                  >
                    Add Address
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {userData.addresses.map((addr, idx) => (
                    <div key={idx} className="border-2 border-cyan-600 p-6 hover:border-pink-600 hover:scale-[1.02] transition-all duration-300 bg-black bg-opacity-40">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="font-black text-xl text-cyan-400 mb-2 uppercase" style={{
                            fontFamily: 'Impact, sans-serif'
                          }}>
                            {addr.label || `Address ${idx + 1}`}
                          </div>
                          <div className="text-sm text-gray-400 font-bold leading-relaxed">
                            {addr.address}, {addr.city}, {addr.state} {addr.zip}, {addr.country}
                            {addr.phone && (
                              <><br />Phone: <span className="text-pink-400">{addr.phone}</span></>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-3 ml-4">
                          <button
                            onClick={() => setAddressModal({ open: true, address: addr, index: idx })}
                            className="p-3 text-cyan-400 hover:text-white border-2 border-cyan-600 hover:bg-cyan-600 transition-all duration-300"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => setDeleteAddressModal({ open: true, index: idx })}
                            className="p-3 text-pink-400 hover:text-white border-2 border-pink-600 hover:bg-pink-600 transition-all duration-300"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-end mt-8 pt-6 border-t-2 border-pink-900">
                <button
                  onClick={() => setActiveSection(null)}
                  className="px-8 py-3 border-2 border-cyan-600 bg-black text-cyan-400 font-black hover:bg-cyan-600 hover:text-white transition-all duration-300 uppercase"
                  style={{ fontFamily: 'Impact, sans-serif' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Address Form Modal */}
      {addressModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-purple-950 border-2 border-pink-600 w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="p-6 border-b-2 border-pink-900 bg-black bg-opacity-40">
              <h2 className="text-2xl font-black uppercase tracking-wider text-cyan-400" style={{
                fontFamily: 'Impact, sans-serif'
              }}>
                {addressModal.index >= 0 ? "Edit Address" : "Add New Address"}
              </h2>
            </div>
            <div className="p-6">
              <AddressForm
                initial={addressModal.address}
                onSave={(addr) => saveAddress(addr, addressModal.index)}
                onCancel={() => setAddressModal({ open: false, address: {}, index: -1 })}
                loading={loading}
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom border */}
      <div className="h-2 border-t-2 border-pink-900"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Address Form Component
function AddressForm({ initial, onSave, onCancel, loading }) {
  const [form, setForm] = useState({
    address: initial.address || "",
    city: initial.city || "",
    state: initial.state || "",
    zip: initial.zip || "",
    country: initial.country || "",
    label: initial.label || "",
    phone: initial.phone || "",
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSave(form);
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
          fontFamily: 'Impact, sans-serif'
        }}>Address Label (Optional)</label>
        <input
          className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
          value={form.label}
          onChange={e => setForm(f => ({ ...f, label: e.target.value }))}
          placeholder="e.g., Home, Office"
        />
      </div>

      <div>
        <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
          fontFamily: 'Impact, sans-serif'
        }}>Street Address</label>
        <input
          className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
          value={form.address}
          onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
          placeholder="Enter your street address"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
            fontFamily: 'Impact, sans-serif'
          }}>City</label>
          <input
            className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
            value={form.city}
            onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
            placeholder="City"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
            fontFamily: 'Impact, sans-serif'
          }}>State</label>
          <input
            className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
            value={form.state}
            onChange={e => setForm(f => ({ ...f, state: e.target.value }))}
            placeholder="State"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
            fontFamily: 'Impact, sans-serif'
          }}>ZIP Code</label>
          <input
            className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
            value={form.zip}
            onChange={e => setForm(f => ({ ...f, zip: e.target.value }))}
            placeholder="ZIP"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
            fontFamily: 'Impact, sans-serif'
          }}>Country</label>
          <input
            className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
            value={form.country}
            onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
            placeholder="Country"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-black text-pink-400 uppercase tracking-wider mb-2" style={{
          fontFamily: 'Impact, sans-serif'
        }}>Phone Number</label>
        <input
          type="tel"
          className="w-full px-4 py-3 border-2 border-cyan-600 bg-black text-cyan-400 focus:outline-none focus:border-pink-600 transition-colors font-bold"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          placeholder="Enter phone number"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-2 border-cyan-600 px-6 py-4 font-black hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
          disabled={loading}
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          {loading ? "Saving..." : "Save Address"}
        </button>
        <button
          type="button"
          className="px-6 py-4 border-2 border-pink-600 bg-black text-pink-400 font-black hover:bg-pink-600 hover:text-white transition-all duration-300 uppercase tracking-wider"
          onClick={onCancel}
          style={{ fontFamily: 'Impact, sans-serif' }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default MyProfile;
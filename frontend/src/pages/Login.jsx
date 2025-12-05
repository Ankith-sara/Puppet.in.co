import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Eye, EyeOff, Mail, User, Lock } from 'lucide-react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  // Form fields
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // OTP
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpTimer, setOtpTimer] = useState(0);
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(''));
  const otpRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otpDigits];
    updated[index] = value;
    setOtpDigits(updated);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }

    setOtp(updated.join(''));
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const handlePostLoginRedirect = () => {
    const returnUrl = sessionStorage.getItem('returnUrl');
    if (returnUrl) {
      sessionStorage.removeItem('returnUrl');
      navigate(returnUrl);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (token) {
      handlePostLoginRedirect();
    }
  }, [token, navigate]);

  useEffect(() => {
    document.title = 'Login | Puppet';
  }, []);

  const resetForm = () => {
    setName('');
    setPassword('');
    setEmail('');
    setErrors({});
    setOtpSent(false);
    setOtp('');
    setOtpError('');
    setOtpTimer(0);
    setOtpDigits(Array(6).fill(''));
  };

  const handleSendOtp = async () => {
    setOtpError('');
    setErrors({});

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setOtpLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/user/send-otp`, { 
        email, 
        name, 
        password 
      });
      if (res.data.success) {
        setOtpSent(true);
        setOtpTimer(60);
        toast.success('OTP sent to your email');
      } else {
        setOtpError(res.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setOtpError(err.response?.data?.message || 'Error sending OTP');
    }
    setOtpLoading(false);
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    setOtpError('');

    if (!otp) {
      setOtpError('Please enter the OTP');
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/api/user/verify-otp`, {
        name,
        email,
        password,
        otp,
      });

      if (res.data.success) {
        toast.success('Account created successfully!');
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
      } else {
        setOtpError(res.data.message || 'Invalid OTP');
      }
    } catch (err) {
      setOtpError(err.response?.data?.message || 'Error verifying OTP');
    }
    setIsLoading(false);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Enter a valid email';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${backendUrl}/api/user/login`, { 
        email, 
        password 
      });
      
      if (response.data.success) {
        toast.success(`Welcome back, ${response.data.name}!`);
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Image with overlay */}
        <div className="hidden lg:block lg:w-1/2 relative min-h-screen">
          {/* Retro grid overlay */}
          <div className="absolute inset-0 opacity-10 z-10" style={{
            backgroundImage: `
              linear-gradient(rgb(219 39 119) 1px, transparent 1px),
              linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: 'perspective(800px) rotateX(75deg) scale(2)',
            transformOrigin: 'center bottom'
          }}></div>
          
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="h-full flex items-center justify-center overflow-hidden">
            <img 
              src="https://okhai.org/cdn/shop/files/LD25330610_1_Hero_414x650.jpg?v=1745928986" 
              alt="Premium craftsmanship" 
              className="w-full h-full object-cover opacity-70" 
            />
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center p-10">
            <div className="bg-purple-950 backdrop-blur-sm p-12 border-2 border-pink-600 max-w-md" style={{
              boxShadow: '0 0 30px rgba(219, 39, 119, 0.4)'
            }}>
              <h2 className="text-3xl font-black tracking-wider mb-4 text-cyan-400 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>ELEVATE YOUR</h2>
              <h1 className="text-5xl font-black mb-6 text-pink-600 uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgba(0, 255, 255, 0.3)'
              }}>EXPERIENCE</h1>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mb-6"></div>
              <blockquote className="text-lg text-gray-300 leading-relaxed">
                "Join a community that believes fashion should honor heritage, empower artisans, and carry stories forward."
              </blockquote>
            </div>
          </div>
          
          <div className="absolute top-8 left-8 w-16 h-16 border-2 border-pink-600 z-30"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-cyan-600 z-30"></div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full lg:w-1/2 bg-black flex items-center relative">
          {/* Subtle grid on form side */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgb(219 39 119) 1px, transparent 1px),
              linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="w-full max-w-lg mx-auto p-8 lg:p-12 relative z-10">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-cyan-400 uppercase" style={{
                fontFamily: 'Impact, sans-serif',
                textShadow: '2px 2px 0px rgb(219 39 119)'
              }}>
                {currentState === 'Login' ? 'WELCOME BACK' : 'JOIN US'}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mb-6"></div>
              <p className="text-gray-400 text-lg leading-relaxed">
                {currentState === 'Login'
                  ? 'Sign in to access your bold collection and exclusive experiences'
                  : 'Create an account to begin your journey with provocative artistry'}
              </p>
            </div>

            {/* LOGIN FORM */}
            {currentState === 'Login' && (
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-black text-pink-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                      <Mail size={20} className="text-gray-600 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-14 pr-4 py-4 bg-purple-950 border-2 focus:outline-none transition-all duration-300 text-white ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-pink-600 focus:border-cyan-600'
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="password" className="block text-sm font-black text-pink-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                      <Lock size={20} className="text-gray-600 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-14 pr-14 py-4 bg-purple-950 border-2 focus:outline-none transition-all duration-300 text-white ${
                        errors.password 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-pink-600 focus:border-cyan-600'
                      }`}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-2">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-pink-600"
                    style={{
                      fontFamily: 'Impact, sans-serif',
                      boxShadow: '0 0 20px rgba(219, 39, 119, 0.6)'
                    }}
                  >
                    {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
                  </button>
                </div>
              </form>
            )}

            {/* SIGNUP FORM */}
            {currentState === 'Sign Up' && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-sm font-black text-pink-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                      <User size={20} className="text-gray-600 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full pl-14 pr-4 py-4 bg-purple-950 border-2 focus:outline-none transition-all duration-300 text-white ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-pink-600 focus:border-cyan-600'
                      }`}
                      placeholder="Enter your full name"
                      disabled={otpSent}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-sm font-black text-pink-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                      <Mail size={20} className="text-gray-600 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full pl-14 pr-4 py-4 bg-purple-950 border-2 focus:outline-none transition-all duration-300 text-white ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-pink-600 focus:border-cyan-600'
                      }`}
                      placeholder="Enter your email"
                      disabled={otpSent}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="password" className="block text-sm font-black text-pink-600 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                      <Lock size={20} className="text-gray-600 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full pl-14 pr-14 py-4 bg-purple-950 border-2 focus:outline-none transition-all duration-300 text-white ${
                        errors.password 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-pink-600 focus:border-cyan-600'
                      }`}
                      placeholder="Enter your password"
                      autoComplete="new-password"
                      disabled={otpSent}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-600 hover:text-cyan-400 transition-colors duration-300"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-2">{errors.password}</p>
                    )}
                  </div>
                </div>

                {!otpSent && (
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpLoading}
                      className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-pink-600"
                      style={{
                        fontFamily: 'Impact, sans-serif',
                        boxShadow: '0 0 20px rgba(219, 39, 119, 0.6)'
                      }}
                    >
                      {otpLoading ? 'SENDING...' : 'SEND CODE'}
                    </button>
                  </div>
                )}

                {otpSent && (
                  <form onSubmit={handleVerifyOtp} className="space-y-6 pt-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-black mb-2 text-cyan-400 uppercase" style={{fontFamily: 'Impact, sans-serif'}}>VERIFY EMAIL</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mx-auto mb-4"></div>
                      <p className="text-gray-400">Enter the 6-digit code sent to your email</p>
                    </div>
                    
                    <div className="flex gap-3 justify-center">
                      {Array(6)
                        .fill(0)
                        .map((_, i) => (
                          <input
                            key={i}
                            type="text"
                            inputMode="numeric"
                            maxLength="1"
                            ref={(el) => (otpRefs.current[i] = el)}
                            value={otpDigits[i] || ''}
                            onChange={(e) => handleOtpChange(i, e.target.value)}
                            onKeyDown={(e) => handleOtpKeyDown(i, e)}
                            className="w-12 h-12 text-center text-lg font-black border-2 border-pink-600 focus:border-cyan-600 focus:outline-none transition-all duration-300 bg-purple-950 text-white"
                          />
                        ))}
                    </div>
                    
                    {otpError && (
                      <p className="text-red-400 text-sm text-center">{otpError}</p>
                    )}
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-pink-600"
                      style={{
                        fontFamily: 'Impact, sans-serif',
                        boxShadow: '0 0 20px rgba(219, 39, 119, 0.6)'
                      }}
                    >
                      {isLoading ? 'VERIFYING...' : 'VERIFY & CREATE'}
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpLoading || otpTimer > 0}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {otpTimer > 0 ? `RESEND IN ${otpTimer}S` : 'RESEND CODE'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* Switch between Login and Sign Up */}
            <div className="pt-8 border-t border-pink-600/30 mt-8">
              <div className="text-center">
                {currentState === 'Login' ? (
                  <p className="text-gray-400">
                    New to Puppet?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentState('Sign Up');
                        resetForm();
                      }}
                      className="text-cyan-400 font-black hover:text-pink-600 transition-all duration-300 uppercase"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      CREATE ACCOUNT
                    </button>
                  </p>
                ) : (
                  <p className="text-gray-400">
                    Already a member?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentState('Login');
                        resetForm();
                      }}
                      className="text-cyan-400 font-black hover:text-pink-600 transition-all duration-300 uppercase"
                      style={{fontFamily: 'Impact, sans-serif'}}
                    >
                      SIGN IN
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
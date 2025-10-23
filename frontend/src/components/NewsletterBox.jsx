import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Mail } from 'lucide-react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
 
  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.success('Thank you for subscribing!');
    setEmail("");
  };
 
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-white/80 via-[#FFD4B2]/20 to-[#B4E7FF]/20 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
        <div className="p-8 md:p-12 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FF6F61] to-[#FFD4B2] rounded-full flex items-center justify-center shadow-lg" style={{
              animation: 'float 6s ease-in-out infinite'
            }}>
              <Mail size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-[#FF6F61] mb-4">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#FFD700]">PUPPET</span> CLUB
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#FF6F61] via-[#FFD4B2] to-[#FFD700] mx-auto mb-6 rounded-full"></div>
         
          <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-5xl mx-auto">
            Be the first to explore bold collections, exclusive curator stories, and provocative design initiatives. 
            Join a community that celebrates individuality, artistic expression, and fearless living.
          </p>
         
          <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-3 items-stretch">
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center">
                  <Mail size={20} className="text-gray-400 group-focus-within:text-[#FF6F61] transition-colors duration-300" />
                </div>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email address" 
                  className="w-full pl-14 pr-4 py-4 bg-white rounded-full border-2 border-[#FFD4B2] focus:border-[#FF6F61] focus:outline-none transition-all duration-300 text-lg shadow-md focus:shadow-lg"
                  required  
                />
              </div>
              <button 
                type="submit" 
                className="md:w-auto px-10 py-4 bg-gradient-to-r from-[#FF6F61] to-[#FFD4B2] text-white text-sm uppercase font-semibold tracking-widest rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
         
          <div className="space-y-3 text-center">
            <p className="text-gray-600">
              By subscribing, you agree to our{' '}
              <button className="text-[#FF6F61] font-medium hover:text-[#FFD700] transition-all duration-300 underline decoration-[#FF6F61] hover:decoration-[#FFD700]">
                Privacy Policy
              </button>
            </p>
            <p className="text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default NewsletterBox;
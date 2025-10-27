import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
 
  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert('Thank you for subscribing!');
    setEmail("");
  };
 
  return (
    <div className="max-w-7xl mx-auto relative">
      {/* Decorative neon glow */}
      <div className="absolute -inset-4 opacity-20 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 50%, #FF1493 0%, transparent 60%), radial-gradient(circle at 70% 50%, #00FFFF 0%, transparent 60%)'
      }}></div>

      <div className="relative overflow-hidden" style={{
        background: 'rgba(26, 10, 46, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '3px solid #FF1493',
        boxShadow: '0 0 30px rgba(255, 20, 147, 0.4), inset 0 0 30px rgba(255, 20, 147, 0.1)',
        borderRadius: '8px'
      }}>
        {/* Scanlines overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>

        <div className="relative p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 flex items-center justify-center" style={{
              background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
              borderRadius: '50%',
              border: '3px solid #00FFFF',
              boxShadow: '0 0 30px rgba(255, 20, 147, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)',
              animation: 'float 4s ease-in-out infinite, pulse 2s ease-in-out infinite'
            }}>
              <Mail size={36} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black tracking-wider mb-4 uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-1deg)'
          }}>
            JOIN THE <span style={{ 
              color: '#00FFFF',
              textShadow: '2px 2px 0px #FF1493, 4px 4px 0px rgba(0,0,0,0.4)'
            }}>PUPPET</span> CLUB
          </h1>
          
          <div className="w-32 h-1 mx-auto mb-6" style={{
            background: 'linear-gradient(90deg, #FF1493, #00FFFF, #FF6B9D)',
            boxShadow: '0 0 15px rgba(255, 20, 147, 0.6)'
          }}></div>
         
          <p className="text-lg leading-relaxed mb-10 max-w-5xl mx-auto font-light" style={{ color: '#E0BBE4' }}>
            Be the first to explore bold collections, exclusive curator stories, and provocative design initiatives. 
            Join a community that celebrates individuality, artistic expression, and fearless living.
          </p>
         
          {/* Input Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail size={20} style={{ color: '#FF6B9D' }} />
                </div>
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email address" 
                  className="w-full pl-14 pr-4 py-4 text-lg transition-all duration-300 font-light"
                  style={{
                    background: 'rgba(26, 10, 46, 0.7)',
                    border: '2px solid #FF1493',
                    color: '#E0BBE4',
                    outline: 'none',
                    boxShadow: '0 0 10px rgba(255, 20, 147, 0.3)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00FFFF';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#FF1493';
                    e.target.style.boxShadow = '0 0 10px rgba(255, 20, 147, 0.3)';
                  }}
                />
              </div>
              <button 
                onClick={onSubmitHandler}
                className="md:w-auto px-10 py-4 text-sm font-black tracking-widest uppercase transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)',
                  border: '2px solid #FF1493',
                  color: '#000000',
                  fontFamily: 'Impact, sans-serif',
                  boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #00FFFF 0%, #B4E7FF 100%)';
                  e.currentTarget.style.borderColor = '#00FFFF';
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF1493 0%, #FF6B9D 100%)';
                  e.currentTarget.style.borderColor = '#FF1493';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.5)';
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
         
          {/* Privacy Notice */}
          <div className="space-y-3 text-center">
            <p style={{ color: '#FFB6C1' }}>
              By subscribing, you agree to our{' '}
              <span 
                className="font-black uppercase transition-all duration-300 cursor-pointer"
                style={{
                  color: '#00FFFF',
                  fontFamily: 'Impact, sans-serif',
                  fontSize: '0.875rem',
                  textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FF1493';
                  e.target.style.textShadow = '0 0 10px rgba(255, 20, 147, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#00FFFF';
                  e.target.style.textShadow = '0 0 5px rgba(0, 255, 255, 0.5)';
                }}
              >
                Privacy Policy
              </span>
            </p>
            <p className="text-sm" style={{ color: '#E0BBE4' }}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Corner accent lights */}
        <div className="absolute top-0 left-0 w-20 h-20 opacity-30 pointer-events-none" style={{
          background: 'radial-gradient(circle at top left, #FF1493 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30 pointer-events-none" style={{
          background: 'radial-gradient(circle at bottom right, #00FFFF 0%, transparent 70%)'
        }}></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 20, 147, 0.6), 0 0 60px rgba(0, 255, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 20, 147, 0.8), 0 0 80px rgba(0, 255, 255, 0.5); }
        }
      `}</style>
    </div>
  );
};

export default NewsletterBox;
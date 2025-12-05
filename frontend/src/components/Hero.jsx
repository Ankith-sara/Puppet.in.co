import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0 bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        >
          <source src="https://www.shutterstock.com/shutterstock/videos/3766911865/preview/stock-footage-young-elegant-woman-wearing-sunglasses-lighting-and-smoking-cigarette-as-driving-vintage-car-at.webm" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Retro grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgb(219 39 119) 1px, transparent 1px),
            linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(800px) rotateX(75deg) scale(2)',
          transformOrigin: 'center bottom'
        }}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 sm:px-10 md:px-16 lg:px-24 z-10">
        <div className="max-w-5xl">
          {/* Small intro badge */}
          <div className="mb-6 opacity-0 intro-fade">
            <span className="inline-block px-6 py-2 text-xs sm:text-sm font-black tracking-widest uppercase border-2 border-pink-600 text-pink-600 bg-black/50 backdrop-blur-sm" style={{
              fontFamily: 'Impact, sans-serif'
            }}>
              EST. 2025
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none opacity-0 title-fade uppercase text-cyan-400"
            style={{
              textShadow: '3px 3px 0px rgb(219 39 119), 6px 6px 20px rgba(0,0,0,0.8)',
              fontFamily: 'Impact, "Arial Black", sans-serif',
              transform: 'skewY(-2deg)'
            }}>
            WHERE ART<br />MEETS AUDACITY
          </h1>

          {/* Gradient divider */}
          <div className="w-64 h-1 mb-6 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 opacity-0 desc-fade"></div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-3xl leading-relaxed text-gray-300 opacity-0 desc-fade">
            We curate provocative, premium pieces for individuals who refuse to blend in.
            Your space should be as fearless as you are.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 cta-fade">
            <Link to='/shop/collection'
              className="group px-5 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-base sm:text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 border-2 border-pink-600"
              style={{
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 20px rgba(219, 39, 119, 0.6)'
              }}>
              <span className="relative">
                EXPLORE COLLECTION
              </span>
            </Link>
            <Link to='/about'
              className="px-5 py-3 bg-black/50 backdrop-blur-sm border-2 border-cyan-600 text-cyan-400 font-black text-base sm:text-lg uppercase tracking-widest hover:bg-cyan-600 hover:text-black transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Impact, sans-serif'
              }}>
              OUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-6 sm:right-10 z-20 w-14 h-14 bg-purple-950 backdrop-blur-sm border-2 border-pink-600 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 opacity-0 sound-fade group"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Side Tagline */}
      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
        <p className="text-sm uppercase tracking-[0.4em] text-pink-600 font-black" style={{fontFamily: 'Impact, sans-serif'}}>
          BOLD ART • FEARLESS SPACES • SINCE 2025
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .intro-fade { animation: fadeInUp 1s ease-out forwards; animation-delay: 0.2s; }
        .title-fade { animation: fadeInUp 1.2s ease-out forwards; animation-delay: 0.5s; }
        .desc-fade { animation: fadeInUp 1.2s ease-out forwards; animation-delay: 0.8s; }
        .cta-fade { animation: fadeInUp 1.2s ease-out forwards; animation-delay: 1.1s; }
        .sound-fade { animation: fadeIn 1s ease-out forwards; animation-delay: 1.4s; }
        .scroll-fade { animation: fadeIn 1.2s ease-out forwards; animation-delay: 1.7s; }

        .scroll-fade > div { 
          animation: pulse 2.5s ease-in-out infinite; 
          animation-delay: 2.5s; 
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(10px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
import React, { useEffect, useRef, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
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
    <div className="relative w-full h-screen overflow-hidden m-0 p-0">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="https://www.shutterstock.com/shutterstock/videos/3766911865/preview/stock-footage-young-elegant-woman-wearing-sunglasses-lighting-and-smoking-cigarette-as-driving-vintage-car-at.webm" type="video/mp4" />
        </video>

        {/* Neon Gradient Overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10, 0, 21, 0.6) 0%, rgba(26, 10, 46, 0.8) 60%, rgba(15, 5, 29, 0.95) 100%)'
        }}></div>

        {/* Subtle Pink-Cyan Glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(255,20,147,0.25), transparent 70%), radial-gradient(circle at 80% 80%, rgba(0,255,255,0.25), transparent 70%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 sm:px-10 md:px-16 lg:px-24 z-10">
        <div className="max-w-4xl">
          {/* Small intro text */}
          <div className="mb-4 opacity-0 intro-fade">
            <span className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-pink-600/30 backdrop-blur-md text-cyan-300 border border-pink-400/50">
              Est. 2025
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight opacity-0 title-fade uppercase"
            style={{
              color: '#00FFFF',
              textShadow: '4px 4px 0px #FF1493, 8px 8px 20px rgba(0,0,0,0.6)',
              fontFamily: 'Impact, sans-serif',
              transform: 'skewY(-2deg)'
            }}>
            Where Art Meets<br />Audacity
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl leading-relaxed opacity-0 desc-fade"
            style={{ color: '#E0BBE4' }}>
            We curate provocative, premium pieces for individuals who refuse to blend in.
            Your space should be as fearless as you are.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 cta-fade">
            <Link to='/shop/collection'
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-black text-sm sm:text-base uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg"
              style={{
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 20px rgba(255, 20, 147, 0.6)'
              }}>
              Explore Collection
            </Link>
            <Link to='/about'
              className="px-8 py-4 bg-transparent border-2 border-cyan-300 text-cyan-300 font-black text-sm sm:text-base uppercase tracking-widest hover:bg-cyan-300 hover:text-black transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Impact, sans-serif',
                boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
              }}>
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Sound Toggle */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-6 sm:right-10 z-20 w-12 h-12 rounded-full bg-pink-600/40 backdrop-blur-sm border border-pink-400/50 flex items-center justify-center text-cyan-300 hover:bg-pink-500/60 transition-all duration-300 opacity-0 sound-fade"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-300 opacity-0 scroll-fade">
        <span className="text-xs uppercase tracking-widest font-light">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-pink-500 to-transparent"></div>
      </div>

      {/* Side Tagline */}
      <div className="hidden lg:block absolute right-6 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-400 opacity-80 font-light">
          Bold Art • Fearless Spaces • Since 2025
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .intro-fade { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.3s; }
        .title-fade { animation: fadeInUp 1s ease-out forwards; animation-delay: 0.6s; }
        .desc-fade { animation: fadeInUp 1s ease-out forwards; animation-delay: 0.9s; }
        .cta-fade { animation: fadeInUp 1s ease-out forwards; animation-delay: 1.2s; }
        .sound-fade { animation: fadeIn 1s ease-out forwards; animation-delay: 1.5s; }
        .scroll-fade { animation: fadeIn 1s ease-out forwards; animation-delay: 1.8s; }

        .scroll-fade div { animation: pulse 2s ease-in-out infinite; animation-delay: 2.5s; }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
};

export default Hero;

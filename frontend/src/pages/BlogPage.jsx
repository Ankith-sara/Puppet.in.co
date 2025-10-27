import React, { useEffect } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import NewsletterBox from '../components/NewsletterBox';

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: 'Fibre2Fashion Featuring Manorath Dhillon',
      excerpt: "Discover how Okhai's initiatives have become a beacon of hope for rural artisans and their traditions.",
      imageUrl: 'https://okhai.org/cdn/shop/articles/About_Okhai_2024_S.jpg?v=1727855203',
      link: 'https://okhai.org/blogs/news/fibre2fashion-featuring-manorath-dhillon-okhai-head-and-trustee',
    },
    {
      id: 2,
      title: 'The Art & The Artisans',
      excerpt: "Learn about Okhai's commitment to supporting artisans from rural areas by providing them with the skills and confidence they need.",
      imageUrl: 'https://okhai.org/cdn/shop/files/The_art_the_artisans.jpg?v=1712295959&width=1070',
      link: 'https://okhai.org/pages/about-us',
    },
  ];

  useEffect(() => {
    document.title = 'Puppet Blog | Puppet'
  })

  return (
    <div className="min-h-screen text-white mt-10" style={{ 
      background: 'linear-gradient(180deg, #0a0015 0%, #1a0a2e 50%, #0f051d 100%)'
    }}>
      {/* Retro grid background - subtle */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(#FF1493 1px, transparent 1px),
          linear-gradient(90deg, #FF1493 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }}></div>

      {/* Reduced neon glow effects */}
      <div className="fixed top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #FF1493 0%, transparent 70%)'
      }}></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(circle, #00FFFF 0%, transparent 70%)'
      }}></div>

      <div className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            color: '#00FFFF',
            textShadow: '3px 3px 0px #FF1493, 6px 6px 0px rgba(0,0,0,0.4)',
            transform: 'skewY(-2deg)',
            letterSpacing: '0.05em'
          }}>
            OUR BLOG
          </h1>
          <div className="h-1 w-32 mx-auto mb-6" style={{
            background: 'linear-gradient(90deg, #FF1493, #00FFFF)',
            boxShadow: '0 0 10px rgba(255, 20, 147, 0.5)'
          }}></div>
          <p className="text-xl font-light max-w-2xl mx-auto" style={{ color: '#E0BBE4' }}>
            Stories, insights, and inspiration from the world of bold design
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => {
            const colors = ['#FF1493', '#00FFFF', '#FF6B9D'];
            const color = colors[index % colors.length];
            
            return (
              <div 
                key={post.id} 
                className="overflow-hidden transition-all duration-300 hover:scale-105 group"
                style={{
                  background: 'rgba(26, 10, 46, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: `2px solid ${color}`,
                  boxShadow: `0 0 15px ${color}40`
                }}
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    background: `linear-gradient(180deg, transparent 0%, ${color}40 100%)`
                  }}></div>
                </div>

                <div className="p-6">
                  <h3 className="font-black text-lg mb-3 uppercase" style={{ 
                    color: color,
                    fontFamily: 'Impact, sans-serif'
                  }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: '#E0BBE4' }}>
                    {post.excerpt}
                  </p>
                  <a 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 font-black uppercase transition-all duration-300 group/btn"
                    style={{
                      background: `${color}20`,
                      border: `2px solid ${color}`,
                      color: color,
                      fontFamily: 'Impact, sans-serif',
                      fontSize: '0.875rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = color;
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${color}20`;
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    READ MORE
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-6">
            <div className="w-16 h-16 flex items-center justify-center" style={{
              border: '2px solid #FF1493',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
            }}>
              <AlertCircle size={32} style={{ color: '#FF1493' }} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black mb-2 uppercase" style={{ 
                color: '#00FFFF',
                fontFamily: 'Impact, sans-serif'
              }}>
                No Blog Posts Found
              </h3>
              <p className="max-w-md" style={{ color: '#E0BBE4' }}>
                Check back later for new content
              </p>
            </div>
          </div>
        )}

        {/* Newsletter CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <NewsletterBox />
        </div>
      </div>

      {/* Scanlines effect at bottom */}
      <div className="h-2 relative mt-16" style={{
        borderTop: '2px solid #FF1493',
        boxShadow: '0 -2px 15px rgba(255, 20, 147, 0.5)'
      }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #FF1493 2px, #FF1493 4px)'
        }}></div>
      </div>
    </div>
  );
};

export default BlogPage;
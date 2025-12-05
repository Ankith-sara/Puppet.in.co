import React, { useContext, useState } from "react";
import { Mail, Zap } from "lucide-react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const { backendUrl } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        `${backendUrl}/api/user/newsletter/subscribe`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setMessage({
          type: "success",
          text: response.data.message || "Check your inbox for the WhatsApp join link!",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: response.data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      console.error("Newsletter subscription error:", err);
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Failed to subscribe. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black py-20 px-4 relative overflow-hidden">
      {/* Grid overlay background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgb(219 39 119) 1px, transparent 1px),
          linear-gradient(90deg, rgb(219 39 119) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        transform: 'perspective(800px) rotateX(75deg) scale(2)',
        transformOrigin: 'center bottom'
      }}></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="bg-purple-950 p-8 md:p-16 border-4 border-pink-600 shadow-2xl relative overflow-hidden">
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-cyan-600"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-cyan-600"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-cyan-600"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-cyan-600"></div>

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-pink-600 border-4 border-cyan-600 flex items-center justify-center relative z-10 shadow-lg">
                <Mail size={40} className="text-white" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink-600 blur-xl opacity-50"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-wider text-center mb-4 uppercase" style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
            textShadow: '3px 3px 0px rgb(219 39 119)',
            color: 'rgb(34 211 238)' // cyan-400
          }}>
            JOIN THE REVOLUTION
          </h1>

          {/* Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600 mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center font-medium">
            Be the first to explore <span className="text-cyan-400 font-black">handcrafted collections</span>, exclusive artisan
            stories, and meaningful initiatives. Join a community that celebrates
            <span className="text-pink-600 font-black"> heritage</span>, <span className="text-purple-600 font-black">sustainability</span>, and conscious fashion.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">

              {/* Email Input */}
              <div className="flex-1 relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail
                    size={22}
                    className="text-cyan-600 group-focus-within:text-cyan-400 transition-colors duration-300"
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full pl-14 pr-4 py-5 bg-black text-white border-2 border-cyan-600 focus:border-pink-600 focus:outline-none transition-all duration-300 font-bold text-base uppercase tracking-wide placeholder:text-gray-600 placeholder:font-medium"
                  required
                  disabled={isSubmitting}
                  style={{fontFamily: 'Impact, sans-serif'}}
                />
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:w-auto px-12 py-5 bg-pink-600 text-white text-base uppercase font-black tracking-widest hover:bg-pink-700 transition-all duration-300 border-2 border-pink-600 hover:border-cyan-600 shadow-lg hover:shadow-pink-600/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap size={18} className="group-hover:animate-pulse" />
                  {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Success/Error Message */}
            {message.text && (
              <div
                className={`mt-6 p-5 text-center border-l-4 font-bold uppercase tracking-wide ${
                  message.type === "success"
                    ? "bg-green-950 text-green-400 border-green-600"
                    : "bg-red-950 text-red-400 border-red-600"
                }`}
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                <p className="text-sm md:text-base">{message.text}</p>
              </div>
            )}
          </form>

          {/* Privacy text */}
          <div className="space-y-3 text-center">
            <p className="text-gray-400 font-medium text-sm md:text-base">
              By subscribing, you agree to our{" "}
              <button
                type="button"
                className="text-cyan-400 font-bold hover:text-pink-600 transition-all duration-300 border-b-2 border-cyan-600 hover:border-pink-600 pb-0.5 uppercase tracking-wide"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                Privacy Policy
              </button>
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              WE RESPECT YOUR PRIVACY. UNSUBSCRIBE AT ANY TIME.
            </p>
          </div>

          {/* Bottom accent bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-600 via-cyan-600 to-purple-600"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;
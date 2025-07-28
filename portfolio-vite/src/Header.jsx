import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(true);
  const [activeLink, setActiveLink] = useState('home');
  const [isHovering, setIsHovering] = useState(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  useEffect(() => {
    // Check system preference only if we're using system theme
    if (isSystemTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(mediaQuery.matches);

      // Listen for changes in system theme
      const handleChange = (e) => setIsDarkMode(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, [isSystemTheme]);

  useEffect(() => {
    // Handle scroll effect for glass morphism
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle theme with enhanced animation
  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition');
    setIsDarkMode(!isDarkMode);
    setIsSystemTheme(false); // No longer following system theme
    
    // Create a ripple effect throughout the entire header
    const header = document.querySelector('header > div');
    if (header) {
      header.classList.add('theme-ripple');
      setTimeout(() => {
        header.classList.remove('theme-ripple');
      }, 1000);
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 800);
  };

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 1000);
  };

  return (
    <header className="fixed top-6 left-6 right-6 z-50 flex justify-center animate-fadeIn">
      <div className={`
        w-full max-w-6xl mx-auto px-6 py-3 rounded-3xl
        backdrop-blur-3xl border transition-all duration-500 ease-out
        ${isDarkMode 
          ? `bg-[#000000]/85 border-[#5b63b7]/70 text-white shadow-2xl shadow-[#5b63b7]/20 
             ${isScrolled ? 'bg-[#000000]/90 shadow-3xl shadow-[#5b63b7]/30 translate-y-0' : 'translate-y-0'}`
          : `bg-white/90 border-[#9296f0]/30 text-[#000000] shadow-2xl shadow-[#9296f0]/10 
             ${isScrolled ? 'bg-white/95 shadow-3xl shadow-[#9296f0]/15 translate-y-0' : 'translate-y-0'}`
        }
        ${isScrolled ? 'scale-[0.98] rounded-2xl' : 'scale-100 hover:scale-[1.01] hover:shadow-3xl'}
        overflow-hidden
      `}>
        {/* Ambient background glow */}
        <div className={`
          absolute -inset-10 blur-3xl opacity-30 transition-all duration-1000 ease-in-out
          ${isDarkMode 
            ? 'bg-gradient-radial from-[#5b63b7]/30 via-transparent to-transparent' 
            : 'bg-gradient-radial from-[#9296f0]/20 via-transparent to-transparent'
          }
          ${isScrolled ? 'scale-75' : 'scale-100 animate-pulse-very-slow'}
        `}></div>
        
        <div className="flex justify-between items-center relative z-10">
          
          {/* Logo with enhanced premium glass effect and animation */}
          <div className="logo flex items-center space-x-2 group" onClick={handleLogoClick}>
            <div 
              className={`
                w-10 h-10 rounded-xl flex items-center justify-center
                backdrop-blur-lg border transition-all duration-500 group cursor-pointer
                transform hover:rotate-[360deg] hover:scale-110 relative overflow-hidden
                ${isDarkMode 
                  ? 'bg-gradient-to-br from-[#5b63b7] to-[#9296f0] border-[#9296f0]/60 shadow-lg shadow-[#5b63b7]/25 hover:shadow-[#5b63b7]/60' 
                  : 'bg-gradient-to-br from-[#cbccff] to-[#9296f0] border-[#9296f0]/30 shadow-lg shadow-[#9296f0]/15 hover:shadow-[#9296f0]/40'
                }
                ${isLogoAnimating ? 'animate-wiggle' : ''}
              `}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Particle effects behind logo */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${isDarkMode ? 'particles-dark' : 'particles-light'}
              `}></div>
              
              <span className={`text-lg font-bold transition-all duration-300 ${
                isDarkMode 
                  ? 'text-white group-hover:text-white' 
                  : 'text-[#5b63b7] group-hover:text-[#000000]'
              } ${isHovering ? 'scale-125' : 'scale-100'} relative z-10`}>
                P
              </span>
            </div>
            <h1 className={`text-lg font-bold tracking-tight transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-[#000000]'
            } group-hover:translate-x-1`}>
              Pavan Sai
              <span className={`block h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-0.5 ${
                isDarkMode ? 'bg-[#9296f0]' : 'bg-[#5b63b7]'
              } animate-shimmer`}></span>
            </h1>
          </div>

          {/* Navigation with enhanced premium glass pills and animations */}
          <nav className="hidden md:flex items-center">
            <div className={`
              flex items-center space-x-1 p-1.5 rounded-xl mr-3
              backdrop-blur-lg border transition-all duration-300 relative
              ${isDarkMode 
                ? 'bg-[#000000]/60 border-[#5b63b7]/50 hover:border-[#9296f0]/70' 
                : 'bg-white/60 border-[#9296f0]/20 hover:border-[#5b63b7]/40'
              }
            `}>
              {/* Ambient glow behind nav */}
              <div className={`
                absolute inset-0 -z-10 rounded-xl blur-md opacity-20 transition-opacity duration-500
                ${isDarkMode 
                  ? 'bg-gradient-to-r from-[#5b63b7] to-[#9296f0]' 
                  : 'bg-gradient-to-r from-[#cbccff] to-[#9296f0]'
                }
              `}></div>
              
              {[
                { name: 'Home', href: '#home', id: 'home' },
                { name: 'About', href: '#about', id: 'about' },
                { name: 'Projects', href: '#projects', id: 'projects' },
                { name: 'Contact', href: '#contact', id: 'contact' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveLink(item.id)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg
                    backdrop-blur-sm transition-all duration-300 relative group overflow-hidden
                    ${isDarkMode 
                      ? 'text-[#FFFFFF] hover:text-white' 
                      : 'text-[#000000] hover:text-[#000000]'
                    }
                    ${activeLink === item.id 
                      ? isDarkMode 
                        ? 'bg-[#5b63b7]/50 text-white' 
                        : 'bg-[#cbccff]/70 text-[#5b63b7]'
                      : 'hover:bg-opacity-30'
                    }
                  `}
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {item.name}
                  </span>

                  {/* Enhanced dynamic background effect */}
                  <div className={`
                    absolute inset-0 rounded-lg 
                    transition-all duration-500 backdrop-blur-lg
                    ${activeLink === item.id 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                    }
                    ${isDarkMode 
                      ? 'bg-gradient-to-r from-[#5b63b7]/40 to-[#9296f0]/40 border border-[#9296f0]/40' 
                      : 'bg-gradient-to-r from-[#cbccff]/60 to-[#9296f0]/30 border border-[#9296f0]/20'
                    }
                  `}></div>
                  
                  {/* Enhanced animated indicator line */}
                  <div className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 
                    transition-all duration-500 ease-out
                    ${activeLink === item.id ? 'w-1/2 animate-pulse-slow' : 'w-0 group-hover:w-1/3'}
                    ${isDarkMode ? 'bg-[#9296f0]' : 'bg-[#5b63b7]'}
                  `}></div>
                </a>
              ))}
            </div>
            
            {/* Theme Toggle Button with dramatic animations */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-lg backdrop-blur-lg border relative overflow-hidden
                transition-all duration-500 transform hover:scale-110 hover:rotate-12
                active:scale-95 active:rotate-0
                ${isDarkMode 
                  ? 'bg-[#000000]/70 border-[#5b63b7]/60 text-white hover:bg-[#5b63b7]/60 hover:text-white hover:shadow-lg hover:shadow-[#5b63b7]/40' 
                  : 'bg-white/70 border-[#9296f0]/20 text-[#000000] hover:bg-white/90 hover:text-[#5b63b7] hover:shadow-lg hover:shadow-[#9296f0]/30'
                }
              `}
              aria-label="Toggle dark mode"
            >
              {/* Button glow effect */}
              <div className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode ? 'glow-dark' : 'glow-light'
              }`}></div>
              
              {isDarkMode ? (
                <svg className="w-5 h-5 transition-transform duration-500 hover:rotate-90 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform duration-500 hover:-rotate-90 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu with enhanced animations */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-lg backdrop-blur-lg border
                transition-all duration-300 transform hover:scale-110 active:scale-90
                ${isDarkMode 
                  ? 'bg-[#000000]/70 border-[#5b63b7]/60 text-white hover:bg-[#5b63b7]/60 hover:text-white' 
                  : 'bg-white/70 border-[#9296f0]/20 text-[#000000] hover:bg-white/90 hover:text-[#5b63b7]'
                }
              `}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                  />
                </svg>
              )}
            </button>
            
            {/* Mobile Menu Button with enhanced animation */}
            <button 
              className={`
                p-2 rounded-lg backdrop-blur-lg border
                transition-all duration-300 transform hover:scale-110 active:scale-90
                ${isDarkMode 
                  ? 'bg-[#000000]/70 border-[#5b63b7]/60 text-white hover:bg-[#5b63b7]/60 hover:text-white' 
                  : 'bg-white/70 border-[#9296f0]/20 text-[#000000] hover:bg-white/90 hover:text-[#5b63b7]'
                }
              `}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced animated premium accent line */}
        <div className={`
          absolute bottom-0 left-0 right-0 h-px
          transition-all duration-700 ease-in-out
          ${isDarkMode 
            ? 'bg-gradient-to-r from-transparent via-[#9296f0]/50 to-transparent animate-pulse-slow' 
            : 'bg-gradient-to-r from-transparent via-[#5b63b7]/40 to-transparent'
          }
          ${isScrolled ? 'opacity-100' : 'opacity-70 hover:opacity-100 hover:via-[#9296f0]/70'}
        `}></div>
      </div>
    </header>
  );
};

// Add these animations to your tailwind.config.js:
// animations: {
//   fadeIn: { from: { opacity: 0, transform: 'translateY(-10px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
//   pulseSlow: { '0%, 100%': { opacity: 0.7 }, '50%': { opacity: 1 } },
//   pulseVerySlow: { '0%, 100%': { opacity: 0.6, transform: 'scale(0.95)' }, '50%': { opacity: 0.8, transform: 'scale(1)' } },
//   shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
//   wiggle: { '0%, 100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } }
// },
// 
// Add these to your global CSS:
// .theme-transition { transition: background-color 0.8s ease, color 0.8s ease; }
// .theme-ripple { animation: ripple 1s ease-out; }
// @keyframes ripple { 0% { box-shadow: 0 0 0 0 rgba(146, 150, 240, 0.4); } 100% { box-shadow: 0 0 0 30px rgba(146, 150, 240, 0); } }
// .particles-dark { background-image: radial-gradient(circle, #9296f0 1px, transparent 1px), radial-gradient(circle, #5b63b7 1px, transparent 1px); background-size: 20px 20px; background-position: 0 0, 10px 10px; animation: particleDrift 8s linear infinite; }
// .particles-light { background-image: radial-gradient(circle, #5b63b7 1px, transparent 1px), radial-gradient(circle, #9296f0 1px, transparent 1px); background-size: 20px 20px; background-position: 0 0, 10px 10px; animation: particleDrift 8s linear infinite; }
// @keyframes particleDrift { 0% { background-position: 0 0, 10px 10px; } 100% { background-position: 20px 20px, 30px 30px; } }
// .glow-dark { box-shadow: inset 0 0 20px rgba(146, 150, 240, 0.5); }
// .glow-light { box-shadow: inset 0 0 20px rgba(91, 99, 183, 0.3); }

export default Header;
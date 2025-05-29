import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'es';
    const isEn = savedLang === 'en';
    setIsEnglish(isEn);
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Enhanced glow effect background */}
        <div 
          className={`absolute -inset-1 sm:-inset-2 rounded-full blur-lg transition-all duration-700 opacity-60 ${
            isEnglish 
              ? 'bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-red-500/40' 
              : 'bg-gradient-to-r from-red-500/40 via-orange-500/30 to-yellow-500/40'
          } ${isHovered ? 'opacity-80 scale-110' : 'opacity-60 scale-100'}`} 
        />
        
        {/* Main toggle container */}
        <button
          onClick={toggleLanguage}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-20 h-10 sm:w-28 sm:h-14 rounded-full border-2 transition-all duration-500 
            focus:outline-none focus:ring-4 focus:ring-opacity-50 group overflow-hidden
            ${isEnglish 
              ? 'bg-gradient-to-r from-blue-600/30 to-red-600/30 border-blue-400/60 focus:ring-blue-500' 
              : 'bg-gradient-to-r from-red-600/30 to-yellow-600/30 border-red-400/60 focus:ring-red-500'
            } backdrop-blur-sm hover:scale-105 active:scale-95 shadow-xl`}
        >
          {/* Background pattern with better layering */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent rounded-full" />
          </div>
          
          {/* Sliding indicator with improved positioning */}
          <div
            className={`absolute top-1 w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-700 ease-out 
              shadow-2xl ring-2 ring-white/20 ${
              isEnglish 
                ? 'translate-x-10 sm:translate-x-14 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500' 
                : 'translate-x-1 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400'
            } ${isHovered ? 'scale-110 shadow-3xl' : 'scale-100'}`}
          >
            {/* Enhanced inner glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-white/20 to-transparent" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-tl from-transparent via-white/10 to-white/30" />
            
            {/* Improved flag representation */}
            <div className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              {isEnglish ? (
                <div className="relative">
                  {/* US Flag - more detailed */}
                  <div className="w-5 h-4 sm:w-7 sm:h-5 relative rounded-sm overflow-hidden shadow-sm">
                    {/* Blue canton */}
                    <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-blue-800 flex items-center justify-center">
                      <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-80" />
                    </div>
                    {/* Red and white stripes */}
                    <div className="absolute top-0 right-0 w-3 h-4 sm:w-4 sm:h-5 flex flex-col">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-red-600' : 'bg-white'}`} />
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 flex flex-col">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-red-600' : 'bg-white'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {/* Spain Flag - more detailed */}
                  <div className="w-5 h-4 sm:w-7 sm:h-5 relative overflow-hidden rounded-sm shadow-sm">
                    <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-red-600" />
                    <div className="absolute top-0.5 sm:top-1 left-0 right-0 h-2 sm:h-3 bg-yellow-400 flex items-center justify-center">
                      {/* Simple coat of arms representation */}
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600/60 rounded-sm opacity-80" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-red-600" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Improved hover effect overlay */}
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovered 
              ? 'bg-gradient-to-r from-white/15 via-white/10 to-white/15 opacity-100' 
              : 'opacity-0'
          }`} />
          
          {/* Click ripple effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className={`absolute inset-0 bg-white/20 rounded-full transform scale-0 transition-transform duration-150 ${
              isHovered ? 'group-active:scale-100' : ''
            }`} />
          </div>
        </button>

        {/* Enhanced floating language indicator */}
        <div className={`absolute top-full mt-2 sm:mt-3 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10 ${
          isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'
        }`}>
          <div className="bg-black/90 backdrop-blur-md text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full 
            border border-white/20 flex items-center gap-1.5 sm:gap-2 shadow-xl">
            <Languages className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">{isEnglish ? 'English' : 'Español'}</span>
          </div>
          {/* Improved tooltip arrow */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 sm:border-l-6 border-r-4 sm:border-r-6 border-b-4 sm:border-b-6 border-l-transparent 
              border-r-transparent border-b-black/90" />
          </div>
        </div>

        {/* Enhanced ambient particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full transition-all duration-1000 ${
                isEnglish ? 'bg-blue-400/30' : 'bg-red-400/30'
              } ${isHovered ? 'animate-pulse' : 'animate-ping'}`}
              style={{
                width: `${1.5 + (i % 2)}px`,
                height: `${1.5 + (i % 2)}px`,
                top: `${15 + (i * 15) % 70}%`,
                left: `${10 + (i * 25) % 80}%`,
                animationDelay: `${i * 300}ms`,
                animationDuration: `${1500 + i * 200}ms`
              }}
            />
          ))}
        </div>

        {/* Additional floating elements */}
        <div className={`absolute -inset-6 sm:-inset-8 pointer-events-none transition-opacity duration-700 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={`float-${i}`}
              className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                isEnglish ? 'bg-blue-300/40' : 'bg-yellow-300/40'
              } animate-bounce`}
              style={{
                top: `${20 + i * 30}%`,
                right: `${10 + i * 20}%`,
                animationDelay: `${i * 700}ms`,
                animationDuration: `${2000 + i * 300}ms`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

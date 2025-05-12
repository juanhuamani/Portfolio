import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import enIcon from '@/assets/icons/FlagUSA.svg';
import esIcon from '@/assets/icons/FlagSpain.svg'

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(false);

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
    <button
      onClick={toggleLanguage}
      className="w-20 h-10 rounded-full border-blue-800 bg-blue-800/20 flex items-center transition duration-300 focus:outline-none shadow-md"
    >
      <div
        className={`w-12 h-12 relative rounded-full transition duration-500 transform p-1 text-white 
        ${isEnglish ? 'bg-blue-800 translate-x-full' : 'bg-yellow-500 -translate-x-2'}`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          {isEnglish ? <img src={enIcon} alt="English" /> : <img src={esIcon} alt="Spanish" />}
        </div>
      </div>
    </button>
  );
}

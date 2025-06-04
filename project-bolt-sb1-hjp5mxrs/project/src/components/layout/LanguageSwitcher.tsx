import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'ru', name: 'Русский' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onClose, isMobile = false }) => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (onClose) {
      onClose();
    }
  };
  
  // If mobile, display horizontal buttons
  if (isMobile) {
    return (
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-3 py-1 text-sm rounded ${
              i18n.language === lang.code
                ? 'bg-bitfinex-blue text-white'
                : 'bg-bitfinex-gray text-gray-300 hover:bg-bitfinex-gray/80'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    );
  }
  
  // Desktop dropdown menu
  return (
    <div>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`block w-full text-left px-4 py-2 text-sm ${
            i18n.language === lang.code
              ? 'bg-bitfinex-blue text-white'
              : 'text-gray-300 hover:bg-bitfinex-gray/80'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import BitfinexLogo from '../ui/BitfinexLogo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  // Track scrolling to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bitfinex-darker py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BitfinexLogo className="h-8 w-auto" />
            <span className="ml-2 font-bold text-xl">Bitfinex</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
              {t('header.home')}
            </Link>
            <Link to="#" className="nav-link">
              {t('header.trading')}
            </Link>
            <Link to="/traders" className={`nav-link ${location.pathname === '/traders' ? 'nav-link-active' : ''}`}>
              {t('header.traders')}
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
              {t('header.aboutUs')}
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Globe className="w-4 h-4 mr-1" />
                <ChevronDown className={`w-4 h-4 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-bitfinex-gray rounded-md shadow-lg py-1 z-50">
                  <LanguageSwitcher onClose={() => setLanguageMenuOpen(false)} />
                </div>
              )}
            </div>
          </nav>
          
          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login" className="btn-secondary">
              {t('header.login')}
            </Link>
            <Link to="/signup" className="btn-primary">
              {t('header.signUp')}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className={`nav-link text-lg ${location.pathname === '/' ? 'nav-link-active' : ''}`}>
                {t('header.home')}
              </Link>
              <Link to="#" className="nav-link text-lg">
                {t('header.trading')}
              </Link>
              <Link to="/traders" className={`nav-link text-lg ${location.pathname === '/traders' ? 'nav-link-active' : ''}`}>
                {t('header.traders')}
              </Link>
              <Link to="/about" className={`nav-link text-lg ${location.pathname === '/about' ? 'nav-link-active' : ''}`}>
                {t('header.aboutUs')}
              </Link>
              
              {/* Mobile Language Selector */}
              <div className="pt-2 pb-2">
                <p className="text-sm text-bitfinex-light-gray mb-1">Language</p>
                <LanguageSwitcher isMobile />
              </div>
              
              {/* Auth Buttons (Mobile) */}
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/login" className="btn-secondary text-center">
                  {t('header.login')}
                </Link>
                <Link to="/signup" className="btn-primary text-center">
                  {t('header.signUp')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
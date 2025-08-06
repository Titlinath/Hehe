import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Shield } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { path: '/', key: 'nav.home' },
    { path: '/safety', key: 'nav.safety' },
    { path: '/report', key: 'nav.report' },
    { path: '/volunteer', key: 'nav.volunteer' },
    { path: '/locator', key: 'nav.locator' },
    { path: '/emergency', key: 'nav.emergency' },
    { path: '/feedback', key: 'nav.feedback' },
    { path: '/about', key: 'nav.about' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-white group-hover:text-yellow-200 transition-colors" />
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">অন্তরঙ্গ পূজো</div>
              <div className="text-xs opacity-90">Antôrôngo Pujo</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActiveLink(item.path)
                    ? 'bg-white bg-opacity-20 text-white shadow-md'
                    : 'text-white hover:bg-white hover:bg-opacity-10'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Language Selector & Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{currentLanguage.nativeName}</span>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentLanguage.code === lang.code
                          ? 'bg-orange-50 text-orange-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.nativeName}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/login"
              className="bg-white text-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {t('nav.login')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-10 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all ${
                    isActiveLink(item.path)
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'text-white hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {t(item.key)}
                </Link>
              ))}
              
              <div className="border-t border-white border-opacity-20 pt-2 mt-2">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-white text-sm">Language:</span>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang);
                          setIsMenuOpen(false);
                        }}
                        className={`px-2 py-1 rounded text-xs transition-colors ${
                          currentLanguage.code === lang.code
                            ? 'bg-white text-red-600'
                            : 'text-white hover:bg-white hover:bg-opacity-10'
                        }`}
                      >
                        {lang.nativeName}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-white hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  {t('nav.login')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { createContext, useContext, useState, ReactNode } from 'react';
// Define Language and Translations types here since '../types' is missing
export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  [languageCode: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'en', name: 'English', nativeName: 'English' }
];

const translations: Translations = {
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.safety': 'নিরাপত্তা টিপস',
    'nav.report': 'রিপোর্ট',
    'nav.volunteer': 'স্বেচ্ছাসেবক',
    'nav.locator': 'প্যান্ডেল খুঁজুন',
    'nav.emergency': 'জরুরি সাহায্য',
    'nav.feedback': 'মতামত',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.login': 'লগইন',
    
    // Home Page
    'home.title': 'দুর্গা পূজা নিরাপত্তা ও সচেতনতা পোর্টাল',
    'home.subtitle': 'আনন্দময় ও নিরাপদ পূজা উদযাপনের জন্য',
    'home.welcome': 'স্বাগতম',
    'home.learn_more': 'আরও জানুন',
    'home.quote1': 'মা দুর্গার আশীর্বাদে নিরাপদ থাকুন',
    'home.quote2': 'একসাথে উৎসব, একসাথে নিরাপত্তা',
    'home.quote3': 'সচেতনতাই সুরক্ষার প্রথম ধাপ',
    
    // Safety Tips
    'safety.title': 'নিরাপত্তা টিপস',
    'safety.day_safety': 'দিনের নিরাপত্তা',
    'safety.night_safety': 'রাতের নিরাপত্তা',
    'safety.women_child': 'মহিলা ও শিশু নিরাপত্তা',
    'safety.footprint': 'পরিবেশ সংরক্ষণ ক্যালকুলেটর',
    
    // Common
    'common.submit': 'জমা দিন',
    'common.cancel': 'বাতিল',
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি ঘটেছে',
    'common.success': 'সফল হয়েছে',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.safety': 'Safety Tips',
    'nav.report': 'Report',
    'nav.volunteer': 'Volunteer',
    'nav.locator': 'Pandal Locator',
    'nav.emergency': 'Emergency',
    'nav.feedback': 'Feedback',
    'nav.about': 'About Us',
    'nav.login': 'Login',
    
    // Home Page
    'home.title': 'Durga Puja Safety & Awareness Portal',
    'home.subtitle': 'For Joyful and Safe Puja Celebrations',
    'home.welcome': 'Welcome',
    'home.learn_more': 'Learn More',
    'home.quote1': 'Stay Safe with Ma Durga\'s Blessings',
    'home.quote2': 'Celebrate Together, Stay Safe Together',
    'home.quote3': 'Awareness is the First Step to Safety',
    
    // Safety Tips
    'safety.title': 'Safety Tips',
    'safety.day_safety': 'Day Safety',
    'safety.night_safety': 'Night Safety',
    'safety.women_child': 'Women & Child Safety',
    'safety.footprint': 'Environmental Footprint Calculator',
    
    // Common
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[1]); // Default to English

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    blog: 'Blog',
    company: 'Company',
    brand: 'Brand',
    press: 'Press',
    pointsProgram: 'Points Program',
    contact: 'Contact',
    language: 'Language',
    // Add more translations as needed
  },
  ja: {
    home: 'ホーム',
    services: 'サービス',
    blog: 'ブログ',
    company: '会社情報',
    brand: 'ブランド',
    press: 'プレス',
    pointsProgram: 'ポイントプログラム',
    contact: 'お問い合わせ',
    language: '言語',
    // Add more translations as needed
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Detect browser language and default to 'en' if not Japanese
  const detectBrowserLanguage = (): Language => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang && browserLang.startsWith('ja') ? 'ja' : 'en';
  };

  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set the initial language based on browser settings
    const savedLanguage = localStorage.getItem('app-language') as Language;
    const initialLanguage = savedLanguage || detectBrowserLanguage();
    setLanguage(initialLanguage);
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('app-language', language);
    // Update html lang attribute for accessibility
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

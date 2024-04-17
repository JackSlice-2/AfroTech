// languageContext.tsx
'use client'; // Add this line at the very top of the file

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextData {
 language: string;
 setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextData>({
 language: 'EN',
 setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
 children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
 const [language, setLanguage] = useState<string>('EN');

 useEffect(() => {
    // Attempt to read the language from local storage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
 }, []);

 const setLanguageWithPersistence = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Persist the language in local storage
    localStorage.setItem('language', newLanguage);
 };

 return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithPersistence }}>
      {children}
    </LanguageContext.Provider>
 );
};

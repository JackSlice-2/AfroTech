// components/LanguageButton.tsx
'use client'; // Ensure this directive is at the top of your file

import { useRouter, usePathname } from 'next/navigation'; // Updated import
import { useLanguage } from '../context/languageContext';

const LanguageButton: React.FC = () => {
 const { language, setLanguage } = useLanguage();
 const router = useRouter(); // Now using useRouter from next/navigation
 const pathname = usePathname(); // Use usePathname to get the current pathname

 const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Construct the new URL with the updated language query parameter
    const newUrl = `${pathname}?lang=${newLanguage}`;
    router.push(newUrl);
 };

 return (
    <div className="flex justify-end gap-2">
      <button
        onClick={() => handleLanguageChange('EN')}
        className={`rounded-xl font-bold p-1 hover:bg-neutral-300/30 text-center justify-center hover:scale-110 ${language === 'en' ? 'bg-blue-500 text-white' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('ES')}
        className={`rounded-xl font-bold p-1 hover:bg-neutral-300/30 text-center justify-center hover:scale-110 ${language === 'es' ? 'bg-blue-500 text-white' : ''}`}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange('PT')}
        className={`rounded-xl font-bold p-1 hover:bg-neutral-300/30 text-center justify-center hover:scale-110 ${language === 'pt' ? 'bg-blue-500 text-white' : ''}`}
      >
        PT
      </button>
    </div>
 );
};

export default LanguageButton;

import { Globe2 } from 'lucide-react';

export default function LanguageToggle({ language, setLanguage }) {
  const isArabic = language === 'ar';
  return (
    <button
      type="button"
      onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-burgundy/25 bg-cream/90 px-3 py-2 text-sm font-semibold text-burgundy shadow-sm transition hover:border-burgundy hover:bg-burgundy hover:text-cream"
      aria-label={isArabic ? 'Switch to English' : 'Switch to Arabic'}
    >
      <Globe2 className="h-4 w-4" />
      <span>{isArabic ? 'English' : 'عربي'}</span>
    </button>
  );
}

import LogoMark from '../components/LogoMark.jsx';

export default function Footer({ language }) {
  return (
    <footer className="relative overflow-hidden border-t border-burgundy/12 bg-cream py-9">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-softPink/40 to-transparent" />
      <div className="page-shell relative flex flex-col items-center justify-between gap-4 text-center text-sm font-medium text-violetGray sm:flex-row sm:text-start">
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9" />
          <span className="font-semibold text-burgundy">{language === 'ar' ? 'أسرار فلاتة' : 'Asrar Fallatah'}</span>
        </div>
        <span className="inline-flex items-center gap-2 font-semibold text-navy">
          {language === 'ar' ? '© 2026 صُنع بحب' : '© 2026 Made with love'}
          <span aria-hidden="true" className="text-burgundy">♥</span>
        </span>
      </div>
    </footer>
  );
}

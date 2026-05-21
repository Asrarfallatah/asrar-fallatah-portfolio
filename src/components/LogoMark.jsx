import logoRaw from '../assets/brand/logo-raw.png';

export default function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`} role="img" aria-label="Asrar star lock logo">
      <img src={logoRaw} alt="" className="h-full w-full scale-150 object-contain" draggable="false" />
    </span>
  );
}

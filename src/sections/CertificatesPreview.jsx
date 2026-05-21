import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { featuredCertificates } from '../data/certificates.js';
import { siteContent } from '../data/siteContent.js';
import { fadeUp, hoverLift, staggerContainer } from '../utils/motion.js';

export default function CertificatesPreview({ language }) {
  const t = (value) => value[language];
  return (
    <section id="certificates" className="section-band section-tone-cloud section-pad certificates-section">
      <FloatingOrbitLayer density="low" />
      <div className="page-shell relative">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <SectionHeader
            title={t(siteContent.sectionTitles.certificates)}
            subtitle={language === 'ar' ? 'طوابع صغيرة و محطات صغيرة توثق الرحلة الطويلة' : 'Small stamps and pit stops documenting the long journey.'}
            language={language}
            className="mb-0"
          />
          <Link to="/certificates" className="soft-link primary-link">{language === 'ar' ? 'عرض المزيد' : 'View more'}</Link>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} className="certificates-row">
          {featuredCertificates.map((certificate) => (
            <motion.a key={certificate.title.en} href={certificate.href} target="_blank" rel="noopener noreferrer" variants={fadeUp} whileHover={hoverLift} className="orbit-card certificate-card block rounded-[24px] p-5 transition hover:border-burgundy/35">
              {certificate.image ? (
                <div className="certificate-image mb-4 aspect-[4/3] overflow-hidden rounded-[16px] border border-burgundy/10 bg-white/82 p-2">
                  <img src={certificate.image} alt={t(certificate.title)} className="h-full w-full object-contain transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" loading="lazy" />
                </div>
              ) : null}
              <p className="soft-badge mb-2 w-fit px-2.5 py-1 text-xs font-bold">
                <span className="star-dot text-burgundy" />
                {certificate.provider}
              </p>
              <h3 className="mt-2 text-base font-bold leading-6 text-deepBrown">{t(certificate.title)}</h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

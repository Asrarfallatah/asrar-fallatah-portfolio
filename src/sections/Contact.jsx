import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import LogoMark from '../components/LogoMark.jsx';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import { contactLinks, siteContent } from '../data/siteContent.js';
import { fadeUp, staggerContainer } from '../utils/motion.js';

export default function Contact({ language }) {
  const t = (value) => value[language];
  const links = [
    { label: { en: 'Email Me', ar: 'إيميل' }, href: `mailto:${contactLinks.email}`, icon: Mail },
    { label: { en: 'LinkedIn', ar: 'لينكدإن' }, href: contactLinks.linkedin, icon: Linkedin },
    { label: { en: 'GitHub', ar: 'GitHub' }, href: contactLinks.github, icon: Github },
    { label: { en: 'CV', ar: 'سيرتي ' }, href: contactLinks.cv, icon: FileText },
  ];

  return (
    <section id="contact" className="section-band section-tone-belle section-pad contact-section">
      <FloatingOrbitLayer density="medium" />
      <div className="page-shell relative">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="orbit-card contact-card mx-auto max-w-4xl rounded-[36px] p-8 text-center sm:p-12">
          <motion.div variants={fadeUp}>
            <LogoMark className="mx-auto h-20 w-20" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-5 font-display text-5xl font-semibold leading-tight text-deepBrown">{t(siteContent.sectionTitles.contact)}</motion.h2>
          <div className="brand-underline mx-auto mt-3 w-64" aria-hidden="true"><span /></div>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-brown">
            {language === 'ar'
              ? 'سعيدة بتعرّفك عليّ ويسعدني التواصل معك والرد عبر المنصات التالية:'
              : 'Happy to connect and would love to hear from you! Feel free to reach out through any of the platforms below.'}
          </p>
            
          <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.href} variants={fadeUp} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} className="soft-link">
                  <Icon className="h-4 w-4" />
                  {t(link.label)}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useReducedMotion } from 'framer-motion';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { skills } from '../data/skills.js';
import { siteContent } from '../data/siteContent.js';
import { fadeUp, staggerContainer } from '../utils/motion.js';

export default function SkillsGrid({ language }) {
  const reduceMotion = useReducedMotion();
  return (
    <section id="skills" className="section-band section-tone-cloud section-pad">
      <FloatingOrbitLayer density="low" />
      <div className="page-shell relative">
        <SectionHeader
          title={siteContent.sectionTitles.skills[language]}
          subtitle={language === 'ar' ? 'مهارات تراكمت مع كل مشروع و كل تجربة و كل محاولة في الطريق' : 'Skills accumulated with every project, experience, and attempt along the way.'}
          language={language}
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="skill-system-card orbit-card mx-auto max-w-6xl rounded-[34px] p-5 sm:p-7"
        >
          <div className="skill-system-header" aria-hidden="true">
            <span className="star-dot text-burgundy" />
            <span className="skill-system-line" />
            <span className="star-dot text-blueAccent" />
          </div>
          <div className="skill-system-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.035, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
                  className={`skill-tile skill-tile-readable group ${skill.primary ? 'skill-tile-primary' : ''}`}
                >
                  <div className="skill-icon-wrap">
                    {skill.image ? (
                      <img src={skill.image} alt={`${skill.name} logo`} className="h-10 w-10 object-contain transition duration-300 group-hover:scale-110" loading="lazy" />
                    ) : (
                      <Icon className="h-9 w-9 text-burgundy transition duration-300 group-hover:scale-110" strokeWidth={1.8} />
                    )}
                  </div>
                  <span className="mt-3 text-center text-sm font-extrabold text-navy">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

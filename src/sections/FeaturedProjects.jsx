import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { projects } from '../data/projects.js';
import { siteContent } from '../data/siteContent.js';
import { fadeUp, hoverLift, staggerContainer } from '../utils/motion.js';

export default function FeaturedProjects({ language }) {
  const t = (value) => value[language];
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-band section-tone-belle section-pad projects-section">
      <FloatingOrbitLayer density="medium" />

      <div className="page-shell relative">
        <div className="project-stage project-stage-balanced" aria-hidden="true" />

        <div className="relative z-10 mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            title={t(siteContent.sectionTitles.featuredProjects)}
            subtitle={
              language === 'ar'
                ? 'مشاريع وتحديات مميزة ساهمت في تنوع مهاراتي.'
                : 'Featured projects and challenges that contributed to the diversity of my skills.'
            }
            language={language}
            className="mb-0"
          />

          <Link className="soft-link self-start" to="/projects">
            {language === 'ar' ? 'المزيد' : 'View more'}
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.22 }}
          className="project-equal-grid relative z-10"
        >
          {featured.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={hoverLift}
              className={`orbit-card project-card-compact ${project.accent} group flex min-h-[380px] flex-col overflow-hidden rounded-[28px] p-5 sm:p-6`}
            >
              <div className="project-top-strip" />

              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="micro-label text-[var(--accent)]">{t(project.type)}</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-deepBrown sm:text-[1.7rem]">
                    {t(project.title)}
                  </h3>
                </div>

                <div className="soft-badge flex h-14 w-14 flex-none items-center justify-center border-[var(--accent)] bg-[var(--accent-soft)] font-display text-3xl font-semibold text-deepBrown sm:h-16 sm:w-16">
                  {project.initials}
                </div>
              </div>

              <p className="leading-7 text-brown">{t(project.cardLine)}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <span className="rounded-full border border-[var(--accent)]/30 bg-cream/80 px-4 py-2 text-xs font-bold text-[var(--accent)]">
                  {t(project.role)}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="soft-link primary-link px-4 py-2.5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="project-arrow h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

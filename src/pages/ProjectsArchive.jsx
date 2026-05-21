import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';
import { projectCategories, projects } from '../data/projects.js';
import { siteContent } from '../data/siteContent.js';

export default function ProjectsArchive({ language }) {
  const [active, setActive] = useState('all');
  const t = (value) => value[language];
  const BackIcon = language === 'ar' ? ArrowRight : ArrowLeft;
  const filtered = useMemo(() => (active === 'all' ? projects : projects.filter((project) => project.category === active)), [active]);

  return (
    <PageTransition>
      <section className="page-shell min-h-screen pb-24 pt-32">
        <Link to="/#projects" className="soft-link mb-8 w-fit px-4 py-2.5">
          <BackIcon className="h-4 w-4" />
          {language === 'ar' ? 'العودة إلى المشاريع' : 'Back to projects'}
        </Link>

        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-deepBrown sm:text-6xl">{t(siteContent.archive.projectsTitle)}</h1>
          <p className="mt-4 text-lg leading-8 text-brown">{t(siteContent.archive.projectsIntro)}</p>
        </div>

        <div className="my-9 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-semibold transition ${active === category.id ? 'border-burgundy bg-burgundy text-cream' : 'border-brown/15 bg-cream/70 text-brown hover:border-burgundy/50'}`}
            >
              {t(category.label)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.id} className={`orbit-card ${project.accent || 'accent-sage'} rounded-[28px] p-6`}>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-[16px] border border-[var(--accent)] bg-[var(--accent-soft)] font-display text-4xl font-semibold text-deepBrown">
                  {project.initials}
                </div>
                <span className="rounded-full bg-beige/70 px-3 py-1 text-xs font-bold text-brown">{project.tech.join(' · ')}</span>
              </div>
              <h2 className="text-2xl font-bold text-deepBrown">{t(project.title)}</h2>
              <p className="mt-3 leading-7 text-brown">{t(project.idea)}</p>
              {t(project.role) ? <p className="mt-4 text-sm font-semibold text-burgundy">{t(project.role)}</p> : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="soft-link mt-5 px-4 py-2.5">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              ) : (
                <span className="mt-5 inline-flex rounded-full border border-dashed border-brown/20 px-4 py-2.5 text-sm font-semibold text-brown/70">
                  {language === 'ar' ? 'مساحة قابلة للتحديث' : 'Future slot'}
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

import PageTransition from '../components/PageTransition.jsx';
import About from '../sections/About.jsx';
import CertificatesPreview from '../sections/CertificatesPreview.jsx';
import Contact from '../sections/Contact.jsx';
import FeaturedProjects from '../sections/FeaturedProjects.jsx';
import Hero from '../sections/Hero.jsx';
import JourneyTimeline from '../sections/JourneyTimeline.jsx';
import SkillsGrid from '../sections/SkillsGrid.jsx';

export default function Home({ language }) {
  return (
    <PageTransition>
      <Hero language={language} />
      <About language={language} />
      <FeaturedProjects language={language} />
      <SkillsGrid language={language} />
      <JourneyTimeline language={language} />
      <CertificatesPreview language={language} />
      <Contact language={language} />
    </PageTransition>
  );
}

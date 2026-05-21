import { ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition.jsx';
import { certificatesByProvider } from '../data/certificates.js';
import { siteContent } from '../data/siteContent.js';

export default function CertificatesArchive({ language }) {
  const t = (value) => value[language];
  const BackIcon = language === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <PageTransition>
      <section className="page-shell min-h-screen pb-24 pt-32">
        <Link to="/#certificates" className="soft-link mb-8 w-fit px-4 py-2.5">
          <BackIcon className="h-4 w-4" />
          {language === 'ar' ? 'العودة إلى الشهادات' : 'Back to certificates'}
        </Link>

        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-deepBrown sm:text-6xl">{t(siteContent.archive.certificatesTitle)}</h1>
          <p className="mt-4 text-lg leading-8 text-brown">{t(siteContent.archive.certificatesIntro)}</p>
        </div>

        <div className="mt-10 space-y-6">
          {certificatesByProvider.map((group) => (
            <section key={group.provider} className="orbit-card rounded-[28px] p-6">
              <h2 className="mb-4 text-2xl font-bold text-deepBrown">{group.provider}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.certificates.map((certificate) => {
                  const CardTag = certificate.href ? 'a' : 'article';
                  const linkProps = certificate.href
                    ? { href: certificate.href, target: '_blank', rel: 'noopener noreferrer' }
                    : {};

                  return (
                    <CardTag
                      key={certificate.title.en}
                      {...linkProps}
                      className="rounded-[14px] border border-brown/10 bg-cream/76 p-4 transition hover:-translate-y-0.5 hover:border-heirloomRed/35 hover:bg-white"
                    >
                      {certificate.image ? (
                        <div className="mb-3 aspect-[4/3] overflow-hidden rounded-[10px] border border-brown/10 bg-white/80 p-2">
                          <img src={certificate.image} alt={t(certificate.title)} className="h-full w-full object-contain" loading="lazy" />
                        </div>
                      ) : (
                        <Award className="mb-3 h-5 w-5 text-heirloomRed" />
                      )}
                      <h3 className="text-sm font-bold leading-6 text-deepBrown">{t(certificate.title)}</h3>
                    </CardTag>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

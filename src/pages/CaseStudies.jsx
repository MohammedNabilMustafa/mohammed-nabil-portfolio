import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import CaseStudyCard from '../components/CaseStudyCard';
import CTASection from '../components/CTASection';
import { useLanguage } from '../i18n/LanguageContext';

export default function CaseStudies() {
  const { content } = useLanguage();
  const { meta, caseStudiesPage, caseStudies, hero } = content;

  return (
    <>
      <PageMeta title={meta.caseStudies.title} description={meta.caseStudies.description} />

      <Hero
        eyebrow={caseStudiesPage.hero.eyebrow}
        headline={caseStudiesPage.hero.headline}
        subtitle={caseStudiesPage.hero.subtitle}
        primaryCta={{ label: caseStudiesPage.hero.primaryCta, path: '/case-studies/ain-shams-press' }}
        secondaryCta={{ label: caseStudiesPage.hero.secondaryCta, path: '/case-studies/minsal-commerce-os' }}
        compact
      />

      <section className="section">
        <div className="container case-studies-grid">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        title={caseStudiesPage.cta.title}
        subtitle={caseStudiesPage.cta.subtitle}
      />
    </>
  );
}

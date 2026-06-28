import PageMeta, { JsonLd } from '../components/PageMeta';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import IndustriesSection from '../components/IndustriesSection';
import SolutionsSection from '../components/SolutionsSection';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useLanguage } from '../i18n/LanguageContext';

export default function Home() {
  const { content } = useLanguage();
  const {
    site,
    meta,
    hero,
    home,
    stats = [],
    industries = [],
    solutions = [],
    featuredCaseStudies = [],
    services = [],
  } = content;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    founder: { '@type': 'Person', name: site.name, jobTitle: site.role },
    areaServed: 'Worldwide',
    serviceType: ['ERP Systems', 'CRM', 'Business Automation', 'Digital Transformation'],
  };

  return (
    <>
      <PageMeta title={meta.home.title} description={meta.home.description} />
      <JsonLd data={schema} />

      <Hero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        subtitle={hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeader
            eyebrow={home.trackRecord.eyebrow}
            title={home.trackRecord.title}
            subtitle={home.trackRecord.subtitle}
          />
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow={home.industries.eyebrow}
            title={home.industries.title}
            subtitle={home.industries.subtitle}
          />
          <IndustriesSection industries={industries} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={home.solutions.eyebrow}
            title={home.solutions.title}
            subtitle={home.solutions.subtitle}
          />
          <SolutionsSection solutions={solutions} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow={home.caseStudies.eyebrow}
            title={home.caseStudies.title}
            subtitle={home.caseStudies.subtitle}
          />
          <div className="featured-case-studies">
            {featuredCaseStudies.map((study, i) => (
              <FeaturedCaseStudy key={study.slug} study={study} index={i} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            subtitle={home.services.subtitle}
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={home.cta.title} subtitle={home.cta.subtitle} />
    </>
  );
}

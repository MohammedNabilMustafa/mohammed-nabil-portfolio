import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useLanguage } from '../i18n/LanguageContext';

export default function Services() {
  const { content } = useLanguage();
  const { meta, services, servicesPage, hero } = content;

  return (
    <>
      <PageMeta title={meta.services.title} description={meta.services.description} />

      <Hero
        eyebrow={servicesPage.hero.eyebrow}
        headline={servicesPage.hero.headline}
        subtitle={servicesPage.hero.subtitle}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow={servicesPage.deliver.eyebrow}
            title={servicesPage.deliver.title}
            subtitle={servicesPage.deliver.subtitle}
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow">
          <SectionHeader eyebrow={servicesPage.process.eyebrow} title={servicesPage.process.title} align="left" />
          <div className="process-grid">
            {(servicesPage.steps ?? []).map((item) => (
              <article key={item.step} className="process-card">
                <span className="process-card__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

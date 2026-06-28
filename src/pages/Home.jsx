import PageMeta, { JsonLd } from '../components/PageMeta';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ServiceCard from '../components/ServiceCard';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import IndustriesSection from '../components/IndustriesSection';
import SolutionsSection from '../components/SolutionsSection';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { heroContent, siteConfig } from '../data/site';
import { homeStats } from '../data/stats';
import { services } from '../data/services';
import { featuredCaseStudies } from '../data/caseStudies';
import { industries } from '../data/industries';
import { solutions } from '../data/solutions';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: siteConfig.description,
  founder: { '@type': 'Person', name: siteConfig.name, jobTitle: siteConfig.role },
  areaServed: 'Worldwide',
  serviceType: ['ERP Systems', 'CRM', 'Business Automation', 'Digital Transformation'],
};

export default function Home() {
  return (
    <>
      <PageMeta
        title={`${siteConfig.name} — Enterprise Business Systems Engineer`}
        description={siteConfig.description}
      />
      <JsonLd data={schema} />

      <Hero
        eyebrow={heroContent.eyebrow}
        headline={heroContent.headline}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
      />

      <section className="section section--tight">
        <div className="container">
          <SectionHeader
            eyebrow="Track Record"
            title="Built for Real Business Operations"
            subtitle="Production-grade platforms deployed across manufacturing, commerce, and growing businesses."
          />
          <div className="stats-grid">
            {homeStats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Custom business systems engineered for the operational realities of each industry."
          />
          <IndustriesSection industries={industries} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Solutions"
            title="Business Systems We Build"
            subtitle="End-to-end platforms and modules that replace manual operations with scalable software."
          />
          <SolutionsSection solutions={solutions} />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Case Studies"
            title="Platforms in Production"
            subtitle="Three business operating systems — enterprise, commerce, and starter ERP — each built for daily operational use."
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
            eyebrow="Services"
            title="Full-Service Business Systems Engineering"
            subtitle="From discovery and architecture to development, deployment, and continuous evolution."
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Business Operations?"
        subtitle="I work with CEOs, factory owners, and founders who need enterprise software — not another website."
      />
    </>
  );
}

import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import CaseStudyCard from '../components/CaseStudyCard';
import CTASection from '../components/CTASection';
import { siteConfig } from '../data/site';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <>
      <PageMeta
        title={`Case Studies — ${siteConfig.name}`}
        description="Enterprise ERP, commerce, and starter business platforms built for manufacturing companies, fashion brands, and growing businesses."
      />

      <Hero
        eyebrow="Case Studies"
        headline="Systems That Run Businesses"
        subtitle="Three production-grade platforms — enterprise manufacturing, commerce operations, and starter ERP for SMBs."
        primaryCta={{ label: 'Ain Shams ERP', path: '/case-studies/ain-shams-press' }}
        secondaryCta={{ label: 'Minsal Commerce OS', path: '/case-studies/minsal-commerce-os' }}
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
        title="Need a Platform Built for Your Business?"
        subtitle="I partner with manufacturing companies, commerce brands, and growing businesses to design custom operating systems tailored to their workflows."
      />
    </>
  );
}

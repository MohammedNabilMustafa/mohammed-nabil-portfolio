import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { siteConfig } from '../data/site';
import { services } from '../data/services';

const process = [
  { step: '01', title: 'Discovery', text: 'Map current workflows, pain points, and data flows across every department.' },
  { step: '02', title: 'Architecture', text: 'Design module structure, database schema, roles, and integration points.' },
  { step: '03', title: 'Development', text: 'Build and deploy in phases — starting with highest-impact operational workflows.' },
  { step: '04', title: 'Evolution', text: 'Expand the platform as the business grows — new modules, dashboards, and automations.' },
];

export default function Services() {
  return (
    <>
      <PageMeta
        title={`Services — ${siteConfig.name}`}
        description="Custom ERP, CRM, finance, inventory, manufacturing, supply chain, AI assistants, and dashboard development for enterprise clients."
      />

      <Hero
        eyebrow="Services"
        headline="Complete Business Systems — Not Features"
        subtitle="I engineer custom platforms that map to how your company actually operates — from order intake to production, finance, and executive reporting."
        primaryCta={{ label: 'View Case Studies', path: '/case-studies' }}
        secondaryCta={{ label: "Let's Talk", path: '/contact' }}
        compact
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Capabilities"
            title="What I Deliver"
            subtitle="Every engagement starts with understanding your operations — then building the modules your team needs."
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
          <SectionHeader eyebrow="Process" title="How I Work" align="left" />
          <div className="process-grid">
            {process.map((item) => (
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

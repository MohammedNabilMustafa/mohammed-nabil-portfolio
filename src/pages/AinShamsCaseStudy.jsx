import PageMeta from '../components/PageMeta';
import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import ArchitectureSection from '../components/ArchitectureSection';
import WorkflowTimeline from '../components/WorkflowTimeline';
import ModuleGrid from '../components/ModuleGrid';
import { GalleryGrid } from '../components/ScreenshotPlaceholder';
import Screenshot from '../components/ScreenshotPlaceholder';
import {
  CaseStudyPageHero,
  ProseSection,
  ImpactList,
  BulletList,
} from '../components/CaseStudySections';
import { siteConfig } from '../data/site';
import { images } from '../data/assets';
import { ainShamsCaseStudy, featuredCaseStudies } from '../data/caseStudies';

export default function AinShamsCaseStudy() {
  const study = ainShamsCaseStudy;
  const metrics = featuredCaseStudies[0].metrics;

  return (
    <>
      <PageMeta
        title={`${study.title} — Case Study | ${siteConfig.name}`}
        description="Enterprise ERP platform for a printing and packaging manufacturer — 15+ modules, 50+ users, 90% operations digitized over 3 years."
      />

      <CaseStudyPageHero study={study} theme="enterprise">
        <p className="cs-hero__summary">{study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <Screenshot
            src={images.ainShamsDashboard}
            alt="Ain Shams Ainshams Assistant — AI-powered business operating system dashboard"
            title="Ainshams AI Assistant"
            description="Production, orders, clients, delivery & finance — powered by Google Gemini AI"
            variant="enterprise"
            large
          />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-grid stats-grid--4">
            {metrics.map((m, i) => (
              <StatCard
                key={m.label}
                value={parseInt(m.value.replace(/[^0-9]/g, ''), 10) || 0}
                suffix={m.value.includes('%') ? '%' : m.value.includes('+') ? '+' : ''}
                label={m.label}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <ProseSection title="Overview" content={study.overview} eyebrow="Case Study" />

      <ProseSection title="Business Challenge" alt eyebrow="Problem">
        <BulletList items={study.challenge} />
      </ProseSection>

      <ProseSection title="Solution" content={study.solution} eyebrow="Approach" />

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Platform" title="Core Modules" subtitle="15+ integrated modules covering every department — designed around real workflows." align="left" />
          <ModuleGrid modules={study.coreModules} variant="enterprise" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Operations" title="Manufacturing Workflow" subtitle="How orders move from intake through production, delivery, and finance." />
          <WorkflowTimeline steps={study.manufacturingWorkflow} variant="enterprise" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Engineering" title="System Architecture" subtitle="Layered architecture built for reliability, scalability, and multi-department operations." align="left" />
          <ArchitectureSection layers={study.architecture} variant="enterprise" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Stack" title="Technology Stack" align="left" />
          <div className="tech-row">
            {study.technologyStack.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title="Business Impact" alt eyebrow="Outcomes">
        <ImpactList items={study.businessImpact} theme="enterprise" />
      </ProseSection>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Platform" title="Gallery" subtitle="Screenshot placeholders — replace with actual platform captures." />
          <GalleryGrid items={study.gallery} variant="enterprise" />
        </div>
      </section>

      <ProseSection title="Results" alt eyebrow="Summary">
        <ImpactList items={study.results} theme="enterprise" />
      </ProseSection>

      <CTASection
        title="Want a Business Operating System for Your Company?"
        subtitle="I design and build custom ERP, CRM, and manufacturing platforms for companies ready to replace manual operations."
        secondaryLabel="View All Case Studies"
        secondaryPath="/case-studies"
      />
    </>
  );
}

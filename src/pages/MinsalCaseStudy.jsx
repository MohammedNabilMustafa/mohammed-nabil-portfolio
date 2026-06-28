import PageMeta from '../components/PageMeta';
import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import ArchitectureSection from '../components/ArchitectureSection';
import WorkflowTimeline from '../components/WorkflowTimeline';
import ModuleGrid from '../components/ModuleGrid';
import { GalleryGrid } from '../components/ScreenshotPlaceholder';
import {
  CaseStudyPageHero,
  ProseSection,
  ImpactList,
  BulletList,
} from '../components/CaseStudySections';
import { siteConfig } from '../data/site';
import { minsalCaseStudy, featuredCaseStudies } from '../data/caseStudies';

export default function MinsalCaseStudy() {
  const study = minsalCaseStudy;
  const metrics = featuredCaseStudies[1].metrics;

  return (
    <div className="theme-commerce">
      <PageMeta
        title={`${study.title} — Case Study | ${siteConfig.name}`}
        description="Full-stack commerce and business operating system for a fashion brand — Next.js, TypeScript, 81 routes, 7 core modules."
      />

      <CaseStudyPageHero study={study} theme="commerce">
        <p className="cs-hero__summary">{study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-grid stats-grid--3">
            {metrics.map((m, i) => (
              <StatCard
                key={m.label}
                value={parseInt(m.value.replace(/[^0-9]/g, ''), 10) || 0}
                suffix={m.value.includes('+') ? '+' : ''}
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
          <SectionHeader eyebrow="Platform" title="Core Modules" subtitle="Seven integrated business modules plus a command center dashboard." align="left" />
          <ModuleGrid modules={study.coreModules} variant="commerce" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Operations" title="Supply Chain Flow" subtitle="From sourcing to finance — every step connected inside one platform." />
          <WorkflowTimeline steps={study.supplyChainFlow} variant="commerce" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Engineering" title="System Architecture" subtitle="Dual-surface architecture — storefront and admin platform on a type-safe foundation." align="left" />
          <ArchitectureSection layers={study.architecture} variant="commerce" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Stack" title="Technology Stack" align="left" />
          <div className="tech-row">
            {study.technologyStack.map((t) => (
              <span key={t} className="chip chip--warm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title="Business Impact" alt eyebrow="Outcomes">
        <ImpactList items={study.businessImpact} theme="commerce" />
      </ProseSection>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Platform" title="Gallery" subtitle="Screenshot placeholders — replace with actual platform captures." />
          <GalleryGrid items={study.gallery} variant="commerce" />
        </div>
      </section>

      <ProseSection title="Results" alt eyebrow="Summary">
        <ImpactList items={study.results} theme="commerce" />
      </ProseSection>

      <CTASection
        theme="commerce"
        title="Building a Commerce Platform for Your Brand?"
        subtitle="I design full-stack e-commerce and operations systems that unify storefronts, admin tools, supply chain, and finance."
        secondaryLabel="View Ain Shams Case Study"
        secondaryPath="/case-studies/ain-shams-press"
      />
    </div>
  );
}

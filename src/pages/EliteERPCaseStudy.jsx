import PageMeta from '../components/PageMeta';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import ArchitectureSection from '../components/ArchitectureSection';
import ModuleGrid from '../components/ModuleGrid';
import { GalleryGrid } from '../components/ScreenshotPlaceholder';
import {
  CaseStudyPageHero,
  ProseSection,
  ImpactList,
  BulletList,
} from '../components/CaseStudySections';
import { siteConfig } from '../data/site';
import { eliteErpCaseStudy, featuredCaseStudies } from '../data/caseStudies';

export default function EliteERPCaseStudy() {
  const study = eliteErpCaseStudy;
  const metrics = featuredCaseStudies[2].metrics;

  return (
    <div className="theme-starter">
      <PageMeta
        title={`${study.title} — Case Study | ${siteConfig.name}`}
        description="Elite ERP — a lightweight business management platform for small and medium businesses. CRM, orders, inventory, finance, and dashboards."
      />

      <CaseStudyPageHero study={study} theme="starter">
        <p className="cs-hero__summary">{study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <div className="metrics-row metrics-row--starter">
            {metrics.map((m) => (
              <div key={m.label} className="metrics-row__item">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
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
          <SectionHeader eyebrow="Platform" title="Core Modules" subtitle="Essential business modules designed for SMB operations — without enterprise overhead." align="left" />
          <ModuleGrid modules={study.coreModules} variant="starter" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="Engineering" title="System Architecture" subtitle="Cloud-native, modular architecture optimized for small and medium businesses." align="left" />
          <ArchitectureSection layers={study.architecture} variant="starter" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Stack" title="Technology Stack" align="left" />
          <div className="tech-row">
            {study.technologyStack.map((t) => (
              <span key={t} className="chip chip--starter">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title="Business Impact" eyebrow="Outcomes">
        <ImpactList items={study.businessImpact} theme="starter" />
      </ProseSection>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow="Platform" title="Gallery" subtitle="Screenshot placeholders — replace with actual platform captures." />
          <GalleryGrid items={study.gallery} variant="starter" />
        </div>
      </section>

      <ProseSection title="Results" eyebrow="Summary">
        <ImpactList items={study.results} theme="starter" />
      </ProseSection>

      <CTASection
        theme="starter"
        title="Need a Starter ERP for Your Business?"
        subtitle="I build focused business management platforms for SMBs ready to move beyond spreadsheets — and scale when they grow."
        secondaryLabel="View Ain Shams Case Study"
        secondaryPath="/case-studies/ain-shams-press"
      />
    </div>
  );
}

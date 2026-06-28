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
import { useLanguage } from '../i18n/LanguageContext';

export default function MinsalCaseStudy() {
  const { content } = useLanguage();
  const { meta, caseStudiesDetail, featuredCaseStudies, caseStudySections: cs } = content;
  const study = caseStudiesDetail.minsal;
  const metrics = featuredCaseStudies.find((s) => s.slug === 'minsal-commerce-os')?.metrics || [];
  const cta = cs.ctaMinsal;

  return (
    <div className="theme-commerce">
      <PageMeta title={meta.minsal.title} description={meta.minsal.description} />

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

      <ProseSection title={cs.overview} content={study.overview} eyebrow={cs.caseStudy} />

      <ProseSection title={cs.challenge} alt eyebrow={cs.problem}>
        <BulletList items={study.challenge} />
      </ProseSection>

      <ProseSection title={cs.solution} content={study.solution} eyebrow={cs.approach} />

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.coreModules} subtitle={cs.modulesMinsal} align="left" />
          <ModuleGrid modules={study.coreModules} variant="commerce" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.operations} title={cs.supplyChainFlow} subtitle={cs.workflowMinsal} />
          <WorkflowTimeline steps={study.supplyChainFlow} variant="commerce" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.engineering} title={cs.architecture} subtitle={cs.archMinsal} align="left" />
          <ArchitectureSection layers={study.architecture} variant="commerce" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.stack} title={cs.techStack} align="left" />
          <div className="tech-row">
            {(study.technologyStack ?? []).map((t) => (
              <span key={t} className="chip chip--warm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title={cs.businessImpact} alt eyebrow={cs.outcomes}>
        <ImpactList items={study.businessImpact} theme="commerce" />
      </ProseSection>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.gallery} subtitle={cs.gallerySubtitle} />
          <GalleryGrid items={study.gallery} variant="commerce" />
        </div>
      </section>

      <ProseSection title={cs.results} alt eyebrow={cs.summary}>
        <ImpactList items={study.results} theme="commerce" />
      </ProseSection>

      <CTASection
        theme="commerce"
        title={cta.title}
        subtitle={cta.subtitle}
        secondaryLabel={cta.secondary}
        secondaryPath="/case-studies/ain-shams-press"
      />
    </div>
  );
}

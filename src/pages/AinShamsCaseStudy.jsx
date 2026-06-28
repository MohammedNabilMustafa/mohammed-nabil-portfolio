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
import { useLanguage } from '../i18n/LanguageContext';
import { images } from '../data/assets';

export default function AinShamsCaseStudy() {
  const { content } = useLanguage();
  const { meta, caseStudiesDetail, featuredCaseStudies, caseStudySections: cs } = content;
  const study = caseStudiesDetail.ainShams;
  const metrics = featuredCaseStudies.find((s) => s.slug === 'ain-shams-press')?.metrics || [];
  const cta = cs.ctaAinShams;

  return (
    <>
      <PageMeta title={meta.ainShams.title} description={meta.ainShams.description} />

      <CaseStudyPageHero study={study} theme="enterprise">
        <p className="cs-hero__summary">{study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <Screenshot
            src={images.ainShams.mainDashboard}
            alt="Ain Shams Ainshams AI Assistant — system search, quick actions, and command interface"
            title="Ainshams AI Assistant"
            description={cs.aiAssistantCaption}
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

      <ProseSection title={cs.overview} content={study.overview} eyebrow={cs.caseStudy} />

      <ProseSection title={cs.challenge} alt eyebrow={cs.problem}>
        <BulletList items={study.challenge} />
      </ProseSection>

      <ProseSection title={cs.solution} content={study.solution} eyebrow={cs.approach} />

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.coreModules} subtitle={cs.modulesAinShams} align="left" />
          <ModuleGrid modules={study.coreModules} variant="enterprise" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.operations} title={cs.manufacturingWorkflow} subtitle={cs.workflowAinShams} />
          <WorkflowTimeline steps={study.manufacturingWorkflow} variant="enterprise" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.engineering} title={cs.architecture} subtitle={cs.archAinShams} align="left" />
          <ArchitectureSection layers={study.architecture} variant="enterprise" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.stack} title={cs.techStack} align="left" />
          <div className="tech-row">
            {(study.technologyStack ?? []).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title={cs.businessImpact} alt eyebrow={cs.outcomes}>
        <ImpactList items={study.businessImpact} theme="enterprise" />
      </ProseSection>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.gallery} subtitle={cs.gallerySubtitle} />
          <GalleryGrid items={study.gallery} variant="enterprise" />
        </div>
      </section>

      <ProseSection title={cs.results} alt eyebrow={cs.summary}>
        <ImpactList items={study.results} theme="enterprise" />
      </ProseSection>

      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        secondaryLabel={cta.secondary}
        secondaryPath="/case-studies"
      />
    </>
  );
}

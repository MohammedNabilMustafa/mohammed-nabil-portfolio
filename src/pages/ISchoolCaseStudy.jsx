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

export default function ISchoolCaseStudy() {
  const { content } = useLanguage();
  const { meta, caseStudiesDetail, featuredCaseStudies, caseStudySections: cs } = content;
  const study = caseStudiesDetail.ischool;
  const metrics = featuredCaseStudies.find((s) => s.slug === 'ischool-lms')?.metrics || [];
  const cta = cs.ctaIschool;

  return (
    <div className="theme-education">
      <PageMeta title={meta.ischool.title} description={meta.ischool.description} />

      <CaseStudyPageHero study={study} theme="education">
        <p className="cs-hero__summary">{cs.ischoolHeroSummary || study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <div className="stats-grid stats-grid--4">
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
          <SectionHeader eyebrow={cs.platform} title={cs.coreModules} subtitle={cs.modulesIschool} align="left" />
          <ModuleGrid modules={study.coreModules} variant="education" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.scale} title={cs.platformScale} subtitle={cs.platformScaleSubtitle} />
          <div className="scale-grid">
            {(study.platformScale ?? []).map((item) => (
              <div key={item.label} className="scale-card">
                <strong>{item.value}</strong>
                <span className="scale-card__label">{item.label}</span>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.operations} title={cs.educationWorkflow} subtitle={cs.workflowIschool} />
          <WorkflowTimeline steps={study.educationWorkflow} variant="education" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.engineering} title={cs.architecture} subtitle={cs.archIschool} align="left" />
          <ArchitectureSection layers={study.architecture} variant="education" />
        </div>
      </section>

      <section className="section section--alt">
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
        <ImpactList items={study.businessImpact} theme="education" />
      </ProseSection>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.gallery} subtitle={cs.gallerySubtitleIschool} />
          <GalleryGrid items={study.gallery} variant="education" />
        </div>
      </section>

      <ProseSection title={cs.lessonsLearned} alt eyebrow={cs.summary}>
        <ImpactList items={study.lessonsLearned} theme="education" />
      </ProseSection>

      <ProseSection title={cs.results} alt eyebrow={cs.outcomes}>
        <ImpactList items={study.results} theme="education" />
      </ProseSection>

      <CTASection
        title={cta.title}
        subtitle={cta.subtitle}
        secondaryLabel={cta.secondary}
        secondaryPath="/case-studies"
      />
    </div>
  );
}

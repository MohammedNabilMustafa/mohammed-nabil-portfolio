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
import { useLanguage } from '../i18n/LanguageContext';
import { images } from '../data/assets';
import Screenshot from '../components/ScreenshotPlaceholder';

export default function EliteERPCaseStudy() {
  const { content } = useLanguage();
  const { meta, caseStudiesDetail, featuredCaseStudies, caseStudySections: cs } = content;
  const study = caseStudiesDetail.elite;
  const metrics = featuredCaseStudies.find((s) => s.slug === 'elite-erp')?.metrics || [];
  const cta = cs.ctaElite;

  return (
    <div className="theme-starter">
      <PageMeta title={meta.elite.title} description={meta.elite.description} />

      <CaseStudyPageHero study={study} theme="starter">
        <p className="cs-hero__summary">{study.overview}</p>
      </CaseStudyPageHero>

      <section className="section section--tight">
        <div className="container">
          <Screenshot
            src={images.elite.dashboard}
            alt="Elite ERP executive dashboard with clients, merchants, materials, safes, and stock metrics"
            title="Executive Dashboard"
            description={study.gallery[0]?.description}
            variant="starter"
            large
          />
        </div>
      </section>

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

      <ProseSection title={cs.overview} content={study.overview} eyebrow={cs.caseStudy} />

      <ProseSection title={cs.challenge} alt eyebrow={cs.problem}>
        <BulletList items={study.challenge} />
      </ProseSection>

      <ProseSection title={cs.solution} content={study.solution} eyebrow={cs.approach} />

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.coreModules} subtitle={cs.modulesElite} align="left" />
          <ModuleGrid modules={study.coreModules} variant="starter" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader eyebrow={cs.engineering} title={cs.architecture} subtitle={cs.archElite} align="left" />
          <ArchitectureSection layers={study.architecture} variant="starter" />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.stack} title={cs.techStack} align="left" />
          <div className="tech-row">
            {(study.technologyStack ?? []).map((t) => (
              <span key={t} className="chip chip--starter">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <ProseSection title={cs.businessImpact} eyebrow={cs.outcomes}>
        <ImpactList items={study.businessImpact} theme="starter" />
      </ProseSection>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader eyebrow={cs.platform} title={cs.gallery} subtitle={cs.gallerySubtitleElite || cs.gallerySubtitle} />
          <GalleryGrid items={study.gallery} variant="starter" />
        </div>
      </section>

      <ProseSection title={cs.results} eyebrow={cs.summary}>
        <ImpactList items={study.results} theme="starter" />
      </ProseSection>

      <CTASection
        theme="starter"
        title={cta.title}
        subtitle={cta.subtitle}
        secondaryLabel={cta.secondary}
        secondaryPath="/case-studies/ain-shams-press"
      />
    </div>
  );
}

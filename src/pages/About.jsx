import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { content } = useLanguage();
  const { meta, about, aboutPage, hero, cta } = content;

  return (
    <>
      <PageMeta title={meta.about.title} description={meta.about.description} />

      <Hero
        eyebrow={aboutPage.eyebrow}
        headline={about.headline}
        subtitle={about.intro}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        compact
        align="left"
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeader title={aboutPage.storyTitle} align="left" eyebrow={aboutPage.storyEyebrow} />
          <div className="prose-stack">
            {(about.story ?? []).map((p) => (
              <p key={p.slice(0, 48)} className="prose">{p}</p>
            ))}
          </div>
          <p className="about-closing">{about.closing}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow={aboutPage.approachEyebrow}
            title={aboutPage.approachTitle}
            subtitle={aboutPage.approachSubtitle}
          />
          <div className="approach-grid">
            {(about.approach ?? []).map((item, i) => (
              <motion.article
                key={item.title}
                className="approach-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <span className="approach-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={cta.aboutTitle} subtitle={cta.aboutSubtitle} />
    </>
  );
}

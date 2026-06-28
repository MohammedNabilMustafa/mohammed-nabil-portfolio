import { motion } from 'framer-motion';
import PageMeta from '../components/PageMeta';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { aboutContent, siteConfig } from '../data/site';

export default function About() {
  return (
    <>
      <PageMeta
        title={`About — ${siteConfig.name}`}
        description="Business Systems Engineer who builds custom ERP, CRM, and enterprise platforms — focused on solving business problems, not writing code for its own sake."
      />

      <Hero
        eyebrow="About"
        headline={aboutContent.headline}
        subtitle={aboutContent.intro}
        primaryCta={{ label: 'View Case Studies', path: '/case-studies' }}
        secondaryCta={{ label: "Let's Talk", path: '/contact' }}
        compact
        align="left"
      />

      <section className="section">
        <div className="container container--narrow">
          <SectionHeader title="The Story" align="left" eyebrow="Philosophy" />
          <div className="prose-stack">
            {aboutContent.story.map((p) => (
              <p key={p.slice(0, 48)} className="prose">{p}</p>
            ))}
          </div>
          <p className="about-closing">{aboutContent.closing}</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Approach"
            title="How I Think About Software"
            subtitle="Business problems first. Architecture second. Code third."
          />
          <div className="approach-grid">
            {aboutContent.approach.map((item, i) => (
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

      <CTASection
        title="Let's Build the System Your Business Needs"
        subtitle="I work with leaders who are ready to move beyond spreadsheets and disconnected tools."
      />
    </>
  );
}

import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeader from './SectionHeader';

export function CaseStudyPageHero({ study, backPath = '/case-studies', theme = 'enterprise', children }) {
  const { content } = useLanguage();
  const backLabel = content.caseStudySections.backLink;

  return (
    <section className={`cs-hero cs-hero--${theme}`}>
      <div className="cs-hero__ambient" aria-hidden="true" />
      <div className="container">
        <Link to={backPath} className="back-link">
          <ArrowLeft size={15} />
          {backLabel}
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="cs-hero__meta">
            <span className="chip">{study.industry}</span>
            <span className="chip chip--muted">{study.duration}</span>
          </div>
          <h1>{study.title}</h1>
          <p className="cs-hero__client">{study.client}</p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export function ProseSection({ title, content, children, alt = false, eyebrow }) {
  return (
    <section className={`section${alt ? ' section--alt' : ''}`}>
      <div className="container container--narrow">
        <SectionHeader title={title} eyebrow={eyebrow} align="left" />
        {content && <p className="prose">{content}</p>}
        {children}
      </div>
    </section>
  );
}

export function ImpactList({ items = [], theme = 'default' }) {
  return (
    <ul className={`impact-list impact-list--${theme}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={17} strokeWidth={2} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function BulletList({ items = [] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

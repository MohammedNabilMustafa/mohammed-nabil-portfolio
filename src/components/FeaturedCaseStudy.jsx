import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Screenshot from './ScreenshotPlaceholder';

export default function FeaturedCaseStudy({ study, index = 0, reversed = false }) {
  const { content } = useLanguage();
  const { common } = content;
  const metrics = study.metrics ?? [];

  const linkClass = {
    enterprise: '',
    commerce: ' featured-case-study__link--warm',
    starter: ' featured-case-study__link--starter',
  }[study.variant] || '';

  return (
    <motion.article
      className={`featured-case-study featured-case-study--${study.variant}${reversed ? ' featured-case-study--reversed' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="featured-case-study__visual">
        <Screenshot
          src={study.image}
          alt={study.imageAlt}
          title={study.title}
          description={study.image ? common.livePlatform : common.screenshotComingSoon}
          variant={study.variant}
          large
        />
      </div>

      <div className="featured-case-study__content">
        <p className="eyebrow">{study.subtitle}</p>
        <h3>{study.title}</h3>
        <p className="featured-case-study__desc">{study.description}</p>

        {study.modules && (
          <div className="featured-case-study__modules">
            {study.modules.map((m) => (
              <span key={m} className="chip">{m}</span>
            ))}
          </div>
        )}

        <div className="featured-case-study__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="featured-case-study__metric">
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {study.tech && (
          <div className="featured-case-study__tech">
            {study.tech.map((t) => (
              <span key={t} className="chip chip--muted">{t}</span>
            ))}
          </div>
        )}

        {study.path ? (
          <Link to={study.path} className={`featured-case-study__link${linkClass}`}>
            {common.viewCaseStudy}
            <ArrowRight size={16} />
          </Link>
        ) : (
          <span className="featured-case-study__coming">{common.caseStudyComingSoon}</span>
        )}
      </div>
    </motion.article>
  );
}

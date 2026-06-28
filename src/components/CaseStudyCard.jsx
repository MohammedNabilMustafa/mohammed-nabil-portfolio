import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Screenshot from './ScreenshotPlaceholder';

export default function CaseStudyCard({ study, index = 0 }) {
  const { content } = useLanguage();
  const { common } = content;
  const variant = study.variant || 'enterprise';

  return (
    <motion.article
      className={`case-card case-card--${variant}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="case-card__visual">
        <Screenshot
          src={study.image}
          alt={study.imageAlt}
          title={study.title}
          description={study.subtitle}
          variant={variant}
          large
        />
      </div>

      <div className="case-card__body">
        <div className="case-card__tags">
          {(study.tags ?? []).map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        <h3>{study.title}</h3>
        <p className="case-card__subtitle">{study.subtitle}</p>
        <p className="case-card__desc">{study.description}</p>

        <div className="case-card__stats">
          {(study.stats ?? []).map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="case-card__tech">
          {(study.tech ?? []).slice(0, 6).map((t) => (
            <span key={t} className="chip chip--muted">{t}</span>
          ))}
        </div>

        <Link to={study.path} className="case-card__link">
          {common.viewDetails}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryPath = '/contact',
  secondaryLabel,
  secondaryPath,
  theme = 'default',
}) {
  const { content } = useLanguage();
  const { cta, common } = content;

  const resolvedTitle = title ?? cta.defaultTitle;
  const resolvedSubtitle = subtitle ?? cta.defaultSubtitle;
  const resolvedPrimary = primaryLabel ?? common.letsTalk;

  return (
    <section className={`cta-section cta-section--${theme}`}>
      <div className="container">
        <motion.div
          className="cta-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
        >
          <h2>{resolvedTitle}</h2>
          <p>{resolvedSubtitle}</p>
          <div className="cta-panel__actions">
            <Link to={primaryPath} className="btn btn--primary">
              {resolvedPrimary}
              <ArrowRight size={17} />
            </Link>
            {secondaryLabel && secondaryPath && (
              <Link to={secondaryPath} className="btn btn--ghost">{secondaryLabel}</Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

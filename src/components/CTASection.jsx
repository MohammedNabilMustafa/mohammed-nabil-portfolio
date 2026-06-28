import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection({
  title = 'Ready to Transform Your Business Operations?',
  subtitle = 'Let\'s discuss how a custom ERP, CRM, or commerce platform can replace manual processes with scalable software.',
  primaryLabel = "Let's Talk",
  primaryPath = '/contact',
  secondaryLabel,
  secondaryPath,
  theme = 'default',
}) {
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
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta-panel__actions">
            <Link to={primaryPath} className="btn btn--primary">
              {primaryLabel}
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

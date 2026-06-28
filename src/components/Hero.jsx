import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({
  eyebrow,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  compact = false,
  align = 'center',
}) {
  return (
    <section className={`hero hero--${align}${compact ? ' hero--compact' : ''}`}>
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container hero__inner">
        {eyebrow && (
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {primaryCta && (
              <Link to={primaryCta.path} className="btn btn--primary">
                {primaryCta.label}
                <ArrowRight size={17} />
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.path} className="btn btn--ghost">
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

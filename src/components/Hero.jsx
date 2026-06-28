import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero({
  eyebrow,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  stats = [],
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

        {stats.length > 0 && (
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

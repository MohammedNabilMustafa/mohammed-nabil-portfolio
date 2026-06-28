import { motion } from 'framer-motion';

export default function ModuleGrid({ modules, variant = 'default' }) {
  return (
    <div className="module-grid">
      {modules.map((mod, i) => (
        <motion.article
          key={mod.name}
          className={`module-card module-card--${variant}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
        >
          <span className="module-card__idx">{String(i + 1).padStart(2, '0')}</span>
          <h3>{mod.name}</h3>
          <p>{mod.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

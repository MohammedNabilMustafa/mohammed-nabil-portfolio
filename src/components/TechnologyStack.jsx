import { motion } from 'framer-motion';

export default function TechnologyStack({ items = [] }) {
  return (
    <div className="tech-stack-grid">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          className="tech-stack-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <span className="tech-stack-card__category">{item.category}</span>
          <div className="tech-stack-card__tools">
            {item.tools.map((tool) => (
              <span key={tool} className="chip chip--muted">{tool}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

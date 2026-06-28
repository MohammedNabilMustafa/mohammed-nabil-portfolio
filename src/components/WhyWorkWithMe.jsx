import { motion } from 'framer-motion';

export default function WhyWorkWithMe({ items = [] }) {
  return (
    <div className="why-grid">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          className="why-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: i * 0.07 }}
        >
          <span className="why-card__num">{String(i + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}

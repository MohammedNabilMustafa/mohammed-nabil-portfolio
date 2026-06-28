import { motion } from 'framer-motion';

export default function IndustriesSection({ industries }) {
  return (
    <div className="industries-grid">
      {industries.map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            className="industry-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="industry-card__icon">
              <Icon size={20} strokeWidth={1.6} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        );
      })}
    </div>
  );
}

import { Database } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  const ResolvedIcon = Icon || Database;
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
    >
      <div className="service-card__icon"><ResolvedIcon size={20} strokeWidth={1.6} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

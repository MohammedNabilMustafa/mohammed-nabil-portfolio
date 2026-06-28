import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function SolutionsSection({ solutions = [] }) {
  const { content } = useLanguage();
  const { common } = content;

  return (
    <div className="solutions-grid">
      {solutions.map((item, i) => {
        const Icon = item.icon || Database;
        return (
          <motion.div
            key={item.title}
            className="solution-item"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <Icon size={18} strokeWidth={1.6} />
            <span>{item.title}</span>
          </motion.div>
        );
      })}
      <Link to="/services" className="solutions-link">
        {common.viewAllServices}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

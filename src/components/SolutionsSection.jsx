import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function SolutionsSection({ solutions = [] }) {
  const { content } = useLanguage();
  const { common } = content;

  return (
    <>
      <div className="solutions-cards">
        {solutions.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="solution-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              {Icon && <Icon size={20} strokeWidth={1.6} className="solution-card__icon" />}
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
            </motion.article>
          );
        })}
      </div>
      <Link to="/services" className="solutions-link">
        {common.viewAllServices}
        <ArrowRight size={15} />
      </Link>
    </>
  );
}

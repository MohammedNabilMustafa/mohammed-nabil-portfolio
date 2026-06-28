import { motion } from 'framer-motion';

export default function ArchitectureSection({ layers, variant = 'default' }) {
  return (
    <div className={`architecture architecture--${variant}`}>
      {layers.map((layer, i) => (
        <motion.div
          key={layer.layer}
          className="architecture__layer"
          initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="architecture__label">{layer.layer}</div>
          <div className="architecture__items">
            {layer.items.map((item) => (
              <span key={item} className="chip chip--muted">{item}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

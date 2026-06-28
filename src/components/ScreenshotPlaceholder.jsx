import { ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Screenshot({
  title,
  description,
  index = 0,
  variant = 'enterprise',
  large = false,
  src,
  alt,
}) {
  return (
    <motion.figure
      className={`screenshot${large ? ' screenshot--large' : ''} screenshot--${variant}${src ? ' screenshot--real' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="screenshot__frame">
        {src ? (
          <img src={src} alt={alt || title || 'Platform screenshot'} className="screenshot__img" loading="lazy" />
        ) : (
          <>
            <div className="screenshot__bar">
              <span /><span /><span />
            </div>
            <div className="screenshot__body">
              <ImageIcon size={large ? 36 : 28} strokeWidth={1.4} />
              <p>Screenshot Placeholder</p>
            </div>
          </>
        )}
      </div>
      {(title || description) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {description && <span>{description}</span>}
        </figcaption>
      )}
    </motion.figure>
  );
}

export function GalleryGrid({ items, variant = 'enterprise' }) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <Screenshot key={item.title} {...item} index={i} variant={variant} />
      ))}
    </div>
  );
}

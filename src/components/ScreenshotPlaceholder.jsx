import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ImageIcon, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

function ScreenshotLightbox({ src, alt, title, description, onClose }) {
  const { content } = useLanguage();
  const { viewScreenshot, closeLightbox } = content.common;

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="screenshot-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title || alt || viewScreenshot}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        type="button"
        className="screenshot-lightbox__close"
        aria-label={closeLightbox}
        onClick={onClose}
      >
        <X size={22} />
      </button>

      <motion.figure
        className="screenshot-lightbox__content"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="screenshot__crop screenshot-lightbox__crop">
          <img
            src={src}
            alt={alt || title || 'Platform screenshot'}
            className="screenshot__img"
          />
        </div>
        {(title || description) && (
          <figcaption className="screenshot-lightbox__caption">
            {title && <strong>{title}</strong>}
            {description && <span>{description}</span>}
          </figcaption>
        )}
      </motion.figure>
    </motion.div>,
    document.body
  );
}

export default function Screenshot({
  title,
  description,
  index = 0,
  variant = 'enterprise',
  large = false,
  src,
  alt,
}) {
  const { content } = useLanguage();
  const { screenshotPlaceholder, viewScreenshot } = content.common;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => {
    if (src) setLightboxOpen(true);
  }, [src]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <motion.figure
        className={`screenshot${large ? ' screenshot--large' : ''} screenshot--${variant}${src ? ' screenshot--real' : ''}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        <div className="screenshot__frame">
          {src ? (
            <button
              type="button"
              className="screenshot__trigger"
              onClick={openLightbox}
              aria-label={`${viewScreenshot}${title ? `: ${title}` : ''}`}
            >
              <div className="screenshot__crop">
                <img src={src} alt={alt || title || 'Platform screenshot'} className="screenshot__img" loading="lazy" />
              </div>
            </button>
          ) : (
            <>
              <div className="screenshot__bar">
                <span /><span /><span />
              </div>
              <div className="screenshot__body">
                <ImageIcon size={large ? 36 : 28} strokeWidth={1.4} />
                <p>{screenshotPlaceholder}</p>
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

      <AnimatePresence>
        {lightboxOpen && (
          <ScreenshotLightbox
            src={src}
            alt={alt}
            title={title}
            description={description}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export function GalleryGrid({ items = [], variant = 'enterprise' }) {
  return (
    <div className="gallery-grid">
      {items.map((item, i) => (
        <Screenshot key={item.title} {...item} index={i} variant={variant} />
      ))}
    </div>
  );
}

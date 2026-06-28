import { useEffect } from 'react';

export default function PageMeta({ title, description, type = 'website' }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', type, 'property');
  }, [title, description, type]);

  return null;
}

export function JsonLd({ data }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = 'json-ld';
    const existing = document.getElementById('json-ld');
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [data]);

  return null;
}

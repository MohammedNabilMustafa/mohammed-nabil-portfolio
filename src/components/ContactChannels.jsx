import { Briefcase, Code2, Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Mail, Phone, MessageCircle, Briefcase, Code2];
const hrefs = [
  `mailto:${siteConfig.email}`,
  `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  `https://wa.me/${siteConfig.whatsapp}`,
  siteConfig.linkedin,
  siteConfig.github,
];
const external = [false, false, true, true, true];

export default function ContactChannels() {
  const { content } = useLanguage();
  const channels = content.contactChannels ?? [];

  return (
    <div className="contact-channels">
      {channels.map(({ label, value }, i) => {
        const Icon = icons[i];
        return (
          <a
            key={label}
            href={hrefs[i]}
            className="contact-channel"
            {...(external[i] ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <div className="contact-channel__icon"><Icon size={20} strokeWidth={1.6} /></div>
            <div>
              <strong>{label}</strong>
              <span>{value}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
}

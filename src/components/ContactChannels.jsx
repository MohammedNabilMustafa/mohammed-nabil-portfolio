import { Briefcase, Code2, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

const CHANNEL_META = {
  Email: {
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  LinkedIn: {
    icon: Briefcase,
    href: siteConfig.linkedin,
    external: true,
  },
  WhatsApp: {
    icon: MessageCircle,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
  GitHub: {
    icon: Code2,
    href: siteConfig.github,
    external: true,
  },
};

export default function ContactChannels() {
  const { content } = useLanguage();
  const channels = content.contactChannels ?? [];

  return (
    <div className="contact-channels">
      {channels.map(({ label, value }) => {
        const meta = CHANNEL_META[label];
        if (!meta) return null;
        const Icon = meta.icon;

        return (
          <a
            key={label}
            href={meta.href}
            className="contact-channel"
            {...(meta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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

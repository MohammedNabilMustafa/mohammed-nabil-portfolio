import { Briefcase, Code2, Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../data/site';

const channels = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Send a message', href: `https://wa.me/${siteConfig.whatsapp}` },
  { icon: Briefcase, label: 'LinkedIn', value: 'Connect on LinkedIn', href: siteConfig.linkedin, external: true },
  { icon: Code2, label: 'GitHub', value: 'View repositories', href: siteConfig.github, external: true },
];

export default function ContactChannels() {
  return (
    <div className="contact-channels">
      {channels.map(({ icon: Icon, label, value, href, external }) => (
        <a
          key={label}
          href={href}
          className="contact-channel"
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <div className="contact-channel__icon"><Icon size={20} strokeWidth={1.6} /></div>
          <div>
            <strong>{label}</strong>
            <span>{value}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Layers, User, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const NAV_ICONS = {
  '/': Home,
  '/case-studies': Briefcase,
  '/services': Layers,
  '/about': User,
  '/contact': MessageCircle,
};

export default function MobileBottomNav() {
  const { content } = useLanguage();
  const { navLinks = [] } = content;

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      {navLinks.map((link) => {
        const Icon = NAV_ICONS[link.path] ?? Home;
        return (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            className={({ isActive }) =>
              `bottom-nav__item${isActive ? ' is-active' : ''}`
            }
          >
            <Icon size={20} strokeWidth={1.75} aria-hidden />
            <span>{link.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}

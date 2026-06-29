import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { content } = useLanguage();
  const { navLinks = [], site, common } = content;
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20));

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand">
          <BrandLogo size={34} className="navbar__logo" />
          <span className="navbar__name">
            {site.name}
            <small>{site.role}</small>
          </span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `navbar__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <LanguageSwitcher className="navbar__lang" />

        <Link to="/contact" className="btn btn--primary btn--sm navbar__cta">
          {common.letsTalk}
        </Link>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { navLinks, siteConfig } from '../data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="navbar__mark">MN</span>
            <div>
              <strong>{siteConfig.name}</strong>
              <span>{siteConfig.role}</span>
            </div>
          </Link>
          <p>{siteConfig.description}</p>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Case Studies</h4>
          <ul>
            <li><Link to="/case-studies/ain-shams-press">Ain Shams ERP</Link></li>
            <li><Link to="/case-studies/minsal-commerce-os">Minsal Commerce OS</Link></li>
            <li><Link to="/case-studies/elite-erp">Elite ERP</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <a href={`mailto:${siteConfig.email}`} className="footer__email">
            <Mail size={15} />
            {siteConfig.email}
          </a>
          <Link to="/contact" className="footer__link-cta">
            Let&apos;s Talk <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
        <p>Enterprise Business Systems Engineering</p>
      </div>
    </footer>
  );
}

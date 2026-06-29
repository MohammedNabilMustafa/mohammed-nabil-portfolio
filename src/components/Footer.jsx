import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { content } = useLanguage();
  const { navLinks = [], site, common, footerCaseStudies = {} } = content;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <BrandLogo size={34} className="navbar__logo" />
            <div>
              <strong>{site.name}</strong>
              <span>{site.role}</span>
            </div>
          </Link>
          <p>{site.description}</p>
        </div>

        <div className="footer__col">
          <h4>{common.footer.navigate}</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{common.footer.caseStudies}</h4>
          <ul>
            <li><Link to="/case-studies/ischool-lms">{footerCaseStudies.ischool}</Link></li>
            <li><Link to="/case-studies/ain-shams-press">{footerCaseStudies.ainShams}</Link></li>
            <li><Link to="/case-studies/minsal-commerce-os">{footerCaseStudies.minsal}</Link></li>
            <li><Link to="/case-studies/elite-erp">{footerCaseStudies.elite}</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{common.footer.contact}</h4>
          <a href={`mailto:${site.email}`} className="footer__email">
            <Mail size={15} />
            {site.email}
          </a>
          <Link to="/contact" className="footer__link-cta">
            {common.letsTalk} <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {site.name}. {common.footer.rights}</p>
        <p>{common.footer.tagline}</p>
      </div>
    </footer>
  );
}

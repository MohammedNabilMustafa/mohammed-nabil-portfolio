import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import MobileBottomNav from './MobileBottomNav';
import Footer from './Footer';
import { useLanguage } from '../i18n/LanguageContext';

export default function Layout() {
  const { lang } = useLanguage();

  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <Outlet key={lang} />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}

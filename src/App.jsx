import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import ISchoolCaseStudy from './pages/ISchoolCaseStudy';
import AinShamsCaseStudy from './pages/AinShamsCaseStudy';
import MinsalCaseStudy from './pages/MinsalCaseStudy';
import EliteERPCaseStudy from './pages/EliteERPCaseStudy';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/ischool-lms" element={<ISchoolCaseStudy />} />
          <Route path="/case-studies/ain-shams-press" element={<AinShamsCaseStudy />} />
          <Route path="/case-studies/minsal-commerce-os" element={<MinsalCaseStudy />} />
          <Route path="/case-studies/elite-erp" element={<EliteERPCaseStudy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import en from './translations/en';
import { industryIcons, solutionIcons, serviceIcons } from './contentIcons';
import { siteConfig as baseSiteConfig } from '../data/site';
import {
  featuredCaseStudies as enFeatured,
  caseStudies as enCaseStudiesList,
  ainShamsCaseStudy,
  minsalCaseStudy,
  eliteErpCaseStudy,
} from '../data/caseStudies';

const CASE_STUDY_KEYS = {
  'ain-shams-press': 'ainShams',
  'minsal-commerce-os': 'minsal',
  'elite-erp': 'elite',
};

const EN_DETAIL = {
  ainShams: ainShamsCaseStudy,
  minsal: minsalCaseStudy,
  elite: eliteErpCaseStudy,
};

function mergeGallery(enGallery, arGallery) {
  const base = enGallery ?? [];
  const localized = arGallery ?? [];
  return base.map((item, i) => ({
    ...item,
    ...(localized[i] || {}),
    src: item.src,
    alt: item.alt || localized[i]?.alt,
  }));
}

function mergeCaseStudyDetail(enStudy, arStudy) {
  if (!arStudy) return enStudy;
  return {
    ...enStudy,
    ...arStudy,
    challenge: arStudy.challenge ?? enStudy.challenge ?? [],
    coreModules: arStudy.coreModules ?? enStudy.coreModules ?? [],
    manufacturingWorkflow: arStudy.manufacturingWorkflow ?? enStudy.manufacturingWorkflow ?? [],
    supplyChainFlow: arStudy.supplyChainFlow ?? enStudy.supplyChainFlow ?? [],
    architecture: arStudy.architecture ?? enStudy.architecture ?? [],
    technologyStack: arStudy.technologyStack ?? enStudy.technologyStack ?? [],
    businessImpact: arStudy.businessImpact ?? enStudy.businessImpact ?? [],
    results: arStudy.results ?? enStudy.results ?? [],
    gallery: mergeGallery(enStudy.gallery, arStudy.gallery),
  };
}

function normalizeCommon(raw, lang) {
  if (lang === 'en') return raw.common;

  const c = raw.common;
  return {
    ...c,
    letsTalk: c.buttons.letsTalk,
    viewCaseStudies: c.buttons.viewCaseStudies,
    viewCaseStudy: c.buttons.viewCaseStudy,
    viewDetails: c.buttons.viewDetails,
    viewAllServices: c.buttons.viewAllServices,
    startConversation: c.buttons.startConversation,
    allCaseStudies: c.buttons.allCaseStudies,
    readCaseStudy: c.buttons.readCaseStudy,
    backToCaseStudies: c.buttons.backToCaseStudies,
    messageThanks: c.messageReceivedNote,
    lang: { en: 'EN', ar: 'AR' },
    livePlatform: c.livePlatform,
    screenshotComingSoon: c.screenshotComingSoon,
    caseStudyComingSoon: c.caseStudyComingSoon,
    openMenu: c.openMenu,
    closeMenu: c.closeMenu,
    viewScreenshot: c.viewScreenshot,
    closeLightbox: c.closeLightbox,
    footer: {
      ...c.footer,
      rights: c.footer.allRightsReserved,
    },
    form: {
      name: c.form.fullName,
      email: c.form.email,
      company: c.form.company,
      message: c.form.businessRequirements,
      namePlaceholder: c.form.namePlaceholder,
      emailPlaceholder: c.form.emailPlaceholder,
      companyPlaceholder: c.form.companyPlaceholder,
      messagePlaceholder: c.form.messagePlaceholder,
    },
  };
}

function buildCaseStudySections(raw, lang) {
  if (lang === 'en') {
    return {
      ...en.caseStudySections,
      caseStudy: en.common.caseStudyEyebrow,
      problem: en.common.problem,
      approach: en.common.approach,
      outcomes: en.common.outcomes,
      summary: en.common.summary,
      stack: en.common.stack,
      platform: en.common.platform,
      gallery: en.common.gallery,
      backLink: en.common.allCaseStudies,
      gallerySubtitle: en.common.gallerySubtitle,
      aiAssistantCaption: en.caseStudySections.aiAssistantCaption,
    };
  }

  const s = raw.common.sections;
  const ain = raw.caseStudies.ainShams.sectionSubtitles || {};
  const minsal = raw.caseStudies.minsal.sectionSubtitles || {};
  const elite = raw.caseStudies.elite.sectionSubtitles || {};

  return {
    overview: s.overview,
    challenge: s.businessChallenge,
    solution: s.solution,
    coreModules: s.coreModules,
    manufacturingWorkflow: s.manufacturingWorkflow,
    supplyChainFlow: s.supplyChainFlow,
    architecture: s.systemArchitecture,
    techStack: s.technologyStack,
    businessImpact: s.businessImpact,
    results: s.results,
    operations: s.operations,
    engineering: s.engineering,
    platform: s.platform,
    gallery: s.gallery,
    caseStudy: raw.common.caseStudyEyebrow,
    problem: raw.common.problem,
    approach: raw.common.approach,
    outcomes: raw.common.outcomes,
    summary: raw.common.summary,
    stack: raw.common.stack,
    backLink: raw.common.buttons.allCaseStudies,
    gallerySubtitle: ain.gallery || raw.common.gallery,
    aiAssistantCaption: ain.heroScreenshot,
    modulesAinShams: ain.coreModules,
    modulesMinsal: minsal.coreModules,
    modulesElite: elite.coreModules,
    archAinShams: ain.systemArchitecture,
    archMinsal: minsal.systemArchitecture,
    archElite: elite.systemArchitecture,
    workflowAinShams: ain.manufacturingWorkflow,
    workflowMinsal: minsal.supplyChainFlow,
    ctaAinShams: {
      ...raw.caseStudies.ainShams.cta,
      secondary: raw.common.buttons.allCaseStudies,
    },
    ctaMinsal: {
      ...raw.caseStudies.minsal.cta,
      secondary: raw.caseStudies.minsal.cta.secondaryLabel || 'Ain Shams ERP',
    },
    ctaElite: {
      ...raw.caseStudies.elite.cta,
      secondary: raw.caseStudies.elite.cta.secondaryLabel || raw.common.buttons.allCaseStudies,
    },
  };
}

function buildContactChannels(raw, lang) {
  if (lang === 'en') {
    return (en.contactChannels ?? []).map((item) => ({ ...item }));
  }

  const c = raw.contactChannels;
  return [
    { label: c.email.label, value: c.email.value },
    { label: c.phone.label, value: c.phone.value },
    { label: c.whatsapp.label, value: c.whatsapp.value },
    { label: c.linkedin.label, value: c.linkedin.value },
    { label: c.github.label, value: c.github.value },
  ];
}

export function buildContent(lang, rawAr) {
  const raw = lang === 'ar' ? rawAr : en;
  if (!raw) {
    throw new Error('Missing translation data');
  }

  const common = normalizeCommon(raw, lang);
  if (!common?.nav) {
    throw new Error('Invalid translation structure');
  }

  const industries = (raw.industries ?? []).map((item, i) => ({
    ...item,
    icon: industryIcons[i],
  }));

  const solutions = (raw.solutions ?? []).map((item, i) => ({
    ...item,
    icon: solutionIcons[i],
  }));

  const services = (raw.services ?? []).map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
  }));

  const stats = (raw.stats ?? []).map((item, i) => ({
    ...(en.stats?.[i] ?? {}),
    ...item,
  }));

  const featuredCaseStudies = (enFeatured ?? []).map((base) => {
    if (lang === 'en') return base;
    const loc = raw.featuredCaseStudies?.[base.slug];
    return {
      ...base,
      ...(loc ?? {}),
      image: base.image,
      imageAlt: base.imageAlt,
      path: base.path,
      variant: base.variant,
      tech: base.tech,
      tags: loc?.tags ?? base.tags,
      metrics: loc?.metrics ?? base.metrics,
      modules: loc?.modules ?? base.modules,
    };
  });

  const caseStudies = (enCaseStudiesList ?? []).map((base) => {
    if (lang === 'en') return base;
    const loc = raw.featuredCaseStudies[base.slug];
    return {
      ...base,
      title: loc?.title || base.title,
      subtitle: loc?.subtitle || base.subtitle,
      description: loc?.description || base.description,
      excerpt: loc?.description || base.excerpt,
      tags: loc?.tags || base.tags,
      stats: loc?.metrics?.slice(0, 4) || base.stats,
    };
  });

  const caseStudiesDetail = {
    ainShams: mergeCaseStudyDetail(
      EN_DETAIL.ainShams,
      lang === 'ar' ? raw.caseStudies.ainShams : en.caseStudies.ainShams
    ),
    minsal: mergeCaseStudyDetail(
      EN_DETAIL.minsal,
      lang === 'ar' ? raw.caseStudies.minsal : en.caseStudies.minsal
    ),
    elite: mergeCaseStudyDetail(
      EN_DETAIL.elite,
      lang === 'ar' ? raw.caseStudies.elite : en.caseStudies.elite
    ),
  };

  const navLinks = [
    { path: '/', label: common.nav.home },
    { path: '/case-studies', label: common.nav.caseStudies },
    { path: '/services', label: common.nav.services },
    { path: '/about', label: common.nav.about },
    { path: '/contact', label: common.nav.contact },
  ];

  const site = {
    ...baseSiteConfig,
    name: baseSiteConfig.name,
    role: raw.site.role,
    tagline: raw.site.tagline,
    description: raw.site.description,
    location: raw.site.location,
  };

  const hero = {
    ...raw.site.hero,
    primaryCta: { label: common.viewCaseStudies, path: '/case-studies' },
    secondaryCta: { label: common.letsTalk, path: '/contact' },
  };

  const servicesPage =
    lang === 'en'
      ? {
          hero: en.servicesPage.hero,
          deliver: en.servicesPage.deliver,
          process: en.servicesPage.process,
          steps: en.servicesPage.steps ?? [],
        }
      : {
          hero: raw.servicesPage.hero,
          deliver: raw.servicesPage.capabilities,
          process: raw.servicesPage.process,
          steps: raw.servicesPage.processSteps ?? [],
        };

  const cta =
    lang === 'en'
      ? en.cta
      : {
          ...raw.cta,
          aboutTitle: raw.aboutPage.cta.title,
          aboutSubtitle: raw.aboutPage.cta.subtitle,
        };

  const aboutPage =
    lang === 'en'
      ? {
          eyebrow: 'About',
          storyEyebrow: en.site.about.storyEyebrow || 'Philosophy',
          storyTitle: en.site.about.storyTitle || 'The Story',
          approachEyebrow: 'Approach',
          approachTitle: en.site.about.approachTitle,
          approachSubtitle: en.site.about.approachSubtitle,
        }
      : {
          eyebrow: common.nav.about,
          storyEyebrow: raw.common.sections.philosophy,
          storyTitle: raw.common.sections.theStory,
          approachEyebrow: raw.aboutPage.approachSection.eyebrow,
          approachTitle: raw.aboutPage.approachSection.title,
          approachSubtitle: raw.aboutPage.approachSection.subtitle,
        };

  return {
    common,
    navLinks,
    meta: raw.meta,
    site,
    hero,
    home: raw.home,
    stats,
    industries,
    solutions,
    services,
    servicesPage,
    caseStudiesPage: raw.caseStudiesPage,
    featuredCaseStudies,
    caseStudies,
    caseStudiesDetail,
    caseStudySections: buildCaseStudySections(raw, lang),
    cta,
    contactChannels: buildContactChannels(raw, lang),
    footerCaseStudies:
      lang === 'en' ? en.common.footerCaseStudies : raw.footerCaseStudies,
    about: {
      ...raw.site.about,
      story: raw.site.about?.story ?? [],
      approach: raw.site.about?.approach ?? [],
    },
    contact: {
      ...raw.site.contact,
      availability: lang === 'ar' ? common.availableFor : en.site.contact.availability,
    },
    caseStudyKeys: CASE_STUDY_KEYS,
  };
}

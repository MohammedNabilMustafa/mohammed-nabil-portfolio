import {
  featuredCaseStudies,
  ainShamsCaseStudy,
  minsalCaseStudy,
  eliteErpCaseStudy,
} from '../../data/caseStudies';

export default {
  common: {
    nav: {
      home: 'Home',
      caseStudies: 'Case Studies',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    letsTalk: "Let's Talk",
    viewCaseStudies: 'View Case Studies',
    viewCaseStudy: 'View Case Study',
    viewDetails: 'View Details',
    viewAllServices: 'View All Services',
    startConversation: 'Start a Conversation',
    allCaseStudies: 'All Case Studies',
    screenshotPlaceholder: 'Screenshot Placeholder',
    livePlatform: 'Live platform interface',
    caseStudyEyebrow: 'Case Study',
    problem: 'Problem',
    approach: 'Approach',
    outcomes: 'Outcomes',
    summary: 'Summary',
    stack: 'Stack',
    platform: 'Platform',
    gallery: 'Gallery',
    gallerySubtitle: 'Screenshot placeholders — replace with actual platform captures.',
    connectDirectly: 'Connect Directly',
    sendMessage: 'Send a Message',
    messageReceived: 'Message Received',
    messageThanks: 'Thank you for reaching out. Connect the form to your email backend to enable live submissions.',
    form: {
      name: 'Full Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      company: 'Company',
      companyPlaceholder: 'Company name',
      message: 'Business Requirements',
      messagePlaceholder: 'Describe your business challenges and what you need built...',
    },
    footer: {
      navigate: 'Navigate',
      caseStudies: 'Case Studies',
      contact: 'Contact',
      rights: 'All rights reserved.',
      tagline: 'Enterprise Business Systems Engineering',
    },
    footerCaseStudies: {
      ainShams: 'Ain Shams ERP',
      minsal: 'Minsal Commerce OS',
      elite: 'Elite ERP',
    },
    lang: { en: 'EN', ar: 'AR' },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    viewScreenshot: 'View',
    closeLightbox: 'Close',
    livePlatform: 'Live platform interface',
    screenshotComingSoon: 'Platform screenshot — coming soon',
    caseStudyComingSoon: 'Case study page coming soon',
  },

  meta: {
    home: {
      title: 'Mohammed Nabil — Enterprise Business Systems Engineer',
      description:
        'Mohammed Nabil designs and develops custom ERP, CRM, Finance, Inventory, Manufacturing, AI and Business Automation platforms for manufacturing and growing companies.',
    },
    caseStudies: {
      title: 'Case Studies — Mohammed Nabil',
      description:
        'Enterprise ERP, commerce, and starter business platforms built for manufacturing companies, fashion brands, and growing businesses.',
    },
    services: {
      title: 'Services — Mohammed Nabil',
      description:
        'Custom ERP, CRM, finance, inventory, manufacturing, supply chain, AI assistants, and dashboard development for enterprise clients.',
    },
    about: {
      title: 'About — Mohammed Nabil',
      description:
        'Business Systems Engineer who builds custom ERP, CRM, and enterprise platforms — focused on solving business problems, not writing code for its own sake.',
    },
    contact: {
      title: 'Contact — Mohammed Nabil',
      description:
        'Get in touch for custom ERP, CRM, commerce platforms, consulting engagements, or remote opportunities.',
    },
    ainShams: {
      title: 'Ain Shams Business Operating System — Case Study | Mohammed Nabil',
      description:
        'Enterprise ERP platform for a printing and packaging manufacturer — 15+ modules, 100+ users, 90% operations digitized over 3+ years.',
    },
    minsal: {
      title: 'Minsal Commerce OS — Case Study | Mohammed Nabil',
      description:
        'Full-stack commerce and business operating system for a fashion brand — Next.js, TypeScript, 7 core modules.',
    },
    elite: {
      title: 'Elite ERP — Case Study | Mohammed Nabil',
      description:
        'Elite ERP — a lightweight business management platform for small and medium businesses.',
    },
  },

  site: {
    name: 'Mohammed Nabil',
    role: 'Business Systems Engineer',
    tagline: 'Enterprise Business Systems',
    description:
      'Mohammed Nabil designs and develops custom ERP, CRM, Finance, Inventory, Manufacturing, AI and Business Automation platforms for manufacturing and growing companies.',
    location: 'Egypt · Remote Worldwide',
    hero: {
      eyebrow: 'Business Systems Engineer',
      headline: 'Building Enterprise Business Systems for Manufacturing & Growing Companies',
      subtitle:
        'I design and develop custom ERP, CRM, Finance, Inventory, Manufacturing, AI and Business Automation platforms that replace manual operations with scalable software.',
    },
    about: {
      headline: 'I Build Operating Systems — Not Websites',
      intro:
        'Most businesses do not need another app. They need a system — one platform that connects sales, production, finance, inventory, and management into a single source of truth.',
      story: [
        'I started building business systems because I saw the same problem everywhere: companies running on spreadsheets, WhatsApp messages, and disconnected tools. Orders lost between departments. Inventory that never matched reality. Finance reconciled manually at the end of every month.',
        'That is not a software problem — it is an architecture problem. And it requires someone who thinks in business workflows first, and code second.',
        'Today I work as a Business Systems Engineer — designing and developing complete platforms for manufacturing companies, fashion brands, and growing businesses that are ready for digital transformation. From CRM and ERP to supply chain, HR, dashboards, and AI assistants — I build the systems teams use every day.',
      ],
      approach: [
        { title: 'Understand the Business First', description: 'Every engagement starts with operational discovery — mapping how the company actually runs before writing a single line of code.' },
        { title: 'Design the System Architecture', description: 'Modules, data flows, user roles, and integrations planned as a cohesive platform — not a collection of features.' },
        { title: 'Build for Daily Operations', description: 'Software shaped for the people who use it every day — factory staff, sales teams, finance, and executives.' },
        { title: 'Iterate and Scale', description: 'Platforms built to evolve — new modules, automations, and capabilities added as the business grows.' },
      ],
      approachTitle: 'How I Think About Software',
      approachSubtitle: 'Business problems first. Architecture second. Code third.',
      storyTitle: 'The Story',
      storyEyebrow: 'Philosophy',
      closing: 'I do not sell React websites. I build enterprise software that transforms how businesses operate.',
    },
    contact: {
      headline: "Let's Build Your Business Operating System",
      subtitle:
        'Whether you are a factory owner, CEO, or founder ready for digital transformation — I am open to consulting engagements, platform development, and remote opportunities.',
      cta: 'Start a Conversation',
      availability: 'Available for consulting, platform development, and remote opportunities.',
    },
  },

  home: {
    trackRecord: { eyebrow: 'Track Record', title: 'Built for Real Business Operations', subtitle: 'Production-grade platforms deployed across manufacturing, commerce, and growing businesses.' },
    industries: { eyebrow: 'Industries', title: 'Industries We Serve', subtitle: 'Custom business systems engineered for the operational realities of each industry.' },
    solutions: { eyebrow: 'Solutions', title: 'Business Systems We Build', subtitle: 'End-to-end platforms and modules that replace manual operations with scalable software.' },
    caseStudies: { eyebrow: 'Case Studies', title: 'Platforms in Production', subtitle: 'Three business operating systems — enterprise, commerce, and starter ERP — each built for daily operational use.' },
    services: { eyebrow: 'Services', title: 'Full-Service Business Systems Engineering', subtitle: 'From discovery and architecture to development, deployment, and continuous evolution.' },
    cta: { title: 'Ready to Transform Your Business Operations?', subtitle: 'I work with CEOs, factory owners, and founders who need enterprise software — not another website.' },
  },

  stats: [
    { value: 100, suffix: '+', label: 'Enterprise Users', description: 'Active users across deployed platforms' },
    { value: 400, suffix: '+', label: 'Orders / Month', description: 'Orders processed through built systems' },
    { value: 2000, suffix: '+', label: 'Clients Managed', description: 'Customer records across CRM modules' },
    { value: 1500, suffix: '+', label: 'Products Tracked', description: 'Products managed in inventory systems' },
    { value: 6, suffix: '+', label: 'Years Experience', description: 'Building business systems and platforms' },
    { value: 3, suffix: '', label: 'Business Platforms', description: 'Production-grade operating systems delivered' },
  ],

  industries: [
    { title: 'Manufacturing', description: 'ERP, production workflows, inventory, and shop-floor systems for factories and industrial operations.' },
    { title: 'Fashion', description: 'Commerce platforms, catalog management, supply chain, and brand operations for fashion businesses.' },
    { title: 'Retail & Commerce', description: 'Storefront, order management, CRM, and finance systems for retail and e-commerce companies.' },
    { title: 'Distribution', description: 'Inventory tracking, logistics, order fulfillment, and supply chain platforms for distributors.' },
    { title: 'Business Services', description: 'CRM, project tracking, finance, and automation platforms for service-based companies.' },
  ],

  solutions: [
    { title: 'ERP Systems' },
    { title: 'CRM' },
    { title: 'Finance' },
    { title: 'Inventory' },
    { title: 'Manufacturing' },
    { title: 'AI Business Assistants' },
    { title: 'Dashboards' },
    { title: 'Business Automation' },
  ],

  services: [
    { title: 'Custom ERP Development', description: 'End-to-end enterprise platforms unifying every department into one scalable operating system.' },
    { title: 'CRM Systems', description: 'Client management, sales pipelines, order history, and relationship tracking built for your workflow.' },
    { title: 'Business Automation', description: 'Workflow automation, approvals, notifications, and process digitization across operations.' },
    { title: 'Inventory Systems', description: 'Real-time stock control, product catalogs, QR tracking, and multi-location warehouse visibility.' },
    { title: 'Finance Systems', description: 'Invoicing, payments, expenses, reconciliation, and financial reporting with export capabilities.' },
    { title: 'Manufacturing Systems', description: 'Production planning, job tracking, shop-floor workflows, and manufacturing coordination.' },
    { title: 'Supply Chain Platforms', description: 'Sourcing, fulfillment, supplier management, and end-to-end supply chain orchestration.' },
    { title: 'AI Business Assistants', description: 'Intelligent assistants for operational queries, data insights, and in-platform automation.' },
    { title: 'Dashboard Development', description: 'Executive and departmental dashboards with KPIs, analytics, and real-time business visibility.' },
    { title: 'React Development', description: 'Modern, performant frontends architected for complex enterprise and commerce applications.' },
    { title: 'Firebase Development', description: 'Cloud-native backends with Auth, Firestore, Storage, and Cloud Functions at production scale.' },
    { title: 'Digital Transformation', description: 'Strategic platform design helping companies move from manual processes to unified software systems.' },
  ],

  servicesPage: {
    hero: {
      eyebrow: 'Services',
      headline: 'Complete Business Systems — Not Features',
      subtitle: 'I engineer custom platforms that map to how your company actually operates — from order intake to production, finance, and executive reporting.',
    },
    deliver: { eyebrow: 'Capabilities', title: 'What I Deliver', subtitle: 'Every engagement starts with understanding your operations — then building the modules your team needs.' },
    process: { eyebrow: 'Process', title: 'How I Work' },
    steps: [
      { step: '01', title: 'Discovery', text: 'Map current workflows, pain points, and data flows across every department.' },
      { step: '02', title: 'Architecture', text: 'Design module structure, database schema, roles, and integration points.' },
      { step: '03', title: 'Development', text: 'Build and deploy in phases — starting with highest-impact operational workflows.' },
      { step: '04', title: 'Evolution', text: 'Expand the platform as the business grows — new modules, dashboards, and automations.' },
    ],
  },

  caseStudiesPage: {
    hero: {
      eyebrow: 'Case Studies',
      headline: 'Systems That Run Businesses',
      subtitle: 'Three production-grade platforms — enterprise manufacturing, commerce operations, and starter ERP for SMBs.',
      primaryCta: 'Ain Shams ERP',
      secondaryCta: 'Minsal Commerce OS',
    },
    cta: {
      title: 'Need a Platform Built for Your Business?',
      subtitle: 'I partner with manufacturing companies, commerce brands, and growing businesses to design custom operating systems tailored to their workflows.',
    },
  },

  featuredCaseStudies,
  caseStudies: {
    ainShams: ainShamsCaseStudy,
    minsal: minsalCaseStudy,
    elite: eliteErpCaseStudy,
  },

  caseStudySections: {
    overview: 'Overview',
    challenge: 'Business Challenge',
    solution: 'Solution',
    coreModules: 'Core Modules',
    manufacturingWorkflow: 'Manufacturing Workflow',
    supplyChainFlow: 'Supply Chain Flow',
    architecture: 'System Architecture',
    techStack: 'Technology Stack',
    businessImpact: 'Business Impact',
    results: 'Results',
    operations: 'Operations',
    engineering: 'Engineering',
    builtWith: 'Built With',
    operationsPipeline: 'Operations Pipeline',
    modulesAinShams: 'Fifteen integrated modules covering every department — designed around real workflows.',
    modulesMinsal: 'Seven integrated business modules plus a command center dashboard.',
    modulesElite: 'Essential business modules designed for SMB operations — without enterprise overhead.',
    archAinShams: 'Layered architecture built for reliability, scalability, and multi-department operations.',
    archMinsal: 'Dual-surface architecture — storefront and admin platform on a type-safe foundation.',
    archElite: 'Cloud-native, modular architecture optimized for small and medium businesses.',
    workflowAinShams: 'How orders move from intake through production, delivery, and finance.',
    workflowMinsal: 'From sourcing to finance — every step connected inside one platform.',
    ctaAinShams: { title: 'Want a Business Operating System for Your Company?', subtitle: 'I design and build custom ERP, CRM, and manufacturing platforms for companies ready to replace manual operations.', secondary: 'View All Case Studies' },
    ctaMinsal: { title: 'Building a Commerce Platform for Your Brand?', subtitle: 'I design full-stack e-commerce and operations systems that unify storefronts, admin tools, supply chain, and finance.', secondary: 'View Ain Shams Case Study' },
    ctaElite: { title: 'Need a Starter ERP for Your Business?', subtitle: 'I build focused business management platforms for SMBs ready to move beyond spreadsheets — and scale when they grow.', secondary: 'View Ain Shams Case Study' },
    aiAssistantCaption: 'Production, orders, clients, delivery & finance — powered by Google Gemini AI',
  },

  cta: {
    defaultTitle: 'Ready to Transform Your Business Operations?',
    defaultSubtitle: "Let's discuss how a custom ERP, CRM, or commerce platform can replace manual processes with scalable software.",
    aboutTitle: "Let's Build the System Your Business Needs",
    aboutSubtitle: 'I work with leaders who are ready to move beyond spreadsheets and disconnected tools.',
  },

  contactChannels: [
    { label: 'Email', value: 'hello@mohammednabil.dev' },
    { label: 'Phone', value: '+20 100 000 0000' },
    { label: 'WhatsApp', value: 'Send a message' },
    { label: 'LinkedIn', value: 'Connect on LinkedIn' },
    { label: 'GitHub', value: 'View repositories' },
  ],
};

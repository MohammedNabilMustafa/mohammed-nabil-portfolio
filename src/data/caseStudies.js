import { images } from './assets';

export const featuredCaseStudies = [
  {
    slug: 'ain-shams-press',
    title: 'Ain Shams Business Operating System',
    subtitle: 'Enterprise Manufacturing Platform',
    description:
      'Enterprise ERP platform built for a printing and packaging manufacturer — unifying CRM, orders, manufacturing, inventory, finance, HR, transportation, AI, and executive dashboards into one operating system.',
    path: '/case-studies/ain-shams-press',
    variant: 'enterprise',
    image: images.ainShams.mainDashboard,
    imageAlt: 'Ain Shams Business Operating System — Ainshams AI Assistant dashboard',
    modules: ['CRM', 'Orders', 'Manufacturing', 'Inventory', 'Finance', 'HR', 'Transportation', 'AI', 'Dashboards'],
    metrics: [
      { label: 'Active Users', value: '100+' },
      { label: 'Products', value: '1,500+' },
      { label: 'Orders / Month', value: '400+' },
      { label: 'Clients', value: '1,000+' },
      { label: 'Core Business Modules', value: '15+' },
      { label: 'Daily Operations Digitized', value: '90%' },
      { label: 'Continuous Development', value: '3+ Years' },
    ],
    tech: ['React', 'Firebase', 'Firestore', 'Cloud Functions', 'PrimeReact', 'Gemini AI', 'Chart.js', 'QR', 'PDF'],
  },
  {
    slug: 'minsal-commerce-os',
    title: 'Minsal Commerce OS',
    subtitle: 'Commerce + Business Operating System',
    description:
      'A complete commerce and business operating system for a fashion brand — combining a customer storefront with admin operations for products, orders, CRM, supply chain, and finance.',
    path: '/case-studies/minsal-commerce-os',
    variant: 'commerce',
    modules: ['E-commerce Storefront', 'Product Management', 'Orders', 'CRM', 'Supply Chain', 'Finance', 'Command Center'],
    metrics: [
      { label: 'Orders', value: '300+' },
      { label: 'Products', value: '500+' },
      { label: 'Active Clients', value: '2,000+' },
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Tailwind', 'Zustand', 'Zod', 'React Hook Form'],
  },
  {
    slug: 'elite-erp',
    title: 'Elite ERP',
    subtitle: 'Starter Business Management Platform',
    description:
      'A lightweight ERP solution designed for small and medium businesses — delivering essential CRM, orders, inventory, finance, and reporting without enterprise complexity.',
    path: '/case-studies/elite-erp',
    variant: 'starter',
    modules: ['CRM', 'Orders', 'Inventory', 'Finance', 'Dashboards', 'User Management'],
    metrics: [
      { label: 'Core Modules', value: '5' },
      { label: 'Target Market', value: 'SMB' },
      { label: 'Deployment', value: 'Cloud' },
      { label: 'Architecture', value: 'Modular' },
    ],
    tech: ['React', 'Firebase', 'Firestore', 'Cloud Functions', 'Responsive UI'],
  },
];

export const caseStudies = featuredCaseStudies.map((study) => ({
  slug: study.slug,
  title: study.title,
  subtitle: study.subtitle,
  description: study.description,
  excerpt: study.description,
  path: study.path,
  variant: study.variant,
  featured: true,
  image: study.image,
  imageAlt: study.imageAlt,
  tags:
    study.variant === 'enterprise'
      ? ['ERP', 'Manufacturing', 'Firebase', 'AI']
      : study.variant === 'commerce'
        ? ['E-commerce', 'Next.js', 'TypeScript', 'Firebase']
        : ['ERP', 'SMB', 'Cloud', 'Modular'],
  stats: study.metrics.slice(0, 4),
  tech: study.tech,
}));

export const ainShamsCaseStudy = {
  slug: 'ain-shams-press',
  title: 'Ain Shams Business Operating System',
  client: 'Ain Shams Press',
  industry: 'Printing & Packaging Manufacturing',
  duration: '3+ years of continuous development',

  overview:
    'Ain Shams Press operates a printing and packaging manufacturing business where sales, production, finance, and logistics must move in sync. Before this platform, departments ran on disconnected tools, manual tracking, and reactive decision-making. I designed and built a complete Business Operating System — a cloud-native ERP that became the daily backbone of the entire operation.',

  challenge: [
    'Sales, production, finance, and logistics teams operated from separate systems with no unified data.',
    'Order tracking, client history, and product catalogs were managed manually — causing delays and errors.',
    'Manufacturing workflows lacked structured job tracking from order intake through production and delivery.',
    'Inventory visibility was limited, making production planning and order fulfillment unreliable.',
    'HR, transportation, and finance operated outside the core workflow — creating reconciliation gaps.',
    'Management had no real-time visibility into orders, revenue, production status, or operational KPIs.',
  ],

  solution:
    'I architected and delivered a modular Business Operating System spanning 15+ core business modules — built with React, Firebase, and Cloud Functions. Every module was designed around actual workflows at Ain Shams Press, then refined iteratively over three years based on operational feedback from 100+ daily users.',

  coreModules: [
    { name: 'CRM & Client Management', description: 'Centralized client records, order history, communication tracking, and sales pipeline visibility.' },
    { name: 'Order Management', description: 'End-to-end order lifecycle from quotation through production, delivery, and invoicing.' },
    { name: 'Manufacturing Workflows', description: 'Production planning, job tracking, and shop-floor coordination for printing operations.' },
    { name: 'Inventory & Product Catalog', description: '1,500+ products tracked with stock levels, QR-based tracking, and catalog management.' },
    { name: 'Finance & Accounting', description: 'Invoicing, payment tracking, expense management, and financial reporting with PDF/Excel export.' },
    { name: 'HR Management', description: 'Staff records, attendance, roles, and departmental access integrated with platform permissions.' },
    { name: 'Transportation & Logistics', description: 'Delivery coordination, shipment tracking, and logistics management tied to order fulfillment.' },
    { name: 'AI Business Assistant', description: 'Google Gemini-powered assistant for operational queries, data insights, and workflow support.' },
    { name: 'Executive Dashboards', description: '15+ dashboards covering sales, orders, inventory, finance, manufacturing, and operational KPIs.' },
  ],

  manufacturingWorkflow: [
    { step: '01', title: 'Order Intake', description: 'Sales captures client requirements and generates production orders in CRM.' },
    { step: '02', title: 'Production Planning', description: 'Manufacturing module schedules jobs based on capacity and inventory availability.' },
    { step: '03', title: 'Shop Floor Execution', description: 'Production teams track job progress, materials used, and quality checkpoints.' },
    { step: '04', title: 'Inventory Allocation', description: 'Stock reserved and consumed automatically as production jobs advance.' },
    { step: '05', title: 'Quality & Completion', description: 'Finished goods verified, packaged, and prepared for delivery.' },
    { step: '06', title: 'Delivery & Finance', description: 'Transportation module handles dispatch; finance generates invoices automatically.' },
  ],

  architecture: [
    { layer: 'Presentation', items: ['React SPA', 'PrimeReact UI', 'Chart.js Dashboards', 'Responsive Layout'] },
    { layer: 'Application', items: ['Role-Based Access', 'Module Orchestration', 'Gemini AI Layer', 'PDF/Excel Engine'] },
    { layer: 'Backend', items: ['Firebase Auth', 'Cloud Functions', 'Firestore Database', 'Real-time Sync'] },
    { layer: 'Operations', items: ['QR Tracking', 'Automated Reports', 'Multi-Department Workflows', 'Audit Trails'] },
  ],

  technologyStack: ['React', 'Firebase', 'Firestore', 'Cloud Functions', 'PrimeReact', 'Gemini AI', 'Chart.js', 'QR Tracking', 'PDF / Excel Automation', 'JavaScript'],

  businessImpact: [
    '90% of daily factory operations now run through the platform instead of manual processes.',
    '100+ active users across departments rely on the system for their daily work.',
    '1,000+ clients managed in a unified CRM with complete order and communication history.',
    '400+ orders processed monthly with full traceability from intake to delivery.',
    '1,500+ products tracked across inventory, manufacturing, and sales modules.',
    '15+ integrated business modules covering every department from sales to transportation.',
    'Three years of continuous development ensured the platform evolved with the business.',
  ],

  results: [
    'Replaced fragmented manual workflows with a single, responsive business platform.',
    'Reduced operational friction between sales, production, finance, and management teams.',
    'Enabled data-driven decisions through real-time dashboards and automated reporting.',
    'Built a scalable foundation that continues to expand with new modules and capabilities.',
    'Delivered a production-grade system used daily — not a prototype or proof of concept.',
  ],

  gallery: [
    {
      title: 'Ainshams AI Assistant',
      description: 'Gemini-powered assistant for production, orders, clients, delivery & finance — in Arabic, Franco, or English',
      src: images.ainShams.mainDashboard,
      alt: 'Ain Shams Ainshams AI Assistant dashboard with sidebar navigation and command interface',
    },
    {
      title: 'Sales Dashboard',
      description: 'Pipeline view with leads, quotations, and sales performance tracking',
      src: images.ainShams.salesDashboard,
      alt: 'Ain Shams sales dashboard with pipeline columns and lead cards',
    },
    {
      title: 'CRM & Client Hub',
      description: 'Unified client records and complete order history',
      src: images.ainShams.crmClientHub,
      alt: 'Ain Shams CRM and client hub interface',
    },
    {
      title: 'Manufacturing Dashboard',
      description: 'Production planning and shop-floor job tracking',
      src: images.ainShams.manufacturingDashboard,
      alt: 'Ain Shams manufacturing dashboard',
    },
    {
      title: 'Inventory & QR System',
      description: 'Product catalog with stock control and QR scanning',
      src: images.ainShams.inventoryQrSystem,
      alt: 'Ain Shams inventory and QR tracking system',
    },
    {
      title: 'Finance & Reporting',
      description: 'Invoicing, payments, and exportable financial reports',
      src: images.ainShams.financeReporting,
      alt: 'Ain Shams finance and reporting module',
    },
    {
      title: 'Executive Command Center',
      description: 'Real-time KPIs across sales, production, and operations',
      src: images.ainShams.executiveCommandCenter,
      alt: 'Ain Shams executive command center dashboard',
    },
  ],
};

export const minsalCaseStudy = {
  slug: 'minsal-commerce-os',
  title: 'Minsal Commerce OS',
  client: 'Minsal',
  industry: 'Modest Fashion / E-commerce',
  duration: 'Full-stack TypeScript platform',

  overview:
    'Minsal is a modest fashion brand that needed more than an online store — they needed a complete commerce and business operating system. I designed and built a dual-surface platform: a premium customer-facing storefront and a comprehensive admin command center managing products, orders, CRM, supply chain, finance, and role-based operations — entirely in TypeScript.',

  challenge: [
    'The brand needed a polished e-commerce experience without losing operational control behind the scenes.',
    'Product catalogs, inventory, and order fulfillment were disconnected — causing stock inconsistencies.',
    'No unified CRM existed to track customer relationships, order history, and repeat purchase behavior.',
    'Supply chain coordination across sourcing, stock, and fulfillment lacked a single operational view.',
    'Finance and accounting workflows were not integrated with orders and inventory.',
    'Multiple team members needed secure, role-based access to different parts of the platform.',
  ],

  solution:
    'I architected Minsal Commerce OS as a full-stack platform with 81 routes, 135 React components, and 18 Zustand state modules — organized into 7 core business modules. Built with Next.js, TypeScript, and Firebase, every layer enforces type safety, validated forms, and granular permissions.',

  coreModules: [
    { name: 'E-commerce Storefront', description: 'Customer-facing shopping experience with product discovery, cart, checkout, and order tracking.' },
    { name: 'Product Management', description: 'Full catalog control — variants, pricing, media, collections, and merchandising.' },
    { name: 'Orders Management', description: 'End-to-end order lifecycle from placement through fulfillment and customer communication.' },
    { name: 'CRM', description: 'Customer profiles, purchase history, segmentation, and relationship tracking tied to orders.' },
    { name: 'Supply Chain', description: 'Sourcing, stock movement, supplier coordination, and fulfillment orchestration.' },
    { name: 'Finance & Accounting', description: 'Revenue tracking, expense management, reconciliation, and financial visibility.' },
    { name: 'Roles & Permissions', description: 'Granular access control ensuring each team member operates within authorized scope.' },
    { name: 'Command Center Dashboard', description: 'Executive overview of sales, orders, inventory, CRM activity, and financial performance.' },
  ],

  supplyChainFlow: [
    { step: '01', title: 'Product Sourcing', description: 'Suppliers and inbound stock registered in the supply chain module.' },
    { step: '02', title: 'Inventory Control', description: 'Stock levels synced across warehouse and storefront availability.' },
    { step: '03', title: 'Storefront Display', description: 'Products published to the customer-facing e-commerce experience.' },
    { step: '04', title: 'Order Capture', description: 'Customer orders flow into CRM and operations automatically.' },
    { step: '05', title: 'Fulfillment', description: 'Pick, pack, and ship workflows tracked through completion.' },
    { step: '06', title: 'Finance Sync', description: 'Revenue, costs, and reconciliation recorded in real time.' },
  ],

  architecture: [
    { layer: 'Storefront', items: ['Next.js App Router', 'Tailwind CSS', 'Responsive Commerce UX', 'SEO-Optimized Pages'] },
    { layer: 'Admin Platform', items: ['135 React Components', '18 Zustand Stores', 'React Hook Form + Zod', 'Role-Based UI'] },
    { layer: 'Backend', items: ['Firebase Auth', 'Firestore Database', 'Firebase Storage', 'Secure Multi-Tenant Data'] },
    { layer: 'Engineering', items: ['100% TypeScript', '305+ Typed Files', '81 Routes', 'Modular Architecture'] },
  ],

  technologyStack: ['Next.js', 'React', 'TypeScript', 'Firebase Auth', 'Firestore', 'Firebase Storage', 'Tailwind CSS', 'Zustand', 'React Hook Form', 'Zod'],

  businessImpact: [
    '300+ orders processed through the integrated commerce and operations platform.',
    '500+ products managed across storefront and admin catalog systems.',
    '2,000+ active clients tracked in the unified CRM module.',
    'Unified storefront and admin operations eliminated fragmented tools and manual handoffs.',
    'Role-based access enabled secure multi-user operations across departments.',
    '7 core business modules covering the full fashion commerce lifecycle.',
  ],

  results: [
    'Unified customer storefront and internal admin into one platform — eliminating tool fragmentation.',
    'Reduced operational friction between sales, fulfillment, finance, and management teams.',
    'Enabled data-driven decisions through the Command Center dashboard and module analytics.',
    'Built a type-safe, scalable foundation ready for new modules and market expansion.',
    'Delivered a production-grade commerce OS — not a template or proof of concept.',
  ],

  gallery: [
    { title: 'E-commerce Storefront', description: 'Premium customer shopping experience' },
    { title: 'Command Center Dashboard', description: 'Executive overview of all business metrics' },
    { title: 'Product Management', description: 'Full catalog and merchandising control' },
    { title: 'Orders & Fulfillment', description: 'End-to-end order lifecycle management' },
    { title: 'CRM & Clients', description: 'Customer profiles and purchase history' },
    { title: 'Supply Chain Hub', description: 'Sourcing, stock, and fulfillment orchestration' },
  ],
};

export const eliteErpCaseStudy = {
  slug: 'elite-erp',
  title: 'Elite ERP',
  client: 'Small & Medium Businesses',
  industry: 'Business Services / General SMB',
  duration: 'Starter business management platform',

  overview:
    'Not every business needs a full-scale enterprise operating system on day one. Elite ERP is a lightweight business management platform designed for small and medium businesses that need structured CRM, orders, inventory, finance, and reporting — without the complexity, cost, and timeline of a full ERP rollout.',

  challenge: [
    'Small businesses often outgrow spreadsheets but cannot justify a full enterprise ERP implementation.',
    'CRM, orders, inventory, and finance live in separate tools with no shared data.',
    'Owners lack a single dashboard to understand sales, stock, and cash flow.',
    'Teams need role-based access without enterprise-level administration overhead.',
    'Businesses want a platform that can start simple and expand as they grow.',
  ],

  solution:
    'I designed Elite ERP as a modular starter platform — five core business modules on a cloud-native React and Firebase stack. It delivers the essential operating system capabilities SMBs need: client management, order tracking, inventory control, financial visibility, and executive dashboards — in a focused, maintainable package.',

  coreModules: [
    { name: 'CRM & Clients', description: 'Client records, communication history, and relationship tracking in one place.' },
    { name: 'Order Management', description: 'Create, track, and fulfill orders with clear status visibility from intake to completion.' },
    { name: 'Inventory Control', description: 'Product catalog, stock levels, and basic warehouse visibility for growing operations.' },
    { name: 'Finance & Invoicing', description: 'Invoicing, payment tracking, and essential financial reporting for business owners.' },
    { name: 'Executive Dashboard', description: 'At-a-glance view of sales, orders, inventory, and financial performance.' },
    { name: 'User Management', description: 'Role-based access so each team member sees only what they need.' },
  ],

  architecture: [
    { layer: 'Frontend', items: ['React SPA', 'Responsive UI', 'Role-Based Views', 'Dashboard Widgets'] },
    { layer: 'Business Logic', items: ['CRM Engine', 'Order Workflows', 'Inventory Sync', 'Finance Module'] },
    { layer: 'Backend', items: ['Firebase Auth', 'Firestore Database', 'Cloud Functions', 'Real-time Updates'] },
    { layer: 'Deployment', items: ['Cloud Hosted', 'Modular Architecture', 'SMB-Optimized', 'Scalable Foundation'] },
  ],

  technologyStack: ['React', 'Firebase', 'Firestore', 'Cloud Functions', 'JavaScript', 'Responsive UI', 'Role-Based Access'],

  businessImpact: [
    'Replaces spreadsheets and disconnected tools with a unified starter business platform.',
    'Five core modules cover the essential workflows most SMBs need from day one.',
    'Cloud-native architecture keeps deployment and maintenance costs manageable.',
    'Modular design allows businesses to start focused and expand over time.',
    'Executive dashboard gives owners real-time visibility without enterprise complexity.',
  ],

  results: [
    'Delivered a focused ERP alternative for businesses not yet ready for full-scale platforms.',
    'Reduced operational friction between sales, inventory, and finance teams.',
    'Built a scalable foundation that can grow into a fuller operating system over time.',
    'Proved that the right architecture matters more than module count for SMB clients.',
  ],

  gallery: [
    { title: 'Executive Dashboard', description: 'At-a-glance business performance overview' },
    { title: 'CRM & Clients', description: 'Client management and relationship tracking' },
    { title: 'Order Management', description: 'Order creation, tracking, and fulfillment' },
    { title: 'Inventory Control', description: 'Product catalog and stock management' },
    { title: 'Finance Module', description: 'Invoicing, payments, and financial reporting' },
  ],
};

// Backward-compatible export
export const featuredProjects = featuredCaseStudies;

// Public assets live under the deploy base (e.g. /novaris-it/ on GitHub Pages).
const BASE = import.meta.env.BASE_URL

export const site = {
  name: 'Novaris',
  tagline: 'IT Solutions & Technology',
  phone: '+1 (408) 720 4155',
  email: 'hello@novaris.io',
  address: '1820 Bayfront Parkway, Sunnyvale, CA 94085',
  hours: 'Mon – Fri: 09:00 – 18:00',
}

export const navigation = [
  {
    label: 'Home',
    to: '/',
    children: [
      { label: 'IT Consultancy', to: '/' },
      { label: 'Cyber Security', to: '/' },
      { label: 'Software Agency', to: '/' },
      { label: 'Data Analytics', to: '/' },
    ],
  },
  {
    label: 'Pages',
    to: '/about',
    children: [
      { label: 'About Us', to: '/about' },
      { label: 'Case Study', to: '/case-study' },
      { label: 'Services', to: '/services' },
      { label: 'Team', to: '/team' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Blog',
    to: '/blog',
    children: [
      { label: 'Blog Grid', to: '/blog' },
      { label: 'Blog Details', to: '/blog/rethinking-design-systems' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export const heroSlides = [
  {
    image: `${BASE}images/hero-1.jpg`,
    small: 'We have 12 years of experience in IT solutions',
    titleTop: 'Solutions For',
    titleBottom: 'IT Business',
    text: 'From infrastructure to intelligence — we design, secure and scale the technology that moves your business forward.',
  },
  {
    image: `${BASE}images/hero-2.jpg`,
    small: 'Trusted by 480+ companies across 24 countries',
    titleTop: 'Engineering',
    titleBottom: 'Digital Growth',
    text: 'Cloud migration, managed security and product engineering delivered by a team that treats your roadmap as its own.',
  },
]

export const features = [
  { icon: 'consult', title: 'IT Consultancy', text: 'Faster & Smarter Solutions' },
  { icon: 'shield', title: 'Cyber Security', text: 'Round-the-clock Protection' },
  { icon: 'design', title: 'UX/UI Strategy', text: 'Human Centred Interfaces' },
  { icon: 'code', title: 'Development', text: 'Built To Scale With You' },
]

export const services = [
  {
    icon: 'cloud',
    title: 'Digital Solutions',
    text: 'Cloud-native platforms, automation and integrations that remove friction from daily operations.',
    slug: 'digital-solutions',
  },
  {
    icon: 'code',
    title: 'Web Development',
    text: 'Fast, accessible and SEO-ready web products engineered on a modern component architecture.',
    slug: 'web-development',
  },
  {
    icon: 'server',
    title: 'Managed IT Services',
    text: 'Proactive monitoring, patching and a dedicated helpdesk keeping your uptime where it belongs.',
    slug: 'managed-it-services',
  },
  {
    icon: 'chip',
    title: 'Product Engineering',
    text: 'Discovery to launch — we ship measurable product increments every single sprint.',
    slug: 'product-engineering',
  },
  {
    icon: 'shield',
    title: 'Cyber Security',
    text: 'Penetration testing, threat modelling and compliance programmes that stand up to audits.',
    slug: 'cyber-security',
  },
  {
    icon: 'chart',
    title: 'Data & Analytics',
    text: 'Warehouses, pipelines and dashboards that turn scattered data into decisions people trust.',
    slug: 'data-analytics',
  },
]

export const counters = [
  { value: 1280, suffix: '+', label: 'Projects Completed' },
  { value: 165, suffix: '+', label: 'Expert Consultants' },
  { value: 940, suffix: '+', label: '5 Star Reviews' },
  { value: 32, suffix: '+', label: 'Awards Winning' },
]

export const team = [
  { name: 'Adrian Vale', role: 'Managing Director', image: `${BASE}images/team-1.jpg` },
  { name: 'Naomi Farrell', role: 'Lead Web Engineer', image: `${BASE}images/team-2.jpg` },
  { name: 'Elliot Marsh', role: 'Security Architect', image: `${BASE}images/team-3.jpg` },
  { name: 'Priya Ramanan', role: 'Product Strategist', image: `${BASE}images/team-4.jpg` },
]

export const caseCategories = ['All', 'Business', 'Consulting', 'Engineering', 'IT Security']

export const caseStudies = [
  { title: 'Business Knowledge Hub', category: 'Business', image: `${BASE}images/case-1.jpg` },
  { title: 'Relationship Buildup', category: 'Consulting', image: `${BASE}images/case-2.jpg` },
  { title: 'Digital Solutions Rollout', category: 'Engineering', image: `${BASE}images/case-3.jpg` },
  { title: 'Research & Market Plan', category: 'Business', image: `${BASE}images/case-4.jpg` },
  { title: 'Zero Trust Migration', category: 'IT Security', image: `${BASE}images/case-5.jpg` },
  { title: 'UI UX Design Process', category: 'Consulting', image: `${BASE}images/case-6.jpg` },
]

export const pricing = [
  {
    name: 'Basic Plan',
    text: 'For small teams that need a reliable technical partner on call.',
    price: 59,
    features: ['Responsive Live Support', 'Adaptive Bitrate Delivery', 'Monthly Analytics Report', '2 Consulting Hours'],
    popular: false,
  },
  {
    name: 'Regular Plan',
    text: 'Our most chosen package — proactive management with room to grow.',
    price: 89,
    features: ['Everything In Basic', 'Managed Cloud Backups', 'Weekly Analytics Report', '8 Consulting Hours'],
    popular: true,
  },
  {
    name: 'Premium Plan',
    text: 'Full coverage for organisations running business-critical systems.',
    price: 129,
    features: ['Everything In Regular', '24/7 Security Monitoring', 'Dedicated Success Manager', 'Unlimited Consulting'],
    popular: false,
  },
]

export const testimonials = [
  {
    quote:
      'Novaris rebuilt our claims platform in under five months. Deployment incidents dropped by 80% and our team finally trusts the release process.',
    name: 'Daniel Okoye',
    role: 'CTO, Meridian Group',
    avatar: `${BASE}images/avatar-1.jpg`,
  },
  {
    quote:
      'We had tried every popular project management stack and none of it fitted. Their consultants mapped our workflow first, then built around it.',
    name: 'Hanna Lindqvist',
    role: 'Operations Lead, Northbay',
    avatar: `${BASE}images/avatar-2.jpg`,
  },
  {
    quote:
      'The security audit was blunt, detailed and genuinely useful. Six weeks later we passed SOC 2 with zero major findings. That says everything.',
    name: 'Marcus Reid',
    role: 'Product Manager, Alterra',
    avatar: `${BASE}images/avatar-3.jpg`,
  },
]

export const posts = [
  {
    slug: 'rethinking-design-systems',
    title: 'Beyond Tools: How Building A Design System Changes A Team',
    date: 'March 14, 2026',
    author: 'Adrian Vale',
    category: 'Design',
    image: `${BASE}images/blog-1.jpg`,
    excerpt:
      'A design system is not a component library. It is a shared agreement about how decisions get made — and that is the part most teams skip.',
  },
  {
    slug: 'zero-trust-in-practice',
    title: 'Zero Trust In Practice: What It Actually Costs To Adopt',
    date: 'March 02, 2026',
    author: 'Elliot Marsh',
    category: 'Security',
    image: `${BASE}images/blog-2.jpg`,
    excerpt:
      'Everyone sells zero trust as a product. In reality it is an identity project, a network project and a culture project running in parallel.',
  },
  {
    slug: 'icons-as-visual-elements',
    title: 'Designing For User Interfaces: Icons As Visual Elements',
    date: 'February 19, 2026',
    author: 'Priya Ramanan',
    category: 'Product',
    image: `${BASE}images/blog-3.jpg`,
    excerpt:
      'Icons carry meaning only when the surrounding system earns it. Here is the audit we run before adding a single new glyph to a product.',
  },
]

export const faqs = [
  {
    q: 'How quickly can you start on a new engagement?',
    a: 'Discovery usually begins within five working days of a signed statement of work. For managed services we can onboard emergency support inside 48 hours.',
  },
  {
    q: 'Do you work with existing in-house engineering teams?',
    a: 'Most of our work is embedded. We join your rituals, use your board and hand over documentation continuously rather than in one lump at the end.',
  },
  {
    q: 'What does your security assessment cover?',
    a: 'External and internal penetration testing, cloud configuration review, identity and access audit, plus a prioritised remediation plan with effort estimates.',
  },
  {
    q: 'Who owns the code and infrastructure you build?',
    a: 'You do, from the first commit. Repositories live in your organisation and every credential is issued to accounts you control.',
  },
  {
    q: 'Can you support us after the project ships?',
    a: 'Yes. Roughly two thirds of our clients move onto a managed plan covering monitoring, patching and a monthly improvement budget.',
  },
]

export const brands = ['Meridian', 'Northbay', 'Alterra', 'Corex', 'Lumen Labs', 'Vantage', 'Fielder']

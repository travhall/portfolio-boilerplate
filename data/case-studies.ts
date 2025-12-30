export interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface ProjectPhase {
  name: string;
  description: string;
  duration: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  role: string[];
  tools: string[];
  duration: string;
  highlights: string[];
  images?: {
    hero: string;
    gallery?: string[];
  };
  metrics?: Metric[];
  testimonials?: Testimonial[];
  teamMembers?: TeamMember[];
  projectPhases?: ProjectPhase[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "design-system",
    title: "Design System Evolution",
    subtitle: "From Figma to Storybook",
    category: "Design Systems",
    year: "2024",
    description:
      "A comprehensive design system transformation project that unified design and development workflows, creating a single source of truth for our product ecosystem.",
    challenge:
      "The organization had multiple product teams working with inconsistent UI patterns, leading to fragmented user experiences and duplicated development efforts. Designers and developers were working in silos, causing friction and slowing down the product development cycle.",
    solution:
      "Built a comprehensive design system starting in Figma with a complete component library, design tokens, and documentation. Translated every component into React with TypeScript, creating a robust component library in Storybook. Established automated workflows for syncing design tokens between Figma and code, ensuring consistency across all touchpoints.",
    outcome:
      "Reduced development time by 40% through component reusability. Improved design-to-development handoff efficiency by 60%. Achieved 100% design consistency across 8 product applications. The system is now used by 25+ designers and developers across the organization.",
    role: [
      "Design Systems Lead",
      "UI/UX Design",
      "Front-end Development",
      "Documentation",
    ],
    tools: [
      "Figma",
      "Storybook",
      "React",
      "TypeScript",
      "Styled Components",
      "Chromatic",
      "GitHub Actions",
    ],
    duration: "6 months",
    highlights: [
      "Created 80+ reusable components with comprehensive variants",
      "Established design token architecture with semantic naming",
      "Built automated visual regression testing pipeline",
      "Developed interactive documentation with live code examples",
      "Implemented accessibility standards (WCAG 2.1 AA)",
      "Created onboarding guides for designers and developers",
    ],
    images: {
      hero: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      gallery: [
        "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg",
        "https://images.pexels.com/photos/7376/startup-photos.jpg",
      ],
    },
  },
  {
    id: "el-camino-skate",
    title: "El Camino Skate Shop",
    subtitle: "eCommerce Experience Redesign",
    category: "eCommerce",
    year: "2023",
    description:
      "A full-scale eCommerce website redesign for El Camino, a local skate shop looking to expand their digital presence and compete with larger online retailers.",
    challenge:
      "El Camino had an outdated website with poor mobile experience, resulting in a 75% cart abandonment rate and declining online sales. The shop needed a modern, mobile-first solution that captured the energy of skate culture while providing a seamless shopping experience.",
    solution:
      "Designed and developed a modern eCommerce platform with a focus on visual storytelling and effortless navigation. Created an immersive product browsing experience with high-quality imagery, detailed product information, and intuitive filtering. Implemented a streamlined checkout flow optimized for mobile users. Integrated with their existing inventory system and added features like wish lists, size guides, and customer reviews.",
    outcome:
      "Increased mobile conversions by 85% in the first quarter. Reduced cart abandonment rate from 75% to 32%. Achieved 120% growth in online revenue year-over-year. Customer satisfaction scores improved from 3.2 to 4.7 out of 5. The site now processes over 500 orders per month.",
    role: [
      "UX/UI Design",
      "Front-end Development",
      "User Research",
      "Prototyping",
    ],
    tools: [
      "Figma",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shopify API",
      "Framer Motion",
      "Stripe",
    ],
    duration: "4 months",
    highlights: [
      "Conducted user research with 30+ skate shop customers",
      "Created mobile-first responsive design system",
      "Designed custom product visualization with 360° views",
      "Implemented smart search with filtering by brand, size, and style",
      "Built interactive size guide with fit recommendations",
      "Integrated loyalty program and referral system",
      "Optimized page load times to under 2 seconds",
    ],
    images: {
      hero: "https://images.pexels.com/photos/6466286/pexels-photo-6466286.jpeg",
      gallery: [
        "https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg",
        "https://images.pexels.com/photos/6466290/pexels-photo-6466290.jpeg",
      ],
    },
    metrics: [
      {
        label: "Mobile Conversion Rate",
        before: "12%",
        after: "22.2%",
        improvement: "+85%",
      },
      {
        label: "Cart Abandonment",
        before: "75%",
        after: "32%",
        improvement: "-57%",
      },
      {
        label: "Online Revenue",
        before: "$45K/mo",
        after: "$99K/mo",
        improvement: "+120%",
      },
      {
        label: "Customer Satisfaction",
        before: "3.2/5",
        after: "4.7/5",
        improvement: "+47%",
      },
    ],
    testimonials: [
      {
        quote: "The redesign completely transformed our online presence. We're now competing with the big players and our customers love the new experience.",
        author: "Marcus Rivera",
        role: "Owner",
        company: "El Camino Skate Shop",
      },
    ],
  },
  {
    id: "dataflow-analytics",
    title: "DataFlow Analytics Platform",
    subtitle: "SaaS Dashboard Redesign",
    category: "SaaS & Analytics",
    year: "2024",
    description:
      "A complete overhaul of DataFlow's analytics platform, transforming a complex data tool into an intuitive, powerful dashboard that empowers users to make data-driven decisions without extensive training.",
    challenge:
      "DataFlow's existing analytics platform was powerful but overwhelming. Users struggled with a steep learning curve, buried features, and poor data visualization. Customer churn was increasing as users abandoned the platform for simpler competitors. The company needed to retain its advanced capabilities while dramatically improving usability.",
    solution:
      "Led a comprehensive UX research initiative involving 45+ user interviews and usability testing sessions. Redesigned the information architecture to prioritize common workflows. Created a modular dashboard system allowing users to customize their workspace. Implemented progressive disclosure to hide advanced features until needed. Designed an intuitive drag-and-drop chart builder and introduced smart defaults that work for 80% of use cases. Built a comprehensive onboarding flow with interactive tutorials.",
    outcome:
      "Reduced time-to-first-insight from 2 hours to 8 minutes. Decreased support tickets by 65%. Increased user activation rate from 34% to 78%. Reduced customer churn by 42%. Received a 4.8/5 rating on G2 with users praising the 'game-changing' interface. Platform now serves 12,000+ active users processing 2M+ data points daily.",
    role: [
      "Product Design Lead",
      "UX Research",
      "UI Design",
      "Interaction Design",
    ],
    tools: [
      "Figma",
      "React",
      "TypeScript",
      "D3.js",
      "Recharts",
      "Material UI",
      "Mixpanel",
      "UserTesting",
    ],
    duration: "5 months",
    highlights: [
      "Conducted 45+ user interviews and 20 usability testing sessions",
      "Redesigned entire information architecture based on user mental models",
      "Created 12 new chart types with customization options",
      "Built drag-and-drop dashboard builder with 50+ widget types",
      "Designed smart defaults reducing configuration time by 80%",
      "Implemented contextual help system with 200+ tooltips and guides",
      "Created interactive onboarding reducing time-to-value by 93%",
    ],
    images: {
      hero: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      gallery: [
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
      ],
    },
    metrics: [
      {
        label: "Time to First Insight",
        before: "120 min",
        after: "8 min",
        improvement: "-93%",
      },
      {
        label: "User Activation Rate",
        before: "34%",
        after: "78%",
        improvement: "+129%",
      },
      {
        label: "Support Tickets",
        before: "450/mo",
        after: "158/mo",
        improvement: "-65%",
      },
      {
        label: "Customer Churn",
        before: "8.2%",
        after: "4.8%",
        improvement: "-42%",
      },
    ],
    testimonials: [
      {
        quote: "This redesign saved our product. We went from fighting to retain customers to having a waitlist. The new interface is intuitive and powerful.",
        author: "Sarah Chen",
        role: "CEO",
        company: "DataFlow",
      },
      {
        quote: "I can finally do in minutes what used to take hours. The dashboard builder is incredibly intuitive, and the visualizations are beautiful.",
        author: "Michael Torres",
        role: "Data Analyst",
        company: "TechCorp",
      },
    ],
    projectPhases: [
      {
        name: "Discovery & Research",
        description: "User interviews, competitive analysis, and data audit to understand pain points and opportunities",
        duration: "3 weeks",
      },
      {
        name: "Information Architecture",
        description: "Restructured navigation, created new user flows, and designed dashboard framework",
        duration: "2 weeks",
      },
      {
        name: "Design & Prototyping",
        description: "High-fidelity mockups, interactive prototypes, and usability testing",
        duration: "8 weeks",
      },
      {
        name: "Development & Testing",
        description: "Component development, integration, and quality assurance",
        duration: "8 weeks",
      },
      {
        name: "Launch & Iteration",
        description: "Phased rollout, user feedback collection, and refinements",
        duration: "3 weeks",
      },
    ],
    teamMembers: [
      {
        name: "Sarah Chen",
        role: "Product Owner",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      {
        name: "Alex Kumar",
        role: "Lead Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      {
        name: "Jordan Lee",
        role: "UX Researcher",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
      },
    ],
  },
  {
    id: "wellness-app",
    title: "MindfulMoments Mobile App",
    subtitle: "Mental Wellness App Redesign",
    category: "Mobile & Health",
    year: "2023",
    description:
      "A ground-up redesign of MindfulMoments, a mental wellness app, focusing on creating a calming, accessible experience that helps users build sustainable meditation and mindfulness habits.",
    challenge:
      "MindfulMoments had a strong meditation content library but suffered from poor user retention. Only 15% of users returned after day 3. The app felt clinical and overwhelming, with too many features competing for attention. Users reported feeling stressed by an app meant to reduce stress. The business needed to improve retention to justify their content investment.",
    solution:
      "Conducted ethnographic research with 30+ users, observing their daily routines and meditation practices. Simplified the interface to focus on three core actions: Start, Track, Reflect. Redesigned the home screen to be a calm, breathing space rather than a feature dashboard. Created a gentle onboarding flow that adapts to user experience level. Implemented a streaks system with forgiving logic that encourages rather than punishes. Designed micro-interactions that feel peaceful and rewarding. Added dark mode optimized for evening meditation sessions.",
    outcome:
      "Increased 7-day retention from 15% to 62%. Boosted daily active users by 180%. Average session length increased from 3 minutes to 12 minutes. App Store rating improved from 3.8 to 4.9 stars. Received Apple App Store 'App of the Day' feature. Subscription conversions increased by 95%, with users citing the 'beautiful, calming interface' as a key factor.",
    role: [
      "Lead Product Designer",
      "User Research",
      "Interaction Design",
      "Prototyping",
    ],
    tools: [
      "Figma",
      "Principle",
      "React Native",
      "Lottie",
      "Firebase",
      "Amplitude",
      "Lookback",
      "Maze",
    ],
    duration: "4 months",
    highlights: [
      "Conducted 30+ in-context user research sessions",
      "Simplified navigation from 8 tabs to 3 core actions",
      "Designed 40+ calming micro-interactions and animations",
      "Created adaptive onboarding for beginners and experienced practitioners",
      "Built forgiving streak system that reduces pressure",
      "Implemented accessibility features for users with anxiety",
      "Designed optimized dark mode for evening meditation",
    ],
    images: {
      hero: "https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg",
      gallery: [
        "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
        "https://images.pexels.com/photos/7592744/pexels-photo-7592744.jpeg",
      ],
    },
    metrics: [
      {
        label: "7-Day Retention",
        before: "15%",
        after: "62%",
        improvement: "+313%",
      },
      {
        label: "Daily Active Users",
        before: "8K",
        after: "22.4K",
        improvement: "+180%",
      },
      {
        label: "Avg. Session Length",
        before: "3 min",
        after: "12 min",
        improvement: "+300%",
      },
      {
        label: "Subscription Conversion",
        before: "2.1%",
        after: "4.1%",
        improvement: "+95%",
      },
    ],
    testimonials: [
      {
        quote: "The redesign transformed our app from a product we were worried about to our biggest growth driver. The retention numbers speak for themselves.",
        author: "Emma Wilson",
        role: "Co-Founder",
        company: "MindfulMoments",
      },
      {
        quote: "This is the first meditation app that doesn't stress me out. The interface is so peaceful and the streaks actually motivate me instead of making me feel guilty.",
        author: "James Park",
        role: "User",
        company: "Beta Tester",
      },
    ],
    projectPhases: [
      {
        name: "User Research",
        description: "In-context interviews and meditation practice observation with diverse user groups",
        duration: "3 weeks",
      },
      {
        name: "Concept Development",
        description: "Ideation workshops, mood boarding, and design direction exploration",
        duration: "2 weeks",
      },
      {
        name: "Design System",
        description: "Created calming color palette, typography, and component library",
        duration: "2 weeks",
      },
      {
        name: "UI/UX Design",
        description: "High-fidelity screens, micro-interactions, and animated prototypes",
        duration: "6 weeks",
      },
      {
        name: "Testing & Refinement",
        description: "Usability testing, A/B testing, and design iterations",
        duration: "3 weeks",
      },
      {
        name: "Development Support",
        description: "Component handoff, QA review, and animation implementation",
        duration: "4 weeks",
      },
    ],
    teamMembers: [
      {
        name: "Emma Wilson",
        role: "Product Manager",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      },
      {
        name: "David Park",
        role: "iOS Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      },
      {
        name: "Lisa Chen",
        role: "Content Strategist",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      },
      {
        name: "Ryan Martinez",
        role: "Android Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
      },
    ],
  },
];

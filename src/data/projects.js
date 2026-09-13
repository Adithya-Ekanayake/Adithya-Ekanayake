export const projects = [
  {
    id: 'educonnect',
    slug: 'educonnect',
    title: 'EduConnect',
    tagline: 'Peer-to-Peer Academic Skill Sharing Platform',
    description: 'A platform connecting university students for peer-to-peer tutoring, collaborative skill sharing, and study group organization.',
    problem: 'University students frequently struggle to find peer mentors for specialized subjects or study partners with complementary skill sets within their department.',
    solution: 'Designed and engineered an interactive skill matching platform where students list their expertise and learning goals, enabling automated tutor-learner discovery and study session scheduling.',
    keyFeatures: [
      'Interactive skill matching algorithm based on student interests and target subjects',
      'Real-time study group creation and schedule management',
      'Peer rating and skill endorsement system',
      'Dashboard tracking learning hours and taught topics'
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'Axios'],
    architecture: [
      { step: 'User Interface', description: 'React SPA with responsive dashboard components and state management' },
      { step: 'Frontend Router', description: 'React Router handling view transitions and protected state navigation' },
      { step: 'REST Client', description: 'Axios service layer mapping frontend requests to backend API' },
      { step: 'API Gateway', description: 'Node.js & Express REST endpoints managing user auth and match queries' },
      { step: 'Data Store', description: 'Relational database schema storing student profiles, skills, and session records' }
    ],
    challenges: [
      'Structuring stateful search filters for multi-category skill lookups without UI delay',
      'Designing responsive schedule calendars across desktop and mobile screens'
    ],
    lessonsLearned: [
      'Modular component breakdown greatly improves code reusability across user dashboards',
      'Optimizing client-side data caching reduces redundant API request latency'
    ],
    futureImprovements: [
      'Integrate WebRTC video call links for virtual peer study rooms',
      'Add automated calendar sync with Google Calendar'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/educonnect',
    liveDemoUrl: 'https://educonnect-demo.vercel.app',
year: 2026,
    category: 'Full Stack',
    featured: true,
    imageBg: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    accentColor: '#5B6EF5'
  },
  {
    id: 'moodcast',
    slug: 'moodcast',
    title: 'MoodCast',
    tagline: 'AI & React Wellness Companion',
    description: 'A personal wellness application that tracks mood, generates AI-powered daily plans, and provides curated resources for mental well-being.',
    problem: 'Managing mental well-being and maintaining consistent self-care routines can be challenging without personalized guidance and tracking tools.',
    solution: 'Built a React application that personalizes daily plans based on user mood, provides AI-generated suggestions, and tracks progress over time.',
    keyFeatures: [
      'Select Your Mood — Click on one of the 6 mood buttons at the top',
      'Generate AI Plan — Click "✨ Generate AI Day Plan" to get personalized suggestions',
      'Explore Features — Switch between tabs:',
      '📋 Plan — Your personalized daily schedule',
      '🍽️ Food — AI-suggested foods with ordering links',
      '📝 Journal — Write your thoughts for the day',
      '🧘 Wellness — Spotify playlist, breathing exercise, affirmation',
      'Save Your Check-In — Click "📌 Save today\'s mood & journal" to record your entry',
      'Track Progress — View your mood history and maintain your streak'
    ],
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Framer Motion', 'Axios'],
    architecture: [
      { step: 'Frontend', description: 'React application with modular component structure and Framer Motion animations' },
      { step: 'AI Integration', description: 'Google Gemini API for personalized day plan generation' },
      { step: 'Data Persistence', description: 'Browser localStorage for saving mood check-ins and tracking streaks' }
    ],
    challenges: [
      'Integrating AI API responses into the React state management flow',
      'Designing responsive mood button interactions with smooth transitions',
      'Creating a seamless tab switching experience between Plan, Food, Journal, and Wellness tabs'
    ],
    lessonsLearned: [
      'Balancing AI API call latency with smooth UI interactions is essential for user retention',
      'localStorage persistence provides offline access to mood history without backend dependencies'
    ],
    futureImprovements: [
      'Integrate Spotify API for personalized wellness playlists',
      'Add calendar sync for scheduled wellness activities',
      'Implement user authentication for cross-device progress tracking'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/MoodCast',
    liveDemoUrl: 'https://lnkd.in/p/g-TUfPqu',
    year: 2026,
    category: 'React',
    featured: true,
    imageBg: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    accentColor: '#5B6EF5'
  },
  {
    id: 'campus-marketplace',
    slug: 'campus-marketplace',
    title: 'Campus Marketplace',
    tagline: 'Student Marketplace & Tutoring Board',
    description: 'A full-stack platform for university students to buy and sell academic goods, find tutoring help, and communicate securely.',
    problem: 'Students need one trusted place to exchange textbooks, notes, equipment, and academic support within their university community.',
    solution: 'Built a Next.js marketplace with authenticated listings, multi-image uploads, messaging, email verification, and a threaded tutoring board.',
    keyFeatures: [
      'Searchable listings with category filters and multi-image uploads',
      'Authenticated buyer and seller messaging with ownership checks',
      'Tutoring requests with threaded responses',
      'Email verification and sold-listing lifecycle management'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth', 'MySQL', 'SQLite'],
    architecture: [
      { step: 'App Router', description: 'Next.js App Router powering server-rendered pages and route handlers' },
      { step: 'Authentication', description: 'NextAuth credentials flow with verified users and protected actions' },
      { step: 'Data Layer', description: 'Prisma models shared across SQLite development and MySQL production' },
      { step: 'Media & Messaging', description: 'UploadThing image storage and secure listing conversation routes' }
    ],
    challenges: [
      'Protecting listing, messaging, and tutoring mutations with server-side ownership checks',
      'Supporting a smooth image upload and gallery experience for marketplace listings'
    ],
    lessonsLearned: [
      'Server-side authorization is essential for trustworthy marketplace workflows',
      'A shared schema makes local development and production database deployment easier to maintain'
    ],
    futureImprovements: [
      'Add moderation and reporting workflows for community safety',
      'Add saved listings and push notifications for replies'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/Campus-marketplace',
    year: 2026,
    category: 'Full Stack',
    featured: true,
    imageBg: 'linear-gradient(135deg, #164E63 0%, #0F172A 100%)',
    accentColor: '#22D3EE'
  },
  {
    id: 'shopsphere-360',
    slug: 'shopsphere-360',
    title: 'ShopSphere 360',
    tagline: 'Business Intelligence & Customer Analytics Platform',
    description: 'An end-to-end e-commerce analytics platform combining business analysis, data engineering, SQL, Python, and interactive dashboards.',
    problem: 'Retail teams need a connected view of sales, customers, products, marketing, returns, and support to make better operational decisions.',
    solution: 'Designed a business and data analysis workflow that turns historical retail data into customer segments, performance dashboards, and actionable recommendations.',
    keyFeatures: [
      'Sales, profitability, product, marketing, returns, and support analysis',
      'RFM segmentation for customer value, churn, and retention insights',
      'SQL and Python analytics with Power BI executive dashboards',
      'Business recommendations grounded in measurable customer behavior'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'MySQL', 'Power BI', 'DAX', 'Power Query'],
    architecture: [
      { step: 'Data Sources', description: 'Historical e-commerce data and new business records' },
      { step: 'Data Engineering', description: 'SQL modeling, cleaning, validation, and reusable analytical tables' },
      { step: 'Analysis', description: 'Python notebooks for EDA, RFM scoring, segmentation, and KPI analysis' },
      { step: 'Decision Layer', description: 'Power BI dashboards and business recommendations for retail stakeholders' }
    ],
    challenges: [
      'Connecting technical analysis to business questions across multiple retail domains',
      'Presenting customer segmentation results clearly enough to support practical decisions'
    ],
    lessonsLearned: [
      'Business context makes analytical metrics more useful than isolated charts',
      'RFM segmentation provides a compact foundation for customer retention strategy'
    ],
    futureImprovements: [
      'Add automated data refresh and scheduled KPI reporting',
      'Expand predictive modeling for churn and demand forecasting'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/ShopSphere-360',
    liveDemoUrl: 'https://client-xi-three-61.vercel.app',
    year: 2026,
    category: 'Data & Analytics',
    featured: true,
    imageBg: 'linear-gradient(135deg, #713F12 0%, #1C1917 100%)',
    accentColor: '#F59E0B'
  },
  {
    id: 'online-retail-analytics',
    slug: 'online-retail-analytics',
    title: 'Online Retail Analytics',
    tagline: 'Python-Based Customer & Revenue Analysis',
    description: 'An end-to-end analytics project exploring sales performance, customer behavior, RFM segmentation, and customer value using a UK retail dataset.',
    problem: 'Raw transaction records make it difficult to see revenue patterns, customer value, and the groups most in need of retention efforts.',
    solution: 'Cleaned and analyzed the UCI Online Retail dataset with Python notebooks, then translated the results into visualizations and business recommendations.',
    keyFeatures: [
      'Data cleaning and exploratory analysis of retail transactions',
      'Revenue trends and customer purchasing behavior analysis',
      'RFM scoring with Champions, Loyal, At Risk, New, and Inactive segments',
      'Business-focused charts and recommendations for each customer group'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    architecture: [
      { step: 'Dataset', description: 'UCI Online Retail transaction data from a UK-based retailer' },
      { step: 'Preparation', description: 'Missing-value handling, date conversion, cancellation filtering, and revenue calculation' },
      { step: 'Customer Analysis', description: 'RFM scoring and customer segmentation by behavior and value' },
      { step: 'Visualization', description: 'Revenue trends, segment distributions, and customer value charts' }
    ],
    challenges: [
      'Converting messy transaction records into reliable customer-level metrics',
      'Turning analytical segments into recommendations that a business team can act on'
    ],
    lessonsLearned: [
      'Customer segmentation reveals patterns hidden by overall sales totals',
      'Clear visualizations help connect notebook analysis to business decisions'
    ],
    futureImprovements: [
      'Add an interactive dashboard for filtering segments and periods',
      'Introduce predictive churn and customer lifetime value models'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/Online-Retail-Analytics',
    year: 2026,
    category: 'Data & Analytics',
    featured: true,
    imageBg: 'linear-gradient(135deg, #14532D 0%, #052E16 100%)',
    accentColor: '#4ADE80'
  },
  {
    id: 'supplier-registration-system',
    slug: 'supplier-registration-system',
    title: 'Supplier Registration System',
    tagline: 'Supplier Onboarding & Management Platform',
    description: 'A web application for streamlining supplier registration, validation, and information management through a structured digital workflow.',
    problem: 'Manual supplier onboarding makes it difficult to collect complete information, validate submissions, and keep supplier records consistent.',
    solution: 'Built a responsive registration workflow that guides suppliers through form submission while giving administrators a clearer way to review and manage supplier data.',
    keyFeatures: [
      'Structured supplier registration and profile management',
      'Form validation for complete and consistent submissions',
      'Responsive interface for suppliers and administrators',
      'Centralized workflow for reviewing supplier information'
    ],
    technologies: ['React', 'Node.js', 'SQLite', 'JavaScript', 'HTML5', 'CSS3'],
    architecture: [
      { step: 'Registration UI', description: 'Responsive React forms for collecting supplier and business information' },
      { step: 'Validation Layer', description: 'Client and server validation for reliable supplier submissions' },
      { step: 'API Layer', description: 'Node.js service handling registration and supplier record operations' },
      { step: 'Data Store', description: 'SQLite persistence for supplier profiles and registration status' }
    ],
    challenges: [
      'Designing a registration flow that stays clear as supplier requirements grow',
      'Keeping validation and stored supplier data consistent across the workflow'
    ],
    lessonsLearned: [
      'Well-structured forms reduce friction and improve data quality at the source',
      'Separating the interface, API, and data layers makes future workflow changes easier'
    ],
    futureImprovements: [
      'Add role-based approval and supplier status tracking',
      'Add document uploads, notifications, and audit history'
    ],
    githubUrl: 'https://github.com/Adithya-Ekanayake/Supplier-Registration-System',
    year: 2026,
    category: 'Full Stack',
    featured: true,
    imageBg: 'linear-gradient(135deg, #7C2D12 0%, #1C1917 100%)',
    accentColor: '#FB923C'
  }
];
export const skills = [
  // Priority skills from current portfolio projects
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    icon: 'SiNextdotjs',
    description: 'App Router, server-rendered interfaces, route handlers, and full-stack React application architecture.',
    relatedProjects: ['Campus Marketplace']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'SiTypescript',
    description: 'Typed application development for safer components, APIs, and shared data models.',
    relatedProjects: ['Campus Marketplace', 'ShopSphere 360']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Data & Analytics',
    icon: 'SiPython',
    description: 'Data analysis, notebook workflows, visualization, and business insight generation.',
    relatedProjects: ['ShopSphere 360', 'Online Retail Analytics']
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'Data & Analytics',
    icon: 'SiPandas',
    description: 'Tabular data cleaning, transformation, aggregation, and customer-level analysis.',
    relatedProjects: ['ShopSphere 360', 'Online Retail Analytics']
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'Data & Analytics',
    icon: 'SiNumpy',
    description: 'Numerical computing foundations for analytical and data-processing workflows.',
    relatedProjects: ['ShopSphere 360', 'Online Retail Analytics']
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database',
    icon: 'FaDatabase',
    description: 'Queries, relational modeling, data preparation, joins, aggregation, and analytical reporting.',
    relatedProjects: ['Campus Marketplace', 'ShopSphere 360']
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'Database',
    icon: 'SiSqlite',
    description: 'Lightweight relational persistence for local development and application workflows.',
    relatedProjects: ['Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'prisma',
    name: 'Prisma',
    category: 'Backend',
    icon: 'SiPrisma',
    description: 'Type-safe database access and schema management for full-stack applications.',
    relatedProjects: ['Campus Marketplace']
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'SiTailwindcss',
    description: 'Utility-first responsive styling for consistent interfaces and rapid UI composition.',
    relatedProjects: ['Campus Marketplace']
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'Data & Analytics',
    icon: 'FaChartBar',
    description: 'Interactive business intelligence dashboards for KPIs, customer segments, and retail performance.',
    relatedProjects: ['ShopSphere 360']
  },
  {
    id: 'dax',
    name: 'DAX',
    category: 'Data & Analytics',
    icon: 'FaChartBar',
    description: 'Analytical expressions and measures for business intelligence reporting.',
    relatedProjects: ['ShopSphere 360']
  },
  {
    id: 'power-query',
    name: 'Power Query',
    category: 'Data & Analytics',
    icon: 'FaChartBar',
    description: 'Data extraction, transformation, and preparation for repeatable reporting workflows.',
    relatedProjects: ['ShopSphere 360']
  },
  {
    id: 'jupyter-notebook',
    name: 'Jupyter Notebook',
    category: 'Data & Analytics',
    icon: 'SiJupyter',
    description: 'Reproducible, documented analysis combining executable code, visualizations, and findings.',
    relatedProjects: ['Online Retail Analytics']
  },
  {
    id: 'nextauth',
    name: 'NextAuth',
    category: 'Backend',
    icon: 'FaLock',
    description: 'Authentication and protected user workflows for full-stack Next.js applications.',
    relatedProjects: ['Campus Marketplace']
  },
  // Frontend
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    icon: 'FaHtml5',
    description: 'Semantic markup, accessibility (a11y), responsive structures, and modern DOM elements.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    icon: 'FaCss3Alt',
    description: 'Custom CSS variables, Flexbox, Grid, keyframe animations, glassmorphism, and responsive layouts.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'SiJavascript',
    description: 'ES6+ syntax, Async/Await, Promises, closures, DOM manipulation, and functional patterns.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: 'FaReact',
    description: 'Hooks, Component Architecture, React Router, Context API, state management, and lifecycle handling.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: 'FaNodeJs',
    description: 'Event-driven asynchronous runtime, RESTful API architecture, package management with NPM.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    icon: 'SiExpress',
    description: 'REST API routing, middleware integration, JSON request parsing, and error handling.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },

  // AI & ML
  {
    id: 'ai-integration',
    name: 'AI Integration & Prompt Engineering',
    category: 'AI & ML',
    icon: 'FaBrain',
    description: 'LLM API integration, prompt engineering, structured responses, AI-powered features, and connecting AI services with web applications.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },

  // Database
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Database',
    icon: 'SiMysql',
    description: 'Relational database modeling, SQL queries, table indexes, join operations, and schema normalization.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'Tools',
    icon: 'FaGitAlt',
    description: 'Distributed version control, branching workflows, merging strategies, and commit history discipline.',
    relatedProjects: ['All Projects']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools',
    icon: 'FaGithub',
    description: 'Code hosting, pull requests, issue tracking, GitHub Actions CI/CD basics, and documentation.',
    relatedProjects: ['All Projects']
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools',
    icon: 'SiVscodium',
    description: 'Primary IDE, customized debugging, extensions, snippets, and integrated terminal workflows.',
    relatedProjects: ['All Projects']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Tools',
    icon: 'FaFigma',
    description: 'UI/UX wireframing, component design systems, prototyping, and visual layout planning.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Campus Marketplace', 'Supplier Registration System']
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    icon: 'SiPostman',
    description: 'API endpoint testing, request inspection, environment variables, and payload debugging.',
    relatedProjects: ['MoodCast', 'EduConnect', 'Supplier Registration System']
  }
];
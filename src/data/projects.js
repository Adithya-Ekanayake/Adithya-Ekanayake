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
    githubUrl: 'https://github.com/AdithyaEkanayake/educonnect',
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
    githubUrl: 'https://github.com/AdithyaEkanayake/MoodCast',
    liveDemoUrl: 'https://lnkd.in/p/g-TUfPqu',
    year: 2026,
    category: 'React',
    featured: true,
    imageBg: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    accentColor: '#5B6EF5'
  }
];
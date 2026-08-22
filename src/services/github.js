import axios from 'axios';

const GITHUB_USERNAME = 'Adithya-Ekanayake';
const API_BASE_URL = 'https://api.github.com';

// Resilient fallback mock data when GitHub API is rate-limited, offline, or unavailable
const FALLBACK_GITHUB_DATA = {
  profile: {
    username: GITHUB_USERNAME,
    name: 'Adithya Ekanayake',
    avatarUrl: 'https://avatars.githubusercontent.com/u/100000000?v=4',
    bio: 'Information Systems Undergraduate & Software Developer | React & Web Enthusiast',
    publicRepos: 18,
    followers: 42,
    following: 38,
    stars: 34,
    location: 'Sri Lanka',
    htmlUrl: `https://github.com/${GITHUB_USERNAME}`
  },
  repos: [
    {
      id: 101,
      name: 'EduConnect',
      description: 'Peer-to-peer skills sharing platform for university students built with React and Node.js.',
      language: 'JavaScript',
      stars: 12,
      forks: 4,
      htmlUrl: 'https://github.com/kawshalya-k/EduConnect',
      updatedAt: '2026-02-14T10:30:00Z'
    },
    {
      id: 102,
      name: 'coasty-lanka',
      description: 'Sri Lanka coastal travel and beach destination explorer web app.',
      language: 'JavaScript',
      stars: 9,
      forks: 2,
      htmlUrl: `https://github.com/${GITHUB_USERNAME}/coasty-lanka`,
      updatedAt: '2025-11-20T14:15:00Z'
    },
    {
      id: 103,
      name: 'student-management-system',
      description: 'Academic administration management portal for university student record tracking.',
      language: 'JavaScript',
      stars: 8,
      forks: 3,
      htmlUrl: `https://github.com/${GITHUB_USERNAME}/student-management-system`,
      updatedAt: '2025-08-05T09:45:00Z'
    },
    {
      id: 104,
      name: 'devpulse',
      description: 'Personal developer activity monitor and project task tracking dashboard.',
      language: 'React',
      stars: 5,
      forks: 1,
      htmlUrl: `https://github.com/${GITHUB_USERNAME}/devpulse`,
      updatedAt: '2026-01-18T16:20:00Z'
    }
  ],
  languages: [
    { name: 'JavaScript', percentage: 65, color: '#F7DF1E' },
    { name: 'React / JSX', percentage: 20, color: '#61DAFB' },
    { name: 'HTML / CSS', percentage: 10, color: '#E34F26' },
    { name: 'Java / SQL', percentage: 5, color: '#007396' }
  ]
};

export const fetchGitHubProfileData = async (username = GITHUB_USERNAME) => {
  try {
    const [userRes, reposRes, contributedRepoRes] = await Promise.all([
      axios.get(`${API_BASE_URL}/users/${username}`, { timeout: 5000 }),
      axios.get(`${API_BASE_URL}/users/${username}/repos?sort=updated&per_page=100`, { timeout: 5000 }),
      axios.get(`${API_BASE_URL}/repos/kawshalya-k/EduConnect`, { timeout: 5000 })
    ]);

    const userData = userRes.data;
    const reposData = [
      ...(reposRes.data || []),
      contributedRepoRes.data
    ];

    // Calculate total stars across public repos
    const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

    // Calculate top languages breakdown
    const languageCounts = {};
    reposData.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });

    const totalLangRepos = Object.values(languageCounts).reduce((a, b) => a + b, 0) || 1;
    const langColors = {
      JavaScript: '#F7DF1E',
      TypeScript: '#3178C6',
      HTML: '#E34F26',
      CSS: '#563D7C',
      Java: '#007396',
      Python: '#3572A5'
    };

    const languages = Object.keys(languageCounts).map((lang) => ({
      name: lang,
      percentage: Math.round((languageCounts[lang] / totalLangRepos) * 100),
      color: langColors[lang] || '#5B6EF5'
    }));

    return {
      profile: {
        username: userData.login,
        name: userData.name || userData.login,
        avatarUrl: userData.avatar_url,
        bio: userData.bio || 'Information Systems Undergraduate & Software Developer',
        publicRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        stars: totalStars,
        location: userData.location || 'Sri Lanka',
        htmlUrl: userData.html_url
      },
      repos: reposData
        .sort((firstRepo, secondRepo) => {
          const firstIsEduConnect = firstRepo.name.toLowerCase() === 'educonnect';
          const secondIsEduConnect = secondRepo.name.toLowerCase() === 'educonnect';
          return Number(secondIsEduConnect) - Number(firstIsEduConnect);
        })
        .map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description provided.',
          language: repo.language || 'Code',
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          htmlUrl: repo.html_url,
          updatedAt: repo.updated_at
        })),
      languages: languages.length > 0 ? languages : FALLBACK_GITHUB_DATA.languages,
      isFallback: false
    };
  } catch (error) {
    console.warn('GitHub REST API request failed or rate-limited. Falling back to cached GitHub profile data.', error);
    return {
      ...FALLBACK_GITHUB_DATA,
      isFallback: true
    };
  }
};

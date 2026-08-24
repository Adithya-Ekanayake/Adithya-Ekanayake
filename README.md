# Adithya's Portfolio

A modern, interactive personal portfolio website built with React, featuring a dark/light theme toggle, command palette, and sections showcasing skills, projects, experience, and more.

## ✨ Features

- **🎨 Dark/Light Theme Toggle** – Seamlessly switch between themes
- **⌨️ Command Palette** – Quick navigation with Ctrl+K shortcut
- **📱 Responsive Design** – Mobile-friendly layout
- **🚀 Smooth Animations** – Built with Framer Motion
- **📄 Dynamic Resume** – Generated from JavaScript data
- **🔗 GitHub Integration** – Display GitHub repositories and stats
- **🎯 Project Showcase** – Detailed project pages with routing
- **📊 Interactive Sections** – About, Skills, Experience, Education, Certificates, and Contact

## 📋 Sections

- **Hero** – Welcome banner with introduction
- **About** – Personal background and overview
- **Skills** – Technical skills and proficiencies
- **Experience** – Work history and professional timeline
- **Education** – Academic background
- **Projects** – Showcase of featured projects with details
- **Certificates** – Certifications and achievements
- **GitHub** – GitHub profile integration
- **Contact** – Get in touch section
- **Resume** – Downloadable resume

## 🛠️ Tech Stack

- **React 19** – UI framework
- **React Router** – Client-side routing
- **Framer Motion** – Animation library
- **Axios** – HTTP client for API calls
- **React Icons** – Icon library
- **React Scripts** – Build and development tools
- **PDFKit** – Resume PDF generation

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd adithya-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

## 📝 Scripts

- `npm start` – Run development server
- `npm build` – Build for production
- `npm test` – Run tests
- `npm run generate-resume` – Generate resume PDF
- `npm run eject` – Eject from Create React App (irreversible)

## 📂 Project Structure

```
src/
├── components/        # Reusable React components
│   ├── About/
│   ├── Certificates/
│   ├── CommandPalette/
│   ├── Contact/
│   ├── Education/
│   ├── Experience/
│   ├── Footer/
│   ├── GitHub/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   ├── Resume/
│   ├── Skills/
│   ├── Terminal/
│   └── ThemeToggle/
├── pages/            # Page components
├── data/             # Static data (skills, projects, etc.)
├── hooks/            # Custom React hooks
│   ├── useTheme.js      # Theme management
│   ├── useCommandPalette.js  # Command palette state
│   └── useGitHub.js         # GitHub API integration
├── services/         # API and external services
└── App.js            # Main app component
```

## 🎯 Key Components

### Hooks
- **`useTheme`** – Manages dark/light theme state
- **`useCommandPalette`** – Controls command palette open/close state
- **`useGitHub`** – Fetches GitHub data via GitHub API

### Pages
- **Home** – Landing page with all sections
- **Projects** – Projects listing
- **ProjectDetails** – Individual project details
- **About, Skills, Experience, Education, Certificates, Contact, Resume, GitHub** – Dedicated section pages

### Data Files
- `certificates.js` – Certificate entries
- `education.js` – Education history
- `experience.js` – Work experience
- `projects.js` – Project listings
- `skills.js` – Skills and proficiencies

## 🚀 Deployment

The project is built with Create React App and can be deployed to any static hosting service:

- **Vercel:** `vercel deploy`
- **Netlify:** Connect repository for automatic deployments
- **GitHub Pages:** `npm run build` and push to gh-pages branch

## 🎨 Customization

### Update Your Data
Edit files in `src/data/` to customize:
- Skills, projects, experience, education, and certificates

### Modify Styling
- Global styles in `src/index.css` and `src/App.css`
- Component-specific styles in respective `.css` files

### Configure GitHub Integration
Update `src/services/github.js` with your GitHub username to display your repositories.

## 🔧 Development

### Available Hooks
```javascript
// Theme management
const { theme, toggleTheme } = useTheme();

// Command palette
const { isOpen, openPalette, closePalette } = useCommandPalette();

// GitHub data
const { repos, stats, loading } = useGitHub(username);
```

## 📄 Resume Generation

Generate a PDF resume:
```bash
npm run generate-resume
```
This uses PDFKit and the `scripts/generate-resume.js` script.

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📄 License

This project is open source. Feel free to fork and customize for your own portfolio.

## 👤 Author

**Adithya**

---

**Happy Coding! 🚀**

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import useCommandPalette from './hooks/useCommandPalette';
import Navbar from './components/Navbar/Navbar';
import CommandPalette from './components/CommandPalette/CommandPalette';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isOpen: isPaletteOpen, openPalette, closePalette } = useCommandPalette();

  useEffect(() => {
    if (window.location.pathname === '/' && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="app-layout">
      {/* Sticky Header Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openCommandPalette={openPalette}
      />

      {/* Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={closePalette}
        toggleTheme={toggleTheme}
      />

      {/* Main View Routes */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          {/* Catch-all or section redirects to Home */}
          <Route path="*" element={<Home toggleTheme={toggleTheme} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import ProjectsSection from '../components/Projects/ProjectsSection';

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page py-4">
      <ProjectsSection isFullPage={true} />
    </div>
  );
}
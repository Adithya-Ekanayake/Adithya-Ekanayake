import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaTrash } from 'react-icons/fa';
import './Terminal.css';

export default function Terminal({ toggleTheme }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'output',
      text: 'Adithya Ekanayake Portfolio Terminal [Version 2.4.0]'
    },
    {
      type: 'output',
      text: 'Type "help" to see available developer commands.'
    }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e, commandOverride = inputVal) => {
    e.preventDefault();
    const cmd = commandOverride.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available Commands:
  help       - Display this command list
  whoami     - Print developer profile summary
  skills     - List core technical skills & stacks
  projects   - Show highlighted portfolio projects
  github     - Display GitHub statistics & profile
  education  - Print university degree information
  contact    - Print email & social media handles
  resume     - Trigger resume download
  theme      - Toggle Light/Dark mode
  clear      - Clear terminal screen history`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Name: Adithya Ekanayake
Role: Software Developer & Information Systems Undergraduate
University: Sabaragamuwa University of Sri Lanka (Faculty of Computing)
Location: Sri Lanka
Focus: React.js, JavaScript, Frontend Architecture, Clean Code & UI Design`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `Technical Skill Set:
  Frontend: HTML5, CSS3, JavaScript (ES6+), React.js
  Backend:  Node.js, Express.js, Spring Boot
  Database: MySQL
  Tools:    Git, GitHub, VS Code, Figma, Postman`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `Portfolio Projects:
  1. EduConnect              - Peer-to-Peer Academic Skill Sharing Platform
  2. Coasty Lanka            - Sri Lanka Coastal Tourism & Travel Directory
  3. Student Management Sys  - University Academic Administration Portal
  4. DevPulse Dashboard      - Personal Developer Activity Monitor
  5. AlgoViz Visualizer      - Algorithm Step-by-Step Playground`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `Education:
  Degree: BSc (Hons) in Information Systems
  Campus: Sabaragamuwa University of Sri Lanka
  Faculty: Faculty of Computing (2024 - Present)`
        });
        break;

      case 'github':
        newHistory.push({
          type: 'output',
          text: `GitHub Profile: https://github.com/Adithya-Ekanayake
Public Repositories: 18+
Total Stars: 34+
Primary Language: JavaScript / React`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Contact Info:
  Email:    adithyaekanayake2@gmail.com
  LinkedIn: https://linkedin.com/in/adithya-ekanayake
  GitHub:   https://github.com/AdithyaEkanayake`
        });
        break;

      case 'resume':
        newHistory.push({
          type: 'output',
          text: 'Triggering resume download: Adithya_Ekanayake_Resume.pdf ...'
        });
        window.open('/resume/Adithya_Ekanayake_Resume.pdf', '_blank');
        break;

      case 'theme':
        if (toggleTheme) toggleTheme();
        newHistory.push({
          type: 'output',
          text: 'Toggled application theme (Dark / Light).'
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `zsh: command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleQuickCommand = (cmdText) => {
    handleCommand({ preventDefault: () => {} }, cmdText);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(e);
    }
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// 08. INTERACTIVE CONSOLE</span>
          <h2 className="section-title">Developer Terminal Playground</h2>
          <p className="section-subtitle">
            An interactive command-line interface allowing quick query of my developer profile, skills, and projects.
          </p>
        </div>

        <div className="terminal-window card">
          <div className="terminal-topbar">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title font-mono">
              <FaTerminal className="inline-icon" /> adithya@portfolio:~
            </div>
            <button
              className="clear-btn font-mono"
              onClick={() => setHistory([])}
              title="Clear Terminal"
            >
              <FaTrash /> Clear
            </button>
          </div>

          <div className="quick-command-bar font-mono">
            <span className="quick-label">Try:</span>
            {['help', 'whoami', 'skills', 'projects', 'github', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                className="quick-cmd-chip"
                onClick={() => handleQuickCommand(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>

          <div className="terminal-screen font-mono">
            {history.map((item, index) => (
              <div key={index} className={`terminal-line ${item.type}`}>
                {item.type === 'input' ? (
                  <span className="prompt-prefix">
                    <span className="prompt-user">adithya@portfolio</span>:
                    <span className="prompt-dir">~</span>$&nbsp;
                    <span className="prompt-cmd">{item.text}</span>
                  </span>
                ) : (
                  <pre className="output-text">{item.text}</pre>
                )}
              </div>
            ))}

            <form onSubmit={handleCommand} className="terminal-form">
              <span className="prompt-prefix">
                <span className="prompt-user">adithya@portfolio</span>:
                <span className="prompt-dir">~</span>$&nbsp;
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="terminal-input font-mono"
                placeholder="Type command here..."
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="sr-only">Execute</button>
            </form>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

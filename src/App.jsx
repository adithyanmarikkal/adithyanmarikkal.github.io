import { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import homepageImg from './assets/Homepage.webp';
import webImg from './assets/web.png';
import { SiSolidity } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import projects from './data/projects.js';

const navLinks = [
  { label: '<Adithyan Marikkal>', href: '/', isBrand: true },
  { label: 'Projects',  href: '/#/projects' },
  { label: 'Resume',   href: 'https://drive.google.com/file/d/1giRAdAHv2i6E4U1UWrR-19QoNzBaLg_q/view?usp=sharing' },
  { label: 'GitHub',   href: 'https://github.com/adithyanmarikkal', target: '_blank' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adithyanmarikkal/', target: '_blank' },
]

function Home() {
  const serviceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projectsRef = useRef(null);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); 
      }
    }, { threshold: 0.15 });

    if (serviceRef.current) observer.observe(serviceRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsProjectsVisible(true);
        projectsObserver.disconnect(); 
      }
    }, { threshold: 0.1 });

    if (projectsRef.current) projectsObserver.observe(projectsRef.current);
    return () => projectsObserver.disconnect();
  }, []);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a 
                href={link.href} 
                target={link.target || '_self'} 
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="nav-link"
              >
                <span className={`link-text ${link.isBrand ? 'brand-signature' : ''}`}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">I'm <span className="brand-signature">Adithyan Marikkal</span></h1>
          <p className="hero-description">
            A Computer Science graduate with experience in full-stack, blockchain, and AI applications. 
            I am passionate about building impactful, decentralized, and intelligent solutions from the ground up.
          </p>
          <div className="hero-actions">
            <a href="mailto:adithyanmunnikrishnan@gmail.com" className="hero-btn primary-btn">Let's Connect</a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={homepageImg} alt="Adithyan Marikkal" className="hero-image" />
        </div>
      </section>

      <section id="what-i-do" className="what-i-do-section">
        <h2 className="section-heading">What I Do?</h2>

        <div className="service-container" ref={serviceRef}>
          <div className={`service-content ${isVisible ? 'animate-slide-left' : 'hidden-left'}`}>
            <h3 className="service-title">Full Stack Development</h3>
            
            <div className="tech-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" title="Docker" />
            </div>

            <ul className="service-list">
              <li>Building responsive website front ends using React, JavaScript, and TypeScript</li>
              <li>Creating robust application backends in Node.js, FastAPI, MongoDB, PostgreSQL, and Docker</li>
              <li>Engineering full stack apps utilizing blockchain technologies and AI integrations</li>
            </ul>
          </div>
          
          <div className={`service-image-container ${isVisible ? 'animate-slide-right' : 'hidden-right'}`}>
            <img src={webImg} alt="Web Development" className="service-image" />
          </div>
        </div>

        <hr className="subtle-divider" />

        <div className="exploration-section">
          <h3 className="section-subtitle">Other Technologies Explored</h3>
          <div className="cards-container">
            <div className={`exploration-card ${isVisible ? 'slide-up-1' : 'hidden-bottom'}`}>
              <SiSolidity className="card-icon" />
              <h4 className="card-title">Web3 & Smart Contract Development</h4>
              <p className="card-desc">Building decentralised applications and smart contracts across public and permissioned blockchain networks.</p>
            </div>
            
            <div className={`exploration-card ${isVisible ? 'slide-up-2' : 'hidden-bottom'}`}>
              <TbBrain className="card-icon" />
              <h4 className="card-title">Machine Learning & Applied AI</h4>
              <p className="card-desc">Applying machine learning models and retrieval-augmented generation pipelines to real-world problems.</p>
            </div>
          </div>
        </div>

        <hr className="subtle-divider" />

        <div className="projects-section" ref={projectsRef}>
          <h3 className="section-subtitle">Featured Projects</h3>
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${isProjectsVisible ? `slide-up-${(index % 3) + 1}` : 'hidden-bottom'}`}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub</a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-container">
            <Link to="/projects" className="view-all-btn">View All Projects</Link>
          </div>
        </div>

      </section>

      <footer className="home-footer">
        Made by ❤️ Adithyan Marikkal
      </footer>
    </div>
  )
}

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
      <nav className="navbar navbar-fixed">
        <ul className="nav-list">
          <li className="nav-item mr-auto">
            <Link to="/" className="nav-link brand-signature">&lt;Adithyan Marikkal&gt;</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
        </ul>
      </nav>

      <section className="projects-hero">
        <h1 className="hero-title">My <span className="brand-signature">Projects</span></h1>
        <p className="hero-description">
          A collection of my work in full-stack development, blockchain, and AI.
        </p>
      </section>

      <div className="projects-page-grid-wrapper">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub</a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="back-to-home-container">
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>

      <footer className="home-footer">
        Made by ❤️ Adithyan Marikkal
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App

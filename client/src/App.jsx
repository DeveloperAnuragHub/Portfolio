import React, { useState, useEffect } from 'react'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [hash, setHash] = useState(window.location.hash);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="container">
      <BackgroundSound />
      <nav className="main-nav replica-nav" aria-label="Primary">
        <a href="#home">HOME</a>
        <a href="#features">FEATURES</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#resume">RESUME</a>
        <a href="#clients">CLIENTS</a>
        <a href="#pricing">PRICING</a>
        <a href="#blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </nav>
      {hash === '#features' ? (
        <section id="features">
          <Projects />
          
        </section>
      ) : (
        <>
          <button 
            className="theme-toggle floating-toggle" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === 'dark' 
              ? <span aria-hidden="true" style={{fontSize:'1.7rem',display:'block'}}>🌙</span>
              : <span aria-hidden="true" style={{fontSize:'1.7rem',display:'block'}}>☀️</span>
            }
          </button>
          <header className="main-header replica-header">
            <div className="logo avatar"><img src="/profile.jpg" alt="avatar" className="avatar-img" /></div>
            <span className="brand-name">INBIO</span>
          </header>

          <section className="hero dark-hero replica-hero">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="hero-welcome">WELCOME TO MY WORLD</div>
                <h1 className="hero-headline">
                  Hi, I'm <span className="highlight">Anurag Garad</span>
                </h1>
                <h2 className="hero-sub"><span className="highlight-alt">a Professional Coder.</span></h2>
                <TypingHeroIntro />
                <div className="hero-socials-row">
                  <div className="hero-socials-col">
                    <div className="find-label">FIND WITH ME</div>
                    <div className="icon-row">
                      <a href="#" className="icon social-icon" aria-label="Instagram"><span>📸</span></a>
                      <a href="#" className="icon social-icon" aria-label="Facebook"><span>📘</span></a>
                      <a href="#" className="icon social-icon" aria-label="Twitter"><span>🐦</span></a>
                    </div>
                  </div>
                  <div className="hero-socials-col">
                    <div className="find-label">BEST SKILL ON</div>
                    <div className="icon-row">
                      <span className="icon skill-icon">💡</span>
                      <span className="icon skill-icon">🎨</span>
                      <span className="icon skill-icon">🛠️</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-right">
                <div className="hero-image-card replica-image-card">
                  <img src="/profile.jpg" alt="Anurag Garad" className="hero-image" />
                </div>
              </div>
            </div>
          </section>



          <footer style={{marginTop:22,borderTop:'1px solid rgba(255,255,255,0.03)',paddingTop:12}}>
            <small className="muted">Built with MERN</small>
          </footer>
        </>
      )}
    </div>
  )
}

// Typing animation for hero-intro
function TypingHeroIntro() {
  const fullText = "I use animation as a third dimension by which to simplify experiences and guiding through each and every interaction. I'm not adding motion just to spruce things up; but doing it in ways that matter.";
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 38); // slower typing
    return () => clearInterval(interval);
  }, []);
  return (
    <p className="hero-intro typing">
      {displayed}
      <span className="typing-cursor" aria-hidden="true">|</span>
    </p>
  );
}

// Add background sound (autoplay, loop, controls)
function BackgroundSound() {
  return (
    <audio src="/bg-sound.mp3" autoPlay loop style={{display:'none'}} />
  );
}

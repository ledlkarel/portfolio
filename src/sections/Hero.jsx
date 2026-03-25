export default function Hero() {
  return (
    <section className="hero" id="home">
      <div>
        <p className="eyebrow">Software Developer</p>
        <h1 className="hero-title">
          Hi, I&apos;m <span className="accent">Karel Lédl</span>.
        </h1>
        <p className="hero-subtitle">
          (TODO) write some slogan
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#contact">
            Let&apos;s talk
          </a>
          <a className="btn ghost" href="#projects">
            View projects
          </a>
        </div>
        <div className="meta-row">
          <span className="pill">Remote</span>
        </div>
      </div>
      <div className="hero-card">
        <p className="mono-label">Currently working at</p>
        <h3>Connexa It</h3>
        <ul className="list">
          <li>Developing a CRM system in Low Code platform Tabidoo</li>
          <li>Creating automations to connect customer systems in Make/n8n</li>
          <li>Testing of processes</li>
        </ul>
      </div>
    </section>
  )
}


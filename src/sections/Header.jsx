import '/src/styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">KL</div>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <a className="header-button" href="/src/assets/CV.pdf" target='blank'>
        Resume
      </a>
    </header>
  )
}
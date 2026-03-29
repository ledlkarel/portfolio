
import './styles/App.css'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import experiences from './data/experience.js'
import projects from './data/projects.js'
import skills from './data/skills.js'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="container">
        <Hero />
        <About />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

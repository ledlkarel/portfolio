
import './styles/App.css'
import Header from './sections/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

const experiences = [
  {
    title: 'Connexa It',
    company: 'Low Code/No code delevoper ',
    period: '2022 — Present',
    bullets: [
      'Development of a CRM with the use of platforms Tabidoo, Make, N8N',
    ],
  }
]

const projects = [
  {
    name: 'Time Tracker',
    stack: ['React', 'Next.js', 'Supabase', 'Tailwind'],
    description:
      'Web app for tracking time.',
    link: 'https://github.com/ledlkarel/time-tracker',
  },
  {
    name: 'QR Code generator',
    stack: ['Python'],
    description:
      'Simple app that takes url links and generates qr code fomr it.',
    link: 'https://github.com/ledlkarel/qr-code-generator',
  },
]

const skills = [
  'Javacript',
  'TypeScript',
  'Make',
  'N8N',
  'C#',
  '.NET',
  'GitHub',
  'Linux',
  'Rest API',
  'React'
]

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

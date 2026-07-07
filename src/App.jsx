import './App.css'
import { projects } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { SectionTitle } from './components/SectionTitle'

function App() {
  return (
    <main className="app-shell">
      <header className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Independent creative developer</p>
          <h1>Building web experiences that feel like a living sketchbook.</h1>
          <p className="hero-text">
            This portfolio is a space for showcasing every crafted project, experiment,
            and bold idea in one vivid, unconventional home.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-link">
              View projects
            </a>
            <a href="#contact" className="secondary-link">
              Let&apos;s connect
            </a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-core" />
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-ring ring-three" />
        </div>
      </header>

      <section className="about-panel" id="about">
        <SectionTitle
          title="A portfolio that moves like a concept studio"
          subtitle="Each project is arranged as a distinct idea, with its own voice, rhythm, and visual identity."
        />
        <div className="about-grid">
          <div>
            <h3>What this space is</h3>
            <p>
              A fresh digital gallery for your full code journey: landing pages, UI systems,
              dashboards, experiments, and everything that shaped your craft.
            </p>
          </div>
          <div>
            <h3>What you can add</h3>
            <p>
              Paste in new work whenever inspiration hits. The layout is intentionally modular,
              so each project can grow into its own chapter.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-panel" id="projects">
        <SectionTitle
          title="Selected works"
          subtitle="A curated collection of projects that speaks in color, motion, and clarity."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="contact-panel" id="contact">
        <div>
          <p className="eyebrow">Ready to share your next build</p>
          <h2>Let your work arrive with atmosphere.</h2>
        </div>
        <a href="mailto:yourname@example.com" className="primary-link">
          hello@yourportfolio.dev
        </a>
      </section>
    </main>
  )
}

export default App

export default function Projects({ projects }) {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>
      <div className="grid">
        {projects.map((project) => (
          <article className="card project" key={project.name}>
            <div className="card-head">
              <h3>{project.name}</h3>
              <div className="stack">
                {project.stack.map((tech) => (
                  <span className="pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="body">{project.description}</p>
            <a className="text-link" href={project.link} target='blank'>
              View details →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}


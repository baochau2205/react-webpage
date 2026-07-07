export function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.theme}`}>
      <div className="project-topline">
        <span className="project-chip">{project.type}</span>
        <span className="project-year">{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="chip-list">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={project.link}>Open case →</a>
    </article>
  )
}

function ProjectCard(props) {
  return (
    <div className="project-card">

      <h2>{props.name}</h2>

      <img src={props.screenshot} alt={props.name} />

      <p>{props.description}</p>

      <p><b>Tech used:</b> {props.tech}</p>

      <p><b>What I learned:</b> {props.learned}</p>

      <p><b>My role:</b> {props.role}</p>

      <p><b>Challenges:</b> {props.challenges}</p>

      <a href={props.github} target="_blank">
        View GitHub
      </a>

    </div>
  );
}

export default ProjectCard;
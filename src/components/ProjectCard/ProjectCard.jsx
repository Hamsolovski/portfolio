import PropTypes from "prop-types";
import "./projectCard.css";
import Label from "../Label/Label";

function ProjectCard({ project }) {
  return (
    <article className={`project-card noise ${project.tag}`}>
      <h2>{project.name}</h2>
      <section>
      <p className="project-card__time">{project.date}</p>
      <p className="project-card__desc">{project.desc}</p>
      <footer className="portfolio__skills_display">
        {project.stack.map((language) => (
          <Label key={language} label={language} />
        ))}
      </footer>
      </section>
      
    </article>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.array.isRequired,
  }),
};

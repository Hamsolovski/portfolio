import ProjectCard from "../ProjectCard/ProjectCard";
import projects from './list.js';

function ProjectList () {

    return(
        <section className="portfolio__projects_grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project}/>)}
        </section>
    )

}

export default ProjectList;
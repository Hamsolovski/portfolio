import './projectCard.css'
import Label from "../Label/Label";


function ProjectCard () {
    return (
        <article className="project-card">
            <h2>Projet</h2>
            <p className="project-card__time">Avril 2024</p>
            <p className="project-card__desc">Projet de formation - réseau social basique des élèves de ma promo</p>
            <Label />
        </article>
    )
}

export default ProjectCard;
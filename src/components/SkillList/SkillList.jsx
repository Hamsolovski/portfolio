import Label from "../Label/Label";
import skills from "./skills";

function SkillList () {
    return (
        <>
        <h3>Langages</h3>
          <section className="portfolio__skills_display">
            {skills.languages.map((language) => (<Label key={language} label={language}/>))}
          </section>
          <h3>Frontend</h3>
          <section className="portfolio__skills_display">
          {skills.frontend.map((language) => (<Label key={language} label={language}/>))}
          </section>
          <h3>Backend</h3>
          <section className="portfolio__skills_display">
          {skills.backend.map((language) => (<Label key={language} label={language}/>))}
          </section>
          <h3>Outils</h3>
          <section className="portfolio__skills_display">
          {skills.tools.map((language) => (<Label key={language} label={language}/>))}
          </section>
        
        </>
    )
}

export default SkillList;
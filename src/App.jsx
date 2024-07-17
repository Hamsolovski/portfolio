
import "./App.css";

import Label from "./components/Label/Label"
import ProjectCard from "./components/ProjectCard/ProjectCard";

function App() {
  return (
    <section className="portfolio__background">
      <main className="portfolio__main_container">
        <section className="portfolio__id">
          <h1>Antoine Delalande</h1>
          <p>Développeur web</p>
        </section>
        <section className="portfolio__who_am_i">
          <h2>Qui suis-je ?</h2>
          <p>Je suis un développeur web basé à Paris, en France. Après avoir travaillé dans la communication pour diverses associations environnementales pendant 8 ans, j’ai suivi une formation de développeur web à la Wild Code School, Paris.</p>
          <p>Très intéressé par l’impact du numérique, j’aspire à faire du web un endroit plus humain et écologique.</p>
          <p>J’ai deux chats, je dessine, et j’aime un peu trop les jeux et le game design.</p>
        </section>
        <section className="portfolio__skills">
          <h2>Mes compétences</h2>
          <h3>Langages</h3>
          <Label />
          {/* Faire un map ici */}
          <h3>Frontend</h3>
          <h3>Backend</h3>
          <h3>Outils</h3>
        </section>
        <section className="portfolio__projects">
          <h2>Mes projets web</h2>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </section>
        <footer className="portfolio__contact">
          <ul>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
          <a href="mailto:hamsolovski@gmail.com">Contactez-moi</a>
        </footer>
      </main>
      
    </section>
  );
}

export default App;

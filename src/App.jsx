import "./App.css";

import SkillList from "./components/SkillList/SkillList.jsx";
import ProjectList from "./components/ProjectList/ProjectList.jsx";

function App() {
  return (
    <main className="portfolio__main_container">
      <section className="portfolio__name">
        <h1>Antoine Delalande</h1>
        <p>Développeur web</p>
      </section>

      <section className="portfolio__id">
        <section className="portfolio__who_am_i">
          <h2>Qui suis-je ?</h2>
          <p>
            Je suis un développeur web basé à Paris, en France. Après avoir
            travaillé dans la communication pour diverses associations
            environnementales pendant 8 ans, j’ai suivi une formation de
            développeur web à la Wild Code School, Paris.
          </p>
          <p>
            Très intéressé par l’impact du numérique, j’aspire à faire du web un
            endroit plus humain et écologique.
          </p>
          <p>
            J’ai deux chats, je dessine, et j’aime un peu trop les jeux et le
            game design.
          </p>
        </section>
        <section className="portfolio__skills">
          <h2>Mes compétences</h2>
          <SkillList />
        </section>
      </section>
      <section className="portfolio__projects">
        <h2>Mes projets web</h2>
        <ProjectList />
      </section>
      <footer className="portfolio__contact">
        <ul>
          <a href="www.linkedin.com/in/ant-delalande">LinkedIn</a>
          <a href="https://github.com/Hamsolovski/">Github</a>
        </ul>
        <a className="portfolio__contact_link" href="mailto:hamsolovski@gmail.com">
          Contactez-moi
        </a>
        <p className="portfolio__credits">Crédit : Antoine Delalande ©2024</p>
      </footer>
    </main>
  );
}

export default App;

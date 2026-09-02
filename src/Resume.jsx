import "./resume.css";

export default function Experience() {
  return (
    <>
      {/* <Html
        transform
        distanceFactor={4}
        position={[5, 0, 0]}
        rotation-y={-1}
        onOcclude={(hidden) => null}
      > */}
      <div className="main_container">
        <header>
          <h1>Loïc Roch, Developpeur d'applications web</h1>
        </header>
        <address className="contact">
          <ul className="contact">
            <li>loic.roch@gmail.com</li>
            <li>06 50 86 71 64</li>
            <li>Jouy-le-Moutier, Val d'Oise</li>
          </ul>
        </address>
        <section className="profile">
          <h2>Profile</h2>
          <p>
            Développeur full-stack, je suis enthousiasmé par le web 3D et
            j'aspire à construire les sites de demain. <br />
            Dans le cadre de ma formation diplomante, je recherche un stage
            d'une durée de deux mois sur la période de janvier-février 2027.
          </p>
        </section>
        <section className="knowledge programming">
          <h2>Code & technologies</h2>
          <ul className="skills">
            <div>
              <span>Html</span>
              <span> Jade</span>
            </div>
            <div>
              <span>CSS</span>
              <span>CSS3 </span>
              <span>Bootstrap</span>
            </div>
            <div>
              <span>Javascript</span> <span>React</span>
              <span> Threejs</span>
              <span>D3js</span>
            </div>
            <div>
              <span>NodeJs</span>
              <span>NPM</span> <span>Express</span>
              <span>Mongoose</span>
            </div>
            <div>
              <span>Base de données</span>
              <span>MongoDB</span>
              <span>MySQL</span>
            </div>
            <div>
              <span>Blender</span>
              <span>Maximo</span>
            </div>
          </ul>
          <ul>
            <li>
              Html<span> Jade</span>
            </li>
            <li>
              CSS<span>CSS3 Bootstrap</span>
            </li>
            <li>
              Javascript<span>React Threejs D3js</span>
            </li>
            <li>
              NodeJs<span>NPM Express Mongoose</span>
            </li>
            <li>
              Base de données<span>MongoDB MySQL</span>
            </li>
            <li>
              Blender<span>Maximo</span>
            </li>
            <li>Git Github</li>
          </ul>
        </section>
        <section className="knowledge methods">
          <h2>Pratiques & méthodes</h2>
          <ul className="skills">
            <div>
              <span>Collaboration</span>
              <span>Méthode Agile</span>
              <span>scrum (testeur)</span>
              <span>Jira</span>
              <span>Slack </span>
              <span>Google & Microsoft suites</span> <span>Git</span>
              <span>Github</span>
            </div>
            <div></div>
            <div>
              <span>Optimisation et accessibilité</span>
              <span>SEO & RGAA</span>
            </div>
            <div>
              <span>Contrôle qualité</span>
              <span>Chrome DevTools</span>
              <span>Lightroom</span>
            </div>
            <div>
              <span> Contrôle conformité RGPD</span>
            </div>
            <div>
              <span>Prototypage</span> <span>Figma</span> <span>Origami</span>
            </div>
          </ul>
        </section>
        <section className="education">
          <h2>Formation</h2>
          <h3>
            Maîtrise concepteur développeur d'applications
            <span>- en cours</span>
          </h3>
          <h4>Ecole O'Clock</h4>
          <p>
            Formation en 7 mois (900heures). Apprentissage en direct et
            distanciel de la programmation telle qu'elle est réellement mise en
            oeuvre en entreprise.
            <br />
            Réalisation quotidienne de projets et présentation d'un projet
            professionnel en vue de la certification.
          </p>
          <h3>
            Master droit privé <span> - obtenu en 2010</span>
          </h3>
          <h4>Université Paris-Est-Créteil</h4>
          <p>
            Spécialisé en droit des obligations et de la responsabilité
            contractuelle.
          </p>
        </section>
        <section className="experience">
          <h2>Expérience</h2>
          <table>
            <tr>
              <th>Année</th>
              <th>Employeur</th>
              <th>Mission et rôle</th>
            </tr>
            <tr>
              <td>2022-26</td>
              <td>BARRY CALLEBAUT</td>
              <td>
                Fixation des encours autorisés. Mise en conformité des
                conditions de paiement.
              </td>
            </tr>
            <tr>
              <td>2021-22</td>
              <td>ALTEN</td>
              <td>
                Animation d’une équipe de chargés de recouvrement amiables et
                précontentieux.
              </td>
            </tr>
            <tr>
              <td>2015-20</td>
              <td>AUTO1.COM – WKDA FRANCE</td>
              <td>
                Création du service recouvrement, Direction des pôles amiable et
                précontentieux.
              </td>
            </tr>
            <tr>
              <td>2014-15</td>
              <td>MCS & ASSOCIÉS</td>
              <td>
                Création d’un pôle recouvrement en marque blanche pour ING
                DIRECT. Product owner.
              </td>
            </tr>
          </table>
        </section>
        <section className="interests">
          <h2>Centres d'intérêts</h2>
          <p>
            Pratique en club du kickboxing / Métallerie (CAP métallier obtenu en
            candidat libre en 2020) / Comics et romans graphiques divers
          </p>
        </section>
      </div>
      {/* </Html> */}
    </>
  );
}

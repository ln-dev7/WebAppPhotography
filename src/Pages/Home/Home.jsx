import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="xl">
          <div className="hero-intro">
            <h1>
              Trouvez l’image haute résolution parfaite pour enrichir votre
              prochain projet créatif.
            </h1>
            <div className="hero-intro__search">
              <img src="/assets/images/search.svg" alt="serch" />
              <input type="text" placeholder="Que recherchez-vous ?" />
            </div>
            <div className="hero-intro__categorie">
              <button className="active">can21</button>
              <button>agences</button>
              <button>particuliers</button>
              <button>portrait</button>
            </div>
            <p className="hero-intro__artist">Artiste : Divine Effiong</p>
          </div>
        </div>
        <div className="hero-footer">
          <div className="xl">
            <p>
              Inscrivez-vous pour télécharger gratuitement 10 images chaque
              semaine.
            </p>
            <div>
              <button type="button">connectez-vous maintenant</button>
              <button type="button">Devenir créateur</button>
            </div>
          </div>
        </div>
      </div>
      <div className="archives">
        <div className="xl">
          <div className="archives-header">
            <h2>Collection de photos d'archives</h2>
            <p>
              Les photos préférées de l'année, sélectionnées par l'équipe de
              sélection Worflow.
            </p>
            <div>
              <h3>Populaires</h3>
              <button>femme noire</button>
              <button>mois de l’histoire</button>
              <button>monuments historique</button>
              <button>diversité</button>
              <button>football feminin</button>
              <button>populaires</button>
              <button>images vectorielles</button>
            </div>
          </div>
          <div className="archives-photos">
            <div>
              <img src="/assets/images/1.png" alt="photo" />
              <img src="/assets/images/2.png" alt="photo" />
              <img src="/assets/images/3.png" alt="photo" />
              <img src="/assets/images/4.png" alt="photo" />
              <img src="/assets/images/5.png" alt="photo" />
            </div>
            <div>
              <img src="/assets/images/6.png" alt="photo" />
              <img src="/assets/images/7.png" alt="photo" />
              <img src="/assets/images/8.png" alt="photo" />
              <img src="/assets/images/9.png" alt="photo" />
              <img src="/assets/images/10.png" alt="photo" />
              <img src="/assets/images/11.png" alt="photo" />
              <img src="/assets/images/12.png" alt="photo" />
            </div>
          </div>
          <Link to="/photos">
            <button className="archives-all">
              <span>Afficher plus</span>
              <img src="/assets/images/arrow-right.svg" alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
      <div className="articles">
        <div className="xl">
          <div className="articles-header">
            <h2>
              Une bonne dose d’inspiration toutes les semaines, juste pour vous
            </h2>
            <p>Conseils et astuces tirés de notre blog.</p>
            <button>
              <span>Voir tout les articles</span>
              <img src="/assets/images/arrow-right.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className="partner">
        <div className="xl">
          <img src="/assets/images/spark-black.svg" alt="logo-partner" />
          <img src="/assets/images/didier-lefa.svg" alt="logo-partner" />
          <img src="/assets/images/ltf.svg" alt="logo-partner" />
          <img src="/assets/images/dark-code.svg" alt="logo-partner" />
          <img src="/assets/images/tuple.svg" alt="logo-partner" />
          <img src="/assets/images/mirage.svg" alt="logo-partner" />
          <img src="/assets/images/statickit.svg" alt="logo-partner" />
        </div>
      </div>
    </div>
  );
}

export default Home;

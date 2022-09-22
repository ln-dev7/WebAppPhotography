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
      <div className="trends">
        <div className="xl">
          <div className="trends-header">
            <h2>Découvrez les tendances de 2022</h2>
            <p>
              Explorez les catégories de photos libres de droits les plus
              populaires.
            </p>
            <button>Tout consulter</button>
          </div>
          <div className="trends-cards">
            <div>
              <img src="/assets/images/14.png" alt="photo" />
              <h3>Evènement Otaku</h3>
            </div>
            <div>
              <img src="/assets/images/15.png" alt="photo" />
              <h3>Concert</h3>
            </div>
            <div>
              <img src="/assets/images/16.png" alt="photo" />
              <h3>Animaux</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="articles">
        <div className="articles-header">
          <div className="xl">
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
        <div className="articles-cards">
          <div>
            <img src="/assets/images/17.png" alt="photo" />
            <button>07 fevrier 2022</button>
            <h3>Historique, le Sénégal remporte sa toute première CAN.</h3>
          </div>
          <div>
            <img src="/assets/images/18.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/19.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/20.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/21.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/18.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/19.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/20.png" alt="photo" />
          </div>
          <div>
            <img src="/assets/images/21.png" alt="photo" />
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

import React from "react";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="xl">
          <div className="hero-intro">
            <h1>
              Trouvez l’image haute résolution parfaite pour enrichir
              votre prochain projet créatif.
            </h1>
            <div className="hero-intro__search">
              <img src="assets/images/search.svg" alt="serch" />
              <input type="text" placeholder="Que recherchez-vous ?" />
            </div>
            <div className="hero-intro__categorie">
              <button className="active">can21</button>
              <button>agences</button>
              <button>particuliers</button>
              <button>portrait</button>
            </div>
            <p className="hero-intro__artist">
            Artiste :  Divine Effiong
            </p>
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
    </div>
  );
}

export default Home;

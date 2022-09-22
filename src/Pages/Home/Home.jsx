import React from "react";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div class="hero">
        <div class="xl">
          <div class="hero-text">
            <h1>
              Trouvez l’image haute résolution parfaite pour <br /> enrichir
              votre prochain projet créatif.
            </h1>
            <div>
              <img src="assets/search.svg" alt="serch" />
              <input type="text" placeholder="Que recherchez-vous ?" />
            </div>
            <div>
              <button className="active">can21</button>
              <button>agences</button>
              <button>particuliers</button>
              <button>portrait</button>
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <div class="xl">
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

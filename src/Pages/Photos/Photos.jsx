import React from "react";
import "./photos.scss"

function Photos() {
  return (
    <div className="photos">
      <div className="hero">
        <div className="xl">
          <div className="hero-intro">
            <h1>
              Découvrez des photos, illustrations et images libres de droits
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;

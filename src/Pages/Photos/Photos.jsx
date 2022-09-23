import React from "react";
import Header from "../../Components/Header/Header";
import "./photos.scss";
import { Link } from "react-router-dom";

function Photos() {
  return (
    <>
      <Header />
      <div className="photos">
        <div className="hero">
          <div className="xl">
            <div className="hero-intro">
              <h1>
                Découvrez des photos, illustrations et images libres de droits
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
            </div>
          </div>
        </div>
        <div className="categorie">
          <div className="xl">
            <div className="categorie-header">
              <h2>Explorer une catégorie</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                ultrices sit.
              </p>
            </div>
            <div className="categorie-cards">
              <div className="card">
                <img src="/assets/images/22.png" alt="photo" />
                <h3>Célébrités</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/23.png" alt="photo" />
                <h3>Faune et Flore</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/24.png" alt="photo" />
                <h3>Business | Finance</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/25.png" alt="photo" />
                <h3>Animaux | Faune sauvage</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/26.png" alt="photo" />
                <h3>Cosplay</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/27.png" alt="photo" />
                <h3>Sports</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/28.png" alt="photo" />
                <h3>Nourriture et boisson</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
              <div className="card">
                <img src="/assets/images/29.png" alt="photo" />
                <h3>StreetArts</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, dicta?
                </p>
              </div>
            </div>
            <Link to="/photos">
              <button className="categorie-all">
                <span>Tout afficher</span>
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="artist">
          <div className="xl">
            <div className="artist-header">
              <h2>Les artistes comptent</h2>
              <p>
                Découvrez les comptes des 03 meilleurs artistes les plus en vus
                de ce mois sur la plateforme
              </p>
            </div>
            <div className="artist-cards">
              <div className="card">
                <img
                  className="card-bg"
                  src="/assets/images/30.png"
                  alt="photo"
                />
                <div className="card-content">
                  <img
                    className="card-img"
                    src="/assets/images/30.png"
                    alt="photo"
                  />
                  <div>
                    <h5>XTincel</h5>
                    <p>Disponible pour collaboration</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-bg"
                  src="/assets/images/31.png"
                  alt="photo"
                />
                <div className="card-content">
                  <img
                    className="card-img"
                    src="/assets/images/31.png"
                    alt="photo"
                  />
                  <div>
                    <h5>The Student Photographer 📸</h5>
                    <p>Disponible pour collaboration</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-bg"
                  src="/assets/images/32.png"
                  alt="photo"
                />
                <div className="card-content">
                  {" "}
                  <img
                    className="card-img"
                    src="/assets/images/32.png"
                    alt="photo"
                  />
                  <div>
                    <h5>DidierLefa📸</h5>
                    <p>Disponible pour collaboration</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/photos">
              <button className="artist-all">
                <span>Tout afficher</span>
                <img src="/assets/images/arrow-right.svg" alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className="infos">
          <div className="xl">
            <h2>Les plus grandes entreprises au monde nous font confiance pour trouver la photo et l’artiste de confiance qu’ils leur faut.</h2>
            <p>Besoin d’une formule personnalisée pour votre entreprise ?</p>
            <button>En savoir plus</button>
          </div>
        </div>
        <div className="partner">
          <div className="xl">
            <img src="/assets/images/spark-black.svg" alt="logo-partner" />
            <img src="/assets/images/didier-lefa.svg" alt="logo-partner" />
            <img src="/assets/images/logo-3.svg" alt="logo-partner" />
            <img src="/assets/images/ltf.svg" alt="logo-partner" />
            <img src="/assets/images/logo-1.svg" alt="logo-partner" />
            <img src="/assets/images/dark-code.svg" alt="logo-partner" />
            <img src="/assets/images/tuple.svg" alt="logo-partner" />
            <img src="/assets/images/logo-2.svg" alt="logo-partner" />
            <img src="/assets/images/mirage.svg" alt="logo-partner" />
            <img src="/assets/images/logo-5.svg" alt="logo-partner" />
            <img src="/assets/images/statickit.svg" alt="logo-partner" />
            <img src="/assets/images/logo-4.svg" alt="logo-partner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;

import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <Link to="/">
        <img
          className="register-logo"
          src="/assets/images/logo-black.svg"
          alt="logo"
        />
      </Link>
      <div className="register-left">
        <h2>
          Partagez des collections avec les personnes de votre choix, où que
          vous soyez.
        </h2>
        <img
          className="register-left__image"
          src="/assets/images/bg-register.png"
          alt="photo"
        />
      </div>
      <div className="register-right">
        <form className="register-form">
          <h2>Créer votre compte gratuit</h2>
          <h3 className="register-form-options">
            Vous avez déjà un compte ?
            <Link to="/login"> connectez-vous.</Link>
          </h3>
          <div className="register-form-socials">
            <h3>S’inscrire avec les réseaux sociaux</h3>
            <div>
              <img src="/assets/images/google.svg" alt="google" />
              <img src="/assets/images/facebook.svg" alt="facebook" />
              <img src="/assets/images/twitter-blue.svg" alt="twitter" />
            </div>
          </div>
          <div className="register-form-input">
            <label htmlFor="email">Choisissez votre type de compte *</label>
            <select>
              <option value="Créatif (photographe)">
                Créatif (photographe)
              </option>
            </select>
          </div>
          <div className="input-duo">
            <div className="register-form-input">
              <label htmlFor="name">Nom *</label>
              <input id="name" type="name" placeholder="Votre nom" required />
            </div>
            <div className="register-form-input">
              <label htmlFor="surname">Prenom *</label>
              <input
                id="surname"
                type="surname"
                placeholder="Votre prenom"
                required
              />
            </div>
          </div>
          <div className="register-form-input">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Votre adresse email"
              required
            />
          </div>
          <div className="register-form-input">
            <label htmlFor="password">Mot de passe *</label>
            <input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              required
            />
          </div>
          <div className="register-form-footer">
            <h3>
              <input type="checkbox" />
              <span>
                En cliquant sur Créer un compte, je déclare avoir lu et accepter
                les <span>Conditions d’utilisation</span> et la{" "}
                <span>Politique de confidentialité</span>.
              </span>
            </h3>
          </div>
          <button type="submit" className="register-form-button">
            Créer votre compte
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
          <img
            className="login-logo"
            src="/assets/images/logo-black.svg"
            alt="logo"
          />
        </Link>
      <div className="login-left">
        <h2>
          Accédez à des fonctionnalités exclusives en créant un compte gratuit.
        </h2>
        <img
          className="login-left__image"
          src="/assets/images/bg-login.png"
          alt="photo"
        />
      </div>
      <div className="login-right">
        <form className="login-form">
          <h2>Se connecter</h2>
          <h3 className="login-form-options">
            Vous n'avez pas de compte ?
            <Link to="/register"> Inscrivez vous</Link>
          </h3>
          <div className="login-form-input">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              placeholder="Entrez votre adresse email"
              required
            />
          </div>
          <div className="login-form-input">
            <label htmlFor="password">Mot de passe *</label>
            <input
              id="password"
              type="password"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <div className="login-form-footer">
            <h3>
              <input type="checkbox" />
              Se souvenir de moi
            </h3>
            <h3>Mot de passe oublié ?</h3>
          </div>
          <button type="submit" className="login-form-button">
            Se connecter
          </button>
          <h4>Ou continuer avec</h4>
          <div className="login-form-socials">
            <button>
              <img src="/assets/images/google.svg" alt="google" />
              <span>Continuer avec Google</span>
            </button>
            <button>
              <img src="/assets/images/facebook.svg" alt="facebook" />
              <span>Continuer avec Facebook</span>
            </button>
            <button>
              <img src="/assets/images/twitter-blue.svg" alt="twitter" />
              <span>Continuer avec Twitter</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

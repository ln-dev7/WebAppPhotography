import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login-image">
        <Link to="/">
          <img src="/assets/images/logo-white.svg" alt="logo" />
        </Link>
        <h2>
          Accédez à des fonctionnalités exclusives en créant un compte gratuit.
        </h2>
        <img src="/assets/images/bg-login.png" alt="photo" />
      </div>
      <form className="container">
        <h2>Connectez vous</h2>
        <h3 className="container-options">
          Pas encore un compte ?
          <router-link to="/register">Inscrivez vous</router-link>
        </h3>
        <div className="container-input">
          <label htmlFor="email">Emeil *</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Entrez votre adresse email"
            required
          />
        </div>
        <div className="container-input">
          <label htmlFor="password">Mot de passe *</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <h3>
          <input type="checkbox" />
          Se souvenir de moi
        </h3>
        <h3>Mot de passe oublié ?</h3>
        <button type="submit" className="container-button" v-if="!isLoading">
          Se connecter
        </button>
        <h4>Ou continuer avec</h4>
        <div className="container-socials">
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
  );
}

export default Login;

import React from "react";
import "./header.scss"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div class="menu">
        <div class="menu-header">
          <div>
            <img src="assets/logo-white.svg" alt="logo" />
          </div>
          <div>
            <img src="assets/close-black.svg" alt="close" />
          </div>
        </div>
        <ul class="menu-items">
          <li>Photos</li>
          <li>Videos</li>
          <li>Editeurs/agences</li>
          <li>Demandez une session de formation</li>
          <li>Blog</li>
        </ul>
        <div className="menu-auth">
          <div>
            <button>Se connecter</button>
            <button>Uploadez une photo</button>
          </div>
          <p>
            Vous n’avez pas de compte ? .
            <Link to="/register">créer un compte</Link>
          </p>
        </div>
      </div>
      <nav className="nav">
        <img src="assets/logo-white.svg" alt="logo" />
        <h4>
          <img src="assets/world-white.svg" alt="world" />
          <span>Français</span>
        </h4>
        <button type="button">Devenir créateur</button>
        <img src="assets/menu.svg" alt="menu" />
        <span>MENU</span>
      </nav>
    </div>
  );
}

import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div class="footer">
        <div class="xl">
          <div class="footer-header">
            <div class="footer-header-links">
              <h2>Notre entreprise</h2>
              <ul>
                <li>Vendez votre contenu</li>
                <li>Qui sommes-nous ?</li>
                <li>Emplois</li>
                <li>Presse/Médias</li>
                <li>Relations avec les investisseurs</li>
                <li>Bons de réduction</li>
                <button>
                  <img src="/assets/images/world-black.svg" alt="icon" />
                  <span>Français</span>
                </button>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>Applications</h2>
              <ul>
                <li>Application iOS</li>
                <li>Application Android</li>
              </ul>
              <h2>Partenaires</h2>
              <ul>
                <li>Développeurs</li>
                <li>Affilié/Revendeur</li>
                <li>Revendeur international</li>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>kapkum news</h2>
              <ul>
                <li>Championnat</li>
                <li>Conditions d'utilisation du site web</li>
                <li>Conditions d’utilisation du service</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>
            <div class="footer-header-links">
              <h2>Contactez-nous</h2>
              <ul>
                <li>Aide</li>
              </ul>
            </div>
          </div>
          <div class="footer-copy">
            <h3>© Copyright 2022-2023 Webflow</h3>
            <div>
              <img src="/assets/images/GitHub.svg" alt="logo-social" />
              <img src="/assets/images/Telegram.svg" alt="logo-social" />
              <img src="/assets/images/Vkontakte.svg" alt="logo-social" />
              <img src="/assets/images/Twitter.svg" alt="logo-social" />
            </div>
          </div>
        </div>
      </div>
      <div class="author">
        <p>
          Designé par
          <a href="https://twitter.com/mbagnajohan"> Mbagna Johan </a> et codé par
          <a href="https://lndev.me"> Leonel Ngoya </a>
        </p>
      </div> 
    </>
  );
}

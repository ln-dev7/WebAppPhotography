import React, { useState, useEffect, useRef } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  const isSearchBarShow = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > window.innerHeight / 2
        ? isSearchBarShow.current.classList.add("show")
        : isSearchBarShow.current.classList.remove("show");
    });
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="header-search" ref={isSearchBarShow}>
        <div className="xl">
          <img src="/assets/images/search.svg" alt="serch" />
          <input type="text" placeholder="Que recherchez-vous ?" />
        </div>
      </div>
      <div className="header">
        {isMenuOpen && (
          <div className="menu">
            <div className="xl">
              <div className="menu-header">
                <div>
                  <Link to="/">
                    <img src="/assets/images/logo-white.svg" alt="logo" />
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <img src="/assets/images/close-black.svg" alt="close" />
                </div>
              </div>
              <ul className="menu-items">
                <li>Photos</li>
                <li>Videos</li>
                <li>Editeurs/agences</li>
                <li>Demandez une session de formation</li>
                <li>Blog</li>
              </ul>
              <div className="menu-auth">
                <div>
                  <Link to="/login">Se connecter</Link>
                  <Link to="/">Uploadez une photo</Link>
                </div>
                <p>
                  Vous n’avez pas de compte ?{" "}
                  <Link to="/register">créer un compte</Link> .
                </p>
              </div>
            </div>
          </div>
        )}
        <nav className="nav">
          <div className="xl">
            <Link to="/">
              <img src="/assets/images/logo-white.svg" alt="logo" />
            </Link>
            <div className="nav-right">
              <div className="nav-right__lang">
                <img src="/assets/images/world-white.svg" alt="world" />
                <span>Français</span>
              </div>
              <div className="line"></div>
              <Link to="/login">Devenir créateur</Link>
              <div onClick={toggleMenu}>
                <img src="/assets/images/menu.svg" alt="menu" />
                <span>MENU</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

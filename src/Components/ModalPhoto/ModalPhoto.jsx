import React, { useState } from "react";
import "./modalPhoto.scss";

export default function ModalPhoto({ modalPhoto, setModalPhoto }) {
  return (
    <div className="modalphoto" onClick={() => setModalPhoto(!modalPhoto)}>
      <div className="xl">
        <div className="container">
          <div className="container-hero">
            
            <img
              src="/assets/images/3.png"
              alt="photo"
              className="container-hero__image"
            />
            <div className="container-hero__infos">
              <div>
                <img src="/assets/images/logo-6.svg" alt="logo" />
                <div>
                  <h5>taxiphotographer</h5>
                  <p>Disponible pour collaboration</p>
                </div>
              </div>
              <button>Telecharger l’image gratuitement</button>
              <h2>Description détaillée :</h2>
              <p>
                Usage éditorial uniquement. Ce contenu ne peut être utilisé
                qu’une seule fois dans un contexte donné.Des restrictions
                géographiques peuvent s’appliquer. <br /> Vous souhaitez
                utiliser du contenu Éditorial à des fins commerciales ? Notre
                licence commerciale avec <u>Asset AssuranceTM</u> est peut-être
                disponible pour vous offrir la couverture juridique et la
                tranquillité d’esprit qu’il vous faut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

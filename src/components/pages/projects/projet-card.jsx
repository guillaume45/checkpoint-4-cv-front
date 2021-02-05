import React from "react";
import "./projet-card.css";

const ProjetCard = (props) => {
  const projet = props;
  return (
    <div className="projet-card">
      <h2>{projet.title}</h2>
      <p className="card-date">{projet.date}</p>
      <p className="card-poste">{projet.poste}</p>
      <p className="card-resume">{projet.resume}</p>
    </div>
  );
};

export default ProjetCard;

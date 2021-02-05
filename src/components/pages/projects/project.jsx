import React, { useEffect, useState } from "react";
import ProjetCard from "./projet-card";
import axios from "axios";
import { FETCH } from "../../../Fetch";

const Projets = () => {
  const [projets, setProjets] = useState();
  const [rempli, setRempli] = useState(false);

  useEffect(() => {
    if (!rempli) {
      var err = "";
      axios
        .get(`${FETCH}/experiences`)
        .then((response) => {
          setProjets(response.data);
          console.log(projets);
          setRempli(true);
        })
        .catch(function (error) {
          err = error;
          console.log(error);
        });
    }
  });

  return (
    <div className="projets">
      <h1>Projets</h1>
      <div className="cards">
        {rempli &&
          projets.map((res) => (
            <ProjetCard
              key={res.id}
              title={res.title_experience}
              date={res.date_experience}
              poste={res.poste_experience}
              resume={res.resume_experience}
            />
          ))}
      </div>
    </div>
  );
};

export default Projets;

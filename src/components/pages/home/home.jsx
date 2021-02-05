import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Guillaume COUTURIER</h1>
        <p>Développeur Web (apprenti)</p>
        <Link to="/contact" className="btn">
          Me contacter
        </Link>
      </div>
    </div>
  );
};

export default Home;

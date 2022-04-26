import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <h1 className="tastyText">Tasty </h1>
      <p className="tastyBody">THE BEST RESTAURANT IN TOWN</p>
      <div className="buttons">
        <Link to="/menu">
          <button className="menuButton">OUR MENU</button>
        </Link>
        <Link to="/contact">
          <button className="contactButton">CONTACT US</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

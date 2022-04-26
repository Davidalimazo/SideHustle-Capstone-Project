import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Button from "./Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_div">
      <Navbar />
      <div className="home_body">
        <p className="p_home">Tasty</p>
        <p className="sub_p">The best Restuarant in Town</p>
        <Link to="/menu">
          <Button color="blue" name="our menu" />
        </Link>
        <Link to="/contact">
          <Button color="green" name="contact us" />
        </Link>
      </div>
    </div>
  );
}

export default Home;


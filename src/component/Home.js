<<<<<<< HEAD
import { render } from "@testing-library/react";
import React from "react";
import "./Home.css";


function Home() {
  return (
    <div className="homepage">
      <h1 className='tastyText' >Tasty </h1>
      <p className="tastyBody">THE BEST RESTAURANT IN TOWN</p>
      <div className="buttons">
      <button className="menuButton">OUR MENU</button>
      <button className="contactButton">CONTACT US</button>
      </div>
    </div>
  )
=======
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
>>>>>>> 6dd3ab921d7aeebc46853ef787157e9b4b695a94
}

export default Home;


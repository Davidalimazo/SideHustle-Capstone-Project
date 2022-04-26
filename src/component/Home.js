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
}

export default Home
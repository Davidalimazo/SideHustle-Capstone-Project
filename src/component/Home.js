import React from "react";
import "./Home.css";
import background from "../assets/pexels-nadim-shaikh-77582531.png"


function Home() {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <h1 className='tastyText' >Tasty</h1>
    </div>
  )
}

export default Home
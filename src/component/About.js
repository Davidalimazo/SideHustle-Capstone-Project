import React from "react";
import "./About.css";
import Sandwich from './Assets/Sandwich.jpeg'
function About() {
  return (
    <div className="cont">
    <h2 className="name">About Tasty</h2>
    <div className="about">
    <div className="info-text">
      
      <div className="image">
        <img src="/Profile.png" alt="" />
      </div>
      <div className="img-h">
        <img src={Sandwich} alt="" />
      </div>
      </div>
      <div className="abt">
      <h2>OUR STORY</h2>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic. Typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.</p>
      </div>
      </div>
    </div>
  );
}

export default About;

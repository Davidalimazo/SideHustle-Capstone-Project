import React from "react";
import "./Contact.css";
import Button from "./Button";

function Contact() {
  return (
    <div className="contact_div">
      <div className="col-12 content_div">
        <div className="col-6 col-xs-12">
          <p className="p_contact">Contact Us:</p>
          <p className="sub_contact">
            Want to get in Touch? We'd love to hear from you. <br /> Here's how
            you can reach us...
          </p>
          <span className="location_icon">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="p_details">LAGOS, NIGERIA</span>
          </span>{" "}
          <br />
          <span className="location_icon">
            <span>
              <i className="fa-solid fa-phone"></i>
            </span>
            <span className="p_details">+2348103317634</span>
          </span>{" "}
          <br />
          <span className="location_icon">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className="p_email">contact@tasty.com</span>
          </span>
        </div>
        <div className="col-6 col-xs-12 contact_form">
          <div>
            <textarea className="t_area1" placeholder="WRITE MESSAGE"></textarea>
          </div>
          <div>
            <textarea className="t_area2" placeholder="EMAIL ADDRESS"></textarea>
          </div>
          <div className="send_btn">
          <Button color="diamond" name="SEND" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

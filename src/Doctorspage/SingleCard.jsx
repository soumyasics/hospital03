import React from "react";
import "./SingleCard.css";
import { Link } from "react-router-dom";
import {DoctorsProfile} from "./DoctorsProfile";
function SingleCard() {
  return (
    
    <div className="bodyView-details">
      <div className="bodyView-rawLinksContainer">
        <a id="LinkTofind" href="#">
          Home
        </a>
        <a id="LinkTofind">| </a>
        <Link to="/find doctors" id="LinkTofind" href="#">
          Find Doctors
        </Link>
      </div>
      <div className="profileContainer">
        <div className="imageContainer"></div>
        <div className="textContainer">
          <h1 id="DoctorName"></h1>
          <h4 id="DDqText">Cardiology</h4>
          <br />
          <h5 id="DDqText">Designation :</h5>
          <br />
          <h5 id="DDqText">Qualifications:</h5>
          <br />
          <br />
          <h5 id="QuotesText">
            “As a caregiver, you see selfless acts everyday.”
          </h5>
          <div className="appointmentbooking">
            <h5 id="appointmentText">Book an Appointment</h5>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SingleCard;

import React from "react";
import "./SingleCard.css";
import { Link } from "react-router-dom";
import {DoctorsProfile} from "./DoctorsProfile";
function SingleCard() {
  return (
    
    <div className="Singledrprofile-body">
      <div className="Singledrprofile-rawLinksContainer">
        <a id="LinkTofind" href="#">
          Home
        </a>
        <a id="LinkTofind">| </a>
        <Link to="/doctorspage" id="SingledrprofileLinkTofind" href="#">
          Find Doctors
        </Link>
      </div>
      <div className="Singledrprofile-ProfileContainer">
        <div className="Singledrprofile-imageContainer"></div>
        <div className="Singledrprofile-textContainer">
          <div className="Singleprofile-textAlign">
          <h1 id="Singledrprofile-DoctorName">DR NAME</h1>
          <h4 id="Singledrprofile-DDqText">Cardiology</h4>
          <br />
          <h5 id="Singledrprofile-DDqText">Designation :</h5>
          <br />
          <h5 id="Singledrprofile-DDqText">Qualifications:</h5>
          <br />
          <br />
          <h5 id="Singledrprofile-QuotesText">
            “As a caregiver, you see selfless acts everyday.”
          </h5>
          </div>
          <div className="Singledrprofile-Appointmentbooking">
            <h5 id="Singledrprofile_AppointmentText">Book an Appointment</h5>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default SingleCard;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./DoctorsProfile.css";
import { Doctors } from "./Doctor-Data";
import {Link} from "react-router-dom"
function DoctorsProfile() {
  return (
    <div>
      <div className="doctors-maincondainer">
        {Doctors.map((user) => {
          return (
            <div className="drprofile-condainer">
              <div className="image-condainer">
                <img id="drimage" src={user.imageId} alt={user.Drname} />
              </div>
              <div className="adressbook">
                <h5 id="dr-names">{user.Drname}</h5>
                <div className="department-condainer">
                  <h5 id="department-text">{user.Department}</h5>
                </div>
              </div>
              <div className="view-address">
                <Link to="/viewdeatils" id="text-viewdeatils" href="#">
                  <h6>View Deatils</h6>
                </Link>
              </div>
              <div className="appointment-condainer">
                <a id="appointment-text" href="#">
                  <h6>Book An Appointment</h6>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorsProfile;

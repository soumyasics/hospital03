import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./DoctorsProfile.css";
import { Doctors } from "./Doctor-Data";
import {Link} from "react-router-dom"
function DoctorsProfile() {
  return (
    <div>
      <div className="DoctorsProfile-maincondainer">
        {Doctors.map((user) => {
          return (
            <div className="DoctorsProfile-Subcondainer">
              <div className="DoctorsProfileImage-condainer">
                <img id="DoctorsProfile-drimage" src={user.imageId} alt={user.Drname} />
              </div>
              <div className="DoctorsProfile-adressbook">
                <h5 id="DoctorsProfileDr-names">{user.Drname}</h5>
                <div className="DoctorsProfileDepartment-condainer">
                  <h5 id="DoctorsProfileDepartment-text">{user.Department}</h5>
                </div>
              </div>
              <div className="DoctorsProfileView-address">
                <Link to="/viewdetails" id="DoctorsProfileText-viewdeatils" href="#">
                  <h6>View Deatils</h6>
                </Link>
              </div>
              <div className="DoctorsProfileTextAppointment-condainer">
                <a id="DoctorsProfileAppointment-text" href="#">
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

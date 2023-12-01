import React, { useState } from "react";
import "./Staffprofiles.css";
import staffprofileIMG from "../Assets/staffprofileIMG.jpg";
import Staffadding from "../Staffpage/Staffadding";

import { staffdata } from "./StaffprofileData";
import bgvedio from "../Assets/bgvedio.mp4";
import { Link } from "react-router-dom";
function Staffprofiles() {
  const [staffprofileData, setstaffprofileData] = useState(staffdata);

  const filterCategories = (catItem) => {
    const result = staffdata.filter((currentData) => {
      return currentData.category === catItem;
    });
    setstaffprofileData(result);
  };

  const DeleteStaff = (hsId) => {
    const updatedData = staffprofileData.filter((user) => user.hsId !== hsId);
    setstaffprofileData(updatedData);
  };

  return (
    <div>
      <div className="Staffprofile-headImg-div">
        <img
          className=" Staffprofile-headImg"
          src={staffprofileIMG}
          alt={`image of hospital management ${staffprofileIMG}`}
        />
      </div>

      <div className="staffprofile-Body">
        <div className="staffprofile-MainContainer">
          <h1 className="staffprofile-headlineTXT">STAFF MANAGEMENT</h1>
          <div className="staffprofile-profileCard-mainDIv">
            {staffprofileData.map((user) => {
              return (
                <div className="staffprofile-profilecard" key={user.hsId}>
                  <div className="staffprofile-cardimage">
                    <img
                      className="staffprofile-staffimg"
                      src={require(`../Assets/${user.staffimg}.jpg`)}
                      alt={`Profile of ${user.staffname}`}
                    />
                  </div>
                  <div className="staffprofile-adress-container">
                    <h4 className="id">Name :{user.staffname}</h4>
                    <br />
                    <h5 />
                    <h5 className="id">ID :{user.hsId}</h5>
                    <br />

                    <h5 className="id">Department :{user.department}</h5>

                    <br />
                    <h5 className="id">Designation :{user.category}</h5>
                    <button
                      onClick={() => DeleteStaff(user.hsId)}
                      type="button"
                      className="btn btn-light staffprofile-deleteBtn-Adj"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="staffprofile-fixedCategory">
          <div className="staffprofile-fixedSubdiv">
            <div className="staffprofile-categoryBOx">
              <video
                className="staffprofile-fixedDiv-vedio"
                autoPlay
                muted
                loop
                id="myVideo"
              >
                <source src={bgvedio} type="video/mp4" />
              </video>
              <select
                className="form-select form-select-lg mb-0 staffprofile-selectSize"
                aria-label="Large select example"
                value="all"
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  if (selectedCategory === "all") {
                    setstaffprofileData(staffdata);
                  } else {
                    filterCategories(selectedCategory);
                  }
                }}
              >
                <option
                  value="all"
                  selected
                  className="staffprofile-selectText-adj"
                >
                  SELECT STAFF CATEGORY
                </option>
                <option
                  value="Pharmacist"
                  className="staffprofile-selectText-adj"
                >
                  Pharmacist
                </option>
                <option value="Nurse" className="staffprofile-selectText-adj">
                  Nurse
                </option>
                <option value="Driver" className="staffprofile-selectText-adj">
                  Driver
                </option>
                <option
                  value="Receptionist"
                  className="staffprofile-selectText-adj"
                >
                  Receptionist
                </option>
                <option
                  value="Lab Attender"
                  className="staffprofile-selectText-adj"
                >
                  Lab Attender
                </option>
                <option
                  value="Accountant"
                  className="staffprofile-selectText-adj"
                >
                  Accountant
                </option>
                <option value="Cleaner" className="staffprofile-selectText-adj">
                  Cleaner
                </option>
              </select>
              <Link to="/addstaff">
                <button
                  type="button"
                  className="btn btn-primary btn-lg staffprofile-addStaff-buttenAdj"
                >
                  ADD STAFF
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staffprofiles;

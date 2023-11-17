import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Doccard.css";
import Arrowright from "../Assets/Arrowright.png";
import Ladaydr from "../Assets/Ladaydr.png";
import mendr from "../Assets/mendr.png";

function Doccard() {
  return (
    <div className="doctors-maincondainer">
      <div className="doc-textcondainer">
        <h1 className="doc-taxt">Our Doctors</h1>
      </div>
      <section className="main-verticaldiv">
        <div className="drprofile-condainer">
          <div className="image-condainer">
            <img id="drimage" src={mendr} />
          </div>
          <div className="adressbook"></div>
          <div className="view-address"><a id="text-viewdeatils" href="#"><h6>View Deatils</h6> </a></div>
          <div className="appointment-condainer"><a id="appointment-text" href="#"><h6>Book An Appointment</h6></a></div>
        </div>
        <div className="drprofile-condainer">
          <div className="image-condainer">
            <img id="drimage" src={mendr} />
          </div>
          <div className="adressbook"></div>
          <div className="view-address"><a id="text-viewdeatils" href="#"><h6>View Deatils</h6> </a></div>
          <div className="appointment-condainer"><a id="appointment-text" href="#"><h6>Book An Appointment</h6></a></div>
        </div>
        <div className="drprofile-condainer">
          <div className="image-condainer">
            <img id="drimage" src={Ladaydr} />
          </div>
          <div className="adressbook"></div>
          <div className="view-address"><a id="text-viewdeatils" href="#"><h6>View Deatils</h6> </a></div>
          <div className="appointment-condainer"><a id="appointment-text" href="#"><h6>Book An Appointment</h6></a></div>
        </div>
        <div className="drprofile-condainer">
          <div className="image-condainer">
            <img id="drimage" src={mendr} />
          </div>
          <div className="adressbook"></div>
          <div className="view-address"><a id="text-viewdeatils" href="#"><h6>View Deatils</h6> </a></div>
          <div className="appointment-condainer"><a id="appointment-text" href="#"><h6>Book An Appointment</h6></a></div>
        </div>
      </section>
      <div className="button-viewall">
        <a className="button-text" href="#">
          <h4 style={{ color: "white" }}>View All</h4>
        </a>
        <img id="arrow-image" src={Arrowright} />
      </div>
    </div>
  );
}

export default Doccard;

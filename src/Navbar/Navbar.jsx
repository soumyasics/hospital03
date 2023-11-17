import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";
import whatsaapp from "../Assets/whatsapp.png";
import BMClogo from "../Assets/BMClogo.png";
function Navbar() {
  return (
    <div className="Navbar-main-div-style">
      <div className="Navbar-containerlogo">
        <img className="Navbar-bmclogo" src={BMClogo} href="#" />
        <h3 className="Navbar-bmcname">Beacon Medical Center</h3>
        <div className="NavbarContainer-round"></div>
      </div>
     
      <ul className="nav justify-content-end test1">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home care
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Second opinion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">
            Contact Us
          </a>
        </li>

        <div className="Navbar-wts">
          <li className="nav-item">
            <a
              className="nav-link "
              href="#"
              style={{ color: "green", fontSize: "18px", fontWeight: "bold" }}
            >
              <img className="Navbar-whatsapp" src={whatsaapp} />
              Whatsapp
            </a>
          </li>
        </div>
      </ul>
      <hr id="Navbar-hrcolor"></hr>
      <ul className="nav justify-content-end test2">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Specialities
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            International Patients
          </a>
        </li>
        <li className="nav-item">
          <a id="Navbar-menu-adj">Menu</a>
        </li>

        <nav className="navbar  ">
          <div className="">
            <button
              className="navbar-toggler arrange-button"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body canvas-Body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Corporate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Telehealth
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Teletriage
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home care
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Patients and Visitors
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Patient Stories
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Patient Rights
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Guidelines
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Facilities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Travel Clinic
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Insurance Providers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Bio Medical Waste Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </ul>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import "./AppointmentForm.css"

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the form data to the backend API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="main">
        <div className="sub">
          <h2>Book an Appointment</h2>
          <div className="formBox">
            <form onSubmit={handleSubmit}>
              <div class="inputbox"  >
                <b className="inputlabel">Name:</b>
                <input 
                  className="userInput"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <br />
                <br />
                <b className="inputlabel">Gender:</b>
                <select className="userInput">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <br />
                <br />
                <b className="inputlabel">Email:</b>
                <input
                  className="userInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <br />
                <br />
                <b className="inputlabel">Date:</b>{" "}
                <input
                  className="userInput"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
                <br /> <br />
                <b className="inputlabel">Time:</b>
                <input
                  className="userInput"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
                <br />
                <br />
                <b className="inputlabel">Phone no:</b>
                <input className="userInput" type="number" max="10" placeholder="number" />
                <br />
                <br />
                <b className="inputlabel">Department:</b>
                <select className="userInput">
                  <option>Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Radiology</option>
                  <option>General medicine</option>
                  <option>Urology</option>
                  <option>General Surgery</option>
                  <option>Nephrology</option>
                  <option>Orthopedics</option>
                  <option>Ophthalmology</option>
                </select>
                <br />
                <br />
              </div>
              <button className="btn btn-primary" type="submit">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;

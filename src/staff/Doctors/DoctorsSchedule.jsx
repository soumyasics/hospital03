import React, { useState } from "react";
import "./DoctorsSchedule.css";

export default function DoctorsSchedule() {
  const doctorsData = [
  {
    _id: 1,
    name: "Aleena jacob",
    department: "Cardiology",
    status: "Available",
    availabitity: "9:00 AM - 5:00 PM",
    date: "27/12/2023",
  },
  {
    _id: 2,
    name: "Riyaz ahemmad",
    status: "Unavailable",
    availabitity: "",
    department: "Neurology",
    date: "27/12/2023",
  },
  {
    id: 3,
    name: 'Meera viswanath',
    department: 'Orthopedics',
    status: 'Available',
    availability: '10:30 AM - 7:30 PM',
    date: '27/12/2023',
  }
];

const [doctors, setDoctors] = useState(doctorsData);
const [selectedDoctor, setSelectedDoctor] = useState(null);

const handleDoctorClick = (doctor)=> setSelectedDoctor(doctor);

  return (
    <div className="doctors-schedule-main">
      <h1>Doctors Schedule</h1>
      <div className="doctors-schedule-container">
        <div className="doctors-schedule-doctors-list">
          <h2>Doctors</h2>
          <ul>
            {
              doctors.map((doctor)=>(
                <li key={doctor._id} onClick={()=>handleDoctorClick(doctor)}>
                  {doctor.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="doctors-schedule-details-section">
          {selectedDoctor ? (
            <div className="doctors-schedule-details-section-box">
              <h2>Doctor Details</h2>
              <p>Name: {selectedDoctor.name}</p>
              <p>Department: {selectedDoctor.department}</p>
              <p>Status: {selectedDoctor.status}</p>
              <p>Availability: {selectedDoctor.availability}</p>
              <p>Date: {selectedDoctor.date}</p>
            </div>
          ): (
            <p className="doctors-schedule-details-section-message">Select a doctor to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

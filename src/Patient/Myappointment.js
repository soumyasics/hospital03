import React, { useEffect, useState } from "react";
 import "./Myappointment.css"

function Myappointment() {
  const backendData = [
    {
      _id: 1,
      name: "vaishnavi",
      date: "12-11-23",
      time: null,
      department: "cardiology",
      status: null,
    },
    {
      _id: 2,
      name: "amal",
      date: "17-03-23",
      time: "10:30 AM",
      department: "orthopedics",
      status: "Approved",
    },
    {
      _id: 3,
      name: "kholi", 
      date: "16-3-23",
      time: null,
      department: "neurology",
      status: "Rejected",
    },
  ];

  const [appointment, setAppointment] = useState(backendData);

  const updatedAppointment = appointment.map((item) => {
    if (item.status == null) {
      return { ...item, status: "Pending"};
    }
    return item;
  });

  useEffect(()=>{
    setAppointment(updatedAppointment);
  },[]);

  return (
    <div className="Myappointment_main">
      <h1>My Appointments</h1>
      <div className="Myappointment_main2">
      <table >
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
        {appointment.map((patient) => (
          <tr key={patient._id}>
            <td>{patient.name}</td>
            <td>{patient.date}</td>
            <td>{patient.time}</td>
            <td>{patient.department}</td>
            <td>{patient.status}</td>
          </tr>
        ))}
      </table>
      </div>
    </div>
  );
}

export default Myappointment;
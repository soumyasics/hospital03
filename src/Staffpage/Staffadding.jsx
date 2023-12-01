import React, { useState } from "react";
import "./Staffprofiles.css";
import { Link } from "react-router-dom";
function Staffadding() {
  const[addStaffData,setAddStaffData]=useState({
    name:"",
    id:"",
    department:"",
    designation:"",
    image:""
  })
  
  const createstaffDtataFN =(e)=>{
setAddStaffData({...addStaffData,[e.target.name]:e.target.value})
console.log(addStaffData)
  }
  const submitProfileDataFN =(e)=>{
e.preventDefault();
console.log("submited",addStaffData);

  }
  return (
    <div>
      <div className="staffprofille-backto-main">
        <Link to ="/staffprofiles" className="staffprofile-backtoprofilePage">
        <a ><p>Back to Profilepage </p></a>
        </Link>
        <p className="staffprofile-backto">|</p>
        <a className="staffprofile-backtoHome"><p>Back to Home </p></a>
      </div>
   
    <div className="staffprofileADD-containerBody">
      
      <div className="staffprofileADD-headTXT-maindiv">
        <h2 className="staffprofileADD-headTXT">SIMPLY ADD STAFF</h2>
      </div>
      <form onSubmit={submitProfileDataFN}>
      <div className="staffprofile-subDiv">
        <input onChange={createstaffDtataFN}
          className="staffprofileADD-Inputfeild"
          placeholder="ENTER STAFF NAME"
          name="name"
        />

        <input onChange={createstaffDtataFN}
          className="staffprofileADD-Inputfeild"
          placeholder="CREATE HOSPITAL ID"
          name="id"
        />
        <input onChange={createstaffDtataFN}
          className="staffprofileADD-Inputfeild"
          placeholder="ENTER DEPARTMENT"
          name="department"
        />
        <input onChange={createstaffDtataFN}
          className="staffprofileADD-Inputfeild"
          placeholder="ENTER DESIGNATION"
          name="designation"
        />
        <label className="staffprofileADD-label"> CHOOSE STAFF IMAGE</label>
        <input  onChange={createstaffDtataFN} type="file"  name="image"className="form-control staffprofileADD-Inputfeild" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" ></input>
        <input className="staffprofile-inputType-btn" type="submit" />
      </div>
      </form>
    </div>
    </div>
  );
}

export default Staffadding;


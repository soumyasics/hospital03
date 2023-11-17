import React from 'react';
import './HospitalLog.css';

function HospitalLog() {
  return (
    <div className="hospital-login-Body">
    <div className="hospital-login-maindiv">
      <form>
        <h1 className="hospital-login-Ul">User Login</h1>

  <div className='hospital-login-userpswd'>
          <input
            className="hospital-login-userpswd_box"
            type="text"
            placeholder="Username"
          /><br />
          <input
            className="hospital-login-userpswd_box"
            type="password"
            placeholder="Password"
          />
  </div>

  <div className="hospital-login-Rememberdiv">
          <input className="chkbox" type="checkbox" />
            Remember me
          {/* <a className="FRlink">Forgot password?</a> */}
  </div>
        <button class="hospital-login-Loginbtn">Login</button>
        <div className="hospital-login-Register">
          <p>
            {/* Not a member?<a className='FRlink'>Register here!</a> */}
          </p>
        </div>
      </form>
    </div>
  </div>
);

}


export default HospitalLog
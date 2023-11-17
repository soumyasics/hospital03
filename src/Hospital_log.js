
import React from 'react';
import './Hospital_log.css';

function Hospital_log() {
  return (
    <div className="Body">
    <div className="maindiv">
      <form>
        <h1 className="Ul">User Login</h1>

  <div className='userpswd'>
          <input
            className="userpswd_box"
            type="text"
            placeholder="Username"
          /><br />
          <input
            className="userpswd_box"
            type="password"
            placeholder="Password"
          />
  </div>

  <div className="Rememberdiv">
          <input className="chkbox" type="checkbox" />
            Remember me
          <a className="FRlink"href="">Forgot password?</a>
  </div>
        <button class="Loginbtn">Login</button>
        <div className="Register">
          <p>
            Not a member?<a className='FRlink' href="">Register here!</a>
          </p>
        </div>
      </form>
    </div>
  </div>
);

}


export default Hospital_log
import { Button } from '@mui/material'
import React from 'react'
import "./Registration.css"

function Registration() {
    return (
        <div className="register">
            <form>
            <h2 >Circle</h2>
            <div class="reg">
                <label>User Name</label>
    <input type="text" class="form-control" placeholder="User Name" />
  </div>
  <div class="reg">
                <label>Email</label>
    <input type="email" class="form-control" placeholder="Email" />
  </div>
  <div class="reg">
                <label>Password</label>
    <input type="password" class="form-control" placeholder="Password" />
  </div>
  <div class="reg">
                <label> Phone Number</label>
    <input type="phonenumber" class="form-control"  placeholder="Phone Number" />
  </div>
  <div class="reg">
                <label>Date Of Birth</label>
    <input type="date" class="form-control" placeholder="Date Of Birth" />
  </div>
  <div class="reg">
                <label>Gender</label>
                </div>
                <div className="radio">
    <input type="radio" class="form-control" id="female" /> <label>Female</label>
    <input type="radio" class="form-control" id ="male"/> <label>Male</label>
  </div>
  <Button type="submit"> Sign Up</Button>

  <h4>Already have an account ?</h4>
            </form>
            
        </div>
    )
}

export default Registration

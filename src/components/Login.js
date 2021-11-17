import React from 'react'
import { Button } from '@material-ui/core'
import "./Login.css";

function Login() {
    return (
        <div className="login">
        <form>
        
          
            <div className="login__logo">
                <img src="https://thumbs.dreamstime.com/b/colorful-circle-group-people-togetherness-unity-logo-design-vector-symbol-illustration-colorful-circle-group-people-157712987.jpg"
                    alt="">
                </img>
                </div>  
                <h2 >Circle</h2>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="password" placeholder="Enter password" />
                </div>
               
                <h5>
                    Forgot password?
                </h5>
                <Button type="submit" >Sign In</Button>  
                <h4>
                    Don't have an account ? Sign up
                </h4> 
                </form> 
               
        </div>
         
    )
}

export default Login

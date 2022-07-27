import React, { Fragment } from "react";
const LoginForm=()=>{
    return(
        <Fragment>
            <form action="/dashboard">
            <div className="data_form_home">
                <label>Login Email</label>
                <input type="email" required />
            </div>
            <div className="data_form_home">
                <label>Password</label>
                <input type="password" required />
            </div>
            <div className="forgot-pass">
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="signup-link">
                Not a member? <a href="/registration">Signup now</a>
            </div>
            </form>
        </Fragment>
    )
}
export default LoginForm;
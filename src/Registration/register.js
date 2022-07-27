import React, { Fragment } from "react";
import Login_logo from '../asset/images/login_logo.png';
import RegisterForm from "./components/registerForm";
const Registration=()=>{
    return(
        <Fragment>
            <div className="content_register">
                <div className="register">
                    <div className="logo_site">
                        <img src={Login_logo} alt="Logo" />
                    </div>
                    <div className="register__form">
                        <h2>Instances Creation</h2>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Registration;
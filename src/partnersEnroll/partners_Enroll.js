import React, { Fragment } from "react";
import logo from "../asset/images/login_logo.png";
import PropertiesEnroll from "./components/propertiesTheEnroll";
const PartnersEnrollment=()=>{
    return(
        <Fragment>
            <div className="navbar_about">
                <div>
                    <img src={logo} className="logo" />
                    <span className="current_page">Home/partners enrollment</span>
                </div>
                <a href="/" className="backToHomePage">
                    <i class="fas fa-house"></i>
                    <span>Back To Home</span>
                </a>
            </div>
            <PropertiesEnroll />
        </Fragment>
    )
}
export default PartnersEnrollment;
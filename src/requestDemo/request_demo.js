import React, { Fragment } from "react";
import logo from "../asset/images/login_logo.png";
import FormRequestDemo from "./components/formRequestDemo";
import UploadVideo from "./components/uploadVideo";
const RequestDemo=()=>{
    return(
        <Fragment>
            <div className="navbar_about">
                <div>
                    <img src={logo} className="logo" />
                    <span className="current_page">Home/Request Demo</span>
                </div>
                <a href="/" className="backToHomePage">
                    <i class="fas fa-house"></i>
                    <span>Back To Home</span>
                </a>
            </div>
            <div className="container_section_requestDemo">
                <div className="requestDemo">
                    <FormRequestDemo />
                    <UploadVideo />
                </div>
            </div>
        </Fragment>
    )
}
export default RequestDemo;
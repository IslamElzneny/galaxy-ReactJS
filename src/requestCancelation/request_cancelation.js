import React, { Fragment } from "react";
import logo from "../asset/images/login_logo.png";
import CancelationForm from "./cancelationForm";
const ReqCancelation=()=>{
    return(
        <Fragment>
            <div className="navbar_about">
                <div>
                    <img src={logo} className="logo" />
                    <span className="current_page">Home/Request Cancelation Quote</span>
                </div>
                <a href="/" className="backToHomePage">
                    <i class="fas fa-house"></i>
                    <span>Back To Home</span>
                </a>
            </div>
            <div className="container_section_cancelation">
                <div className="cancelation">
                    <div className="header">
                        <h2 className="title">Request Cancelation Quote</h2>
                    </div>
                    <CancelationForm />
                </div>
            </div>
        </Fragment>
    )
}
export default ReqCancelation;
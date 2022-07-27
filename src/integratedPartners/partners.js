import React, { Fragment } from "react";
import logo from "../asset/images/login_logo.png";
const Partners=()=>{
    return(
        <Fragment>
            <div className="navbar_about">
                <div>
                    <img src={logo} className="logo" />
                    <span className="current_page">Home/Integrated Partners</span>
                </div>
                <a href="/" className="backToHomePage">
                    <i class="fas fa-house"></i>
                    <span>Back To Home</span>
                </a>
            </div>

            <div className="container_section_partners">
                <div className="head">
                    <h2 className="title">Integrated Partners</h2>
                </div>
            </div>
        </Fragment>
    )
}
export default Partners;
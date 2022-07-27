import React from "react";
import logo from "../asset/images/login_logo.png";
const AboutNavBar=(props)=>{
    return(
        <div className="navbar_about">
            <div>
                <img src={logo} className="logo" />
                <span className="current_page">Home/About Us/{props.currentPage}</span>
            </div>
            <a href="/" className="backToHomePage">
                <i class="fas fa-house"></i>
                <span>Back To Home</span>
            </a>
        </div>
    )
}
export default AboutNavBar;
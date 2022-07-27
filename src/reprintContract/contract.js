import React, { Fragment } from "react";
import logo from "../asset/images/login_logo.png";
import ContractForm from "./contractForm";
const Contract=()=>{
    return(
        <Fragment>
            <div className="navbar_about">
                <div>
                    <img src={logo} className="logo" />
                    <span className="current_page">Home/Reprint My Coverage Contract</span>
                </div>
                <a href="/" className="backToHomePage">
                    <i class="fas fa-house"></i>
                    <span>Back To Home</span>
                </a>
            </div>
            <div className="container_section_contract">
                <div className="contract">
                    <div className="header">
                        <h2 className="title">Reprint My Coverage Contract</h2>
                    </div>
                    <ContractForm />
                </div>
            </div>
        </Fragment>
    )
}
export default Contract;
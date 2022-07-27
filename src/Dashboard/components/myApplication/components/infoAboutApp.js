import React from "react";

const InfoAboutApp=()=>{
    return(
        <div className="info_about_app">

            <div className="application_name">
                <div className="name">
                    <h3>[Appname]</h3><span className="company_name">- Dolibarr ERP & CRM</span>
                    <span className="id">ID:CT2202-063201</span>
                </div>
                <div className="activation">
                    <a href="#">Active</a>
                </div>
            </div>

            <div className="url_app">
                <span>URL to login to instance of the application: </span>
                <a href="#">
                    <span>https://something.with2.novafirstcloud.com</span>
                    <i class="fas fa-copy fas-customize-application" ></i>
                </a>
            </div>

            <div className="deploy_date">
                <span>Deployment Date(UTC) : 02/01/2022 03/21 PM</span>
            </div>
        
        </div>
    )
}

export default InfoAboutApp;
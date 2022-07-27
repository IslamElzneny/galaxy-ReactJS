import React, { Fragment } from "react";
import NavbarDashboard from "../navbar_dashboard";
import OrganizationForm from "./components/organization_info";
import ContactInformation from "./components/contact_information";
import PasswordForm from "./components/passwordForm";
const AccountEdit=()=>{
    return(
        <Fragment>
            <div className="container_section_navbarDashboard">
                <NavbarDashboard />
            </div>
            <div className="container_section_editAccount">
                <div className="account">
                    <div className="header_account">
                        <h2 className="title">My Account</h2>
                        <span>My personal information</span>
                    </div>
                    <div className="forms_content">
                        <div className="organization_info">
                            <OrganizationForm />
                        </div>
                        <div className="change_contact_information">
                            <div className="contact_information">
                                <ContactInformation />
                            </div>
                            <div className="change_password">
                                <PasswordForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AccountEdit;
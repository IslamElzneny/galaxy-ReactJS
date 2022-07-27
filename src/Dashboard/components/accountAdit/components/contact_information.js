import React, { Fragment } from "react";

const ContactInformation=()=>{
    return(
        <Fragment>
            <div className="head_contactInfo">
                <h3 className="title">Your Contact Information</h3>
            </div>
            <div className="contactInfo_form">
                <form>
                    <div className="contactInfo_email">
                        <label>Email</label>
                        <input type="email"  required />
                    </div>
                    <div className="contactInfo_phoneNumber">
                        <label>Phone Number</label>
                        <input type="text"  required />
                    </div>

                    <div className="footer_contactInfo">
                        <div className="contactInfo_firstName">
                            <label>First Name</label>
                            <input type="text"  required />
                        </div>
                        <div className="contactInfo_lastName">
                            <label>Last Name</label>
                            <input type="text"  required />
                        </div>
                    </div>

                    <div className="contactInfo_submit">
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        </Fragment>
    )
}
export default ContactInformation;
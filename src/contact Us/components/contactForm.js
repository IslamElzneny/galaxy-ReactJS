import React from "react";

const Contact_Form=()=>{
    return(
        <div className="container_form">

            <div className="information_about_company">
                <div className="header_contact_info">Contact Details</div>
                <div className="office_address">
                    <div className="header">Office Address</div>
                    <div className="content_info">
                        <i className="fas fa-location-dot fas-customize-contact"></i>
                        2118 Thornridge Cir.Syracuse California
                    </div>
                </div>

                <div className="h-line"></div>

                <div className="contact__info">
                    <div className="header">Contact Info</div>
                    <div className="content_info">
                        <div className="phone_number">
                            <i className="fas fa-phone fas-customize-contact"></i>
                            <span>+1 (246) 642-2700</span>
                        </div>
                        <div className="gmail">
                            <i className="fas fa-envelope fas-customize-contact"></i>
                            Contact@Warpp.com
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="contact_form">
                <form>
                    <div className="contact_name">
                        <input type="text" placeholder="Enter Your Name*" required />
                    </div>
                    <div className="contact_email">
                        <input type="email" placeholder="Enter Your Email*" required />
                    </div>
                    <div className="contact_message">
                        <textarea placeholder="Enter Your Message"></textarea>
                    </div>
                    <div className="contact_submit">
                        <input type="submit" value="Send Message" />
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Contact_Form;
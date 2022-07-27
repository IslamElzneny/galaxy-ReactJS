import React, { Fragment } from "react";
import Nav_bar from "../sharing_components/nav-bar";
import Footer from "../sharing_components/footer";
import ParallaxPage from "../sharing_components/parallax-page";
import Contact_Form from "./components/contactForm";
const Contact=()=>{
    return(
        <Fragment>
            <div className="container_section_parallax">
                <Nav_bar />
                <ParallaxPage namePage='Contact' />
            </div>

            <div className="container_section_contact">
                <Contact_Form />
            </div>

            <div className="container_section_footer">
                <Footer />
            </div>
        </Fragment>
    )
}

export default Contact;
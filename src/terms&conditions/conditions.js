import React, { Fragment } from "react";
import Nav_bar from "../sharing_components/nav-bar";
import ParallaxPage from "../sharing_components/parallax-page";
import Footer from "../sharing_components/footer";
import ContentConditions from "./components/contentConditions";
const Conditions=()=>{
    return(
        <Fragment>
            <div className="container_section_parallax">
                <Nav_bar />
                <ParallaxPage namePage='Terms & Conditions' />
            </div>

            <div className="container_section_conditions">
                <ContentConditions/>
            </div>

            <div className="container_section_footer">
                <Footer />
            </div>
        </Fragment>
    )
}
export default Conditions;

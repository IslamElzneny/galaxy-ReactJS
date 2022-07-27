import React, { Fragment } from "react";
import AboutNavBar from "../about";
const WhoWeAre=()=>{
    return(
        <Fragment>
            <AboutNavBar  currentPage="Who we are"/>
            <div className="container_section_whoWeAre">
                <div className="whoWeAre">
                    <div className="header">
                        <h2 className="title">Who we are</h2>
                    </div>
                    <div className="content">
                        <p>Galaxy serves as the nation’s absolute leader in product and service needs. We are here
                        to solve all rating, contracting, claims, accounting and commissions needs. We have
                        simplified all of your software options to one simple all inclusive platform that makes
                        your life easy and simpl.e Contact us today for a complementary demo and see if you
                        qualify for a no charge trial</p>
                    </div>
                    <a href="/contact" target="_blank" className="contact">Contact</a>
                </div>
            </div>
        </Fragment>
    )
}
export default WhoWeAre;
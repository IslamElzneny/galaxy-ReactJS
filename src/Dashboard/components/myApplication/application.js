import React, { Component, Fragment } from "react";
import NavbarDashboard from "../navbar_dashboard";
import InfoAboutApp from "./components/infoAboutApp";
import SubscriptionAdantage from "./components/subscriptionAdvantage";
import Subscribtion from "./components/subscription";
import AdditionOfApplication from "./components/additionOfApplication";
class Application extends Component{
    render(){
        return(
            <Fragment>
                <div className="container_section_navbarDashboard">
                    <NavbarDashboard />
                </div>

                <div className="container_section_application">
                    <div className="application">
                        <div className="header_application">
                            <h2 className="title">My Application & Options</h2>
                        </div>
                        <div className="content_application">
                            <InfoAboutApp />
                            <SubscriptionAdantage />
                            <Subscribtion />
                        </div>
                        <AdditionOfApplication />
                    </div>
                </div>

            </Fragment>
        )
    }
}
export default Application;
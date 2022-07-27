import React, { Component, Fragment } from "react";
import NavbarDashboard from "../navbar_dashboard";
import HeaderSupport from "./components/header_support";
import SupportContent from "./components/supportContent";
import PervIssue from "./components/pervIssues";
class Supporting extends Component{

    issues=[
        {'requestId':1549863746,'date':'05/06/2022','state':'Resolved'},
        {'requestId':9431647348,'date':'05/07/2022','state':'Resolved'},
        {'requestId':4973164287,'date':'16/07/2022','state':'Resolved'},
        {'requestId':4679132839,'date':'17/07/2022','state':'pending'},
    ]

    render(){
        return(
            <Fragment>
                <div className="container_section_navbarDashboard">
                    <NavbarDashboard />
                </div>
                <div className="container_section_support">
                    <div className="supporting">
                        <HeaderSupport />
                        <SupportContent />
                        <PervIssue issues={this.issues} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Supporting;
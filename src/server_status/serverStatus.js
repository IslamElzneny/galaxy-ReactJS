import React, { Component, Fragment } from "react";
import Nav_bar from "../sharing_components/nav-bar";
import Footer from "../sharing_components/footer";
import ParallaxPage from "../sharing_components/parallax-page";
import State from "./components/state";
class ServerStatus extends Component{

    states=[
        {'stateName':'Website','operational':true},
        {'stateName':'Application','operational':true},
        {'stateName':'API','operational':true},
        {'stateName':'Checkout','operational':true},
    ]

    render(){
        return(
            <Fragment>
                <div className="container_section_parallax">
                    <Nav_bar />
                    <ParallaxPage namePage='Server/Status' />
                </div>
    
                <div className="container_section_serverStatus">
                    <div className="serverStatus">
                    
                        <div className="header_serverStatus">
                            <div>
                                <h2 className="title_status">All Systems Operational</h2>
                                <span className="last_updated">Last Updated 06/05/2022 </span>
                            </div>
                            <div className="icon_status">
                                <i className="fas fa-check fa-customize-iconStatus"></i>
                            </div>
                        </div>

                        <div className="content_serverStatus">
                            <State states={this.states} />            
                        </div>

                    </div>
    
                </div>
    
                <div className="container_section_footer">
                    <Footer />
                </div>
    
            </Fragment>
        )
    }
}
export default ServerStatus;
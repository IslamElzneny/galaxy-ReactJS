import React, { Component, Fragment } from "react";
import NavbarDashboard from "./components/navbar_dashboard";
import HeaderDashboard from "./components/headerMainDashboard";
import BriefDashboard from "./components/briefs_dashboard";
class Dashboard extends Component{
    briefs=[
        {'briefName':'My Application & Options','icon':'fas fa-database','contentOfBrief':
        {'Nb of active instance':0,'Nb of suspened instance':1} , 'destination':'see details and options of my instance',"url":"/dashboard/myApplication"},

        {'briefName':'My Account','icon':'fas fa-user','contentOfBrief':
        {'Your profile is not complete':'3 data missing'} , 'destination':'see or edit profile' ,"url":"/dashboard/editAccount"},

        {'briefName':'Balance of Payment','icon':'fas fa-wallet','contentOfBrief':
        {'Unpaid invoices':0,'Remaining Unpaid':'$0.00'} , 'destination':'see details of my payment and my payment mode',"url":"/dashboard/myBilling"},

        {'briefName':'Support Ticket','icon':'fas fa-screwdriver-wrench','contentOfBrief':
        {'Nb of tickets':0,'Nb of open tickets':0}, 'destination':'see details of my tickets',"url":"/dashboard/support"},
    ]
    messages={
        'contentMessage':'The trial for your instance taco. witht networkbrainiacs.com has expired since 32 day(s) Your instance may have been suspended !',
        'destination':'/dashboard/myBilling',
        'destination_text':'Add payment mode to restore it',
        'title_page':'Dashboard'
    }
    render(){
        return(
            <Fragment>
                <div className="container_section_navbarDashboard">
                    <NavbarDashboard />
                </div>
                <div className="container_section_dashboard">
                    <div className="dashboard">
                        <HeaderDashboard  messages={this.messages}/>
                        <div className="content_dashboard">
                            <BriefDashboard briefs={this.briefs} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Dashboard;
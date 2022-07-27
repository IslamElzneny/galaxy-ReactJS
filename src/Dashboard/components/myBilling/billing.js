import React, { Component, Fragment } from "react";
import Invoices from "./invoices";
import NavbarDashboard from "../navbar_dashboard";
import HeaderDashboard from "../headerMainDashboard";
class Billing extends Component {
    messages={
        'contentMessage':'15 days before end of trial for your instance shuteerwind.with2.novafirstcloud.com !',
        'destination':'/dashboard/myBilling/payment',
        'destination_text':'Add payment method',
        'title_page':'Billing'
    }
    invoices=[
        {'idInvoice':'6721652626','date':'02/06/2020','amount':49.9,'state':'paid'},
        {'idInvoice':'9283827617','date':'02/07/2020','amount':99.9,'state':'paid'},
        {'idInvoice':'8327462612','date':'02/08/2020','amount':99.9,'state':'paid'},
        {'idInvoice':'4723486739','date':'02/09/2020','amount':49.9,'state':'unpaid'},
    ]
    render(){
        return(
            <Fragment>
                <div className="container_section_navbarDashboard">
                    <NavbarDashboard />
                </div>
                <div className="container_section_billing">
                    <div className="billing">
                        <HeaderDashboard messages={this.messages}/>

                        <div className="payment_type">
                            <h2 className="title">Payment Type</h2>
                            <div className="credit_register">
                                <span className="credit_type">Credit Card ending in 8272 </span>
                                <a href="/dashboard/myBilling/payment">Edit Payment Method</a>
                            </div>
                        </div>

                        <Invoices invoices={this.invoices} />
                    </div>
                </div>  
            </Fragment>
        )
    }
}
export default Billing;
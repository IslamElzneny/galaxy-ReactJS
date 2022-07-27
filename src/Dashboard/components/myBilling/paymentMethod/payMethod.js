import React, { Fragment } from "react";
import ContentOfPayment from './components/contentOfPayment';
import PayMethodForm from "./components/paymentForm";
import NavbarDashboard from "../../navbar_dashboard";
const PayMethod=()=>{
    return(
        <Fragment>
            <div className="container_section_navbarDashboard">
                 <NavbarDashboard />
            </div>

            <div className="container_section_payMethod">
                <div className="payMethod">
                    <ContentOfPayment />
                    <div className="container_payment">
                        <div className="header_paymentForm">Cardit Card</div>
                        <PayMethodForm />
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}
export default PayMethod;
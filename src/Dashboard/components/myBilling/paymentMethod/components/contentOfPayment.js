import React, { Fragment } from "react";

const ContentOfPayment=()=>{
    return(
        <Fragment>
            <a href="/dashboard/myBilling" className="header_payMethod">
                <i class="fas fa-arrow-left-long fas-customize-payMethod"></i>
                <h2 className="title">Payment Type</h2>
            </a>

            <div className="instruction_of_payment">
                <p className="instructions">
                    Set a new payment mode. If some of your instances were disabled because of too many payment errors, entering a valid payment method will reactivate them immediatly.
                    <br /><br />
                    Taking into account the chosen plan and data of your existing instance(s), your subscription will start with a
                    first invoice of 9.00 € tax included, discounts excluded (Instance: shuteerwind.with2.novafirstcloud.com
                </p>
                <a href="#">See prices for each plan here</a>
            </div>
        </Fragment>
    )
}
export default ContentOfPayment;
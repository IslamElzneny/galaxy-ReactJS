import React from "react";

const Subscribtion=()=>{
    return(
        <div className="subscription">
            <div className="subscrption_plan">
                <span>Subscription:</span>
                <h3 className="plan__name">[Plan Name]</h3>
                <a href="/product&service#plans">Upgrade Plan</a>
            </div>
            <div className="billing">
                <span>Billing:</span>
                <h3 className="subscription_type">Free trial until 02/16/2022</h3>
                <a href="/dashboard/myBilling/payment">Add a payment method</a>
            </div>
        </div>
    )
}
export default Subscribtion;
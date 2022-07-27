import React from "react";

const SubscriptionAdantage =()=>{
    return(
        <div className="subscription_advantage">
            <ul className="elementsOfAdvantage">
                <li>Resources & options</li>
                <li>Domain name</li>
                <li >SSH/SFTP</li>
                <li >Database</li>
                <li >Danger Zone</li>
            </ul>

            <div className="resources active">

                <div className="database_subscription">
                    <div className="subscription_name">
                        <i className="fas fa-database fas-customize-application"></i>
                        <h2>Dolibarr ERP & CRM</h2>
                    </div>
                    <div className="NbOfSubscription">1</div>
                    <div className="priceOfSubscription">$9.99/month</div>
                </div>

                <div className="user_subscription">
                    <div className="subscription_name">
                        <i className="fas fa-user fas-customize-application"></i>
                        <h2>Users</h2>
                    </div>
                    <div className="NbOfSubscription">1</div>
                    <div className="priceOfSubscription">$9.99/user/month</div>
                </div>

                <div className="another_options">
                    <span>Soon, More OPtions Here</span>
                </div>

            </div>
            
            <div className="domain_name">
                Domain name
            </div>

            <div className="ssh_sftp">
                SSH/SFTP
            </div>

            <div className="database">
                Database
            </div>

            <div className="danger_zone">
                Danger Zone
            </div>


        </div>
    )
}

export default SubscriptionAdantage;
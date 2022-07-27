import React from "react";

const HeaderSupport=(props)=>{
    return(
        <div className="header_support">
            <h2 className="title">Support</h2>
            <div className="support_message">
                <div className="frequent_questions">
                    <p>Before submitting any support ticket,please check if the answer is not already available here:</p>
                    <a href="#">FAQ's (Frequent Asked Questions)</a>
                </div>
                <div className="services_status">
                    <p>The status of our service is visible in real time on <a href="#">this page</a>. If a
                        service appears not active, we are probably already aware of
                        this, and are working on the issue. Thanks for your patience...</p>
                </div>
            </div>
        </div>
    )
} 
export default HeaderSupport;
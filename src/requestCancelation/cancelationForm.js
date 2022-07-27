import React, { Fragment } from "react";

const CancelationForm=()=>{
    return(
        <Fragment>
            <div className="cancelation_form">
                <form>
                    <div className="cancelation_firstName">
                        <input type="text"  required placeholder="First Name"/>
                    </div>
                    <div className="cancelation_lastName">
                        <input type="text"  required placeholder="Last Name"/>
                    </div>
                    <div className="cancelation_miles">
                        <input type="text"  required placeholder="Cancelation Miles"/>
                    </div>
                    <div className="cancelation_contractNumber">
                        <input type="text"  required placeholder="Cancelation Number"/>
                    </div>
                    <div className="cancelation_date">
                        <input type="date"  required placeholder="Cancelation Date"/>
                    </div>
                    <div className="cancelation_email">
                        <input type="email"  required placeholder="Enter Email"/>
                    </div>
                    <div className="cancelation_submit">
                        <input type="submit" value="Request Now" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default CancelationForm;
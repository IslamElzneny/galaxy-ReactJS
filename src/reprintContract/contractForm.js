import React, { Fragment } from "react";

const ContractForm=()=>{
    return(
        <Fragment>
            <div className="contract_form">
                <form>
                    <div className="contract_firstName">
                        <input type="text"  required placeholder="First Name"/>
                    </div>
                    <div className="contract_lastName">
                        <input type="text"  required placeholder="Last Name"/>
                    </div>
                    <div className="contract_VINNumber">
                        <input type="text"  required placeholder="VIN Number"/>
                    </div>
                    <div className="contract_contractNumber">
                        <input type="text"  required placeholder="Contract Number"/>
                    </div>
                    <div className="contract_date">
                        <input type="date"  required placeholder="Date of Purchase"/>
                    </div>
                    <div className="contract_email">
                        <input type="email"  required placeholder="Enter Email"/>
                    </div>
                    <div className="contract_submit">
                        <input type="submit" value="Send Now" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default ContractForm;
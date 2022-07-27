import React, { Fragment } from "react";

const OrganizationForm=()=>{
    return(
        <Fragment>

            <div className="head_organizationInfo">
                <h3 className="title">Organization</h3>
            </div>

            <div className="organization_form">
                <form>
                    <div className="account_name">
                        <label>Company/Organization Name</label>
                        <input type="text"  required />
                    </div>
                    <div className="account_address">
                        <label>Address Line</label>
                        <input type="text"  required />
                    </div>
                    <div className="account_city">
                        <label>City</label>
                        <input type="text"  required />
                    </div>
                    <div className="account_code">
                        <label>Zip Code</label>
                        <input type="text"  required />
                    </div>
                    <div className="account_state">
                        <label>State/Province</label>
                        <input type="text"  required />
                    </div>
                    <div className="account_county">
                        <label>Country</label>
                        <select>
                            <option value='egypt'>Egypt</option>
                        </select>
                    </div>

                    <div className="account_checkbox">
                        <input type="checkbox" id="checkboxAccount"/>
                        <label for="checkboxAccount">I have a Tax/VAT ID</label>
                    </div>

                    <div className="account_submit">
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        </Fragment>
    )
}
export default OrganizationForm;
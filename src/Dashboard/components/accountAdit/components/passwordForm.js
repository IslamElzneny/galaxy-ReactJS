import React, { Fragment } from "react";

const PasswordForm=()=>{
    return(
        <Fragment>
            <div className="head_passwordForm">
                <h3 className="title">Password</h3>
            </div>
            <div className="password_form">
                <form>
                    <div className="new_password">
                        <label>Password</label>
                        <input type="password"  required />
                    </div>
                    <div className="confirm_password">
                        <label>Repeate Password</label>
                        <input type="password"  required />
                    </div>

                    <div className="password_submit">
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        </Fragment>
    )
}
export default PasswordForm;
import React, { Fragment } from "react";

const RegisterForm=()=>{
    return(
        <Fragment>
            <div className="register_form">
                <form>
                    <div className="register_email">
                        <label>Login Email</label>
                        <input type="email"  required />
                    </div>
                    <div className="register_name">
                        <label>Company/Organiztion name</label>
                        <input type="text" required />
                    </div>
                    <div className="register_password">
                        <label>Password</label>
                        <input type="password" required/>
                    </div>
                    <div className="register_confirm">
                        <label>Confirm Password</label>
                        <input type="password" required/>
                    </div>
                    <div className="register_country">
                        <label>Country</label>
                        <input type="password" required/>
                    </div>
                    <div className="application_address">
                        <span>Choose Application Address</span>
                        <div className="address">
                            <div className="app_domain">
                                <label>https://</label>
                                <input type="text" placeholder={'.'.repeat(200)} required />
                            </div>
                            <span className="subdomain">.with1.networkbralances.com</span>
                        </div>
                    </div>

                    <div className="register_submit">
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default RegisterForm;
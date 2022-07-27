import React, { Fragment } from "react";

const FormRequestDemo=()=>{
    return(
        <Fragment>
            <div className="requestDemo_form">
                <form>
                    <div className="request_demo">
                        <div className="header">
                            <h2 className="title">Request a Demo</h2>
                        </div>
                        <div className="request_selection">
                            <select>
                                <option value="header" selected hidden>Select what would you like ademo of</option>
                                <option value="demo1">Demo 1</option>
                                <option value="demo2">Demo 2</option>
                                <option value="demo3">Demo 3</option>
                            </select>
                        </div>
                    </div>

                    <div className="contact_info">
                        <div className="header">
                            <h2 className="title">Add your contact info</h2>
                        </div>
                        <div className="requestDemo_name">
                            <input type="text" required placeholder="Name"/>
                        </div>
                        <div className="requestDemo_email">
                            <input type="email" required placeholder="Email"/>
                        </div>
                        <div className="requestDemo_companyName">
                            <input type="text" required placeholder="Company Name"/>
                        </div>
                        <div className="requestDemo_submit">
                            <input type="submit" value="Send Now" />
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default FormRequestDemo;
import React from "react";

const AdditionOfApplication=()=>{

    function HeandleOpenForm(){
        const app_form=document.querySelector('.additionOfApp .form');
        app_form.classList.add('showFormApp');
    }
    function HeandleCloseForm(){
        const app_form=document.querySelector('.additionOfApp .form');
        app_form.classList.remove('showFormApp');
    }

    return(
        <div className="additionOfApp">
            <div className="header" onClick={HeandleOpenForm}>
                <i class="fas fa-circle-plus fas-customize-addition"></i>
                <span>Add Another Application/instance</span>
            </div>
            <div className="form">
                <div className="title">
                    <h3> Create new application/instance</h3>
                    <div className="close_form" onClick={HeandleCloseForm}>
                        <i class="fas fa-xmark fas-customize-addition"></i>
                    </div>
                </div>
                <form>
                    <div className="application_plan">
                        <label>Subscription Plan</label>
                        <select>
                            <option>Active plan here</option>
                            <option value='Started plan' >Started plan</option>
                            <option value='Basic plan'>Basic plan</option>
                            <option value='Permium plan'>Permium plan</option>
                        </select>
                    </div> 

                    <div className="appForm_footer">
                        <div className="application_password">
                            <label>Password</label>
                            <input type="password" required/>
                        </div>
                        <div className="application_confirm">
                            <label>Confirm Password</label>
                            <input type="password" required/>
                        </div>
                    </div>

                    <div className="application_address">
                        <span>Choose Application Address</span>
                        <div className="address">
                            <div className="app_domain">
                                <label>https://</label>
                                <input type="text" placeholder={'.'.repeat(200)} required />
                                <span className="subdomain">.with1.networkbralances.com</span>
                            </div>
                           
                            <div className="application_submit">
                                <input type="submit" value="Create" />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default AdditionOfApplication;
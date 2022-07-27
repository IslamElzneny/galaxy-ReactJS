import React from "react";

const PayMethodForm=()=>{
    return(
        <div className="payment_form">
            <form>
                <div className="card_name">
                    <label>Name on card</label>
                    <input type="text"  required />
                </div>
                <div className="card_number">
                    <label>Card number</label>
                    <input type="text" required />
                </div>
                <div className="card_footer">
                    <div className="card_date">
                        <label>MM/YY</label>
                        <input type="month" required/>
                    </div>
                    
                    <div className="card_submit">
                        <input type="submit" value="Save Change" />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
export default PayMethodForm;
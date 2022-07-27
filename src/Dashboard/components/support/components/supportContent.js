import React from "react";

const SupportContent=()=>{
    function handleChooseEmail(){
        const selectEmail=document.querySelector('.support_email select'),
              sender=document.querySelector('.support_sender input');
        // assign input value by select value
        if(selectEmail.value != 'Your Email'){
            sender.value=selectEmail.value;
        }else{
            alert("Must choose vaild email!");
        }
    }
    return(
        <div className="support_content">
            <div className="head_content">
                <h3 className="title">New Ticket/Issue</h3>
                <span>Send new a support ticket (Question/Issues)</span>
            </div>
            <div className="form_support">
                <form>
                    <div className="choose_email">
                        <div className="support_email">
                            <label>Select your support channel</label>
                            <select>
                                <option>Your Email</option>
                                <option value='example1@gamil.com' >example1@gamil.com</option>
                                <option value='example2@gamil.com'>example2@gamil.com</option>
                                <option value='example3@gamil.com'>example3@gamil.com</option>
                            </select>
                        </div> 
                        <button onClick={handleChooseEmail}>Choose</button>
                    </div>

                    <div className="support_sender">
                        <label>Sender</label>
                        <input type="text" disabled value='' required/>
                    </div>
                    
                    <div className="support_subject">
                        <label>Email Subject</label>
                        <input type="text" required/>
                    </div>

                    <div className="support_file">
                        <input type="file"/>
                    </div>

                    <div className="support_textarea">
                        <textarea placeholder="Please enter your text here"></textarea>
                    </div>

                    <div className="register_submit">
                        <input type="submit" value="Send Email" />
                    </div>

                </form>
            </div>
        </div>
    )
}
export default SupportContent;
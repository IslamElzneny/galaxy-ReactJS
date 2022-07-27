import React from "react";

const HeaderDashboard=(props)=>{
    return(
        <div className="header_dashboard">
            <h2 className="title">{props.messages.title_page}</h2>
            <div className="messages_dashboard">
                <div className="content_massage_dashboard">
                    <p>{props.messages.contentMessage}</p>
                </div>
                <div className="message_destination">
                    <a href={props.messages.destination}>{props.messages.destination_text}</a>
                </div>
            </div>
        </div>
    )
}
export default HeaderDashboard;
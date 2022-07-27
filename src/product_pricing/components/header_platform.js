import React  from "react";
import chat_room from '../../asset/images/chating-room.png';
const HeaderPlatform=()=>{
    return(
        <div className="header_platform">
            <h2 className="title_header">Platform</h2>
            <div className="chatRoom_image">
                <img src={chat_room} alt="chating_room" />
            </div>
        </div>
    )
}
export default HeaderPlatform;
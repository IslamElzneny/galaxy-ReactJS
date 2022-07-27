import React, { Fragment } from "react";

const BriefDashboard=(props)=>{
    return(
        <Fragment>
            {props.briefs.map((brief,index)=>{
                return(
                    <div className="brief_dashboard" key={index}>
                        <div className="content_brief">
                            <div className="header_brief">
                                <i class={brief.icon+" fas-customize-dashBoard"}></i>
                                {brief.briefName}
                            </div>
                            <div className="info">
                                {
                                    Object.entries(brief.contentOfBrief).map(([key, value],index) => (
                                        <div className="brief" key={index}>
                                            <span className="desc_brief">{key}</span>
                                            <span className={parseInt(value)>0?'brief_state enable':'brief_state'}>{value}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        
                        <div className="brief_destination">
                            <a href={brief.url}>{brief.destination}</a>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        
                    </div>
                )
            })}
        </Fragment>
    )
}
export default BriefDashboard;
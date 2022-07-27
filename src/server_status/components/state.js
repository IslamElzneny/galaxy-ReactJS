import React, { Fragment } from "react";

const State=(props)=>{
    return(
        <Fragment>
                {props.states.map(state=>{
                    return(
                        <div className="state">
                            <div className="info_state">
                                <h3 className="name_state">{state.stateName}</h3>
                                <span className="status_it">{state.operational?"Operational":"Inoperational"}</span>
                            </div>

                            <div className="icon_status">
                                <i className= { state.operational?'fas fa-check fa-customize-iconStatus':'fas fa-exclamation fa-customize-iconStatus' }></i>
                            </div>
                            
                        </div>
                    )
                })}
        </Fragment>
    )
}
export default State;
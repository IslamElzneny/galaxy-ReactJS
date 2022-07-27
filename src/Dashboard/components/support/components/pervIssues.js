import React from "react";

const PervIssue=(props)=>{
    
    return(
        <div className="prev_issue">
            <div className="head_prev_issue">
                <h3 className="title">Old Tickets</h3>
                <span>List of your old closed or opened tickets</span>
            </div>
            <div className="issues">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Request ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.issues.map((issue,index)=>{
                            return(
                                <tr key={index}>
                                    <td data-label="Request ID">{issue.requestId}</td>
                                    <td data-label="Date">{issue.date}</td>
                                    <td data-label="State" className={issue.state=='pending'?'issuePending':'resolved'}>{issue.state}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default PervIssue;
import React from "react";

const Invoices=(props)=>{
    return(
       <div className="container_section_invoices">
            <div className="header_invoices">My Invoices</div>
            <div className="invoices">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Taco</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.invoices.map((invoice,index)=>{
                            return(
                                <tr key={index}>
                                    <td data-label="Taco">{invoice.idInvoice}</td>
                                    <td data-label="Date">{invoice.date}</td>
                                    <td data-label="Amount">$ {invoice.amount}</td>
                                    <td data-label="State" className={invoice.state=='paid'?'invoicePaided':'unpaided'}>{invoice.state}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
       </div>
    )
}
export default Invoices;
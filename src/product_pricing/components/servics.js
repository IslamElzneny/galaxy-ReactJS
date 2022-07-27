import React ,{Fragment} from "react";
const Servics=(props)=>{

    function heandlCheckBox(){
        const checkbox=document.getElementById('checkYearService'),
              service_price=document.querySelectorAll('.service .service_price'),
              limiting_service=document.querySelectorAll('.service .limiting_service');

        if(checkbox.checked ==true){
            for(let i=0;i<service_price.length;i++){
                service_price[i].innerHTML="$"+parseInt(service_price[i].innerText.slice(1))*6;
                limiting_service[i].innerHTML='Per Yearly';
            }
        }else{
            for(let i=0;i<service_price.length;i++){
                service_price[i].innerHTML="$"+parseInt(service_price[i].innerText.slice(1))/6;
                limiting_service[i].innerHTML='Per Month';
            }
        }
    }
    return(
        <div className="servics">
            <div className="header_service">
                <h2>We have exclusive plans for your to choose </h2>
                <div className="switch">
                    <span>Month</span>
                    <input type="checkbox" id='checkYearService' onClick={heandlCheckBox}/>
                    <span>Yearly</span>
                </div>
            </div>
            <div className="service_contain" id="plans">
                <div className="service started_plan">
                    {service({'service_name':'Started plan','service_price':5,'limiting_service':'month'})}
                </div>
                <div className="service basic_plan">
                    <div className="status_service">
                        <span>Most Popular</span>
                    </div>
                    {service({'service_name':'Basic plan','service_price':45,'limiting_service':'month'})}
                </div>
                <div className="service permium_plan">
                    {service({'service_name':'Permium plan','service_price':120,'limiting_service':'month'})}
                </div>
            </div>

        </div>
    )
}

const service = (prop)=>{
    return(
        <Fragment>
            <h3 className="service_name">{prop.service_name}</h3>
            <h3 className="service_price">${prop.service_price}</h3>
            <div className="limiting_service">Per {prop.limiting_service}</div>
            <a href="">Select plan</a>
        </Fragment>
    )
}

export default Servics;
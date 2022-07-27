import React ,{Fragment} from "react";
const PlatformDescription=()=>{
    return(
        <Fragment>
            <div className="description_contain">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, enim sunt rerum laboriosam maiores quia cupiditate similique, odio quod neque qui sint molestiae unde facilis ipsa. Minima quisquam vel laborum.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est eos error excepturi iure dolores atque cum totam ducimus, provident laborum, quam facere? Autem eveniet nisi blanditiis modi. Blanditiis, pariatur.<br /></p>
            </div>
            <div className="equation_about_service">
                <h2>Why this Service is important?</h2>
                <div className="investment_management">
                    <div className="icon_service">
                        <i className="fas fa-warehouse fa-customize-service"></i>
                    </div>
                    <p className="equation_contain">
                        <span>investment management: </span>
                        Our expert investment managers can run parsonalised investment portfolio on your behalf or support you in making your own investment decisions 
                    </p>
                </div>
                <div className="personal_wealth_planning">
                    <div className="icon_service">
                        <i className="fas fa-chart-pie fa-customize-service"></i>
                    </div>
                    <p className="equation_contain">
                        <i className="fa-solid fa-chart-pie-simple fa-customize-service"></i>
                        <span>Our personal wealth planners: </span>can help manage all aspect of your finances and investment meet your financial goals now and in later life.
                    </p>
                </div>
                <div className="protectFromFraud">
                    <div className="icon_service">
                        <i className="fas fa-chart-line fa-customize-service"></i>
                    </div>
                    <p className="equation_contain">
                        <span>Protect yourself from fraud: </span>
                        We are aware that fraudsters are using the canaccord Genuity name,some of the measures you can take to protect you and your money from fraud 
                    </p>
                </div>
            </div>
        </Fragment>
    )
}
export default PlatformDescription;
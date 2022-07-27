import React from "react";

const date=new Date();
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer_contain">
                <div className="info__site">
                    <div className="site_name"><h2>Galaxy</h2></div>
                    <div className="site_phone">
                        <i className="fas fa-phone fa-customize-phone"></i>
                        <span>+1 (246) 642-2700</span>
                    </div>
                    <div className="site_email">
                        <i className="fas fa-envelope fa-customize-email"></i>
                        <span>example@gmail.com</span>
                    </div>
                    <div className="social_media">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>

                <div className="nav_footer">
                    <ul className="nav_list">
                        <li className="nav_items"><a href="/cart" className="nav__link">Product</a></li>
                        <li className="nav_items"><a href="/product&service" className="nav__link">Platform</a></li>
                        <li className="nav_items"><a href="/myaccount" className="nav__link">Acounting</a></li>
                        <li className="nav_items"><a href="/product&service" className="nav__link">Menus</a></li>
                        <li className="nav_items"><a href="/reprint-contract" className="nav__link">Rates & contracts</a></li>
                    </ul>
                </div>

                <div className="nav_footer">
                    <ul className="nav_list">
                        <li className="nav_items"><a href="#" className="nav__link">Claims</a></li>
                        <li className="nav_items"><a href="#" className="nav__link">Remitting contracts</a></li>
                        <li className="nav_items"><a href="#" className="nav__link">Reports</a></li>
                        <li className="nav_items"><a href="/serverStatus" className="nav__link">Server status</a></li>
                    </ul>
                </div>

                <div className="nav_footer">
                    <ul className="nav_list">
                        <li className="nav_items"><a href="/aboutUs/who-we-are" className="nav__link">About Us</a></li>
                        <li className="nav_items"><a href="/contact" className="nav__link">Contact Us</a></li>
                        <li className="nav_items"><a href="/cart" className="nav__link">Shopping Cart</a></li>
                        <li className="nav_items"><a href="/conditions" className="nav__link">Terms & Conditions</a></li>
                        <li className="nav_items"><a href="/myaccount" className="nav__link">My Acount</a></li>
                    </ul>
                </div>

            </div>
            <div className="line__footer"></div>
            <div className="permission__site">
                <span>&copy; {date.getFullYear()} Galaxy All Rights Reserved</span>
            </div>
        </div>
    )
}
export default Footer;

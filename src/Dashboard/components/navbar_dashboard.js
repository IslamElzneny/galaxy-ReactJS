import React, { Fragment } from "react";

const NavbarDashboard=()=>{
    return(
        <Fragment>
            <div className="wrapper">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" className="menu-icon"><i className="fas fa-bars"></i></label>
                    <div className="content">
                        <div className="logo"><a href="/">Galaxy</a></div>
                        <ul className="links">
                            <li><a href="/dashboard"><i className="fas fa-table-cells-large fas-customize-dashBoard"></i> Dashboard</a></li>
                            <li><a href="/dashboard/myApplication"><i className="fas fa-database fas-customize-dashBoard"></i> My Application</a></li>
                            <li><a href="/dashboard/myBilling"><i className="fas fa-wallet fas-customize-dashBoard"></i> My Billig</a></li>
                            <li><a href="/dashboard/support"><i className="fas fa-screwdriver-wrench fas-customize-dashBoard"></i> Support</a></li>
                            <li>
                                <a href="#" className="desktop-link">
                                    <i className="fas fa-user fas-customize-dashBoard"></i>
                                     My Account
                                    <i className="fas fa-sort-down fas-customize-downMenu"></i>
                                </a>
                                <input type="checkbox" id="show-features" />
                                <label for="show-features">My Account</label>
                                <ul>
                                <li><a href="/dashboard/editAccount"><i className="fa-solid fa-pen-to-square fas-customize-dashBoard"></i>Edit My Account</a></li>
                                <li><a href="/myaccount"><i className="fas fa-right-from-bracket fas-customize-dashBoard"></i>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default NavbarDashboard;
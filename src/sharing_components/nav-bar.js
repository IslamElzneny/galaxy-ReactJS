import React,{Component} from 'react';
import logo from '../asset/images/logo.png';
class Nav_bar extends Component {
    
    handleToggleMenu(){
        const navMenu=document.getElementById("nav-menu");
        navMenu.classList.toggle('show');
    }
    handleCloseMenu(){
        const navMenu=document.getElementById("nav-menu");
        navMenu.classList.remove('show');
    }
    render(){
        return(
            <header>
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <a href="#" className="header__logo">Galaxy</a>
                </div>
                <i className="fas fa-bars fa-customize-bar" id="toggle-menu" onClick={this.handleToggleMenu}></i>
                <nav className="nav" id="nav-menu">
                    <i className="fas fa-close fa-customize-close" id="close-menu" onClick={this.handleCloseMenu}></i>
                    <ul className="nav__list">
                        <li className="nav__items"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__items"><a href="/product&service" className="nav__link">Product & Services</a></li>
                        <li className="nav__items"><a href="/serverStatus" className="nav__link">Server Status</a></li>
                        <li className="nav__items"><a href="/contact" className="nav__link">Contact</a></li>
                        <li className="nav__items"><a href="/myaccount" className="nav__link li-acount">My Acount</a></li>
                        <li className="nav__items"><a href="/cart" className="nav__link li-cart">Cart</a></li>
                    </ul>
                </nav>
                <div className="user_information">
                    <div className="acount">
                        <a href="/myaccount">My Acount</a>
                    </div>
                    <div className="nav-cart">
                        <a href="/cart">
                            <i className="fas fa-bag-shopping"></i>
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}


export default Nav_bar

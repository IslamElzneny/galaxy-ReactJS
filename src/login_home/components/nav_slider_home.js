import React ,{Component, Fragment} from "react";

class NavSlider extends Component{
    handlerSliderBar(){
       const slider_btn= document.querySelector('.slider__btn'),
             slider_bar =document.querySelector('.sidebar');

            slider_btn.classList.toggle('click');
            slider_bar.classList.toggle('show');
    }

    handlerSubSideBar(){
        const about_show=document.querySelector('.about-show'),
              rotate_el =document.querySelector('.slider_menu_bar li .first');

            about_show.classList.toggle('show');
            rotate_el.classList.toggle('rotate');
    }

    

    render(){
        return(
            <Fragment>
                <div className="slider__btn">
                    <span className="fas fa-bars fas-customize-silder" onClick={this.handlerSliderBar}></span>
                </div>
                <nav className="sidebar">
                    <div className="text_sliderbar">
                        Galaxy
                    </div>
                    <ul className="slider_menu_bar">
                        <li className="active"><a href="product&service">Product & Services</a></li>
                        <li>
                            <a href="#" className="about-btn" onClick={this.handlerSubSideBar} >About Us
                            <span className="fas fa-caret-down first"></span>
                            </a>
                            <ul className="about-show">
                                <li><a href="/aboutUs/testimonial">Testimonial</a></li>
                                <li><a href="/aboutUs/who-we-are">Who We Are</a></li>
                                <li><a href="/aboutUs/developers">Developers</a></li>
                            </ul>
                        </li>
                        <li><a href="/integrated-partners">Integrated Partners</a></li>
                        <li><a href="/partners-enroll">New Partners Enrolment</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/request-demo">Request a Demo</a></li>
                        <li><a href="/reprint-contract">Reprint Contract</a></li>
                        <li><a href="/request-cancelation">Request Cancelation Quote</a></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}
export default NavSlider;
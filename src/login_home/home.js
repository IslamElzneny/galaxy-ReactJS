import React , {Component,Fragment} from "react";
import NavSlider from "./components/nav_slider_home";
import LoginForm from "../sharing_components/login_form";
import SignUpLogo from '../asset/images/signUp_logo.png';
class Home extends Component {
    render(){
        return(
            <Fragment>
                <NavSlider />
                <div className="content_home">
                    <div className="text">
                        <img src={SignUpLogo} alt="Logo" />
                    </div>
                    <LoginForm />
                </div>
            </Fragment>
        )
    }
}

export default Home;
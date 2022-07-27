import React,{Component,Fragment} from "react";
import Login_logo from '../asset/images/login_logo.png';
import LoginForm from "../sharing_components/login_form";
class Login extends Component {
    render(){
        return(
            <Fragment>
                <div className="content_login">
                    <div className="login">
                        <div className="logo_site">
                            <img src={Login_logo} alt="Logo" />
                        </div>
                        <div className="login__form">
                            <div className="header_login">
                                <h2>Your Customer Dashboard</h2>
                                <p>this erea is dedicated to managing your subscription to warpp SaaS. You can create new instances of applications, choose options,get your subscription invoices, Contact the support team or cancel your account</p>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login;
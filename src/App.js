import React,{Component} from 'react';
import Home from './login_home/home';
import ShoppingCart from './shoping_cart/shoping_cart';
import PricingProducts from './product_pricing/pricing_products';
import ServerStatus from './server_status/serverStatus';
import Contact from './contact Us/contact';
import Login from './Login_form/login';
import Registration from './Registration/register';
import Dashboard from './Dashboard/dashboard';
import Billing from './Dashboard/components/myBilling/billing';
import PayMethod from './Dashboard/components/myBilling/paymentMethod/payMethod';
import Application from './Dashboard/components/myApplication/application';
import Supporting from './Dashboard/components/support/supporting';
import AccountEdit from './Dashboard/components/accountAdit/account_edit';
import Testimonial from './aboutUs/components/testimonial';
import WhoWeAre from './aboutUs/components/whoWeAre';
import Developers from './aboutUs/components/developer';
import Partners from './integratedPartners/partners';
import PartnersEnrollment from './partnersEnroll/partners_Enroll';
import RequestDemo from './requestDemo/request_demo';
import Contract from './reprintContract/contract';
import ReqCancelation from './requestCancelation/request_cancelation';
import Conditions from './terms&conditions/conditions';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
class App extends Component  {
  render(){
    return(
      <Router>
          <Routes>
            <Route exact path='/' element={ <Home />}   />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product&service" element={<PricingProducts />} />
            <Route path="/serverStatus" element={<ServerStatus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myaccount" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/*========= Start Dashboard Components ================*/}
              <Route path="/dashboard/myBilling" element={<Billing />} />
              <Route path="/dashboard/myBilling/payment" element={<PayMethod />} />
              <Route path='/dashboard/myApplication' element={<Application />} />
              <Route path='/dashboard/support' element={<Supporting />} />
              <Route path='/dashboard/editAccount' element={<AccountEdit />} />
            {/*========= End Dashboard Components ================*/}

            {/*========= Start About Components ================*/}
              <Route path='/aboutUs/testimonial' element={<Testimonial />} />
              <Route path='/aboutUs/who-we-are' element={<WhoWeAre />} />
              <Route path='/aboutUs/developers' element={<Developers />} />
            {/*========= End About Components ================*/}

            <Route path='/integrated-partners' element={<Partners />} />
            <Route path='/partners-enroll' element={<PartnersEnrollment />} />

            <Route path='/request-demo' element={<RequestDemo />} />
            <Route path='/reprint-contract' element={<Contract />} />
            <Route path='/request-cancelation' element={<ReqCancelation />} />

            <Route path='/conditions' element={<Conditions />} />
            

          </Routes>
      </Router>
    )
  }
}

export default App;

import React ,{Component,Fragment} from "react";
import Nav_bar from '../sharing_components/nav-bar';
import OurProductMenu from "./components/ourProductsMenu";
import ParallaxPage from "../sharing_components/parallax-page";
import HeaderPlatform from "./components/header_platform";
import PlatformDescription from "./components/platform_description";
import Servics from "./components/servics";
import Footer from "../sharing_components/footer";
class PricingProducts extends Component{
   render(){
        return(
            <Fragment>
                <div className="container_section_parallax">
                    <Nav_bar />
                    <ParallaxPage namePage='Product/pricing' />
                </div>
                <div className="container_section_platform">
                    <div className="platform">
                        <OurProductMenu />
                        <div class="platform_contain">
                            <HeaderPlatform />
                            <div class="description_about_service">
                                <PlatformDescription />
                                <Servics />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container_section_footer">
                    <Footer />
                </div>
            </Fragment>
        )
   }
}
export default PricingProducts;
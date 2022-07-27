import React,{Component,Fragment} from 'react';
import Nav_bar from '../sharing_components/nav-bar';
import ParallaxPage from '../sharing_components/parallax-page';
import Products from './components/products';
import Footer from '../sharing_components/footer';
class ShoppingCart extends Component{
    products =[
        {'productName':'product 1','price':9.99,'image':'img1.png'},
        {'productName':'product 2','price':17.45,'image':'img2.png'},
        {'productName':'product 3','price':5.80,'image':'img3.png'},
        {'productName':'product 4','price':1.99,'image':'img4.png'}
    ]
    render(){
        return(
            <Fragment>
                <div className="container_section_parallax">
                    <Nav_bar />
                    <ParallaxPage namePage='Shopping Cart' />
                </div>
                <div className="container_sections">
                    <Products  products={this.products} />
                </div>
                <div className="container_section_footer">
                    <Footer />
                </div>
            </Fragment>
        );
    }
};

export default ShoppingCart;
import React,{Component} from "react";
import productImage from '../../asset/images/image_test.jpg';

const Products = (props) => {
    return(
        <div className="container_section_products">
            {props.products.map((product,index)=>{
                return(
                    <div className="product_contain" key={index}>
                        <div className="image_product">
                            <img src={productImage} alt="product_image" />
                        </div>
                        <div className="information_product">
                            <h2 className="product_name">{product.productName}</h2>
                            <span className="price_product">${product.price}/month</span>
                        </div>
                        <div className="buying_product">
                            <a href="#" className="buying_now">Buy Now</a>
                            <a href="#" className="free_trial">Free Trial</a>
                        </div>
                        <div className="delate_product">
                            <i className="fas fa-xmark fa-customize-delate"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;
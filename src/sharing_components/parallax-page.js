import React from "react";
import background from '../asset/images/space-background_01.jpg';
const ParallaxPage=(props)=>{
    return(
        <div className="parallax_pages">
            <img src={background} alt="back-layer" />
            <div className="front__layer">
                <h1 className="head_front_layer">{props.namePage}</h1>
                <p className="content_front_layer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis, ad sunt assumenda repellat nulla enim expedita commodi! Sunt reiciendis porro laudantium, temporibus aperiam deserunt neque voluptatum minus sint voluptas?</p>
                <span className="name_page">Home &gt; {props.namePage}</span>
            </div>
        </div>
    )
};

export default ParallaxPage;
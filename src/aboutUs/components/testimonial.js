import React, { Fragment } from "react";
import AboutNavBar from "../about";
import './testimcode.js';
const Testimonials=[
    {"contentTestim":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum
    deleniti! Corrupti velit, porro facere facilis laboriosam accusantium, eos beatae maiores.` , 
    "name_testimony":"Mila McSabbu","specialist":"Insurance Agent",'img':'p1'},
    {"contentTestim":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum
    deleniti! Corrupti velit, porro facere facilis laboriosam accusantium, eos beatae maiores.` , 
    "name_testimony":"Jenny Wilson","specialist":"computer science",'img':'p2'},
    {"contentTestim":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum
    deleniti! Corrupti velit, porro facere facilis laboriosam accusantium, eos beatae maiores.` , 
    "name_testimony":"Mila McSabbu","specialist":"Insurance Agent",'img':'p3'},
    {"contentTestim":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum
    deleniti! Corrupti velit, porro facere facilis laboriosam accusantium, eos beatae maiores.` , 
    "name_testimony":"Mila McSabbu","specialist":"Insurance Agent",'img':'p4'},
    {"contentTestim":`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum
    deleniti! Corrupti velit, porro facere facilis laboriosam accusantium, eos beatae maiores.` , 
    "name_testimony":"Mila McSabbu","specialist":"Insurance Agent",'img':'p5'},
];
const Testimonial=()=>{
    return(
        <Fragment>
            <AboutNavBar currentPage='Testimonial' />
            <section className="container_section_testimonial" id="testimonial">
                <div className="testimonial">
        
                    <ul className="dots" id="testim-dots">
                        <li className="dot active"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                        <li className="dot"></li>
                    </ul>
        
                    <div className="content_testimonial" id="testim-content">
        
                        {Testimonials.map((testimonial,index)=>{
                            return(
                                <div className={index==0?"active":null} key={index}>
                                    <p>{testimonial.contentTestim}</p>
                                    <div className="info_testimony">
                                        <div className="name_testimony">
                                            <div className="img"><img src={require(`../../asset/images/${testimonial.img}.jpg`)}  /></div>
                                            <div>
                                                <h3 className="name">{testimonial.name_testimony}</h3>
                                                <span className="specialist">{testimonial.specialist}</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                
                    </div>
        
                </div>
            </section>
        </Fragment>
    )
}

export default Testimonial;
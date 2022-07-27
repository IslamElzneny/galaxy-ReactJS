import React, { Fragment } from "react";
import AboutNavBar from "../about";
const developers=[
    {"developerName":"Liam Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"Noah Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"Oliver Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"Elijah Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"William Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"Benjamin Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
    {"developerName":"Lucas Deo","developerDescription":"Bio info goes here,Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni accusantium dolore velit quis tenetur omnis, quaerat consequatur nesciunt soluta ratione sunt voluptatibus unde sapiente ab? At non fugiat maxime.","img":"image_test"},
];
const Developers=()=>{
    return(
        <Fragment>
            <AboutNavBar currentPage="developers" />
            <div className="container_section_developers">
                <div className="header">
                    <h2 className="title">Developers</h2>
                </div>
                <div className="content_developers">
                    {developers.map((developer,index)=>{
                        return(
                            <div className="developer" key={index}>
                                <div className="img_developer"><img src={require(`../../asset/images/${developer.img}.jpg`)} /></div>
                                <div className="info_developer">
                                    <div className="name_developer"><h2>{developer.developerName}</h2></div>
                                    <div className="desc_developer">
                                        <p>{developer.developerDescription}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}
export default Developers;
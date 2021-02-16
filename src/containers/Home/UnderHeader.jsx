import React from 'react';
import Slider from "react-slick";
import './Home.module.css';

const UnderHeader = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    
    return (
        <div >
            <div className="title_detail_content">
                <Slider {...settings} className="title_detail_content">
                        <div>
                            <h1>JavaScript</h1>
                        </div>
                        <div >
                            <h1>HTML</h1>
                        </div>
                </Slider>
            </div>
        </div>
    );
};

export default UnderHeader;
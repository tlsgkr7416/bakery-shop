import React, {useRef, useEffect, useState} from 'react'
import style from './sliderItem.module.css';
import Slider from "react-slick";

export default function SliderItem({ pictures }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <React.Fragment>
            <div className={style.container}>
               <Slider {...settings}>
                   {pictures.map((picture, index) => (
                        <div className={style.imgContainer} key={index}>
                            <img src={`../../../images/${picture}`}/>
                        </div>
                   ))}

               </Slider>
            </div>
        </React.Fragment>
    )
}

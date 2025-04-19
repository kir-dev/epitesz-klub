"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BiSolidLeftArrow, BiSolidRightArrow} from "react-icons/bi";


const NextArrow = (props: { onClick?: () => void }) => {
    const {onClick} = props;
    return (
        <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 h-full flex items-center justify-center cursor-pointer w-24"
            style={{background: "linear-gradient(to left, rgba(0, 0, 0, 0.95) 25%, transparent 100%)"}}
            onClick={onClick}
        >
            <BiSolidRightArrow size={40} color="white"/>
        </div>
    );
};

const PrevArrow = (props: { onClick?: () => void }) => {
    const {onClick} = props;
    return (
        <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 h-full flex items-center justify-center cursor-pointer w-24"
            onClick={onClick}
            style={{background: "linear-gradient(to right, rgba(0, 0, 0, 0.95) 25%, transparent 100%)"}}
        >
            <BiSolidLeftArrow size={40} color="white"/>
        </div>
    );
};

export function MyCarousel({data}: { data: { docs: { url: string; alt: string }[] } }) {
    const settings = {
        className: "overflow-hidden",
        variableWidth: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };

    // Workaround for JSX typing issue
    const TypedSlider = Slider as unknown as React.ComponentType<any>; //eslint-disable-line

    return (
        <div className="slider-container">
            <TypedSlider {...settings}>
                {data.docs.map((doc, index) => (
                    <div key={index} className="p-2 flex h-48 sm:h-64 md:h-96 w-auto outline-none">
                        <img src={doc.url} alt={doc.alt} className="object-cover h-full w-auto"/>
                    </div>
                ))}
            </TypedSlider>
        </div>
    );
}

export default MyCarousel;
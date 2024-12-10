"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BiSolidLeftArrow, BiSolidRightArrow} from "react-icons/bi";

const Slider = dynamic(() => import("react-slick"), {ssr: false});

const NextArrow = (props: { onClick?: () => void }) => {
    const {onClick} = props;
    return (
        <div
            style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                background: "linear-gradient(to left, rgba(0, 0, 0, 0.95) 25%, transparent 100%)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                width: "100px",
            }}
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
            style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                background: "linear-gradient(to right, rgba(0, 0, 0, 0.95) 25%, transparent 100%)",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                width: "100px"
            }}
            onClick={onClick}
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

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data.docs.map((doc, index) => (
                    <div key={index} className="p-4 flex h-48 sm:h-64 md:h-96 w-auto outline-none">
                        <img src={doc.url} alt={doc.alt} className="object-cover h-full w-auto"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MyCarousel;
'use client'

import React from "react"

export default function Map() {
    return (
        <div className="relative h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1348.3805090530016!2d19.0503865!3d47.4750863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddad8d10f027%3A0xa70f49fb9e468d4d!2zQmVyY3PDqW55aSBLb2xsw6lnaXVt!5e0!3m2!1shu!2shu!4v1734184090988!5m2!1shu!2shu"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
            />
        </div>
    )
}
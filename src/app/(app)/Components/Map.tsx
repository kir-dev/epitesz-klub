'use client';

import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const bercsenyiCoordinates: [number, number] = [47.4750863, 19.0503865]; // Bercsényi Kollégium koordinátái

            const map = L.map('map', {
                attributionControl: false,
                zoomControl: true,
                dragging: true,
                scrollWheelZoom: false,
                doubleClickZoom: false,
                boxZoom: false,
                touchZoom: false,
                closePopupOnClick: false,
            }).setView(bercsenyiCoordinates, 16);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                subdomains: 'abcd',
                maxZoom: 19,
            }).addTo(map);

            const customIcon = new L.Icon({
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
            });

            const marker = L.marker(bercsenyiCoordinates, { icon: customIcon }).addTo(map);
            marker.bindPopup('Bercsényi Kollégium<br>Budapest, Bercsényi utca 28-30').openPopup();

            return () => {
                map.remove();
            };
        }
    }, []);

    return (
        <>
            <style>
                {`
                #map {
                    filter: brightness(1.5); /* Fényerő növelése */
                }
                .leaflet-control-zoom {
                    background-color: #212121 !important;
                    border: 1px solid #424242 !important;
                }
                .leaflet-control-zoom a {
                    color: #ffffff !important;
                    background-color: #212121 !important;
                }
                .leaflet-control-zoom a:hover {
                    background-color: #424242 !important;
                }
                .leaflet-control-attribution {
                    background-color: #212121 !important;
                    color: #ffffff !important;
                    border: 1px solid #424242 !important;
                    border-radius: 4px;
                }
               
                .leaflet-popup-content {
                    background-color: #333 !important;
                    color: #fff !important;
                    border-radius: 8px;
                    padding: 8px;
                    font-family: "Ikaros Sans Regular", sans-serif;
                    font-size: 16px !important;
                    margin: 10px 10px 10px 10px !important;
                }
                .leaflet-popup-content-wrapper {
                    background-color: #333 !important;
                    border: none !important;
                    border-radius: 8px !important;
                }
                .leaflet-popup-tip {
                    background: #333 !important;
                }
                .leaflet-marker-icon {
                    filter: grayscale(100%);
                }
                `}
            </style>
            <div id="map" className="relative h-full" style={{ height: '100%', width: '100%', marginTop: 0}} />
        </>
    );
}
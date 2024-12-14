'use client';

import React, {useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';

export default function Map() {
    useEffect(() => {
        const bercsenyiCoordinates: [number, number] = [47.4750863, 19.0503865]; // Bercsényi Kollégium koordinátái

        // Térkép létrehozása
        const map = L.map('map', {
            attributionControl: true,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            touchZoom: false,
            closePopupOnClick: false,
        }).setView(bercsenyiCoordinates, 16); // Térkép középpontja és zoom szintje

        // Sötét témájú csempeszolgáltatás
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            subdomains: 'abcd',
            maxZoom: 19,
        }).addTo(map);

        // Egyéni marker ikon létrehozása
        const customIcon = L.AwesomeMarkers.icon({
            icon: 'star', // Az ikon típusa (pl. csillag)
            markerColor: 'gray', // Marker színe
            prefix: 'fa', // Font Awesome használata
        });

        // Marker hozzáadása az egyéni ikonnal
        const marker = L.marker(bercsenyiCoordinates, { icon: customIcon }).addTo(map);

        // Popup hozzáadása a markerhez
        marker.bindPopup('<b>Bercsényi Kollégium</b><br>Budapest, Műegyetem rakpart 5.').openPopup();

        // Kattintás esemény hozzáadása a térképhez
        map.on('click', () => {
            window.open('https://maps.app.goo.gl/bhmBaitSa5hAVXu69', '_blank');
        });

        return () => {
            map.remove();
        };
    }, []);

    return (
        <>
            <style>
                {`
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
                /* Popup testreszabása sötét témához */
                .leaflet-popup-content {
                    background-color: #333 !important;
                    color: #fff !important;
                    border-radius: 8px;
                    padding: 12px;
                    font-family: "Ikaros Sans Regular", sans-serif;
                }

                .leaflet-popup-content-wrapper {
                    background-color: #333 !important; /* Sötét háttér a körülötte lévő konténerhez */
                    border: none !important;           /* A szegély eltávolítása */
                    border-radius: 8px !important;     /* Lekerekített sarkok */
                }
                .leaflet-popup-tip {
                    background: #333;
                }
               
                `}
            </style>
            <div id="map" className="relative h-full" style={{ height: '100%', width: '100%', marginTop: 0}} />
        </>
    );
}
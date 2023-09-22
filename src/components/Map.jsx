// src/components/Map.js
import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';

const MapComponent = ({ setMap }) => {
    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
        setMap(map);

        return () => {
            map.dispose();
        };
    }, [setMap]);

    return (
        <div id="map" style={{ width: '100%', height: '400px' }}>
        </div>
    );
};

export default MapComponent;

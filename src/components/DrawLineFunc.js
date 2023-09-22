import React, {useEffect, useState} from 'react';
import {Draw} from 'ol/interaction';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';

const DrawLineFunc = ({map}) => {
    const [length, setLength] = useState(null);
    const [drawInteraction, setDrawInteraction] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [source, setSource] = useState(null); // Добавим состояние для источника

    useEffect(() => {
        if (!map) return;

        const vectorSource = new VectorSource();
        setSource(vectorSource);

        const layer = new VectorLayer({
            source: vectorSource,
        });
        map.addLayer(layer);

        const draw = new Draw({
            source: vectorSource,
            type: 'LineString',
        });

        draw.on('drawstart', () => {
            setLength(null);
            setDrawing(true);
        });

        draw.on('drawend', (event) => {
            const line = event.feature.getGeometry();
            const lineLength = line.getLength();
            setLength(lineLength);
            setDrawing(false);
        });

        setDrawInteraction(draw);

        return () => {
            map.removeLayer(layer);
        };
    }, [map]);

    const startDrawing = () => {
        if (map && drawInteraction) {
            map.addInteraction(drawInteraction);
        }
    };

    const stopDrawing = () => {
        if (map && drawInteraction) {
            map.removeInteraction(drawInteraction);
        }
    };

    const clearDrawing = () => {
        if (source) {
            source.clear();
            setLength(null);
        }
    };

    return (
        <div>
            <button onClick={startDrawing}>Start Drawing</button>
            <button onClick={stopDrawing}>Stop Drawing</button>
            <button onClick={clearDrawing}>Clear Drawing</button>
            {drawing && <p>Drawing...</p>}
            {length !== null && !drawing && <p>Line Length: {length.toFixed(2)} meters</p>}
        </div>
    );
};

export default DrawLineFunc;

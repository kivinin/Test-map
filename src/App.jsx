import React, { useState } from 'react';
import Map from './components/Map';
import DrawLineFunc from './components/DrawLineFunc';

function App() {
    const [map, setMap] = useState(null);

    return (
        <div className="App">
            <h1>Test map Tatyankin</h1>
            <Map setMap={setMap} />
            {map && <DrawLineFunc map={map} />}
        </div>
    );
}

export default App;

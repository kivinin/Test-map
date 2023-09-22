import Map from './components/Map.tsx';
import LineDrawingWidget from "./components/LineDrawingWidget.tsx";


function App(): JSX.Element {
  return (
      <div className="App">
        <Map />
        <LineDrawingWidget />
      </div>
  );
}

export default App;

import './App.css';
import UI_solicitudT from './Solicitud-Tarjetas/UI_solicitudT';
import UI_TarjetasS from './Tarjetas-Solicitadas/UI_TarjetasS';
import NavB from './navB/NavB'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <NavB/>
        <Routes>
          <Route path="/UI_solicitudT" element={<UI_solicitudT/>}/>
          <Route path="/UI_TarjetasS" element={<UI_TarjetasS/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

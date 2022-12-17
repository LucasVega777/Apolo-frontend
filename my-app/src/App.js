import logo from './logo.svg';
import './App.css';
import Prueba from './Prueba';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './utilitario/Sidebar';


function App() {
  return (
   <> 
    <Sidebar/>   
    <Routes>
      <Route exact path="/" component={<Prueba/>}/>
      <Route exact path="/info" component={<Prueba/>}/>
      <Route exact path="/contacto" component={<Prueba/>}/>
      <Route component={<Prueba/>}/>
    </Routes>   
   </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {Switch} from 'react-router-dom';
function App() {
  return (
   <> 
    <Switch>
      <Route exact path="/" component={}/>
      <Route exact path="/info" component={}/>
      <Route exact path="/contacto" component={}/>
      <Route component={PageNotFound}/>
    </Switch>   
   </>
  );
}

export default App;

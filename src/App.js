import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import { Route, Switch } from 'react-router-dom'
import Bio from "./Components/Bio";
import Tech from './Components/Tech'
import Music from './Components/Music'
import Art from './Components/Art'



function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route path='/welcome' component={Welcome}/>
        <Route path='/bio' component={Bio}/>
        <Route path='/tech' render={Tech}/>
        <Route path='/art' render={Art}/>
        <Route path='/music' render={Music}/>
      </Switch>
    </>
  );
}

export default App;

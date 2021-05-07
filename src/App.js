import "./css/App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import { Route, Switch } from 'react-router-dom'
import Bio from "./Components/Bio";
import Tech from './Components/Tech'
import Music from './Components/Music'
import ContactForm from "./Components/ContactForm";



function App() {
  return (
    <div className="app-div">
      <div className="navbar-div"></div>
      <Navbar/>
      <div className="tab-div">
      <Switch>
        <Route path='/bio' component={Bio}/>
        <Route path='/tech' component={Tech}/>
        <Route path='/music' component={Music}/>
        <Route path='/contactform' component={ContactForm}/>
        <Route path='/' component={Welcome}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;

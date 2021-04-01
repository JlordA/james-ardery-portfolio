import { useState } from "react";
import RollorHeroModal from "./Modal/RollorHeroModal";
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function Tech() {

    const [count, setCount] = useState(0)
    // const [view, setView] = useState(false)

    // const modalHandler = () => {
    //     setView(current => !current)
    // } 

    // useEffect( () => {
    //     console.log(setView);
    // }, [setView])

    return (
        <div>
        <RollorHeroModal/>
          <div className="tech-div">
              <button onClick={() => setCount(count + 1)}>Click Me</button>
            <img  className="app-img" src="image/rollorhero.png" alt="rollorhero"/>
            <img className="app-img" src="image/petto.png" alt="petto"/>
            <img className="app-img" src="image/JokesonUs.png" alt="jokesonus"/>
          </div>
        </div>
      );
}


export default Tech;

import { useState } from "react";
import RollorHeroModal from "./Modal/RollorHeroModal";

function Tech() {
  
  const [rollModalState, setRollModalState] = useState(false)

  const toggleRollModalState = () => {
    setRollModalState(!rollModalState)
  }

  return (
    <div>
          <div className="tech-div">
            <div className={`modalBackground modalShowing-${rollModalState}`}><RollorHeroModal/></div>
            <img onClick={() => toggleRollModalState()} className="app-img" src="image/rollorhero.png" alt="rollorhero"/>
            <img className="app-img" src="image/petto.png" alt="petto"/>
            <img className="app-img" src="image/JokesonUs.png" alt="jokesonus"/>
          </div>
    </div>
  );
}

export default Tech;

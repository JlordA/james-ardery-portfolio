import { useState } from "react";
import RollorHeroModal from "./Modal/RollorHeroModal";
import PettoModal from "./Modal/PettoModal"
import JokesOnUsModal from "./Modal/JokesOnUsModal";

function Tech() {
  
  const [rollModalState, setRollModalState] = useState(false)
  const [pettoModalState, setPettoModalState] = useState(false)
  const [jokeModalState, setJokeModalState] = useState(false)

  const toggleRollorHeroModal = (e) => {
    setRollModalState(!rollModalState)
  }

  const togglePettoModal = () => {
    setPettoModalState(!pettoModalState)
  }

  const toggleJokeModal = () => {
    setJokeModalState(!jokeModalState)
  }

  return (
    <div>
          <div className="tech-div">
            <div className={`modalBackground modalShowing-${rollModalState}`}>
              <RollorHeroModal toggleState={toggleRollorHeroModal}/>
            </div>
            <div className={`modalBackground modalShowing-${pettoModalState}`}>
              <PettoModal toggleState={togglePettoModal}/>
            </div>
            <div className={`modalBackground modalShowing-${jokeModalState}`}>
              <JokesOnUsModal toggleState={toggleJokeModal}/>
            </div>
            <img onClick={() => toggleRollorHeroModal()} className="app-img" src="image/rollorhero.png" alt="rollorhero"/>
            <img onClick={() => togglePettoModal()} className="app-img" src="image/petto.png" alt="petto"/>
            <img onClick={() => toggleJokeModal()} className="app-img" src="image/JokesonUs.png" alt="jokesonus"/>
          </div>
    </div>
  );
}

export default Tech;

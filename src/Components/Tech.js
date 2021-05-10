import { useState } from "react";
import RollorHeroModal from "./Modal/RollorHeroModal";
import PettoModal from "./Modal/PettoModal";
import JokesOnUsModal from "./Modal/JokesOnUsModal";
import "../css/tech.css"

function Tech() {
  const [rollModalState, setRollModalState] = useState(false);
  const [pettoModalState, setPettoModalState] = useState(false);
  const [jokeModalState, setJokeModalState] = useState(false);

  const toggleRollorHeroModal = () => {
    setRollModalState(!rollModalState);
  };

  const togglePettoModal = () => {
    setPettoModalState(!pettoModalState);
  };

  const toggleJokeModal = () => {
    setJokeModalState(!jokeModalState);
  };

  return (
    <div className="tech-div">
      <div className="tech-text">
        <h1>RECENT PROJECTS</h1>
      </div>
      <div className="tech-modal-div">
        <div className={`modalBackground modalShowing-${rollModalState}`}>
          <RollorHeroModal toggleState={toggleRollorHeroModal} />
        </div>
        <div className={`modalBackground modalShowing-${pettoModalState}`}>
          <PettoModal toggleState={togglePettoModal} />
        </div>
        <div className={`modalBackground modalShowing-${jokeModalState}`}>
          <JokesOnUsModal toggleState={toggleJokeModal} />
        </div>
        <div className="app-img-div">
          <div className="app-container">
            <img
              onClick={() => toggleRollorHeroModal()}
              value={rollModalState}
              className="app-img"
              src="image/rollorhero.png"
              alt="rollorhero"
            />
            <p>
              Roll or Hero - React, Redux, Rails
            </p>
          </div>
          <div className="app-container">
            <img
              onClick={() => togglePettoModal()}
              className="app-img"
              src="image/petto.png"
              alt="petto"
            />
            <p>
              Petto - JavaScript, Rails
            </p>
          </div>
          <div className="app-container">
            <img
              onClick={() => toggleJokeModal()}
              className="app-img"
              src="image/JokesonUs.png"
              alt="jokesonus"
            />
            <p>
              Jokes On Us - Rails
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;

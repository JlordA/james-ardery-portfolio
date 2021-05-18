import { useState } from "react";
import YumYumFreshModal from "./Modal/YumYumFreshModal"
import RollorHeroModal from "./Modal/RollorHeroModal";
import PettoModal from "./Modal/PettoModal";
import JokesOnUsModal from "./Modal/JokesOnUsModal";
import "../css/tech.css";

function Tech() {
  const [yumModalState, setYumYumModalState] = useState(false);
  const [rollModalState, setRollModalState] = useState(false);
  const [pettoModalState, setPettoModalState] = useState(false);
  const [jokeModalState, setJokeModalState] = useState(false);

  const toggleYumYumModal = () => {
    setYumYumModalState(!yumModalState);
  };

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
        <div className={`modalBackground modalShowing-${yumModalState}`}>
          <YumYumFreshModal toggleState={toggleYumYumModal} />
        </div>
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
              onClick={() => toggleYumYumModal()}
              value={yumModalState}
              style={{ width: 650}}
              className="app-img"
              src="image/yumyumpicture.png"
              alt="rollorhero"
            />
            <p>Yum Yum Fresh - React, Hooks, Rails, Bootstrap</p>
          </div>
          <div className="app-container">
            <img
              onClick={() => toggleRollorHeroModal()}
              value={rollModalState}
              style={{ width: 650}}
              className="app-img"
              src="image/rollpicture.png"
              alt="rollorhero"
            />
            <p>Roll or Hero - React, Redux, Rails</p>
          </div>
          <div className="app-container">
            <img
              onClick={() => togglePettoModal()}
              style={{ width: 650}}
              className="app-img"
              src="image/pettopicture.png"
              alt="petto"
            />
            <p>Petto - JavaScript, Rails</p>
          </div>
          <div className="app-container">
            <img
              onClick={() => toggleJokeModal()}
              style={{ width: 650}}
              className="app-img"
              src="image/JokesonUs.png"
              alt="jokesonus"
            />
            <p>Jokes On Us - Rails</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;

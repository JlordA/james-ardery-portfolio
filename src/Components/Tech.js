import { useState } from "react";
import RollorHeroModal from "./Modal/RollorHeroModal";

function Tech() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <RollorHeroModal/>
          <div className="tech-div">
            <img  className="app-img" src="image/rollorhero.png" alt="rollorhero"/>
            <img className="app-img" src="image/petto.png" alt="petto"/>
            <img className="app-img" src="image/JokesonUs.png" alt="jokesonus"/>
          </div>
    </div>
  );
}

export default Tech;

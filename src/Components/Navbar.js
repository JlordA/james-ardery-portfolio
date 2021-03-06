import { NavLink } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  return (
    <div className="nav-div">
      <div className="nav-text">
        <h1>JAMES ARDERY</h1>
        <p>Full Stack Developer</p>
      </div>
      <div className="nav-bar">
          <NavLink to={"/"}>
            <button className="nav-button">HOME</button>
          </NavLink>
          <NavLink to={"/tech"}>
            <button className="nav-button">PORTFOLIO</button>
          </NavLink>
          <NavLink to={"/bio"}>
            <button className="nav-button">BIO</button>
          </NavLink>
          <NavLink to={"/music"}>
            <button className="nav-button">MUSIC</button>
          </NavLink>
          <NavLink to={"/contactform"}>
            <button className="nav-button">CONTACT</button>
          </NavLink>
      </div>
      <div className="network-div">
        <a href="https://github.com/JlordA" target="_blank" rel="noopener noreferrer">
          <img
            src="image/githubiconsmall.png"
            alt="github"
          />
        </a>
        <a href="https://james-ardery.medium.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="image/mediumiconsmall.png"
            alt="medium"
          />
        </a>
        <a href="https://www.linkedin.com/in/jamesardery/" target="_blank" rel="noopener noreferrer">
          <img
            src="image/linkediniconsmall.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

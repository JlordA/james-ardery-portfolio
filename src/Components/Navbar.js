import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-div">
      <div className="nav-text">
        <h1 style={{ fontSize: 26 }}>
          JAMES ARDERY
        </h1>
        <p style={{ fontSize: 20 }}>Full Stack Developer</p>
      </div>
      <ul className="nav-bar">
        <NavLink to={"/welcome"}>
          <li className="nav-button">HOME</li>
        </NavLink>
        <NavLink to={"/tech"}>
          <li className="nav-button">PORTFOLIO</li>
        </NavLink>
        <NavLink to={"/bio"}>
          <li className="nav-button">BIO</li>
        </NavLink>
        <NavLink to={"/music"}>
          <li className="nav-button">MUSIC</li>
        </NavLink>
        <NavLink to={"/contactform"}>
          <li className="nav-button">CONTACT</li>
        </NavLink>
      </ul>
      <div className="network-div">
        <a href="https://github.com/JlordA">
          <img
            style={{ maxWidth: 30 }}
            src="image/githubicon.png"
            alt="github"
          />
        </a>
        <a href="https://james-ardery.medium.com/">
          <img
            style={{ maxWidth: 30 }}
            src="image/Mediumicon.png"
            alt="medium"
          />
        </a>
        <a href="https://www.linkedin.com/in/jamesardery/">
          <img
            style={{ maxWidth: 30 }}
            src="image/linkedinicon.png"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;

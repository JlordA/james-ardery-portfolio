import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <NavLink to={"/bio"} >
        <li className="nav-button">BIO</li>
      </NavLink>
      <NavLink to={"/tech"}>
        <li className="nav-button">TECH</li>
      </NavLink>
      <NavLink to={"/music"}>
        <li className="nav-button">MUSIC</li>
      </NavLink>
      <NavLink to={"/art"}>
        <li className="nav-button">ART</li>
      </NavLink>
      <NavLink to={"/welcome"} >
        <li style={{ float: "right", marginRight: "100px" }}className="nav-button">HOME</li>
      </NavLink>
    </ul>
  );
}

export default Navbar;

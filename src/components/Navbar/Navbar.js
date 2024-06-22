import "./Navbar.css"
import SearchIcon from "./‭icons/search-icon (2).png"
import DarkTheme from "./‭icons/night-mode (1).png"
import LightTheme from "./‭icons/light1.png"

import {Limk, Link} from "react-router-dom";
function Navbar({theme}) {

  return (
    <div className="navbar-container">
     
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/About" className="navbar-link">About</Link>
        <Link to="/Product" className="navbar-link">Products</Link>
        <Link to="/Blog" className="navbar-link">Blog</Link>
       
       
    </div>
  )
}
export default Navbar
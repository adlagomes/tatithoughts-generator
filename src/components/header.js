import { Link } from "react-router-dom";
import "../styles/header.css"


function Header() {
  
  return (
    <div className="Header">
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default Header;
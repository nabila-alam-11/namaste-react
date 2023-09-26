import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
          <Link to="/"><h1 className="company-name">Tastopia</h1></Link>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/offers">Offers</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
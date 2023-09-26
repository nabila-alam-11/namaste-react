import logo from "../assets/logo.png";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="company-name">Tastopia</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>Sign In</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;
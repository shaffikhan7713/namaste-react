import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img className="logo-img" alt="logo-img" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

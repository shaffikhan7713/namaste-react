import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo">
        <img className="w-44" alt="logo-img" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex flex-wrap m-3">
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about-us">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

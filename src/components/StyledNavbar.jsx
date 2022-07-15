import { NavLink } from "react-router-dom";

const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "link active" : "link";
        }}
        to="products"
      >
        Products
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
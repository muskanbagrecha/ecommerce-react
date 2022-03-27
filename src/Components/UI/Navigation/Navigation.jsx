import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Cart, User, Wishlist, Search } from "../../../Assets/Icons/icons";
import { useFilter, useAuth } from "../../../CustomHooks";
import logo from "../../../Assets/Images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const { filterDispatch } = useFilter();
  const { authState, authDispatch } = useAuth();
  const { isAuthenticated, user } = authState;
  //For responsiveness of navbar
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navActiveClass = mobileNavActive ? "navigation-full--active" : "";
  const burgerRotate = mobileNavActive ? "rotate" : "";

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
    setSearch("");
    filterDispatch({ type: "SEARCH", payload: search });
  };

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    if (pathname === "/user") {
      navigate("/");
    }
  };

  return (
    <nav className={`navigation navigation-full ${navActiveClass}`}>
      <NavLink to="/">
        <img src={logo} alt="logo" className="img-responsive logo" />
      </NavLink>

      <ul className="nav-list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>

      <form className="nav-search" onSubmit={onSubmitHandler}>
        <input
          type="search"
          placeholder="Search for products"
          className="input-styled"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="btn-icon">
          <Search />
        </button>
      </form>

      <ul className="icons">
        <li className="icon-badge-container user-icon">
          <NavLink to={isAuthenticated ? "/user" : "/login"}>
            {!isAuthenticated ? (
              <i className="btn-icon">
                <User />
              </i>
            ) : (
              <span className="avatar avatar-xs avatar-text">
                {authState.user.firstName[0] + authState.user.lastName[0]}
              </span>
            )}
          </NavLink>
          <nav className="user--hover">
            {isAuthenticated ? (
              <div>
                <Link to="/user">Welcome, {authState.user.firstName}</Link>
                <hr />
                <Link to="/cart">Cart</Link>
                <br />
                <Link to="/wishlist">Wishlist</Link>
                <hr />
                <button className="btn-link-text" onClick={logoutHandler}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <p>Welcome,</p>
                <small>To access account</small>
                <Link to="/login" className="btn-link-text">
                  Login/Signup
                </Link>
              </div>
            )}
          </nav>
        </li>

        <li className="icon-badge-container">
          <NavLink to="/cart">
            <i className="btn-icon">
              <Cart />
            </i>
          </NavLink>
        </li>
        <li className="icon-badge-container">
          <NavLink to="/wishlist">
            <i className="btn-icon">
              <Wishlist />
            </i>
          </NavLink>
        </li>
      </ul>

      <div
        className={`burger ${burgerRotate}`}
        onClick={() => {
          setMobileNavActive((prevState) => !prevState);
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navigation;

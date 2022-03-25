import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Cart, User, Wishlist, Search } from "../../../Assets/Icons/icons";
import { useFilter } from "../../../CustomHooks/useFilter";
import logo from "../../../Assets/Images/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const { filterState, filterDispatch } = useFilter();

  //For responsiveness of navbar
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const navActiveClass = mobileNavActive ? "navigation-full--active" : "";
  const burgerRotate = mobileNavActive ? "rotate" : "";

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/products");
    setSearch("");
    filterDispatch({ type: "SEARCH", payload: search });
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
          <NavLink to="/login">
            <i className="btn-icon">
              <User />
            </i>
          </NavLink>
          <nav className="user--hover">
            <div>
              <p>Welcome,</p>
              <small>To access account</small>
              <Link to="/login" className="btn-link-text">
                Login/Signup
              </Link>
            </div>
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

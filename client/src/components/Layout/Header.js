import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { useAuth } from "../../context/auth";
import { toast } from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully!");
  };
  return (
    <>
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary sticky-top"
        style={{ zIndex: 100, top: 0 }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/images/yourkart.png" className="logo" alt="yourkart" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="search-in">
                <SearchInput />
              </div>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  CATEGORIES
                </Link>
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-hover">
                    <Link className="dropdown-item" to={"/categories"}>
                      ALL CATEGORIES
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li className="dropdown-menu-hover" key={c._id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      REGISTER
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      LOGIN
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown name">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="dropdown-menu-hover">
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          DASHBOARD
                        </NavLink>
                      </li>

                      <li className="nav-item dropdown-menu-hover">
                        <NavLink
                          to="/login"
                          onClick={handleLogout}
                          className="dropdown-item"
                        >
                          LOGOUT
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item badge">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">
                    <PiShoppingCart className="cartlogo" />
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

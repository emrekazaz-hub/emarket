import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import { ShoppingCart, IconContext } from "phosphor-react";
import { ProductAirpods } from "../Products/ProductAirpods/ProductAirpods";
import { ProductIPad } from "../Products/ProductIPad/ProductIPad";
import { ProductIPhone } from "../Products/ProductIphone/ProductIphone";
import { ProductMacBook } from "../Products/ProductMacBook/ProductMacBook";
import { ProductWatch } from "../Products/ProductWatch/ProductWatch";

const Navigation = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const allProducst = [
    ...ProductAirpods,
    ...ProductIPad,
    ...ProductIPhone,
    ...ProductMacBook,
    ...ProductWatch,
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const filteredProducts = allProducst.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Sonuçları SearchPage'e yönlendirerek aktar
    navigate("/search", { state: { filteredProducts } });
  };

  return (
    <div>
      <nav
        style={{ backgroundColor: "gray" }}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            WooX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <CustomLink className="nav-link" to="/">
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#toProducts">
                  Products
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <CustomLink className="dropdown-item" to="/WatchPage">
                      Apple Watch
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink className="dropdown-item" to="/IPhonePage">
                      iPhone
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink className="dropdown-item" to="/MacBookPage">
                      MacBook
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink className="dropdown-item" to="/AirpodsPage">
                      Airpods
                    </CustomLink>
                  </li>
                  <li>
                    <CustomLink className="dropdown-item" to="/IPadPage">
                      iPAd
                    </CustomLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Link to="/CartPage">
              <IconContext.Provider value={{ size: 36, color: "white" }}>
                <ShoppingCart />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navigation;

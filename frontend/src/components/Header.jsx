import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleBurger = () => {
    setShowMenu((prev) => !prev);
  };
  const [showServices, setShowServices] = useState(false);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3  d-none d-lg-block ">
            <a
              href="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img
                src="img/logo.jpg"
                width={70}
                height={60}
                alt="logo"
                style={{ marginLeft: "15px" }}
              />
              <h1 className="m-0 display-5 " style={{ color: "#524f4f" }}>
                My Family Lawyer
              </h1>
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row  border-bottom d-none d-lg-flex text-center ">
              <div className="text-center" style={{ width: "100%" }}>
                <div className="h-100 d-inline-flex align-items-center py-2 px-3 text-center mx-2">
                  <i
                    className="fa fa-envelope  mr-2"
                    style={{ color: "#919191" }}
                  ></i>
                  <small style={{ color: "#000000", fontWeight: "600" }}>
                    myfamilylawyer01@gmail.com
                  </small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2 mx-2">
                  <i
                    className="fa fa-phone-alt mr-2"
                    style={{ color: "#919191" }}
                  ></i>
                  <small style={{ color: "#000000", fontWeight: "600" }}>
                    +91-9868333896
                  </small>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <a href="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-9 " style={{ color: "#524f4f" }}>
                  My Family Lawyer
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                onClick={toggleBurger}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-around"
                id="navbarCollapse"
                style={{}}
              >
                <div
                  className="navbar-nav  py-0"
                  style={{
                    width: "80%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <a href="/" className="nav-item nav-link">
                    Home
                  </a>
                  {/* //active */}
                  <a href="/about" className="nav-item nav-link ">
                    About Us
                  </a>

                  <a href="/contact" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div
                  className="dropdown"
                  style={{ position: "relative", color: "#000000" }}
                >
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    style={{ color: "#52524f" }}
                    onClick={() => setShowServices(!showServices)}
                  >
                    Services
                  </button>
                  {showServices === true ? (
                    <div
                      className="bg-white  py-0"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginRight: "10px",
                        justifyContent: "space-evenly",
                        position: "absolute",
                        zIndex: 1000,
                      }}
                    >
                      <a
                        href="/marriage"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Marriage
                      </a>
                      {/* //active */}
                      <a
                        href="/divorce"
                        className="nav-item nav-link hover-underline"
                        style={{ color: "#000000" }}
                      >
                        Divorce
                      </a>

                      <a
                        href="/domestic-violence"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Domestic Violence
                      </a>
                      <a
                        href="/child-custody"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Child Custody
                      </a>
                      <a
                        href="/maintenance"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Maintenance
                      </a>
                      <a
                        href="/live-in-relationship"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Live-in Relationship
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
              {showMenu === true ? (
                <div
                  className="bg-white  py-0"
                  style={{
                    width: "80%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <a
                    href="/"
                    className="nav-item nav-link"
                    style={{ color: "#000000" }}
                  >
                    Home
                  </a>
                  {/* //active */}
                  <a
                    href="/about"
                    className="nav-item nav-link "
                    style={{ color: "#000000" }}
                  >
                    About
                  </a>

                  <a
                    href="/contact"
                    className="nav-item nav-link"
                    style={{ color: "#000000" }}
                  >
                    Contact
                  </a>

                  <a
                    className="nav-item nav-link dropdown-toggle"
                    style={{ color: "#000000" }}
                    onClick={() => setShowServices(!showServices)}
                  >
                    Services
                  </a>
                  {showServices === true ? (
                    <div
                      className="bg-white  py-0"
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        justifyContent: "space-evenly",
                        position: "absolute",
                        zIndex: 1000,
                      }}
                    >
                      <a
                        href="/marriage"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Marriage
                      </a>
                      {/* //active */}
                      <a
                        href="/divorce"
                        className="nav-item nav-link hover-underline"
                        style={{ color: "#000000" }}
                      >
                        Divorce
                      </a>

                      <a
                        href="/domestic-violence"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Domestic Violence
                      </a>
                      <a
                        href="/child-custody"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Child Custody
                      </a>
                      <a
                        href="/maintenance"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Maintenance
                      </a>
                      <a
                        href="/live-in-relationship"
                        className="nav-item nav-link"
                        style={{ color: "#000000" }}
                      >
                        Live-in Relationship
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import COMPANY_LOGO from "../../../assets/images/logo/logo.png";
// import COMPANY_LOGO_WHITE from "../../../assets/images/logo/logo-white.png";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const TopNavBar = () => {
  let token = sessionStorage.getItem("token");

  return (
    <>
      {/* Header Start */}
      <header className="navbar-light header-sticky">
        <nav className="navbar navbar-expand-xl fixed-top navbar-light nav-bar-custom">
          <div className="container">
            <Link to="/login" className="text-primary-1">
              Home
            </Link>
            {!token && <h1 className="second">Login</h1>}
          </div>
        </nav>
      </header>
      {/*  Header End  */}
    </>
  );
};

export default TopNavBar;

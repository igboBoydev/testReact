import React from "react";
import { Link } from "react-router-dom";
// import COMPANY_LOGO from "../../../assets/images/logo/logo.png";

const FooterNavLinks = () => {
  let getYear = new Date().getFullYear();
  return (
    <>
      <section className="bg-ligh">
        <div className="justify">© {getYear}</div>
      </section>
    </>
  );
};

export default FooterNavLinks;

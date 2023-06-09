import React from "react";
import TopNavBar from "../navs/guest/TopNavBar";
import FooterNavLinks from "../navs/guest/FooterNavLinks";
import Login from "../forms/Login";

const Home = () => {
  return (
    <section>
      <TopNavBar />
      <section className="display">
        <Login />
      </section>
      <FooterNavLinks />
    </section>
  );
};

export default Home;

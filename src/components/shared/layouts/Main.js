import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import PropTypes from "prop-types";

const Main = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Main;

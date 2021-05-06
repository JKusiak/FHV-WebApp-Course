import React from "react";
import { Link } from "react-router-dom";
import LocaleCombo from "./LocaleCombo";


const Navbar = () => {
      return (
      <>
      <Link to="/dates">Dates</Link>
      <Link to="/numbers">Numbers</Link>
      <Link to="/texts">Texts</Link>
      <Link to="/">Home</Link>
      <LocaleCombo/>
      </>
      );
}

export default Navbar;
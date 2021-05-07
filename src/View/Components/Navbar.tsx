import React, { FC } from "react";
import { Link } from "react-router-dom";
import LocaleCombo from "./LocaleCombo";


interface NavbarProps {
      onSelect: (arg0: any) => any
}

const Navbar: FC<NavbarProps> = (props) => {
      
      return (
      <>
      <Link to="/dates">Dates</Link>
      <Link to="/numbers">Numbers</Link>
      <Link to="/texts">Texts</Link>
      <Link to="/">Home</Link>
      <LocaleCombo onSelect={(e) => props.onSelect(e)}/>
      </>
      );
}

export default Navbar;
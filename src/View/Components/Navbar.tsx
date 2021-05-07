import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocaleCombo from "./LocaleCombo";


interface NavbarProps {
      onSelect: (arg0: any) => any
}

const Navbar: FC<NavbarProps> = (props) => {
      
      return (
      <NavbarWrapper>
            <Link to="/dates">Dates</Link>
            <Link to="/numbers">Numbers</Link>
            <Link to="/texts">Texts</Link>
            <Link to="/">Home</Link>
            <LocaleCombo onSelect={(e) => props.onSelect(e)}/>
      </NavbarWrapper>
      );
}

const NavbarWrapper = styled.div`
      background: #F9EADC;
      display: flex;
      justify-content: flex-end;
     
      margin-left: 5em;
      margin-right: 5em;

      > * {
            font-size: 20px;
            color: black;
            text-decoration: none;
            margin: 1em 0 1em 2em;

            :hover {
                  font-weight:bold;
            }
      }

`

export default Navbar;
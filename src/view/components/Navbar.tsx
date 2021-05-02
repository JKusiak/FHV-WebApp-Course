import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { NavPage } from "../../logic/NavPage";
import { Store } from "../../logic/Store";
import MenuButton from "./MenuButton";
import styled from "styled-components";


interface NavProps {
      store: Store;
}

const Navbar: FC<NavProps> = (props) => {

      return (
      <NavbarWraper>
            <MenuButton store={props.store} onClick={() => props.store.setNavigatonPage(NavPage.TRENDING)}>Trending</MenuButton>
            
            <MenuButton store={props.store} onClick={() => props.store.setNavigatonPage(NavPage.SEARCH)}>Search</MenuButton>
      </NavbarWraper>
      )
}

const NavbarWraper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;
`;

export default observer(Navbar);
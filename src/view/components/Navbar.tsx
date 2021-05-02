import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { NavPage } from "../../logic/NavPage";
import { Store } from "../../logic/Store";
import MenuButton from "./MenuButton";

interface NavProps {
      store: Store;
}

const Navbar: FC<NavProps> = (props) => {

      return (
            <>
                  <MenuButton store={props.store} onClick={
                        () => {
                              props.store.setNavigatonPage(NavPage.TRENDING);
                              console.log(props.store.getNavigationPage);
                        }}>Trending</MenuButton>
                  <MenuButton store={props.store} onClick={
                        () => { 
                              props.store.setNavigatonPage(NavPage.SEARCH);        
                              console.log(props.store.getNavigationPage);
                        }}>Search</MenuButton>
            </>
      )
}

export default observer(Navbar);
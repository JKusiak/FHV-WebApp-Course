import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Page } from "../../logic/Page";
import { Store } from "../../logic/Store";
import MenuButton from "./MenuButton";

interface NavProps {
      store: Store;
}

const Navbar: FC<NavProps> = (props) => {

      return (
            <>
                  <MenuButton store={props.store} onClick={() => props.store.setPage(Page.TRENDING)}>Trending</MenuButton>
                  <MenuButton store={props.store} onClick={() => props.store.setPage(Page.SEARCH)}>Search</MenuButton>
            </>
      )
}

export default observer(Navbar);
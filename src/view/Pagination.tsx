import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Store from "../logic/Store";
import NextButton from "./NextButton";

interface PaginationProps {
      store: Store;
}

const Pagination: FC<PaginationProps> = (props) => {

      return (
      <>
            <NextButton store={props.store} onClick={() => {props.store.setPage("previous")}}>PREVIOUS</NextButton>
            <span> {props.store.currentPage.toString()} / {props.store.totalPages}</span>
            <NextButton store={props.store} onClick={() => {props.store.setPage("next");}}>NEXT</NextButton>
            
      </>
      )
}

export default observer(Pagination);
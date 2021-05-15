import { observer } from "mobx-react-lite";
import { FC } from "react";
import Store from "../logic/Store";
import NextButton from "./NextButton";

interface PaginationProps {
      store: Store;
}     

const Pagination: FC<PaginationProps> = (props) => {

      return (
      <>
            <NextButton id={'previous'} store={props.store} onClick={() => {props.store.setPage("previous")}}>PREVIOUS</NextButton>
            <span id={'paginationText'}> {props.store.currentPage.toString()} / {props.store.totalPages}</span>
            <NextButton id={'next'} store={props.store} onClick={() => {props.store.setPage("next");}}>NEXT</NextButton>
            
      </>
      )
}

export default observer(Pagination);
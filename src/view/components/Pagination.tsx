import { FC } from "react";
import { Store } from "../../logic/Store";
import NextButton from "./NextButton";

interface PaginationProps {
      store: Store;
}

const Pagination: FC<PaginationProps> = (props) => {

      function handleKeyPress(e: any) {
            if (e.keyCode === 13) {
                  props.store.setPage("search", e.target.value)
            }
      }
          

      return (
      <>
            <NextButton store={props.store} onClick={() => {props.store.setPage("previous")}}>PREVIOUS</NextButton>
            <input type="text" 
                  placeholder={props.store.currentPage.toString()}
                  onKeyDown={(e) => handleKeyPress(e)} >   
            </input>
            <span> / {props.store.totalPages}</span>
            <NextButton store={props.store} onClick={() => {props.store.setPage("next");}}>NEXT</NextButton>
            
      </>
      )
}

export default Pagination;
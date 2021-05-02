import { FC } from "react";
import { Store } from "../../logic/Store";
import NextButton from "./NextButton";

interface PaginationProps {
      store: Store;
}

const Pagination: FC<PaginationProps> = (props) => {
      
      function handleKeyDown(e: { key: string; target: { value: string}; }) {
            if (e.key === 'Enter') {
                  props.store.setPage("search", e.target.value);
            }
      }     

      return (
      <>
            <NextButton store={props.store} onClick={() => {
                  props.store.setPage("previous")
            }}>PREVIOUS</NextButton>
            <input onKeyDown={() => handleKeyDown}></input>
            <span> / {props.store.totalPages}</span>
            <NextButton store={props.store} onClick={() => {
                  props.store.setPage("next");
            }}>NEXT</NextButton>
            
      </>
      )
}

export default Pagination;
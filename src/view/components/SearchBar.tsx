import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";
import { Store } from "../../logic/Store";

interface SearchProps {
      store: Store;
}

const SearchBar: FC<SearchProps> = (props) => {

      function handleChange(e: { target: { value: string; }; }) {
            props.store.setSearchContent(e.target.value);
      }

      return (
      <SearchBarWrapper>    
            <p>
                  <input type="text" onChange={handleChange} value={props.store.searchContent}/> 
            </p>
            
      </SearchBarWrapper>
      )
}

const SearchBarWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;


export default observer(SearchBar);
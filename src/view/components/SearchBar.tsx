import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Store } from "../../logic/Store";

interface SearchProps {
      store: Store;
}

const SearchBar: FC<SearchProps> = (props) => {

      function handleChange(e: { target: { value: string; }; }) {
            props.store.setSearchContent(e.target.value);
      }

      return (
      <>    
            <p>
                  <input type="text" onChange={handleChange} value={props.store.searchContent}/> 
            </p>
            
      </>
      )
}

export default observer(SearchBar);
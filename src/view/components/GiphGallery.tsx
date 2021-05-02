import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Store } from "../../logic/Store";
import GiphView from "./GiphView";

interface GiphContentProps{
      store: Store;
}

const GiphContent:FC<GiphContentProps> = (props) => {

      return (
      <>
            {props.store.giphs.map((currentGif) => <GiphView name={currentGif.name} url={currentGif.url}></GiphView> )}
      </>
      )
}

export default observer(GiphContent);
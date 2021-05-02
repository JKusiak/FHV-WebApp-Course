import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Store } from "../../logic/Store";
import GiphView from "./GiphView";

interface GiphGalleryProps{
      store: Store;
}

const GiphGallery:FC<GiphGalleryProps> = (props) => {

      return (
      <>
            {props.store.giphs.map((currentGif, key) => <GiphView name={currentGif.name} url={currentGif.url} key={key}></GiphView> )}
      </>
      )
}

export default observer(GiphGallery);
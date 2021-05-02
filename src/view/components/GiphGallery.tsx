import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";
import { Store } from "../../logic/Store";
import GiphView from "./GiphView";

interface GiphGalleryProps{
      store: Store;
}

const GiphGallery:FC<GiphGalleryProps> = (props) => {

      return (
      <GalleryWrapper>
            {props.store.giphs.map((currentGif, key) => <GiphView name={currentGif.name} url={currentGif.url} key={key}></GiphView> )}
      </GalleryWrapper>
      )
}

const GalleryWrapper = styled.div`
      display: grid;
      justify-content: center;
      
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 1em;
`;
export default observer(GiphGallery);
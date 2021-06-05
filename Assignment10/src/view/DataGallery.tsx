import { observer } from "mobx-react-lite"
import { FC } from "react"
import Store from "../logic/Store"
import DataEntry from "./DataEntry"

interface DataGalleryProps{
      store: Store;
}

const DataGallery:FC<DataGalleryProps> = (props) => {

      return (
      <div id='galleryWrapper' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            marginBottom: 20
      }}>
            {props.store.allEntries.map((currentEntry, key) => <DataEntry text={currentEntry} key={key}></DataEntry> )}
      </div>
      )
}

export default observer(DataGallery);
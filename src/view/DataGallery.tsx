import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import Store from "../logic/Store"
import DataEntry from "./DataEntry"

interface DataGalleryProps{
      store: Store;
}

const DataGallery:FC<DataGalleryProps> = (props) => {

      return (
      <>
            {props.store.allEntries.map((currentEntry, key) => <DataEntry text={currentEntry} key={key}></DataEntry> )}
      </>
      )
}

export default observer(DataGallery);
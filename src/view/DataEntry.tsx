import { observer } from "mobx-react-lite";
import { FC } from "react"

interface dataProps{
      text: string;
}

const DataEntry:FC<dataProps> = (props) => {
      return (
      <>
            <p>{props.text}</p>
      </>
      )
}

export default observer(DataEntry);
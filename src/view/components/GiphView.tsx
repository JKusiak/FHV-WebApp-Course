import { observer } from "mobx-react-lite";
import { FC } from "react";

interface giphProps{
      name: string;
      url: string;
      key: number;
}

const GiphView:FC<giphProps> = (props) => {
      return (
      <>
            <p>{props.name}</p>
            <img src={props.url} alt="not loaded"></img>
      </>
      )
}

export default observer(GiphView);
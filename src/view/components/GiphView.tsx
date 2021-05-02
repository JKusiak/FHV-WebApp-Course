import { observer } from "mobx-react-lite";
import { FC } from "react";

interface giphProps{
      name: string;
      url: string;
}

const GiphView:FC<giphProps> = (props) => {
      return (
      <>
            <text>{props.name}</text>
            <img src={props.url} alt={props.name}></img>
      </>
      )
}

export default observer(GiphView);
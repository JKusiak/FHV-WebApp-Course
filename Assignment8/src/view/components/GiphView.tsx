import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";

interface giphProps{
      name: string;
      url: string;
      // key: number;
}

const GiphView:FC<giphProps> = (props) => {
      return (
      <GiphWrapper>
            <p>{props.name}</p>
            <img src={props.url} alt="not loaded"></img>
      </GiphWrapper>
      )
}

const GiphWrapper = styled.div`
      text-align: center;
      padding: 2em;
`;

export default observer(GiphView);
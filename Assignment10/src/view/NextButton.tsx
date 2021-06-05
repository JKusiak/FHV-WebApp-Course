import { observer } from "mobx-react-lite";
import { FC } from "react";
import Store from "../logic/Store";

interface ButtonProps {
      id: string,
      store: Store;
      onClick(): void;
}

const NextButton: FC<ButtonProps> = (props) => {

      function handleClick() {
            props.onClick();
      }

      return (
            <button id={props.id} onClick={handleClick}style={{
                  marginLeft: 10,
                  marginRight: 10}}>
            {props.children}</button>
      )
}

export default observer(NextButton);
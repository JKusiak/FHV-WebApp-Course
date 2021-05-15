import { observer } from "mobx-react-lite";
import { FC } from "react";
import Store from "../logic/Store";

interface ButtonProps {
      store: Store;
      onClick(): void;
}

const NextButton: FC<ButtonProps> = (props) => {

      function handleClick() {
            props.onClick();
      }

      return (
            <button onClick={handleClick}>{props.children}</button>
      )
}

export default observer(NextButton);
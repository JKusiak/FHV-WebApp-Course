import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";
import { Store } from "../../logic/Store";

interface ButtonProps {
      store: Store;
      onClick(): void;
}

const MenuButton: FC<ButtonProps> = (props) => {

      function handleClick() {
            props.onClick();
      }

      return (
            <NextButtonWrapper onClick={handleClick}>{props.children}</NextButtonWrapper>
      )

}

const NextButtonWrapper = styled.div`
      text-align: center;
      font-size: 10px;
      background-color: #F9EADC;
      color: #000000;
      border: none;
      border-radius: 5px;
      width: 5em;
      margin: 20px;
      cursor: pointer;

      :hover {
            background-color: #f2e3d5;
      }
      padding: 1em;

`;

export default observer(MenuButton);
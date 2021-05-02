import { observer } from "mobx-react-lite";
import { FC } from "react";
import styled from "styled-components";
import { Store } from "../../logic/Store";



interface ButtonProps {
      store: Store;
      onClick(): void;
}

const MenuButton: FC<ButtonProps> = (props) => {

      function handleClick(page: any) {
            props.onClick();
      }

      return (
            <StyledButton onClick={handleClick}>{props.children}</StyledButton>
      )

}

const StyledButton = styled.div`
      text-align: center;
      font-size: 25px;
      background-color: #F9EADC;
      color: #000000;
      border: none;
      border-radius: 5px;
      padding: 20px;
      width: 5em;
      margin: 5px;
      cursor: pointer;

      :hover {
            background-color: #f2e3d5;
      }
`;

export default observer(MenuButton);
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
      disabled: boolean; 
      onClick: () => void;
}

const StyledNextButton = styled.button`   
      text-align: center;
      font-size: 25px;
      background-color: #F9EADC;
      color: #000000;
      border: none;
      border-radius: 5px 20px 5px;
      padding: 20px;
      width: 5em;
      margin: 5px;
      cursor: pointer;

      :hover {
            background-color: #f2e3d5;
      }
`;

const NextButton:FC<ButtonProps> = (props) => {     
      function handleClick() {
            if (props.disabled) {
                  return;
            }
            else {
                  props.onClick();
            }
      }

      return (
            <StyledNextButton onClick={handleClick}>{props.children} </StyledNextButton>
      );
}     

export default NextButton;    
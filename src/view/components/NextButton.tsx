import React from 'react';
import { FC } from 'react';

interface ButtonProps {
      disabled: boolean; 
      onClick: () => void;
}

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
            <button onClick={handleClick}>{props.children} </button>
      );
}     

export default NextButton;
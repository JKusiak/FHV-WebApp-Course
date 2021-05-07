import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import styled from "styled-components";

import GenderCombo from "./GenderCombo";

const Texts = () => {
      const[value, setValue] = useState(0);
      const[gender, setGender] = useState('male')

      function checkPlural() {
            if (value === 1 || value === -1) {
                  return "";
            } else if (value === 0) {
                  return ".zero";
            } else {
                  return ".plural";
            }
      }

      return (
            <TextsWrapper>
                  <input type="number" defaultValue={value} onChange={(e) => setValue(parseFloat(e.target.value))}></input>
                  <p>
                        <GenderCombo 
                              onSelect={(e) => setGender(e)}
                        />
                  </p>
                  

                  <p>
                        <FormattedMessage 
                              id={`text.city.gender.${gender}${checkPlural()}`}
                              values={{number: value}}
                        />
                  </p>
                        
                  <p>
                        <FormattedMessage 
                              id={`text.nena${checkPlural()}`}
                              values={{number: value}}
                        />  
                  </p>        
            </TextsWrapper>
      );
}

const TextsWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 3em;

      > * {
            margin-top: 1em;
      }   
`

export default Texts;
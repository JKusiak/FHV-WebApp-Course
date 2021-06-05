import { useState } from "react";
import { FormattedNumber } from "react-intl";
import styled from "styled-components";

const Numbers = () => {
      const[value, setValue] = useState(0);

      return (
            <NumbersWrapper>
                  <input type="number" 
                        defaultValue={value} 
                        onChange={(e) => setValue(parseFloat(e.target.value))}/>

                  <p>Standard number: </p>
                  <FormattedNumber 
                        value={value}
                  />

                  <p>Byte notation: </p>
                  <FormattedNumber 
                        value={value} 
                        style="unit"
                        unit="kilobyte"
                  />

                  <p>Price in euro: </p>
                  <FormattedNumber 
                        value={value} 
                        style="currency"
                        currency="EUR"
                  />

                  <p>Price in euro with higher precision: </p>
                  <FormattedNumber 
                        value={value} 
                        style="currency" 
                        currency="EUR" 
                        minimumFractionDigits={5}
                  />
            </NumbersWrapper>   
      );
}

const NumbersWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 3em;

      > input {
            display: inline-block;
            font-size: 20px;
      }   
`

export default Numbers;
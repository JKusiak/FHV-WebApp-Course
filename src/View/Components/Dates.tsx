import { useState } from "react";
import { FormattedDate } from "react-intl";
import styled from "styled-components";

const Dates = () => {
      const [date, setDate] = useState(new Date().toString());
      
      return (
            <DatesWrapper>
                  <input 
                        type="date" 
                        onChange={(e) => setDate(e.target.value)}
                  />

                  <p>Formatted date: </p>
                  <FormattedDate 
                        value={date}
                  />
            </DatesWrapper> 
      );
}

const DatesWrapper = styled.div`
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

export default Dates;
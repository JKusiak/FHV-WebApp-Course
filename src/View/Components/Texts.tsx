import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

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
            <>
                  <input type="number" defaultValue={value} onChange={(e) => setValue(parseFloat(e.target.value))}></input>
                  <GenderCombo 
                        onSelect={(e) => setGender(e)}
                  />

                  <FormattedMessage 
                        id={`text.city.gender.${gender}${checkPlural()}`}
                        values={{number: value}}
                  />

                  <br></br>
                  <FormattedMessage 
                        id={`text.nena${checkPlural()}`}
                        values={{number: value}}
                  />     
            </>
      );
}

export default Texts;
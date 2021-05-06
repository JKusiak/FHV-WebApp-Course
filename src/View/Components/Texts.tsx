import React, { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";
import German from "../Translations/de.json";
import English from "../Translations/en.json";
import Polish from "../Translations/pl.json";
import ComboBox from "react-responsive-combo-box";
import GenderCombo from "./GenderCombo";

const Texts = () => {
      const[value, setValue] = useState(0);
      const[gender, setGender] = useState('male')

      const messages = {
            'de-DE': German,
            'en-US': English,
            'pl-PL': Polish
      }

      function checkPlural() {
            if (value === 1 || value === -1) {
                  return "";
            } else {
                  return ".plural";
            }
      }

      return (
            <IntlProvider locale={'de'} messages={messages["en-US"]}>
                  <input type="number" defaultValue={value} onChange={(e) => setValue(parseFloat(e.target.value))}></input>
                  <GenderCombo onSelect={(e) => setGender(e)}/>

                  <FormattedMessage id={`text.city.gender.${gender}${checkPlural()}`}
                                    values={{number: value}}/>
                  <br></br>
                  <FormattedMessage id={`text.nena${checkPlural()}`}
                                    values={{number: value}}/>     
            </IntlProvider>
      );
}

export default Texts;
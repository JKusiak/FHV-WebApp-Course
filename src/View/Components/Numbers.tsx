import React, { useState } from "react";
import { FormattedNumber, IntlProvider } from "react-intl";

const Numbers = () => {
      const[value, setValue] = useState(0);

      return (
            <IntlProvider locale="en">
                  <input type="number" defaultValue={value} onChange={(e) => setValue(parseFloat(e.target.value))}></input>

                  <p>Standard number: </p>
                  <FormattedNumber value={value}/>

                  <p>Byte notation: </p>
                  <FormattedNumber value={value} style="unit" unit="kilobyte"/>

                  <p>Price in euro: </p>
                  <FormattedNumber value={value} style="currency" currency="EUR"/>

                  <p>Price in euro with higher decimal places precision: </p>
                  <FormattedNumber value={value} style="currency" currency="EUR" minimumFractionDigits={5}/>
            </IntlProvider>   
      );
}

export default Numbers;
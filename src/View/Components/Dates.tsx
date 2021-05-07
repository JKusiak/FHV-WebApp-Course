import React, { useState } from "react";
import { IntlProvider, FormattedDate } from "react-intl";

const Dates = () => {
      const [date, setDate] = useState(new Date().toString());
      
      return (
            <>
                  <input 
                        type="date" 
                        onChange={(e) => setDate(e.target.value)}
                  />

                  <p>Formatted date: </p>
                  <FormattedDate 
                        value={date}
                  />
            </> 
      );
}

export default Dates;
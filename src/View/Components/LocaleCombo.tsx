import React from "react";
import ComboBox from 'react-responsive-combo-box'

const LocaleCombo = () => {
      const locale = [
            'PL',
            'EN',
            'DE',
          ]
      
      return (
            <ComboBox   options={locale} 
                        placeholder="choose country" 
                        focusColor="#F9EADC"
                        // onSelect={(option) => setSelectedOption(option)}
                        />
      );
}

export default LocaleCombo;
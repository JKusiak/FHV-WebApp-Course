import React, { FC } from "react";
import ComboBox from 'react-responsive-combo-box'

interface LocaleComboProps {
      onSelect: (arg0: string) => void;
}

const LocaleCombo: FC<LocaleComboProps> = (props) => {
      const locale = [
            'pl',
            'en',
            'de',
          ]
      
      return (
            <ComboBox   options={locale} 
                        placeholder="choose country" 
                        focusColor="#F9EADC"
                        onSelect={(e) => props.onSelect(e)}
            />
      );
}

export default LocaleCombo;
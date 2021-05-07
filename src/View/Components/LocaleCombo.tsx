import React, { FC } from "react";
import ComboBox from 'react-responsive-combo-box'
import styled from "styled-components";

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
                        focusColor="#f2e3d5"
                        onSelect={(e) => props.onSelect(e)}
            />
      );
}


export default LocaleCombo;
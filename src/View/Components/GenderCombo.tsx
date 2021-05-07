import React, { FC } from "react";
import ComboBox from 'react-responsive-combo-box'


interface GenderComboProps {
      onSelect: (arg0: string) => void
}

const GenderCombo: FC<GenderComboProps> = (props) => {
      const genderOptions = [
            'male',
            'female',
            'undisclosed',
          ]

      return (
            <ComboBox   
                  options={genderOptions} 
                  placeholder="choose gender" 
                  focusColor="#f2e3d5"
                  onSelect={(e) => props.onSelect(e)}
            />
      );
}

export default GenderCombo;



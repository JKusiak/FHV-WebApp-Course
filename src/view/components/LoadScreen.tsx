import { FC } from "react";
import styled from "styled-components";

interface LoadScreenProps {

}


const LoadScreen: FC<LoadScreenProps> = (props) => {

      return (
            <ImageWraper>
                  <img src="../resources/loading-animated.gif" alt="load screen not loaded, that's awkward"/>
            </ImageWraper>
            
      )
}

const ImageWraper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
`;

export default LoadScreen;
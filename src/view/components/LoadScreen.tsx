import { FC } from "react";

interface LoadScreenProps {

}


const LoadScreen: FC<LoadScreenProps> = (props) => {

      return (
            <img src="../resources/loading-animated.gif" alt="load screen not loaded, that's awkward"/>
      )
}

export default LoadScreen;
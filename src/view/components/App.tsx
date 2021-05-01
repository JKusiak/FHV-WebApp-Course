
import { observer, useLocalObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Store } from '../../logic/Store';
import Navbar from './Navbar';


const App = () => {
  const store = useLocalObservable(Store.createStore);

    useEffect(() => {
        return (): void => store.destroyStore();
    }, []);
  
  
  return (
      <Navbar store={store}></Navbar>
  );
}

export default observer(App);

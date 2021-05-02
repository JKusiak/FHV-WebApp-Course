
import { observer, useLocalObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Store } from '../../logic/Store';
import GiphContent from './GiphGallery';
import Navbar from './Navbar';


const App = () => {
  const store = useLocalObservable(Store.createStore);

    useEffect(() => {
        store.destroyStore();
    }, []);
  
  
  return (
    <>
      <Navbar store={store}></Navbar>
      <GiphContent store={store}></GiphContent>
    </>
  );
}

export default observer(App);

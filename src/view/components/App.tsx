
import { observer, useLocalObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Store } from '../../logic/Store';
import GiphContent from './GiphGallery';
import LoadScreen from './LoadScreen';
import Navbar from './Navbar';
import Pagination from './Pagination';


const App = () => {
  const store = useLocalObservable(Store.createStore);

    useEffect(() => {
        store.destroyStore();
    }, []);
  
  
  return (
    <>
      <Navbar store={store}></Navbar>
      {!store.isLoaded && <LoadScreen/>}
      <GiphContent store={store}></GiphContent>
      <Pagination store={store}></Pagination>
    </>
  );
}

export default observer(App);

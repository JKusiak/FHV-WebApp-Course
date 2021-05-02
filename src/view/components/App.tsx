
import { observer, useLocalObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { NavPage } from '../../logic/NavPage';
import { Store } from '../../logic/Store';
import GiphContent from './GiphGallery';
import LoadScreen from './LoadScreen';
import Navbar from './Navbar';
import Pagination from './Pagination';
import SearchBar from './SearchBar';


const App = () => {
  const store = useLocalObservable(Store.createStore);

    useEffect(() => {
        store.destroyStore();
    }, []);
  
  
  return (
    <>
      <Navbar store={store}></Navbar>
      {!store.isLoaded && <LoadScreen/>}
      {store.getNavigationPage === NavPage.SEARCH && <SearchBar store={store}/>}
      <GiphContent store={store}></GiphContent>
      <Pagination store={store}></Pagination>
    </>
  );
}

export default observer(App);

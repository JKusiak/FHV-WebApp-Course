
import { observer, useLocalObservable } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { NavPage } from '../../logic/NavPage';
import { Store } from '../../logic/Store';
import { GlobalStyle } from '../styles/GlobalStyle';
import GiphContent from './GiphGallery';
import LoadScreen from './LoadScreen';
import Navbar from './Navbar';
import Pagination from './Pagination';
import SearchBar from './SearchBar';


const App = () => {
  function createStore() {
      return new Store();
  }

  const store = useLocalObservable(createStore);

    useEffect(() => {
        return ():void => store.destroyStore();
    }, []);
  
  
  return (
    <>
      <GlobalStyle/>
      <Navbar store={store}></Navbar>
      {!store.isLoaded && <LoadScreen/>}
      {store.getNavigationPage === NavPage.SEARCH && <SearchBar store={store}/>}
      <GiphContent store={store}></GiphContent>
      <Pagination store={store}></Pagination>
    </>
  );
}

export default observer(App);

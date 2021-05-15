import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Store from '../logic/Store';
import DataGallery from './DataGallery';
import Pagination from './Pagination';

function App() {

  const store = new Store();
  
  useEffect(() => {
    store.updateMockData(store.getPage);
  });

  return (
    <>
      <DataGallery store={store}/>
      <Pagination store={store}/>
    </>
   
  );
}

export default observer(App);

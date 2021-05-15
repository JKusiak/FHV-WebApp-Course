import Store from "../../logic/Store";
import {mount, shallow} from 'enzyme';
import React from "react";
import Pagination from "../../view/Pagination";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('Click next success', () => {
      const store = new Store(); 
      const pagination = shallow(<Pagination store={store}/>);
  
      expect(store.getPage).toBe(1);
  
      pagination.find("#next").simulate('click');

      expect(store.getPage).toBe(2);
  });
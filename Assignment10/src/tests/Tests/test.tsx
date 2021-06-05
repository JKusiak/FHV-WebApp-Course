import Store from "../../logic/Store";
import {mount, shallow} from 'enzyme';
import React from "react";
import Pagination from "../../view/Pagination";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NextButton from "../../view/NextButton";
import DataGallery from "../../view/DataGallery";

configure({ adapter: new Adapter() });

test('Click next success', () => {
      const store = new Store(); 
      const pagination = shallow(<Pagination store={store}/>);
  
      expect(store.getPage).toBe(1);
  
      pagination.find("#next").simulate('click');

      expect(store.getPage).toBe(2);
  });

  test('Click previous success', () => {
    const store = new Store();
    store.currentPage = 3;

    const pagination = shallow(<Pagination store={store}/>);

    expect(store.getPage).toBe(3);

    pagination.find("#previous").simulate('click');

    expect(store.getPage).toBe(2);
});

test('Click previous check limit', () => {
    const store = new Store();
    store.currentPage = 1;

    const pagination = shallow(<Pagination store={store}/>);

    expect(store.getPage).toBe(1);

    pagination.find("#previous").simulate('click');

    expect(store.getPage).toBe(1);
});


test('Check next page limit', () => {
    const store = new Store();
    store.currentPage = 1;
    store.totalPages = 2;

    expect(store.getPage).toBe(1);

    store.setPage('next');

    expect(store.getPage).toBe(2);

    store.setPage('next');

    expect(store.getPage).toBe(2);
});

test('Button component click test', () => {
    const store = new Store();
    const mockCallBack = jest.fn();
    const button = shallow((<NextButton id={'testid'} store={store} onClick={mockCallBack}>Test</NextButton>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
});

test('Data gallery length test', () => {
    const store = new Store();
    store.updateMockData(1);

    const dataGallery = shallow(<DataGallery store={store}></DataGallery>);

    expect(dataGallery.find('#galleryWrapper').children()).toHaveLength(15);
});

test('Data entry value test', () => {
    const store = new Store();
    store.updateMockData(1);

    const dataGallery = mount(<DataGallery store={store}></DataGallery>);

    expect(dataGallery.find('#galleryWrapper').childAt(0).text()).toBe("Test data number 1");

    store.updateMockData(2);

    expect(dataGallery.find('#galleryWrapper').childAt(0).text()).toBe("Test data number 16");
});

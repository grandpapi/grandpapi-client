import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('../services/auth.js', () => ({
  handleAuth() {
    return Promise.resolve([]);
  },
  handleCheck() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/dbMegaNapAPI.js', () => ({
  postDb() {
    return Promise.resolve([]);
  },
  getDbs() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/modelMegaNapAPI.js', () => ({
  postModel() {
    return Promise.resolve([]);
  },
  getModels() {
    return Promise.resolve([]);
  },
  getAllModels() {
    return Promise.resolve([]);
  }
}));

jest.mock('../services/dataMegaNapAPI.js', () => ({
  postData() {
    return Promise.resolve([]);
  }
}));

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

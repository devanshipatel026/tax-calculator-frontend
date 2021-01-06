import React from 'react';
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './App';
import Home from './components/Home';
import CalculateTax from './components/CalculateTax';
import renderer from 'react-test-renderer';

it("renders App without crashing", () => {
   shallow(<App />);
 });

 it("renders Home without crashing", () => {
  shallow(<Home />);
});

it("renders CalculateTax without crashing", () => {
  shallow(<CalculateTax />);
});

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
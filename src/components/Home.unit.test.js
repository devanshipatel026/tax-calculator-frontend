import React from 'react';
import { render } from '@testing-library/react';
import  Home  from './Home';
import renderer from 'react-test-renderer';
import { shallow,  configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//snapshot rendering branch
describe('Home', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Home.WrappedComponent />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

describe('Home', () => {
  it('initial state', () => {
    render(<Home.WrappedComponent/>)
    // it renders empty income fields
    const wrapper = shallow(<Home.WrappedComponent/>);
    const text = wrapper.find('input').text();
    expect(text).toEqual("");
  });


});
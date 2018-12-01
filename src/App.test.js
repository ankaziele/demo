import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Componennt props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

 const setup = (props = {}, state = null) => {
   return shallow(<App {...props} />)
 }

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val = Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

 const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)
 

test('renders without error', () => {
 const wrapper = setup();
 const appComponent = findByTestAttr(wrapper, 'component-app');
 expect(appComponent.length).toBe(1)

});

test ('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1)
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(0)
});

test ('counter starts at 0', () =>{
  const wrapper = setup();
  const counterStarts = findByTestAttr(wrapper, 'counter-starts');
  expect(counterStarts .length).toBe(1)
});

test ('clicking button increments counter display', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1)
})
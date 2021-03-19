import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// ensures that after each test, we won't have
// any leftover memory data that could give us false results
afterEach(cleanup);

// checks Nav component
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav />);
    });
  
    // snapshot test
    it('matches snapshot', () => {
      const { asFragment } = render(<Nav />);
      
      expect(asFragment()).toMatchSnapshot();
    });
})

// test if the camera emoji is visible
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// test to see if some of our links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
})

// arranges the queries
const { getByTestId } = render(<Nav />);
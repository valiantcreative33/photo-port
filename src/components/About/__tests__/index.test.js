import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensures that after each test, we won't have
// any leftover memory data that could give us false results
afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
    // render About
    });
})

// returns a snapshot of the About component
const { asFragment } = render(<About />);

// test and compare whether the expected and actual outcomes match
expect(asFragment()).toMatchSnapshot();
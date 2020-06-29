import React from 'react';
import { render } from '@testing-library/react';
import Home from './hero';
import Footer from './footer';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/I'm Sean/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/2020/i);
  expect(linkElement).toBeInTheDocument();
});

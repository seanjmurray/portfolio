import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders header', () => {
  render(<App />);
  const linkElement = document.getElementsByTagName('a')[3];
  expect(linkElement).toBeInTheDocument();
});
test('renders hero', () => {
  render(<App />);
  const linkElement = document.getElementsByClassName('hero')[0];
  expect(linkElement).toBeInTheDocument();
});
test('renders about', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HAZMAT/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders project', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Salmon/i);
  expect(linkElement).toBeInTheDocument();
});
// test('renders skills', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/Security/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders contact', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ahold/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/2021/i);
  expect(linkElement).toBeInTheDocument();
});

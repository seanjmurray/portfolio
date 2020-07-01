import React from 'react';
import { render } from '@testing-library/react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/competencies';
import Footer from './components/footer';

test('renders header', () => {
  render(<Header />);
  const linkElement = document.getElementsByTagName('a')[3];
  expect(linkElement).toBeInTheDocument();
});
test('renders hero', () => {
  render(<Hero />);
  const linkElement = document.getElementsByClassName('hero')[0];
  expect(linkElement).toBeInTheDocument();
});
test('renders about', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/HAZMAT/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders project', () => {
  const { getByText } = render(<Projects />);
  const linkElement = getByText(/Salmon/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders skills', () => {
  const { getByText } = render(<Skills />);
  const linkElement = getByText(/MongoDB/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders footer', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/2020/i);
  expect(linkElement).toBeInTheDocument();
});

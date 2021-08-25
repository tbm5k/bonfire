import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

test('renders app component', () => {
  render(<App />);
});

test('renders the header', () => {
  render(<Header />);
});

test('rendres the footer', () => {
  render(<Footer />);
});
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders app component', () => {
  render(<App />);
});

test('renders the header', () => {
  render(
  <Router>
    <Header />
  </Router>
    );
  });

test('rendres the footer', () => {
  render(<Footer />);
});
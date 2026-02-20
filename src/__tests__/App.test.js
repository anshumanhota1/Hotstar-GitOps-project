// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hotstar Clone heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hotstar Clone/i);
  expect(headingElement).toBeInTheDocument();
});

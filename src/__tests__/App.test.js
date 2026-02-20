// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App';  // <-- use '../App' because test is in __tests__ folder

test('renders Hotstar Clone heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Subscribe to Watch/i);
  expect(linkElement).toBeInTheDocument();
});

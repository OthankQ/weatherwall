import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text input', () => {
  render(<App />);
  const textInput = screen.getByRole('textbox');
  expect(textInput).toBeInTheDocument();
});

test('renders button', () => {
  render(<App />);
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();
});

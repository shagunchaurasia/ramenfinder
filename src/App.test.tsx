import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading for the app', () => {
  render(<App />);
  const appContainer = screen.getByTestId("appContainer");
  expect(appContainer).toBeInTheDocument();
  expect(appContainer).toHaveClass('App');
});

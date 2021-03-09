import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  const { debug } = render(<App />);
  debug();
});

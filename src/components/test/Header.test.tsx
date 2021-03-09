import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

afterEach(cleanup);

test('<Header />', () => {
    const { debug, queryByTestId } = render(<Header />);
    expect(queryByTestId("header-title")).toBeTruthy();
    expect(queryByTestId("header-mode")).toBeTruthy();
})

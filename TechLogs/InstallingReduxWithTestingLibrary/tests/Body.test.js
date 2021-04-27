import React from 'react';
import App from '../pages/index';
import { screen } from '@testing-library/react';
import { render } from './test-utils';

describe('Body', () => {
    it('testing body heading', () => {
        render(<App />);
        expect(
            screen.getByTestId('heading')
        ).toBeInTheDocument()
    });
});
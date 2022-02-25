import { render, screen } from '@testing-library/react';
import App from './App';

describe('application', () => {
    test('renders Form component', () => {
        render(<App />);
        expect(screen.getByTestId('form')).toBeInTheDocument();
    });
});

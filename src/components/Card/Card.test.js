import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
    const testOrder = {
        id: 123,
        date: '2022. 2. 25 - 0:07',
        csomagpont: '13 sz. automata - Pesterzsébet Interspar',
        weight: 100
    };

    test('renders order date', () => {
        render(<Card order={testOrder} />);
        expect(screen.getByText(testOrder.date)).toBeInTheDocument();
    });

    test('renders csomagpont', () => {
        render(<Card order={testOrder} />);
        expect(screen.getByText(testOrder.csomagpont)).toBeInTheDocument();
    });

    test('renders weight', () => {
        render(<Card order={testOrder} />);
        expect(screen.getByText(`${testOrder.weight} gramm`)).toBeInTheDocument();
    });
});

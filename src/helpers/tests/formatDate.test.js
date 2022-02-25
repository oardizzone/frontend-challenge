import { formatDate } from '..';

describe('formatDate', () => {
    test('throws error if invalid Date object is passed', () => {
        expect(() => {
            formatDate('not a date');
        }).toThrow('valid Date object expected');
    });

    test('returns correctly formatted date', () => {
        const testDate = new Date(1645747640745);
        expect(formatDate(testDate)).toEqual('2022. 2. 25 - 1:07');
    });
});

import math from './math';

describe('Math', () => {
    describe('Addition', () => {
        it('should sum numbers in an array', () => {
            expect(math.add([1, 2, 3, 4])).toBe(10);
        });
    });

    describe('Multiplication', () => {
        it('should multiply numbers in an array', () => {
            expect(math.multiply([1, 2, 3, 4])).toBe(24);
        });
    });
});

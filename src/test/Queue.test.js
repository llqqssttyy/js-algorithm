const solution = require('../Queue.js');

test('priorities: [2, 1, 3, 2], location: 2', () => {
    expect(solution([2, 1, 3, 2], 2)).toBe(1);
});

test('priorities: [1, 1, 9, 1, 1, 1], location: 0', () => {
    expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
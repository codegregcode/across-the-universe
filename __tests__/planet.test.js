const Planet = require('../src/planet');

describe('Planet', () => {
    it('can be instantiated', () => {
        expect(new Planet).toBeInstanceOf(Object);
    });
});
const Galaxy = require('../src/galaxy');

describe('Galaxy', () => {
    it('can be instantiated', () => {
        expect(new Galaxy).toBeInstanceOf(Object);
    });
});
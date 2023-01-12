const Lifeform = require('../src/lifeform');

describe('Lifeform', () => {
    it('can be instantiated', () => {
        expect(new Lifeform).toBeInstanceOf(Object);
    });
});
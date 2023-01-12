const Lifeform = require('../src/lifeform');

describe('Lifeform', () => {
    describe('has name, and sentience', () => {
        let lifeForm;
        beforeEach(() => {
            lifeForm = new Lifeform('Li');
        });

    it('can be instantiated', () => {
        expect(new Lifeform).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(lifeForm.name).toBeTruthy();
    });

    it('has a type', () => {
        expect(lifeForm.hasOwnProperty('type')).toBeTruthy();
    });

    it('has sentience', () => {
        expect(lifeForm.hasOwnProperty('sentience')).toBeTruthy();
    });
    });
});
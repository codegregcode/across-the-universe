const Lifeforms = require('../src/lifeform');

describe('Lifeforms', () => {
    describe('has name, and sentience', () => {
        let lifeForm;
        beforeEach(() => {
            lifeForm = new Lifeforms();
        });

    it('can be instantiated', () => {
        expect(new Lifeforms).toBeInstanceOf(Object);
    });

    it('has a exist key', () => {
        expect(lifeForm.exist).toBeFalsy();
    });

    it('has intelligence set to 0', () => {
        expect(lifeForm.intelligence).toBe(0);
    });

    it('can increment intelligence by 1 with gainInt', () => {
        lifeForm.gainInt();
        expect(lifeForm.intelligence).toBe(1);
    });

    it('has a maximum of 10 intelligence', () => {
        lifeForm.intelligence = 10;
        lifeForm.gainInt();
        expect(lifeForm.intelligence).toBe(10);
    });

    it('can decrement intelligence by 1 with loseInt', () => {
        lifeForm.loseInt();
        expect(lifeForm.intelligence).toBe(-1);
    });

    it('has a minumum of -20 intelligence', () => {
        lifeForm.intelligence = -20;
        lifeForm.loseInt();
        expect(lifeForm.intelligence).toBe(-20);
    });
    });
});
const { expect, assert} = require('chai');
const lookupChar = require('./char');

describe('Char Symbol Function', () => {
    it('cheking type first parameter', () => {
    assert.equal(lookupChar(123, 1), undefined);
    });
    it('cheking type of second parameter', () => {
        assert.equal(lookupChar('string', 'as'), undefined);
    });
    it('type of second parameter with floating point', () => {
        assert.equal(lookupChar('string', 1.2), undefined);
    });
    it('negative second parameter', () => {
        expect(lookupChar('string', -1)).to.equal('Incorrect index');
    });
    it('index > string', () => {
        assert.equal(lookupChar('string', 10), 'Incorrect index');
    });
    it('index = string', () => {
        assert.equal(lookupChar('string', 6), 'Incorrect index');
    }); 
    it('correct parameters',  () => {
        assert.equal(lookupChar('string', 2), 'r');
    });
});
const { expect } = require('chai');

const sum = require('./index');

describe ('Sum numbers', ()=> {
    it('sum single number', () => {
        expect(sum([1])).to.equal(1)
    });
});
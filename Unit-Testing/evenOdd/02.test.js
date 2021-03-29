const { assert } = require('chai');
const isOddOrEven = require('./02');

describe('odd or even function', () => {
    it('input as string', () => {
        assert.isUndefined(isOddOrEven(1));
    });
    it('odd', () => {
        assert.equal(isOddOrEven('a'),'odd');
    });
    it('even', () => {
        assert.equal(isOddOrEven('aa'),'even');
        });
    });

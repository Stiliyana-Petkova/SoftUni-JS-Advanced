const {assert, expect} = require('chai');
const isSymmetric = require('./symetry');

describe('array validator', () => {
    it('is array', () => {
        assert.typeOf([], 'array')
    });

    it('is not array', () => {
        assert.equal(isSymmetric('a'), false)
    });

    it('array as numbers is symetric', () => {
        assert.equal(isSymmetric([1,1]), true)
    });

    it('array is not symetric', () => {
        expect(isSymmetric([2,1,4])).equal(false)
    })
    it('array is string', () => {
        assert.equal(isSymmetric([1, '1']), false)
    });
});
const { expect, assert } = require('chai');
//const { addFive } = require('./math');

const mathEnforcer = require('./math1');

describe('mathEnforcer function', () => {
    describe('addFive function', () => {
        it('parameter is not a number', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
            //assert.isNaN(mathEnforcer.addFive(NaN));
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        
        it('different numbers', () => {
            assert.equal(mathEnforcer.addFive(1.5), 6.5);
            assert.equal(mathEnforcer.addFive(1), 6)
            assert.equal(mathEnforcer.addFive(-10), -5)

        });

       
    });

    describe('subsTen', () => {
        it('parameter is not a number', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            //assert.isNaN(mathEnforcer.subtractTen(NaN));
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        it('it is a number and subtract 10', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
            assert.equal(mathEnforcer.subtractTen(-10), -20)
        });
    });

    describe('sum', () => {
        it('one of the parameters is not a number', () => {
            assert.equal(mathEnforcer.sum('5', 1), undefined);
            assert.equal(mathEnforcer.sum(5, '1'), undefined);
            assert.equal(mathEnforcer.sum('5', '1'), undefined);
            assert.equal(mathEnforcer.sum(undefined, undefined), undefined);
            assert.equal(mathEnforcer.sum(undefined, '1'), undefined);
            assert.equal(mathEnforcer.sum('5', undefined), undefined);

        });

        it('sum numbers', () => {
            assert.equal(mathEnforcer.sum(20, 10), 30);
            assert.equal(mathEnforcer.sum(-1, 10), 9);
            assert.equal(mathEnforcer.sum(0, 10), 10);
            assert.equal(mathEnforcer.sum(1.1, 10), 11.1);
            assert.equal(mathEnforcer.sum(20, -1), 19);
            assert.equal(mathEnforcer.sum(1.1, 2.1), 3.2);




        });
    });
});
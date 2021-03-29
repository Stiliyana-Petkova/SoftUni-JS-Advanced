const {expect, assert} = require('chai');
const numberOperations = require('./examen');


describe('Number Operations', () => {
    describe('powNumber', () => {
        it('valid input', () => {
            assert.equal(numberOperations.powNumber(5), 25);
            assert.equal(numberOperations.powNumber(1), 1);
            
        });

        it('a -number', () => {
            assert.equal(numberOperations.powNumber(-1), 1);
        });
    });

    describe('numberCheker', () => {
        it('isNaN', () => {
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(NaN), 'The input is not a number!');
        });

        it('lower than 100', () => {
            assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!')
        });
        
        it('bigger than 100 or equal', () => {
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
            
        
    })

    describe('sumArrays', () => {
        it('valid input', () => {
            assert.deepEqual(numberOperations.sumArrays([1,2,3], [3,2]), [4,4,3]) 
        });
    });
})
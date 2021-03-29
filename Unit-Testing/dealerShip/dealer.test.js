const {expect, assert} = require('chai');
const dealership = require('./dealer');

describe('dealership', () => {
    describe('new car cost', () => {
        it('carmodel is not defined', () => {
            assert.equal(dealership.newCarCost('a', 1), 1)
        });
        it('carmodel is there', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000)
        });
    })

    describe('car equipment', () => {
        it('correct input', () => {
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [0, 1]), ['a', 'b']);
            assert.deepEqual(dealership.carEquipment(['a'], [0]), ['a']);
            assert.deepEqual(dealership.carEquipment(['a', 'b', 'c'], [0]), ['a']);
        })
    })

    describe('eurocategory', () => {
        it('>4', () => {
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`)
        })
        it('=4', () => {
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
        })

        it('<4', () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
        })
    })
})
const {expect, assert} = require('chai');
const pizzUni = require('./piz');

describe('PizzUni', () => {
    describe('Make an order', () => {
        it('there is a pizza and drink', () => {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'a', orderedDrink: 'b'}), `You just ordered a and b.`)
        });

        it('there is not a pizza', () => {
            assert.throw(() => pizzUni.makeAnOrder({orderedDrink: 'b'}), 'You must order at least 1 Pizza to finish the order.')
        });

        it('there is not a drink', () => {
            assert.equal(pizzUni.makeAnOrder({orderedPizza: 'a'}), `You just ordered a`)
        });
    })

    describe('Get remaining work', () => {
        it('All pizzas are ready', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'a', status: 'ready' }]), 'All orders are complete!')
        });
        it('Pizzas are not ready', () => {
            assert.equal(pizzUni.getRemainingWork([{pizzaName: 'b', status: 'preparing' }]), `The following pizzas are still preparing: b.`)
        });
    })

    describe('Order type', () => {
        it('carry out', () => {
            assert.equal(pizzUni.orderType(10, 'Carry Out'), 9)
        });
        it('delivery', () => {
            assert.equal(pizzUni.orderType(10, 'Delivery'), 10)
        });
    })
})
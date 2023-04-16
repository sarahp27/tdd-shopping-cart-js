const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');

describe('Cart', () => {

    it('Test Empty Cart', () => {
        //Arrange
        const cart = new Cart();
        const assert = [] ;
        //Act
        let get = cart.getCart();
        //Assert
        expect(get).toEqual(assert);
    })

})
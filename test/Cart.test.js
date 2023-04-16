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

    it('add item in Cart', () => {
        //Arrange
        const = new Cart();
        const i = new Item ("Chips", 100, false);
        let qty = 1;
        //Act
        cart.addItem(i,qty);
        let assert = i.price * qty;
        let get = cart.totalPrice;
        //Assert
        expect(get).toEqual(assert);
    })


})
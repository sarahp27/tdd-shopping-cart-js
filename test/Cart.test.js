const { assert } = require('chai');
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

    it('Add item in Cart and see summ of all items', () => {
        //Arrange
        const cart = new Cart();
        const i = new Item ("Chips", 100, false);
        let qty = 1;
        //Act
        cart.addItem(i,qty);
        let assert = i.price * qty;
        let get = cart.totalPrice;
        //Assert
        expect(get).toEqual(assert);
    })

    it('I add more than 1 item and expect quantities to show in numbers',() => {
        //Arrange
        const cart = new Cart();
        const i1 = new Item ("Chips", 100, false);
        const i2 = new Item ("Dairy Milk", 100, true);
        const i3 = new Item ("Pizza", 500, false);
        //Act 
        cart.addItem(i1,1);
        cart.addItem(i2,1);
        cart.addItem(i3,1);
        let get = cart.itemQuantities(cart.itemList);
        let assert=3;
        //Assert 
        expect(get.length).toEqual(assert);
    })

    it("I add items, then I expect itemizedList() reflect the items I have added along with their price and quantity.", () => {
        //Arrange
        const cart = new Cart();
        const i1 = new Item ("Chips", 100, false);
        const i2 = new Item ("Dairy Milk", 100, true);
        const i3 = new Item ("Pizza", 500, false);
        //Act 
        cart.addItem(i1,1);
        cart.addItem(i2,1);
        cart.addItem(i3,1);
        //Assert
        let get = cart.itemizedList(cart.itemList);
        let assert = ["Chips x1 - $100", "Dairy Milk x1 - $100", "Pizza x1 -$500" ];
        expect(get).toEqual(assert);
    })



})
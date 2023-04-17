const { expect } = require("@jest/globals");
const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');

describe('Cart', () => {
    
    //test Case 1
    it('Test Empty Cart', () => {
        //Arrange
        const cart = new Cart();
        const assert = [] ;
        //Act
        let get = cart.getCart();
        //Assert
        expect(get).toEqual(assert);
    })

    //Test Case 2
    it('Add item in Cart and see sum of all items', () => {
        //Arrange
        const cart = new Cart();
        const i = new Item ("Chips", 100, false);
        let qty = 1;
        //Act
        cart.addItem(i,qty);
        let assert = i.itemPrice * qty;
        let get = cart.totalPrice;
        //Assert
        expect(get).toEqual(assert);
    })

    //Test Case 3
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

    //Test Case 4
    it("I add items, then I expect itemizedList() reflect the items I have added along with their price and quantity.", () => {
        //Arrange
        let assert = `Chips, 100, 1Dairy Milk, 100, 1Pizza, 500, 1`;
        const cart = new Cart();
        const i1 = new Item ("Chips", 100, false);
        const i2 = new Item ("Dairy Milk", 100, true);
        const i3 = new Item ("Pizza", 500, false);
        
        //Act 
        cart.addItem(i1,1);
        cart.addItem(i2,1);
        cart.addItem(i3,1);
        //Assert
        
        let get = cart.itemizedList();
        expect(get).toBe(assert);
    })

    //Test Case 5
    it("Bill of total items", () => {
        //Arrange
        let assert = 1000;
        const cart = Cart();
        const i1 = new Item ("Chips", 100, false);
        const i2 = new Item ("Dairy Milk", 100, true);
        const i3 = new Item ("Pizza", 500, false);
        
        //Act 
        cart.addItem(i1,1);
        cart.addItem(i2,1);
        cart.addItem(i3,1);
        //Assert
        let get = cart.totalPrice;
        expect(get).toBe(assert);
    })

    //Test Case 6
    it("Items on sale", () => {
        //Arrange
        let assert = [{"isOnSale": true, "itemName": "Dairy Milk", "itemPrice": 100, "qty": 1}];
        const cart = new Cart();
        const i1 = new Item ("Chips", 100, false);
        const i2 = new Item ("Dairy Milk", 100, true);
        //Act
        cart.addItem(i1,1);
        cart.addItem(i2,1);
        //Assert
        let get = cart.ItemsonSale();
        expect(get).toStrictEqual(assert);

    })
})

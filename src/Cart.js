const Item = require("./Item");

module.exports = class Cart {
    constructor() {
        this.itemList = [];
        this.totalPrice = 0;
    }

    getCart() {
        return this.itemList;
    }

    getPrice() {
        let price = 0.0;
        for (let item of this.itemList) {
            price += item.getItemPrice() * item.getQuantity();
        }
        return price;
    }

    addItem = (i, qty) => {
        this.itemList.push({...i,qty});
        this.totalPrice += this.itemList[0].price*qty;

        return this.itemList;
    }

    itemQuantities=(itemList ) => {
        let arr = [];
        for (let i of itemList){
            arr.push(`${Item.name} -x${Item.qty}`);
        }
        return arr;
    };

    itemizedList(itemList){
        return itemList.map(
             item => `${item.name} x${item.qty} - ${item.price * item.quantity}`
         
        );
}
}

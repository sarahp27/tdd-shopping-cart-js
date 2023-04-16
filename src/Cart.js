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
        // this.itemList.quantity = quantity;
        this.itemList.push({...i,qty});
        this.totalPrice += this.itemList[0].price*qty;

        return this.itemList;
    }

}

// removeItem(i) {
//     for (let item of this.itemList) {
//         if (i.getItemName() === item.getItemName()) {
//             if (item.getQuantity() > 1) {
//                 item.decrementQuantity();
//             } else {
//                 this.itemList.splice(this.itemList.indexOf(item), 1);
//             }
//             return true;
//         }
//     }
//     return false;
// }

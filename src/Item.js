module.exports = class Item {
  constructor(itemName, itemQuantity, itemPrice, isOnSale) {
    this.itemName = itemName;
    this.itemQuantity = itemQuantity;
    this.itemPrice = itemPrice;
    this.isOnSale = isOnSale;
  }

  incrementQuantity() {
    this.itemQuantity++;
  }

  decrementQuantity() {
    this.itemQuantity--;
  }

  getPrice() {
    return this.itemPrice;
  }

  getQuantity() {
    return this.itemQuantity;
  }

  getItemName() {
    return this.itemName;
  }

  getItemPrice() {
    return this.itemPrice;
  }

  isOnSale() {
    return this.isOnSale;
  }
}

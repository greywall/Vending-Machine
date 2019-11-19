class VendingMachine {
  constructor(inventory) {
    this.inventory = inventory;
  }

  validItemCode(code) {
    if (this.inventory.itemInventory.hasOwnProperty(code)) {
      return "this is a real code";
    } else {
      return "Please Provide a valid Product Code";
    }
  }

  checkItemInventory(code) {
    if (this.inventory.itemInventory[code].currentQuantity > 0) {
      return this.inventory.itemInventory[code].currentQuantity;
    } else {
      return "This Item is Sold Out. ";
    }
  }

  checkIfInputEnoughMoney(code, input) {
    if (this.inventory.itemInventory[code].price <= input) {
      return "you have enough money!";
    } else {
      return "Please Insert more money to get this item.";
    }
  }

  decreaseItem(code) {
    if (this.inventory.itemInventory[code].currentQuantity > 0) {
      return this.inventory.itemInventory[code].currentQuantity - 1;
    } else {
      return "This Item is Sold Out.";
    }
  }

  dispenseItem(code, input) {
    if (this.inventory.itemInventory[code].price <= input) {
      return "Please Insert more money to get this item.";
    } else {
      return this.decreaseItem(code);
    }
  }

  printInventory() {
    console.log(this.inventory);
  }
}

module.exports = VendingMachine;

// dispenseItem() {}

//   checkItemInventory() {}

//   checkIfInputEnoughMoney() {}

//   returnChange() {}

//   refillInventory() {}
//   checkItemLevel() {}
//   increaseItemForNotFull() {}

//   resupplyChange() {}
//   checkChangeLevel() {}
//   fillChange() {}

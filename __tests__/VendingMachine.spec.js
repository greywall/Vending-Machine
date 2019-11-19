const VendingMachine = require("../lib/VendingMachine");
const inventory = require("../inventory");
const vendingMachine = new VendingMachine(inventory);

describe("Vending Machine", () => {
  describe("Check item code", () => {
    it("Print if the item code is valid!", () => {
      expect(vendingMachine.validItemCode("A9")).toBe(
        "Please Provide a valid Product Code"
      );
    });
  });

  describe("Check if Item has enough inventory", () => {
    it("Checks a sold-out item for enough inventory.", () => {
      expect(vendingMachine.checkItemInventory("A2")).toBe(
        "This Item is Sold Out. "
      );
    });
  });

  describe("Check if Item has enough inventory", () => {
    it("Print the inventory level of the product", () => {
      expect(vendingMachine.checkItemInventory("B1")).toEqual(7);
    });
  });

  describe("Check Input Money", () => {
    it("Display Message, not enough money for item.", () => {
      expect(vendingMachine.checkIfInputEnoughMoney("B2", 1)).toBe(
        "Please Insert more money to get this item."
      );
    });
  });

  describe("Check Input Money", () => {
    it("Check to see if enough money was input for item.", () => {
      expect(vendingMachine.checkIfInputEnoughMoney("B2", 3)).toBe(
        "you have enough money!"
      );
    });
  });
});

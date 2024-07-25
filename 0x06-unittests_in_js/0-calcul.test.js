const calculateNumber = require("./0-calcul");
const assert = require("assert");

describe("calculateNumber", function () {
  describe("both inputs Integers", function () {
    it("should return a sum of two intergers, 4", function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe("when One is rounded up", function () {
    it("should return sum with the rounded interger 5", function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe("the other is rounded up", function () {
    it("should return sum with the rounded interger 5", function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });

  describe("One is rounded down", function () {
    it("should return sum with the rounded floor 4", function () {
      assert.strictEqual(calculateNumber(1, 3.3), 4);
    });
  });

  describe("the other one round floor 2", function () {
    it("should return sum with the other rounded one 4", function () {
      assert.strictEqual(calculateNumber(3.3, 1), 4);
    });
  });

  describe("both are rounded", function () {
    it("should return sum 5", function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe("Two round one uup one down again", function () {
    it("should return sum 6", function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe("Two round one down one up reversed", function () {
    it("should return sum 5", function () {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
  });

  describe("Two other rounded down both", function () {
    it("should return sum of floor 3", function () {
      assert.strictEqual(calculateNumber(1.2, 2.1), 3);
    });
  });
});

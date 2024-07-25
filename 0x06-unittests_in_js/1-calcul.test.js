const assert = require("assert").strict;
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM no Round", function () {
    it("should return 5 when two inputs are 4 5", function () {
      assert.equal(calculateNumber("SUM", 1, 4), 5);
    });
  });

  describe("SUM first round up", function () {
    it("should return 6", function () {
      assert.equal(calculateNumber("SUM", 2.4, 4), 6);
    });
  });

  describe("SUM second round up ", function () {
    it("should return 6", function () {
      assert.equal(calculateNumber("SUM", 4, 2.4), 6);
    });
  });

  describe("SUM round both numbers", function () {
    it("should return 6", function () {
      assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
    });
  });

  describe("SUBTRACT no round both numbers", function () {
    it("should return 2", function () {
      assert.equal(calculateNumber("SUBTRACT", 5, 3), 2);
    });
  });

  describe("SUBTRACT with first number rounded", function () {
    it("should return -3", function () {
      assert.equal(calculateNumber("SUBTRACT", 2, 4.5), -3);
    });
  });

  describe("SUBTRACT with second number rounded", function () {
    it("should return 3", function () {
      assert.equal(calculateNumber("SUBTRACT", 4.5, 2), 3);
    });
  });

  describe("SUBTRACT with rounding both numbers", function () {
    it("should return -4", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });
  });

  describe("DIVIDE no rounding", function () {
    it("should return 2", function () {
      assert.equal(calculateNumber("DIVIDE", 8, 4), 2);
    });
  });

  describe("DIVIDE rounding first number up", function () {
    it("should return 5", function () {
      assert.equal(calculateNumber("DIVIDE", 9.5, 2), 5);
    });
  });

  describe("DIVIDE rounding second number up", function () {
    it("should return 0.2", function () {
      assert.equal(calculateNumber("DIVIDE", 2, 9.5), 0.2);
    });
  });

  describe("DIVIDE with rounding both numbers up", function () {
    it("should return 0.2", function () {
      assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });
  });

  describe("DIVIDE Error", function () {
    it("should return an Error", function () {
      assert.equal(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });
  });
});

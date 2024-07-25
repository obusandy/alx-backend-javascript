const chai = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  describe("SUM with no number rounded", function () {
    it("should return sum of 1 and 4", function () {
      chai.expect(calculateNumber("SUM", 1, 4)).to.equal(5);
    });
  });

  describe("SUM first number rounded", function () {
    it("should return 6", function () {
      chai.expect(calculateNumber("SUM", 2.4, 4)).to.equal(6);
    });
  });

  describe("SUM second number rounded ", function () {
    it("should return sum 4 and 2, 6", function () {
      chai.expect(calculateNumber("SUM", 4, 2.4)).to.equal(6);
    });
  });

  describe("SUM of both numbers round", function () {
    it("should return sum of 1 and 5,6", function () {
      chai.expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT numbers no rounding", function () {
    it("should return 5  minus 3, 2", function () {
      chai.expect(calculateNumber("SUBTRACT", 5, 3)).to.equal(2);
    });
  });

  describe("SUBTRACT first number rounded", function () {
    it("should return 2 minus 5,-3", function () {
      chai.expect(calculateNumber("SUBTRACT", 2, 4.5)).to.equal(-3);
    });
  });

  describe("SUBTRACT second number rounded", function () {
    it("should return 5-2, 3", function () {
      chai.expect(calculateNumber("SUBTRACT", 4.5, 2)).to.equal(3);
    });
  });

  describe("SUBTRACT numbers both rounded", function () {
    it("should return -4", function () {
      chai.expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    });
  });

  describe("DIVIDE with no rounding for both numbers", function () {
    it("should return 8 divide by 4, 2", function () {
      chai.expect(calculateNumber("DIVIDE", 8, 4)).to.equal(2);
    });
  });

  describe("DIVIDE with first number rounded", function () {
    it("should return 8.5 divide by 2, 5 ", function () {
      chai.expect(calculateNumber("DIVIDE", 9.5, 2)).to.equal(5);
    });
  });

  describe("DIVIDE with second number rounded", function () {
    it("should return 0.2", function () {
      chai.expect(calculateNumber("DIVIDE", 2, 9.5)).to.equal(0.2);
    });
  });

  describe("DIVIDE both numbers rounded", function () {
    it("should return 0.2", function () {
      chai.expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe("DIVIDE Error", function () {
    it("should return an Error", function () {
      chai.expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
    });
  });
});

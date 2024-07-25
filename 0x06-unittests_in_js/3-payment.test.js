const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe(" sendPaymentRequestToApi with spies", function () {
  it("should call Utils.calculateNumber, has the same arguments and log the result", () => {
    const spyUtils = sinon.spy(Utils, "calculateNumber");
    const spyConsole = sinon.spy(console, "log");

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly("The total is: 120")).to.be.true;

    // Restore the original methods
    spyUtils.restore();
    spyConsole.restore();
  });
});

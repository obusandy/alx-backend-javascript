const sinon = require("sinon");
const { expect } = require("chai");

const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi with Stubs", function () {
  it("should call Utils.calculateNumber, has the same arguments and logs the result", () => {
    const stubUtils = sinon.stub(Utils, "calculateNumber");
    stubUtils.returns(10);
    const spyConsole = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly("The total is: 10")).to.be.true;

    stubUtils.restore();
    spyConsole.restore();
  });
});

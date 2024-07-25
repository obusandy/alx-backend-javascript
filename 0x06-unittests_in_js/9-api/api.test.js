const request = require("request");
const { expect } = require("chai");

describe("API Integration Testing", () => {
  describe("GET /", () => {
    it("Code: 200 : Welcome to the payment system", (done) => {
      const options = {
        url: "http://localhost:7865",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Welcome to the payment system");
        done();
      });
    });
  });

  describe("GET /cart/12", () => {
    it("Responds with 200, payment methods messge for cart 12", (done) => {
      const options = {
        url: "http://localhost:7865/cart/12",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 12");
        done();
      });
    });
  });

  describe("GET /cart/1", () => {
    it("Responds with 200, payment methods messge for cart 1", (done) => {
      const options = {
        url: "http://localhost:7865/cart/1",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 1");
        done();
      });
    });
  });

  describe("GET /cart/123", () => {
    it("Responds with 200, payment methods messge for cart 123", (done) => {
      const options = {
        url: "http://localhost:7865/cart/123",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 123");
        done();
      });
    });
  });

  // Test suite for GET requests for missing cart ID a12
  describe("GET /cart/a12", () => {
    it("Responds with status code 404", (done) => {
      const options = {
        url: "http://localhost:7865/cart/a12",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for GET requests for missing cart ID a12b
  describe("GET /cart/a12b", () => {
    it("Responds with status code 404", (done) => {
      const options = {
        url: "http://localhost:7865/cart/a12b",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for GET requests for missing cart ID 12b
  describe("GET /cart/12b", () => {
    it("Responds with status code 404", (done) => {
      const options = {
        url: "http://localhost:7865/cart/12b",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for GET requests for missing cart ID hello
  describe("GET /cart/hello", () => {
    it("Responds with status code 404", (done) => {
      const options = {
        url: "http://localhost:7865/cart/hello",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for GET requests for missing cart ID
  describe("GET /cart/", () => {
    it("Responds with status code 404", (done) => {
      const options = {
        url: "http://localhost:7865/cart/",
        method: "GET",
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

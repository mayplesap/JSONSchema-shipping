"use strict";
const shipitApi = require("../shipItApi");
shipitApi.shipProduct = jest.fn();

const request = require("supertest");
const app = require("../app");

// const AxiosMockAdapter = require(
//   "axios-mock-adapter");

// const axios = require("axios");
// const axiosMock = new AxiosMockAdapter(axios);

// describe("POST /", function () {
//   test("valid", async function () {
//     const resp = await request(app).post("/shipments").send({
//       productId: 1000,
//       name: "Test Tester",
//       addr: "100 Test St",
//       zip: "12345-6789",
//     });
//     expect(resp.body).toEqual({ shipped: expect.any(Number) });
//   });
  
//   test("invalid", async function () {
//     const resp = await request(app).post("/shipments").send({
//       productId: "1000",
//       name: "Test Tester",
//       addr: "100 Test St",
//       zip: "12345-6789",
//     });

//     expect(resp.statusCode).toEqual(400);
//   });
// });

describe("POST /", function () {
  test("valid", async function (){
    shipitApi.shipProduct.mockReturnValue(5000);
    const resp = await request(app).post("/shipments").send({
      productId: 1000,
      name: "Test Tester",
      addr: "100 Test St",
      zip: "12345-6789",
    });

    expect(resp.body).toEqual({ shipped: 5000 });
  });

});
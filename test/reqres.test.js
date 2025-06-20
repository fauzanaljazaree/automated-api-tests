const fetch = require("node-fetch");
const { expect } = require("chai");

const BASE_URL = "https://reqres.in";
const HEADERS = {
  "Content-Type": "application/json",
  "x-api-key": "reqres-free-v1",
};

describe("REQRES API TEST with API Key", () => {
  it("GET user by ID", async () => {
    const res = await fetch(`${BASE_URL}/api/users/2`, {
      method: "GET",
      headers: HEADERS,
    });
    const data = await res.json();

    expect(res.status).to.equal(200);
    expect(data.data).to.have.property("id", 2);
  });

  it("POST create new user", async () => {
    const res = await fetch(`${BASE_URL}/api/users`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });
    const data = await res.json();

    expect(res.status).to.equal(201);
    expect(data).to.have.property("name", "morpheus");
  });

  it("PATCH update user", async () => {
    const res = await fetch(`${BASE_URL}/api/users/2`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({
        job: "zion resident",
      }),
    });
    const data = await res.json();

    expect(res.status).to.equal(200);
    expect(data).to.have.property("job", "zion resident");
  });

  it("DELETE user", async () => {
    const res = await fetch(`${BASE_URL}/api/users/2`, {
      method: "DELETE",
      headers: HEADERS,
    });

    expect(res.status).to.equal(204);
  });
});

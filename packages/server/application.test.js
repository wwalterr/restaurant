import request from "supertest";

import server from "./application";

describe("restaurant", () => {
  const opening = new Date();

  const closing = new Date(new Date(opening).setHours(opening.getHours() + 8));

  it("creates a restaurant", async () => {
    const response = await request(server)
      .post("/restaurant")
      .send({ restaurant: "restaurant", opening, closing })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("updates a restaurant", async () => {
    const response = await request(server)
      .put("/restaurant/restaurant")
      .send({ opening, closing })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("find a restaurant", async () => {
    const response = await request(server)
      .get("/restaurant/restaurant")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        restaurant: expect.any(String),
        opening: expect.any(String),
        closing: expect.any(String),
      })
    );
  });

  it("list all restaurants", async () => {
    const response = await request(server)
      .get("/restaurant")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          restaurant: expect.any(String),
          opening: expect.any(String),
          closing: expect.any(String),
        }),
      ])
    );
  });
});

describe("tables", () => {
  it("creates a table", async () => {
    const response = await request(server)
      .post("/tables")
      .send({ table: 1, seats: 8 })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("updates a table", async () => {
    const response = await request(server)
      .put("/tables/1")
      .send({ seats: 8 })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("find a table", async () => {
    const response = await request(server)
      .get("/tables/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        table: expect.any(Number),
        seats: expect.any(Number),
      })
    );
  });

  it("list all tables", async () => {
    const response = await request(server)
      .get("/tables/restaurant")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          table: expect.any(Number),
          seats: expect.any(Number),
        }),
      ])
    );
  });
});

describe("appointments", () => {
  it("creates an appointment", async () => {
    const response = await request(server)
      .post("/appointments")
      .send({
        client: "client",
        restaurant: "restaurant",
        table: 1,
        date: new Date(),
        duration: 1,
        status: "pending",
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("updates an appointment", async () => {
    const response = await request(server)
      .put("/appointments/restaurant/client")
      .send({
        table: 1,
        date: new Date(),
        duration: 1,
        status: "accepted",
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("find an appointment", async () => {
    const response = await request(server)
      .get("/appointments/restaurant/client")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        client: expect.any(String),
        restaurant: expect.any(String),
        table: expect.any(Number),
        date: expect.any(String),
        duration: expect.any(Number),
        status: expect.any(String),
      })
    );
  });
});

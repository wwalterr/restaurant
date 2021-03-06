import request from "supertest";

import server from "./application";

jest.setTimeout(10000);

describe("restaurants", () => {
  const opening = new Date();

  const closing = new Date(new Date(opening).setHours(opening.getHours() + 8));

  it("creates a restaurant", async () => {
    const response = await request(server)
      .post("/restaurants")
      .send({ restaurant: "restaurant", opening, closing })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("updates a restaurant", async () => {
    const response = await request(server)
      .put("/restaurants/restaurant")
      .send({ opening, closing })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("find a restaurant", async () => {
    const response = await request(server)
      .get("/restaurants/restaurant")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
        data: expect.objectContaining({
          restaurant: expect.any(String),
          opening: expect.any(String),
          closing: expect.any(String),
        }),
      })
    );
  });

  it("list all restaurants", async () => {
    const response = await request(server)
      .get("/restaurants")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
        data: expect.arrayContaining([
          expect.objectContaining({
            restaurant: expect.any(String),
            opening: expect.any(String),
            closing: expect.any(String),
          }),
        ]),
      })
    );
  });
});

describe("tables", () => {
  it("creates a table", async () => {
    const response = await request(server)
      .post("/tables")
      .send({ restaurant: "restaurant", table: 1, seats: 8 })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("updates a table", async () => {
    const response = await request(server)
      .put("/tables/1")
      .send({ seats: 8 })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("find a table", async () => {
    const response = await request(server)
      .get("/tables/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
        data: expect.objectContaining({
          restaurant: expect.any(String),
          table: expect.any(Number),
          seats: expect.any(Number),
        }),
      })
    );
  });

  it("list all tables", async () => {
    const response = await request(server)
      .get("/tables")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
        data: expect.arrayContaining([
          expect.objectContaining({
            restaurant: expect.any(String),
            table: expect.any(Number),
            seats: expect.any(Number),
          }),
        ]),
      })
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
        date: new Date(new Date().setHours(new Date().getHours() + 8)),
        duration: 1,
        status: "pending",
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("updates an appointment", async () => {
    const response = await request(server)
      .put("/appointments/restaurant/client")
      .send({
        table: 1,
        date: new Date(new Date().setHours(new Date().getHours() + 8)),
        duration: 1,
        status: "accepted",
      })
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
      })
    );
  });

  it("find an appointment", async () => {
    const response = await request(server)
      .get("/appointments/restaurant/client")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: expect.any(Boolean),
        data: expect.objectContaining({
          client: expect.any(String),
          restaurant: expect.any(String),
          table: expect.any(Number),
          date: expect.any(String),
          duration: expect.any(Number),
          status: expect.any(String),
        }),
      })
    );
  });
});

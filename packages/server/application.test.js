import request from "supertest";

import server from "./application";

describe("restaurant", () => {
  const opening = new Date();

  const closing = new Date(new Date(opening).setHours(opening.getHours() + 8));

  it("defines open hours", async () => {
    const response = await request(server)
      .post("/restaurant")
      .send({ opening, closing })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  const newOpening = new Date();

  const newClosing = new Date(
    new Date(opening).setHours(opening.getHours() + 8)
  );

  it("updates open hours", async () => {
    const response = await request(server)
      .put("/restaurant")
      .send({ opening: newOpening, closing: newClosing })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("return open hours", async () => {
    const response = await request(server)
      .get("/restaurant")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        opening: expect.any(String),
        closing: expect.any(String),
      })
    );
  });
});

describe("tables", () => {
  it("creates a table", async () => {
    const response = await request(server)
      .post("/tables")
      .send({ identifier: 1, seats: 4 })
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
        identifier: expect.any(Number),
        seats: expect.any(Number),
      })
    );
  });

  it("return all tables", async () => {
    const response = await request(server)
      .get("/tables")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          identifier: expect.any(Number),
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
      .send({ table: 1, date: new Date(), duration: 1, status: "pending" })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("updates an appointment", async () => {
    const response = await request(server)
      .put("/appointments/1")
      .send({ table: 1, date: new Date(), duration: 1, status: "accepted" })
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it("finds an appointment", async () => {
    const response = await request(server)
      .get("/appointments/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        table: expect.any(Number),
        date: expect.any(String),
        duration: expect.any(Number),
        status: expect.any(String),
      })
    );
  });

  it("return all appointments", async () => {
    const response = await request(server)
      .get("/appointments")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        table: expect.any(Number),
        date: expect.any(String),
        duration: expect.any(Number),
        status: expect.any(String),
      })
    );
  });
});

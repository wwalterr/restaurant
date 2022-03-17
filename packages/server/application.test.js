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

    expect(new Date(response.body.opening).toLocaleTimeString()).toEqual(
      newOpening.toLocaleTimeString()
    );

    expect(new Date(response.body.closing).toLocaleTimeString()).toEqual(
      newClosing.toLocaleTimeString()
    );
  });
});

describe("tables", () => {
  it("creates a table", async () => {});

  it("updates a table", async () => {});

  it("find a table", async () => {});

  it("return all tables", async () => {});
});

describe("appointments", () => {
  it("creates an appointment", async () => {});

  it("updates an appointment", async () => {});

  it("finds an appointment", async () => {});

  it("return all appointments", async () => {});
});

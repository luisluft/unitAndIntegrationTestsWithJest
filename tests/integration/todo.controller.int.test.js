const request = require("supertest");
const app = require("../../app");
const newToDo = require("../mock-data/new-todo.json");

const endpointUrl = "/todos/";

describe(endpointUrl, () => {
  it("POST /todos/", async () => {
    const response = await request(app).post(endpointUrl).send(newToDo);

    expect(response.statusCode).toBe(201);
    expect(response.title).toBe(newToDo.title);
    expect(response.body.done).toBe(newToDo.done);
  });
});

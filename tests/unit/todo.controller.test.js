const todoController = require("../../controllers/todo.controller");
const todoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newToDo = require("../mock-data/new-todo.json");
let req, res, next;

todoModel.create = jest.fn();

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("todoController.createTodo", () => {
  it("should have a createTodo method", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call todoModel.create", () => {
    req.body = newToDo;

    todoController.createTodo(req, res, next);
    expect(todoModel.create).toBeCalledWith(newToDo);
  });

  it("should return 201 response code", () => {
    req.body = newToDo;
    todoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBe(true);
  });
});

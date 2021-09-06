const todoController = require("../../controllers/todo.controller");
const todoModel = require("../../models/todo.model");
const httpMocks = require("node-mocks-http");
const newToDo = require("../mock-data/new-todo.json");

todoModel.create = jest.fn();

describe("todoController.createTodo", () => {
  it("should have a createTodo method", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call todoModel.create", () => {
    let req, res, next;
    req = httpMocks.createRequest();
    req.body = newToDo;
    res = httpMocks.createResponse();
    next = null;

    todoController.createTodo(req, res, next);
    expect(todoModel.create).toBeCalledWith(newToDo);
  });
});

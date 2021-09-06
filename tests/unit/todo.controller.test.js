const todoController = require("../../controllers/todo.controller");
const todoModel = require("../../models/todo.model");

todoModel.create = jest.fn();

describe("todoController.createTodo", () => {
  it("should have a createTodo method", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });

  it("should call todoModel.create", () => {
    todoController.createTodo();
    expect(todoModel.create).toBeCalled();
  });
});

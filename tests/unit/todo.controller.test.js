const todoController = require("../../controllers/todo.controller");

describe("todoController.createTodo", () => {
  it("should have a createTodo method", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
});

import "reflect-metadata";
import ApiManager from "../src/apiManager";
import Todo from "../src/types";
import { MockTodoClient, TestClientContainer } from "./mockContainer";

const apiManager: ApiManager = TestClientContainer.resolve<ApiManager>(ApiManager);

describe('Test ApiManager', () => {
    it('fetches mocked data from collection', () => {
        apiManager.fetchData().then(response => {
            // Unwrapping from the Todo[] | Error union type
            const todos = <Todo[]>response;
            expect(todos.length).toEqual(3);
        });
    })

    it('fetches mocked data by ID', () => {
        apiManager.fetchTodoById(123).then(response => {
            // Unwrapping from the Todo | Error union type
            const todo = <Todo>response;
            expect(todo.id).toEqual(123);
        });
    })

    it('injects the MockTodoClient', () => {
        expect(apiManager.todoClient).toMatchObject(new MockTodoClient);
    })
});
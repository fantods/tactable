import "reflect-metadata";
import ApiManager from "../src/apiManager";
import { TodoClient } from "../src/client";
import TodoClientContainer from "../src/container";
import Todo from "../src/types";
import { MockTodoClient, TestClientContainer } from "./mockContainer";

const mockedApiManager: ApiManager = TestClientContainer.resolve<ApiManager>(ApiManager);
const apiManager: ApiManager = TodoClientContainer.resolve<ApiManager>(ApiManager);

describe('Test ApiManager', () => {
    it('fetches mocked data from collection', () => {
        mockedApiManager.fetchData().then(response => {
            // Unwrapping from the Todo[] | Error union type
            const todos = <Todo[]>response;
            expect(todos.length).toEqual(3);

            let ids = todos.map(({ id }) => id);
            expect(ids).toEqual([1, 2, 3]);
        });
    })

    it('fetches mocked data by ID', () => {
        const todoId = 123;

        mockedApiManager.fetchTodoById(todoId).then(response => {
            // Unwrapping from the Todo | Error union type
            const todo = <Todo>response;
            expect(todo.id).toEqual(todoId);
            expect(todo.userId).toEqual(1);
            expect(todo.title).toEqual('Get Groceries');
        });
    })

    it('injects the MockTodoClient', () => {
        expect(mockedApiManager.todoClient).toMatchObject(new MockTodoClient);
    })

    it('injects TodoClient', () => {
        expect(apiManager.todoClient).toMatchObject(new TodoClient);
    })
});
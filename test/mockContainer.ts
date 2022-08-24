import { Container, injectable } from 'inversify';
import { TodoClient } from '../src/client';
import ITodoClient from '../src/interfaces';
import Todo from '../src/types';

@injectable()
class MockTodoClient implements ITodoClient {
    public fetchData(): Promise<Todo[] | Error> {
        return new Promise((resolve) => {
            resolve(
                <Todo[]>[
                    { userId: 1, id: 1, title: "Get Groceries", completed: false },
                    { userId: 2, id: 2, title: "Walk Dog", completed: true },
                    { userId: 3, id: 3, title: "Clean kitchen", completed: false },
                ]
            );
        });
    }

    public async fetchTodoById(id: number): Promise<Todo | Error> {
        return new Promise((resolve) => {
            resolve(
                <Todo>{ userId: 1, id: id, title: "Get Groceries", completed: false },
            );
        });
    }
}

var TestClientContainer = new Container();
TestClientContainer.bind<TodoClient>(TodoClient).to(MockTodoClient);

export { TestClientContainer, MockTodoClient };
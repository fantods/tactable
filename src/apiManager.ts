import { TodoClient } from './client';
import ITodoClient from './interfaces';
import Todo from './types';
import { inject, injectable } from 'inversify';

@injectable()
class ApiManager implements ITodoClient {
    todoClient: TodoClient;

    constructor(
        @inject(TodoClient) todoClient: TodoClient,
    ) {
        this.todoClient = todoClient;
    }

    public async fetchData(): Promise<Todo[] | Error> {
        return await this.todoClient.fetchData();
    }

    public async fetchTodoById(id: number): Promise<Todo | Error> {
        return await this.todoClient.fetchTodoById(id);
    }

}


export default ApiManager;
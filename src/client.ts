import axios from "axios";
import { injectable } from "inversify";
import ITodoClient from "./interfaces";
import Todo from "./types";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

@injectable()
export class TodoClient implements ITodoClient {

    public async fetchData(): Promise<Todo[] | Error> {
        try {
            const response = await instance.get<Todo[]>('todos');
            return response.data;
        } catch (error) {
            return new Error(error);
        }
    }

    public async fetchTodoById(id: number): Promise<Todo | Error> {
        try {
            const response = await instance.get<Todo>(`todos/${id}`);
            return response.data;
        } catch (error) {
            return new Error(error);
        }
    }
}

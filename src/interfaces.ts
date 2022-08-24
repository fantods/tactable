import Todo from "./types";

interface ITodoClient {
    fetchData(): Promise<Todo[] | Error>;

    fetchTodoById(id: number): Promise<Todo | Error>;
}

export default ITodoClient;
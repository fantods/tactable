import "reflect-metadata";
import ApiManager from "./apiManager";
import TodoClientContainer from './container';

const apiManager: ApiManager = TodoClientContainer.resolve<ApiManager>(ApiManager);

apiManager.fetchData()
    .then(todos => console.log(todos[0]));

apiManager.fetchTodoById(55)
    .then(todo => console.log(todo));

import { Container } from "inversify";
import { TodoClient } from './client';


var TodoClientContainer = new Container();
TodoClientContainer.bind<TodoClient>(TodoClient).toSelf();

export default TodoClientContainer;
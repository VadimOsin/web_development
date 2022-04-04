import {createContext} from 'react'
import {TTodo} from "../types";

type TCreateContext={
  todos: TTodo[]
  handleAction: (id:number, status:'COMPLETED'|'REMOVED') => void,
  filteredTodos: (status: 'REMOVED'|'IN_PROGRESS'|'COMPLETED') => TTodo[]
  createTodo: (newTodo:string)=> void
}

const TodosContext = createContext({} as TCreateContext)

export default TodosContext
import {useState, FC} from 'react'
import TodosContext from './context'
import {TTodo} from "../types";

const TodosState: FC = ({children}) => {
const [todos, setTodos]=useState<TTodo[]>([])
  const handleAction=(id:number,status:'COMPLETED'|'REMOVED')=>{
    const result= todos.map((todo:TTodo)=>{
      if(todo.id===id){
        return {...todo,status}
      }
      return todo
    })
    setTodos(result)
  }

  const filteredTodos=(status:'REMOVED'|'IN_PROGRESS'|'COMPLETED')=>todos.filter((todo:TTodo)=>todo.status===status)

  const createTodo=(newTodo:string)=>{
  const createdTodo:TTodo={
      id:Date.now(),
      status: 'IN_PROGRESS',
      todo: newTodo
  }
  setTodos([...todos,createdTodo])
  }

  return (
    <TodosContext.Provider value={{todos,handleAction,filteredTodos,createTodo}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosState
import S from './RemovedTodos.module.css'
import {useTodos} from "../../hook/useTodos";

const RemovedTodos=()=>{
  const {filteredTodos}=useTodos()
  return(
<ul className={S.list}>
    {
      filteredTodos('REMOVED').map(({id, todo}) => (
        <li className={S.item} key={id}>
          <p className={S.text}>{todo}</p>
        </li>
      ))
    }
  </ul>
  )
}

export default RemovedTodos
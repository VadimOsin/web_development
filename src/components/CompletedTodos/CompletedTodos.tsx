import S from './CompletedTodos.module.css'
import CheckImg from '../../assets/emojione-v1_left-check-mark.png'
import {useTodos} from "../../hook/useTodos";

const CompletedTodos = () => {
    const {filteredTodos} = useTodos()
    return <ul className={S.list}>
        {
            filteredTodos('COMPLETED').map(({id, todo}) => (
                <li className={S.item} key={id}>
                    <div className={S.emptyCircle}>
                        <img className={S.img} src={CheckImg} alt={'check'}/></div>
                    <p className={S.text}>{todo}</p>
                </li>
            ))
        }
    </ul>
}

export default CompletedTodos
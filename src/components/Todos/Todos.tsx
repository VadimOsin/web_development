import S from './Todos.module.css'
import RemoveImg from '../../assets/remove.png'
import {useState} from "react";
import Modal from "../Modal/Modal";
import {useTodos} from "../../hook/useTodos";

const Todos = () => {
    const [isModal, setModal] = useState<boolean>(false)
    const {handleAction, filteredTodos} = useTodos()

    return (
        <>
            <ul className={S.list}>
                {
                    filteredTodos('IN_PROGRESS').map(({id, todo}) => (
                        <li className={S.item} key={id}>
                            <div className={S.emptyCircle} onClick={() => handleAction(id, 'COMPLETED')}/>
                            <p className={S.text}>{todo}</p>
                            <img onClick={() => handleAction(id, 'REMOVED')} className={S.removeImg} src={RemoveImg}
                                 alt='remove img'/>
                        </li>
                    ))
                }
            </ul>
            <div className={S.container} onClick={() => setModal(true)}>
                <p className={S.imgAdd}>
                    <p className={S.addText}>+
                    </p></p>
            </div>
            {isModal && <Modal setModal={setModal}/>}
        </>
    )
}
export default Todos
import S from './Modal.module.css'
import React, {ChangeEvent, FC, useState} from "react";
import {useTodos} from "../../hook/useTodos";

type TProps={
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:FC<TProps>=({setModal})=> {
  const [newTodo,setNewTodo]=useState<string>('')
  const handleChange=(({target:{value}}:ChangeEvent<HTMLInputElement>)=>setNewTodo(value))
  const {createTodo}=useTodos()
  const handleCreate=()=>{
    newTodo&&createTodo(newTodo)
    setModal(false)
  }
 return(
   <>
    <article className={S.modal}>
      <h1 className={S.label}>Create To-Do</h1>
      <input value={newTodo} onChange={handleChange} className={S.input}/>
      <div className={S.buttonGroup}>
        <button onClick={() => setModal(false)} className={S.btnCancel}>Cancel</button>
        <button onClick={handleCreate} className={S.btnCreate}>Create</button>
      </div>
    </article>
    <div className={S.appOverlay}/>
  </>
 )
}

export default Modal
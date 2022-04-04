import S from "./Navigation.module.css";
import {TripleDotsIcon} from "../icons/TripleDotsIcon";
import {SyntheticEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import {useTodos} from "../../hook/useTodos";

const Navigation=()=> {
  const [isActive, setActive]=useState<boolean>(false)
  const {filteredTodos}=useTodos()
  const isCompleted=filteredTodos("COMPLETED").length
  const isRemoved=filteredTodos('REMOVED').length

  const handleNavigate=(disabled:boolean)=>{
   return (event:SyntheticEvent)=>{
     !disabled&&event.preventDefault()
     setActive(false)
   }
  }
return(
  <div className={S.container}>To do list
  <div className={isActive?S.iconWrapperActive:S.iconWrapper}>
    <TripleDotsIcon style={{color: `${isActive ? '#000' : '#C4C4C4'}`}} onClick={()=>setActive(!isActive)}/>
    {
      isActive&&(
        <div className={S.statusContainer}>
          <NavLink
            onClick={handleNavigate(!!isCompleted)}
            to='/completed'
            className={!!isCompleted ? S.text : S.disabled}>
            Completed
          </NavLink>
          <NavLink
            to='/'
            onClick={()=>setActive(false)}
            className={S.text}>
            In Progress
          </NavLink>
          <NavLink style={{border: `none`}}
            onClick={handleNavigate(!!isRemoved)}
            to='/removed'
            className={!!isRemoved ? S.text : S.disabled}
           >
            Removed
          </NavLink>
        </div>
      )
    }
  </div>
  </div>
)}

export default Navigation
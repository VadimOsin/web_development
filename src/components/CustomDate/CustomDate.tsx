import S from './CustomDate.module.css'
import {useTodos} from "../../hook/useTodos";

const CustomDate = () => {
    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ['Sunday', 'Monday', 'Tuesday ', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div className={S.container}>
            <p className={S.date}>{days[day]}, {monthName[month]} {day}, {year}</p>
            <div className={S.line}> </div>
            <p className={S.task}>{useTodos().todos.length} tasks</p>
        </div>

    )
}
export default CustomDate
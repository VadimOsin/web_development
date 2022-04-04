import {Route, Routes as RouterRoutes } from 'react-router-dom'
import Todos from "../components/Todos/Todos"
import Navigation from "../components/Navigation/Navigation"
import RemovedTodos from "../components/RemovedTodos/RemovedTodos"
import CompletedTodos from "../components/CompletedTodos/CompletedTodos"
import CustomDate from "../components/CustomDate/CustomDate"
import './App.css'

const App=()=>(
    <div className='main'>
      <div className='card'>
        <div className='header'>
          <CustomDate/>
          <Navigation/>
        </div>
        <RouterRoutes>
          <Route path='/' element={<Todos/>}/>
          <Route path='removed' element={<RemovedTodos/>} />
          <Route path='completed' element={<CompletedTodos/>}/>
        </RouterRoutes>
      </div>
    </div>
)


export default App
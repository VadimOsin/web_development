import ReactDOM from "react-dom";
import App from "./App/App";
import { BrowserRouter } from 'react-router-dom'
import TodosState from "./context/Todos-state";
ReactDOM.render(
  <BrowserRouter>
    <TodosState>
      <App />
    </TodosState>
  </BrowserRouter>,
  document.getElementById('root')
);

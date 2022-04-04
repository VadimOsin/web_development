import {useContext} from "react";

import TodosContext from '../context/context'

export const useTodos = () => useContext(TodosContext)
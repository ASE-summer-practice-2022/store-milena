import React from 'react'
import CRUD from '../crud'

export type TodoContextType = {
    newCRUD: CRUD;
};

const Context = React.createContext<TodoContextType | null>(null)

export default Context
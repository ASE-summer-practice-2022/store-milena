import React from 'react'
import CRUD from '../crud'

export type CardStoreContextType = {
    newCRUD: CRUD;
};

const Context = React.createContext<CardStoreContextType | null>(null)

export default Context
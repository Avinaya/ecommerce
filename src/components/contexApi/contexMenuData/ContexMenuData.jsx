import React from 'react'
import { useState } from 'react';

const MenuContex = React.createContext();


function ContexMenuDataProvider(props) {

    const[category,setCategory] = useState('')
    return (
        <MenuContex.Provider
        
        value={{category,setCategory}}
        
        >
        {props.children}
        </MenuContex.Provider>
    )
}

const MenuConsumer = MenuContex.Consumer;



export {ContexMenuDataProvider, MenuConsumer };
export default MenuContex

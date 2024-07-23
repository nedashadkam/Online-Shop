import React, { useState } from "react";

export const ShoppingBoxContext = React.createContext();

const ShoppingBoxContextProvider = (props) => {
    const [shoppingBoxValue, setShoppingBoxValue] = useState([]);
    const [itemNumber, setItemNumber] = useState(shoppingBoxValue.length)

    return (
        <ShoppingBoxContext.Provider value={{ shoppingBoxValue, setShoppingBoxValue, itemNumber, setItemNumber }}>
            {props.children}
        </ShoppingBoxContext.Provider>
    )
}

export default ShoppingBoxContextProvider;
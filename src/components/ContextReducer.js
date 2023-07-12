import React, { createContext , useContext , useReducer } from 'react'

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size}]

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;

        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr

        case "DROP":
            return []
        
        default:
            console.log("Error in reducer")
        
           
    }
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, []);
    return (
            <cartDispatchContext.Provider value={dispatch}>
                <cartStateContext.Provider value={state}>
                    {children}
                </cartStateContext.Provider>
            </cartDispatchContext.Provider>

    )
}
export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);

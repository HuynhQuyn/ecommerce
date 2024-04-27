import React, {createContext, useState} from 'react'
import all_product from "../Components/Assets/all_product"
import { Shop } from '../Pages/Shop/Shop';

export const ShopContext = createContext(null);

const getDefailtCart = () => {
    const arr = {};
    for(let index=0 ; index<all_product.length ; index++) {
        arr[index] = 0;
       
    }
    return arr;
}

function ShopContextProvider(props) {
    const [cartItems, setCartItems] = useState(getDefailtCart())
    const getTotalCartItems = () => {
        let sum = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0) {
                sum += cartItems[item]
            }
        }
        return sum
    }

    const getTotalCartAmount = () => {
        let result = 0;
        for(let item in cartItems) {
            if(cartItems[item] >0) {
                let a = all_product.find((product) => product.id === Number(item))
                result += a.new_price*cartItems[item]
            }
        }

        return result
    }

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev,[id]:prev[id]+1}))
    }    

    const removeFromCart = (id) => {
        setCartItems((prev => ({...prev , [id]:prev[id] - 1})))
    }

    const deleteFromCart = (id) => {
        setCartItems(prev => ({...prev,[id]: 0}))
    }
    const contextValue = {all_product,getTotalCartItems, addToCart ,cartItems, removeFromCart,deleteFromCart,getTotalCartAmount};

    return ( 
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
     );
}

export default ShopContextProvider;
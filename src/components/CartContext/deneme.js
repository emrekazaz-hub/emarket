/*
import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = () => {
        setCartItems((prevCartItems)=>{
            const updatedCartItems = {...prevCartItems};
            if(updatedCartItems.hasOwnProperty(product.id)){
                updatedCartItems[product.id].quantity += 1;
            }
            else{
                updatedCartItems[product.id] = { product : product, quantity : 1};
            }
            return updatedCartItems;
        });
    };


    const removeFromCart = (productId) => {
        setCartItems((prevCartItems)=> {
            const updatedCartItems = {...prevCartItems};
            delete updatedCartItems[productId];
            return updatedCartItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };


    const getTotalPrice = () =>{
        let totalPrice;
        Object.values.
    }
};
*/
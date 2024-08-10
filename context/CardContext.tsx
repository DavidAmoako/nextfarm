import { createContext, useState } from "react";

export const cartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState<{ id: any; }[]>([]);

    const addToCart = (item) => {
        const itemExist = carts.findIndex((cart) => cart.id === item.id);
        if (itemExist === -1) {
            setCarts([...carts, item]);
        }
    };

    const value = {
        carts,
        addToCart,
    };
    return (<cartContext.Provider value={value}>{children}</cartContext.Provider>)
}
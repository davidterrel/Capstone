import { createContext, useEffect, useState } from "react";
import { fetchAllProducts } from "../fetchRequests";

export const ProductContext = createContext(null);

export default function ProductContextProvider(props) {
    const [PRODUCTS, setPRODUCTS] = useState([])
    console.log(PRODUCTS)

    const contextValue = {
        PRODUCTS, setPRODUCTS
    };
    return (
        <>

            <ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>
        </>
    )
}
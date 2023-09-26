import { useState, useEffect, useContext } from "react";
import ShopProduct from "./ShopProduct";
import "./shop.css";
import { fetchAllProducts } from "./fetchRequests";
import { ProductContext } from "./context/ProductContext";


export default function Shop() {
    const { setPRODUCTS, PRODUCTS } = useContext(ProductContext)
    console.log(setPRODUCTS)
    console.log(PRODUCTS)
    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await fetchAllProducts()
                setPRODUCTS(response);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAPI()
    }, [])
    return (
        <>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Davids Shop</h1>
                </div>

                <div className="products">
                    {PRODUCTS.map((product) => (
                        <ShopProduct key={product.id} data={product} />
                    ))}
                </div>
            </div>



        </>
    )
}
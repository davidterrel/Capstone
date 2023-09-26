import React from "react";
import { PRODUCTS } from "./products"
import Product from './Product'
import "./shop.css";

export default function Shop() {
    return (
        <>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Davids Shop</h1>
                </div>

                <div className="products">
                    {PRODUCTS.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>



        </>
    )
}
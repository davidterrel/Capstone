import React, { useContext } from "react";
import { ShopContext } from "./assets/shop-context";

export default function Product(props) {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <>
            <div className="product">
                <img src={productImage} />
                <div className="description">
                    <p>
                        <b>{productName} </b>
                    </p>
                    <p>{price}</p>
                </div>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart { }</button>
            </div>
        </>
    )
}
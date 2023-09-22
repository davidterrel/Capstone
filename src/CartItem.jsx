import React from "react";
import { ShopContext } from "./assets/shop-context";


export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);
    console.log(id)
    return (
        <>
            <div className="cartItem">
                <img src={productImage} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p> Price: ${price}</p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <input
                            value={cartItems[id]}
                            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                        />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </div>
            </div>
        </>
    );
};
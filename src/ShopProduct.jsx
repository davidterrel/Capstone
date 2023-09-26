import { ShopContext } from "./context/ShopContext";
import { useContext } from "react";

export default function ShopProduct(props) {
    const { id, title, price, image, desciption, category } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <>
            <div className="product">
                <img src={image} />
                <div className="description">
                    <p>
                        <b>{title} </b>
                    </p>
                    <p>{price}</p>
                    <p>{category}</p>

                </div>
                <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
            </div>
        </>
    )
}
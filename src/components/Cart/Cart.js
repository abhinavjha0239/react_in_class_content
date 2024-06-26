// Cart.js

import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    const cartItems = useSelector((state) => state.items);

    return (
        <div>
            <h2>Cart</h2>
            {Object.keys(cartItems).map((item) => (
                <div key={item.id}>
                    <span>{cartItems[item].id}</span>
                    <span>{cartItems[item].title}</span>
                    <span>{cartItems[item].price}</span>
                </div>
            ))}
        </div>
    );
}

export default Cart;

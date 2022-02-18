import React from "react";
import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total : Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            cart={cart}
            setCart={setCart}
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

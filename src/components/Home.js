import React, { useState } from "react";
import faker from "faker";
import "./styles.css";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [cart, setCart] = useState([]);
  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "../nav/Navbar";
import Product_card from "../product-card/Product_card";

function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setProducts(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <ul>
        {products && products.length > 0 ? (
          products.map((prod, index) => {
            return (
              <li className="product_list" key={index}>
                <Product_card data={prod} />
              </li>
            );
          })
        ) : (
          <p>Loading Products ...</p>
        )}
      </ul>
    </div>
  );
}

export default Home;

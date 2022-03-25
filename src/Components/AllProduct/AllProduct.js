import React, { useEffect, useState } from "react";
import Product from "../Products/Product";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="container">
      <h1 className="text-primary mb-5">ONLINE JAPANESE FOODS</h1>
      <div className="row">
        <div className="col-md-9">
          <div className="row g-4">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
        <div className="col-md-3">hi</div>
      </div>
    </div>
  );
};

export default AllProduct;

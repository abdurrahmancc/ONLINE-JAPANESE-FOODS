import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import Selected from "../Selected/Selected";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //   console.log(product);
  const selectedItems = (props) => {
    // const search = product.find((item) => item == props);
    // console.log(search);
    if (props != product.find((item) => item == props)) {
      const newproduct = [...product, props];
      setproduct(newproduct);
      //   console.log(newproduct);
    } else {
      alert("all ready added");
    }
  };
  return (
    <div className="">
      <h1 className="text-primary mb-5">ONLINE JAPANESE FOODS</h1>
      <div className="row">
        <div className="col-md-9 col-sm-10">
          <div className="container">
            <div className="row g-4">
              {products.map((product) => (
                <Product key={product.id} selectedItems={selectedItems} product={product}></Product>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-2">
          <div
            style={{ background: "#DCDCDC", height: "100vh", position: "sticky", top: "0px" }}
            className=" pt-5"
          >
            <h4 className="text-center">Selected Items</h4>
            <div>
              {product.map((item) => (
                <Selected key={item.id} product={item}></Selected>
              ))}
            </div>
            <div className="text-center mx-4 mt-4">
              <button className="btn btn-info p-1 me-2">choose 1 for me</button>
              <button className="btn btn-info p-1">choose again</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

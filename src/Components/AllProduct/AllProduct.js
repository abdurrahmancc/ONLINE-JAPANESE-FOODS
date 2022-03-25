import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import Selected from "../Selected/Selected";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setproduct] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(product);

  //   selectedItems
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

  //   random Number create
  const randomNumber = () => {
    const number = Math.floor(Math.random() * 12);
    setRandomNumbers(number);
  };
  console.log(randomNumbers);
  return (
    <div className="container">
      <h1 className="text-primary mb-5">ONLINE JAPANESE FOODS</h1>
      <div className="row">
        <div className="col-md-8 col-sm-12 order-last order-md-first order-lg-first">
          <div className="">
            <div className="row g-4">
              {products.map((product) => (
                <Product key={product.id} selectedItems={selectedItems} product={product}></Product>
              ))}
            </div>
          </div>
        </div>

        {/* -----------------------------
              selected section
        ------------------------------ */}
        <div className="col-md-4 col-sm-12 order-first order-md-last order-lg-last">
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
              <button onClick={() => randomNumber()} className="btn btn-info p-1 me-2">
                choose 1 for me
              </button>
              <button className="btn btn-info  mt-md-2 mt-lg-0 p-1">choose again</button>
              <div>
                <div className="text-start mx-4 p-3 d-flex justify-content-between">
                  <div>
                    <img
                      className="rounded-circle me-2 "
                      style={{ width: "20px" }}
                      src={product.img}
                      alt=""
                    />
                    <span>{}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

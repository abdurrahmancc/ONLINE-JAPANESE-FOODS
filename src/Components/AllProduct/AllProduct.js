import { counter } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import Selected from "../Selected/Selected";
import "./AllProduct.css";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setproduct] = useState([]);
  const [randomNumbers, setRandomNumbers] = useState(0);
  const [disply, setDisplay] = useState("");
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(product);
  console.log(disply);
  //   selectedItems
  const selectedItems = (props) => {
    // const search = product.find((item) => item == props);
    // console.log(search);
    if (product.length <= 3) {
      if (props != product.find((item) => item == props)) {
        const newproduct = [...product, props];
        setproduct(newproduct);
        //   console.log(newproduct);
      } else {
        alert("all ready added");
      }
    } else {
      alert("");
    }
  };

  //   random Number create
  const randomNumber = () => {
    if (product.length >= 1) {
      const number = product[Math.floor(Math.random() * product.length)];
      setRandomNumbers(number);
    } else {
      alert("You have no selected items");
    }
  };
  console.log(product.length);

  // choose again section
  const chooseAgain = () => {
    const empty = [];
    setproduct(empty);
    setRandomNumbers(empty);
  };
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
        <div className="col-md-4 col-sm-12  order-first order-md-last order-lg-last">
          <div
            style={{ background: "#DCDCDC", position: "sticky", top: "0px" }}
            className="rounded rounded-3 pt-2"
          >
            <h4 className="text-center">Selected Items</h4>
            <hr />
            <div>
              {product.map((item) => (
                <Selected key={item.id} product={item}></Selected>
              ))}
            </div>
            <hr />
            <div className="text-center mx-4 mt-2">
              <button onClick={() => randomNumber()} className="btn btn-info p-1 me-2">
                choose 1 for me
              </button>
              <button onClick={chooseAgain} className="btn btn-info  mt-md-2 mt-lg-0 p-1">
                choose again
              </button>
              <div>
                <div className="text-start mx-4 p-3 d-flex justify-content-between ">
                  <div className="card  shadow-sm ">
                    <img src={randomNumbers.img} alt="" />
                    <h6 className=" text-start pt-3 ">{randomNumbers.name}</h6>
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

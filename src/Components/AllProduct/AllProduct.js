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
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  /* ----------------------
     select item remove
  ---------------------- */
  const selectItemRemove = (props) => {
    const newItems = product.filter((item) => item.id !== props);
    setproduct(newItems);
  };

  //   selectedItems
  const selectedItems = (props) => {
    if (product.length <= 3) {
      if (props !== product.find((item) => item === props)) {
        const newproduct = [...product, props];
        setproduct(newproduct);
      } else {
        alert("all ready added");
      }
    } else {
      alert("your 4 itmes added");
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

  /* -----------------------------
     choose again section
  --------------------------- */
  const chooseAgain = () => {
    const empty = [];
    setproduct(empty);
    setRandomNumbers(empty);
  };
  return (
    <div className="container">
      <h1 className=" title-color text-primary mb-5">ONLINE JAPANESE FOODS</h1>
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
        <div className="col-md-4 col-sm-12 mb-5 mb-lg-0 order-first order-md-last order-lg-last">
          <div className="rounded rounded-3 pt-4 selected-section">
            <h4 className="text-center">Selected Items</h4>
            <hr />
            <div>
              {product.map((item) => (
                <Selected
                  key={item.id}
                  selectItemRemove={selectItemRemove}
                  product={item}
                ></Selected>
              ))}
            </div>
            <hr />

            {/* ----------------------------
                        button section
                ---------------------------- */}
            <div className="text-center mx-4 mt-2">
              <button onClick={() => randomNumber()} className="btn bg-color text-white p-1 me-2">
                choose 1 for me
              </button>
              <button
                onClick={chooseAgain}
                className="btn bg-color text-white  mt-md-2 mt-lg-0 p-1"
              >
                choose again
              </button>

              {/* ----------------------------
                        choose section
                ---------------------------- */}
              <div>
                <div className="text-start mx-4 p-3 d-flex justify-content-between ">
                  <div className="card  shadow-sm ">
                    <h6 className=" text-center pt-3 ">{randomNumbers.name}</h6>
                    <img src={randomNumbers.img} alt="" />
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

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product, selectedItems }) => {
  const { name, img, price, id } = product;
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card shadow-sm p-2">
        <img src={img} alt="" />
        <h6 className="text-start pt-3">{name}</h6>
        <h6 className="text-start">price: {price}</h6>
        <div className="text-end">
          <button onClick={() => selectedItems(product)} className="btn btn-primary ">
            Add to cart
            <FontAwesomeIcon className="ms-2 fa-sm" icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

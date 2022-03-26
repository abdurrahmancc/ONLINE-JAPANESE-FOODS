import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product, selectedItems, selectItemRemove }) => {
  const { name, img, price, id } = product;
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card shadow-sm p-2">
        <img src={img} alt="" />
        <h6 className="text-start pt-3">{name}</h6>
        <h4 className="text-start fw-bold ">$ {price}</h4>
        <div className="">
          <button onClick={() => selectedItems(product)} className="btn w-100 btn-primary ">
            Add to cart
            <FontAwesomeIcon className="ms-2 fa-sm" icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

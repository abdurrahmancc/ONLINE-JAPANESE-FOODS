import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Selected = ({ product, selectItemRemove }) => {
  const { img, name } = product;
  //   console.log(product);
  return (
    <div>
      <div className="text-start mx-4 p-3 d-flex justify-content-between">
        <div>
          <img className="rounded-circle me-2 " style={{ width: "20px" }} src={img} alt="" />
          <span>{name}</span>
        </div>
        <div>
          <button
            onClick={() => selectItemRemove(product.id)}
            className=" rounded-circle border-0 "
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selected;

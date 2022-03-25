import { faDeleteLeft, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Selected = ({ product }) => {
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
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Selected;

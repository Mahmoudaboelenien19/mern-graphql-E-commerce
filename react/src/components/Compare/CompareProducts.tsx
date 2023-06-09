import React, { useState } from "react";
import Animation from "../widgets/Animation";
import SeletedProduct from "./SeletedProduct";

const CompareProducts = () => {
  const [firstproduct, setFirstProduct] = useState("");
  const [secondproduct, setSecondProduct] = useState("");
  return (
    <Animation addIntialX={false}>
      <div className="select-compare">
        <SeletedProduct
          order="first"
          product={firstproduct}
          setProduct={setFirstProduct}
        />
        <SeletedProduct
          order="second"
          product={secondproduct}
          setProduct={setSecondProduct}
        />
      </div>
    </Animation>
  );
};

export default CompareProducts;

import React, { useContext, useEffect } from "react";
import ProductList from "../Product/Products/AllProducts/ProductList";
import { viewContext } from "../../context/gridView";
import DashMain from "./DashMain";
import { Outlet } from "react-router-dom";

const DashProducts = () => {
  const { setGridView } = useContext(viewContext);

  useEffect(() => {
    setGridView(true);
  }, []);
  return (
    <DashMain head="products">
      <div className=" dash-products">
        <ProductList isDash />
        <Outlet />
      </div>
    </DashMain>
  );
};

export default DashProducts;

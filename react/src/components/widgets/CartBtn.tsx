import React, { useContext } from "react";
import OpacityBtn from "./OpacityBtn";
import { BsFillCartPlusFill, BsFillCartXFill } from "react-icons/bs";
import usePathAndId from "../../custom/usePathAndId";
import { productContext } from "../product Route/Product";
import useAddToCart from "../../custom/useAddToCart";
import { isAuthContext } from "../../context/isAuth";
import useRemoveFromCart from "../../custom/useRemoveFromCart";

const CartBtn = ({ btn }: { btn: string }) => {
  const { userId } = useContext(isAuthContext);

  const { _id, images, bigImgInd, price, title } = useContext(productContext);

  const [productId, path] = usePathAndId(images, bigImgInd);
  const addToCartObj = {
    userId,
    productId,
    path,
    price,
    title,
    parentId: _id,
  };
  const { handleAddToCart } = useAddToCart(addToCartObj);
  const { handleRemoveFromCart } = useRemoveFromCart({
    userId,
    productId: [productId],
  });

  return (
    <>
      <OpacityBtn
        key={btn === "add to cart" ? "add-to-cart" : "remove from cart"}
        cls={
          btn === "add to cart" ? "btn wheat-light center" : "btn remove center"
        }
        btn={btn}
        fn={btn === "add to cart" ? handleAddToCart : handleRemoveFromCart}
        Icon={btn === "add to cart" ? BsFillCartPlusFill : BsFillCartXFill}
      />
    </>
  );
};

export default CartBtn;
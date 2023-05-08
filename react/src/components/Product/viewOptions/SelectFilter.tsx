import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  FILTER_BY_Date,
  FILTER_BY_PRICE,
  FILTER_BY_Rate,
} from "../../../graphql/mutations/product";
import { MdOutlineSort } from "react-icons/md";
import { BiDownArrow } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import {
  opacityVariant,
  selectDropDownVariants,
} from "../../../variants/globals";
import { productListContext } from "../../../context/FilterData";
import FadeElement from "../../widgets/FadeElement";
import { useAppSelector } from "../../../custom/reduxTypes";
const optionsArr = [
  "relevance",
  "highest price",
  "lowest price",
  "highest rate",
  "lowest rate",
  "newest",
  "oldest",
];

const SelectFilter = () => {
  const { Allproducts } = useAppSelector((st) => st.Allproducts);

  const { setProducts } = useContext(productListContext);
  const [selectValue, setSelectValue] = useState("relevance");
  const [fnPrice] = useMutation(FILTER_BY_PRICE);
  const [fnRate] = useMutation(FILTER_BY_Rate);
  const [fnDate] = useMutation(FILTER_BY_Date);

  useEffect(() => {
    if (selectValue === "relevance") {
      setProducts(Allproducts);
    } else if (selectValue === "lowest price") {
      fnPrice({
        variables: {
          price: 1,
        },
      }).then(({ data }) => setProducts(data.filterByPrice));
    } else if (selectValue === "highest price") {
      fnPrice({
        variables: {
          price: -1,
        },
      }).then(({ data }) => setProducts(data.filterByPrice));
    } else if (selectValue === "lowest rate") {
      fnRate({
        variables: {
          rate: 1,
        },
      }).then(({ data }) => setProducts(data.filterByRate));
    } else if (selectValue === "highest rate") {
      fnRate({
        variables: {
          rate: -1,
        },
      }).then(({ data }) => setProducts(data.filterByRate));
    } else if (selectValue === "newest") {
      fnDate({
        variables: {
          date: -1,
        },
      }).then(({ data }) => setProducts(data.filterByDate));
    } else if (selectValue === "oldest") {
      fnDate({
        variables: {
          date: 1,
        },
      }).then(({ data }) => setProducts(data.filterByDate));
    }
  }, [selectValue]);

  const [isSelectFocus, setIsSelectFocus] = useState(false);

  return (
    <div
      className="custom-select"
      onClick={() => setIsSelectFocus(!isSelectFocus)}
    >
      <BiDownArrow
        className="  box-shadow: 0.25px 0.25px 2px black;
 select-icon arrow"
      />
      <span className="icon select-icon sort center">
        <MdOutlineSort /> sort:
        <AnimatePresence mode="wait">
          <FadeElement key={selectValue} cls="value" transition={0.3}>
            {selectValue}
          </FadeElement>
        </AnimatePresence>
      </span>
      <AnimatePresence>
        {isSelectFocus && (
          <motion.ul
            className="select-dropdown center col"
            variants={selectDropDownVariants}
            initial="start"
            animate="end"
            exit="exit"
          >
            {optionsArr.map((opt, i) => {
              return (
                <motion.li
                  style={{
                    color: opt === selectValue ? "var(--wheat)" : "var(--main)",
                  }}
                  variants={opacityVariant}
                  onClick={() => setIsSelectFocus(false)}
                  key={i}
                  whileHover={{ x: 10 }}
                  onTapStart={() => setSelectValue(opt)}
                >
                  {opt}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectFilter;

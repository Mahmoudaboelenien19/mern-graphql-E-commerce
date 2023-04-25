import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { popVariant } from "../../variants/globals";
import { ChildrenInterFace } from "../../interfaces/general";

interface Props extends ChildrenInterFace {
  bool: boolean;
  head?: string;
  cls: string;
}
const DropDown = ({ bool, head, cls, children }: Props) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {bool && (
          <motion.div
            key={"fav-drop"}
            variants={popVariant}
            custom={{ dir: "" }}
            initial="start"
            animate="end"
            exit="exit"
            className={cls}
          >
            {head && (
              <h3
                className="underline header white"
                style={{ width: "fit-content", margin: "10px 0 10px 5px" }}
              >
                {head}
              </h3>
            )}

            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropDown;

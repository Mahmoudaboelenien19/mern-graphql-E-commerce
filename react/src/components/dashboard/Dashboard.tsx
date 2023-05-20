import React, { createContext, useContext, useRef, useState } from "react";
import Transition from "../widgets/Transition";
import DashboardAside from "./DashboardAside";
import { Outlet } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { opacityVariant } from "../../variants/globals";
import { RxDashboard } from "react-icons/rx";
import Title from "../widgets/Title";
import ThemeToggle from "../widgets/ThemeToggle";
import { themeContext } from "../../context/ThemContext";
import NavImg from "../widgets/NavImg";
import { RiNotification2Line } from "react-icons/ri";
import ShowCount from "../widgets/showCounter";
import NotificationDropDown from "./NotificationDropDown";
import { useAppDispatch, useAppSelector } from "../../custom/reduxTypes";
import { isAuthContext } from "../../context/isAuth";
import { useMutation } from "@apollo/client";
import { Reset_Notification } from "../../graphql/mutations/user";
import { changeNotificationCount } from "../../redux/notificationsSlice";
import { AiFillCloseCircle } from "react-icons/ai";

interface contextInterface {
  showAsideDash: boolean;
  setShowAsideDash: React.Dispatch<React.SetStateAction<boolean>>;
}

export const showAsideContext = createContext({} as contextInterface);

const Dashboard = () => {
  const [showAsideDash, setShowAsideDash] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({
    target: ref,
  });

  const { theme } = useContext(themeContext);
  const navClr = useTransform(
    scrollY,
    [0],
    [theme === "dark" ? "#000" : "#fff"]
  );

  const LinkClr = useTransform(
    scrollY,
    [0],
    [theme !== "light" ? "#fff" : "#000"]
  );

  return (
    <showAsideContext.Provider value={{ showAsideDash, setShowAsideDash }}>
      <div className="dashboard-par " ref={ref}>
        {/* <Transition /> */}
        <div style={{ marginRight: 10, gap: 8 }} className="dash-nav center">
          <NotificationDropDown />
          <NavImg />
          <AnimatePresence mode="wait">
            {!showAsideDash ? (
              <motion.span
                key={"show-dash"}
                variants={opacityVariant}
                initial="start"
                exit="exit"
                animate="end"
                className=" dash-show"
                transition={{ duration: 0.4, delay: showAsideDash ? 0 : 0.4 }}
                onClick={() => setShowAsideDash(true)}
              >
                <Title title="show dashboard aside nav">
                  <RxDashboard className="icon green" />
                </Title>
              </motion.span>
            ) : (
              <motion.span
                key={"hide-dash"}
                variants={opacityVariant}
                transition={{ duration: 0.4 }}
                className="dash-show"
                onClick={() => setShowAsideDash(false)}
              >
                <Title title="hide dashboard nav">
                  <AiFillCloseCircle className="icon red" />
                </Title>
              </motion.span>
            )}
          </AnimatePresence>
          <ThemeToggle navClr={navClr} linkClr={LinkClr} />
        </div>

        <DashboardAside />
        <Outlet />
      </div>
    </showAsideContext.Provider>
  );
};

export default Dashboard;

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import FadeElement from "../../widgets/FadeElement";
import DashDropDown from "../Order/DashDropDown";

interface Props {
  role: string;
  _id: string;
  name: string;
  email: string;
  index: number;
  createdAt: string;
  lastLogIn: string;
}
const Order = ({
  role,
  _id,
  lastLogIn,
  name,
  email,

  index,
  createdAt,
}: Props) => {
  const [updateRole, setUpdateRole] = useState(role);
  return (
    <>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {new Date(createdAt).toLocaleDateString()} -{" "}
        {new Date(createdAt).toLocaleTimeString()}
      </td>
      <td>
        <AnimatePresence mode="wait">
          {lastLogIn ? (
            <FadeElement cls="" key={`order${lastLogIn}`}>
              {new Date(lastLogIn).toLocaleDateString()} -
              {new Date(lastLogIn).toLocaleTimeString()}
            </FadeElement>
          ) : (
            <FadeElement cls="" key={"underscore" + lastLogIn}>
              &#95;
            </FadeElement>
          )}
        </AnimatePresence>
      </td>
      <div className=" center gap`">
        <td
          className="order-state center"
          style={{
            width: "100%",
            color: `white`,
            background: `var(--${role.split(" ").slice(-1)})`,
          }}
        >
          <AnimatePresence mode="wait">
            <FadeElement cls="" key={role}>
              <div style={{ width: 70 }}>{role}</div>
            </FadeElement>
          </AnimatePresence>
          <DashDropDown
            arr={["user", "admin", "owner", "moderator"]}
            _id={_id}
            setter={setUpdateRole}
            state={updateRole}
            type="user"
          />
        </td>
      </div>
    </>
  );
};

export default Order;
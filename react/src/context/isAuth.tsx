import React, { createContext, useState, useEffect } from "react";
import { cartInterface, favInterface } from "../interfaces/user";
import { useMutation } from "@apollo/client";
import { GET_USER_DATA } from "../graphql/mutations/user";
import Cookies from "js-cookie";
import { useAppDispatch } from "../custom/reduxTypes";
import { addToFavRedux } from "../redux/favSlice";
import { addToCartRedux } from "../redux/CartSlice";
import { ChildrenInterFace } from "../interfaces/general.js";

export interface favArrInterface {
  productId: string;
  parentId?: string;
  price: number;
  title: string;
  path: string;
  _id: string;
}
interface userDataState {
  email: string;
  name: string;
  country: string;
  phone: string;
  fav: favInterface[];
  cart: cartInterface[];
  //-imp to use braket notation wuth variables
  [key: string]: any;
}

interface authContextInterface extends userDataState {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUpdated: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
  profile: string;
  setProfile: React.Dispatch<React.SetStateAction<string>>;
  userData: userDataState;
}

export const isAuthContext = createContext({} as authContextInterface);

const IsAuthContextComponent = ({ children }: ChildrenInterFace) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isIsUpdated, setIsUpdated] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [profile, setProfile] = useState<string>("");
  console.log({ isAuth });
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    fav: [],
    cart: [],
    country: "",
    phone: "",
  } as userDataState);
  const [getData, { data, loading }] = useMutation(GET_USER_DATA);

  const dispatch = useAppDispatch();
  useEffect(() => {
    setUserId(Cookies.get("user-id") as unknown as string);
  }, [isAuth]);

  useEffect(() => {
    if (userId) {
      setIsAuth(true);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      getData({
        variables: {
          id: userId,
        },
      });
    }
  }, [userId, isIsUpdated]);

  useEffect(() => {
    if (isIsUpdated) {
      setTimeout(() => {
        setIsUpdated(false);
      }, 1000);
    }
  }, [isIsUpdated]);

  useEffect(() => {
    if (data?.getUserData) {
      setUserData(data?.getUserData);
      dispatch(addToFavRedux(data?.getUserData?.fav));
      dispatch(addToCartRedux(data?.getUserData?.cart));
      setProfile(data?.getUserData?.image);
    }
  }, [data?.getUserData?.name]);
  return (
    <isAuthContext.Provider
      value={{
        userData,
        isAuth,
        fav: userData.fav,
        cart: userData.cart,
        email: userData.email,
        name: userData.name,
        country: userData.country,
        phone: userData.phone,
        setIsAuth,
        userId,
        profile,
        setProfile,
        setIsUpdated,
      }}
    >
      {children}
    </isAuthContext.Provider>
  );
};

export default IsAuthContextComponent;

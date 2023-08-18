import axios from "axios";
import { SetStateAction, Dispatch } from "react";
import { ProductsType } from "../context/products";

export const getProducts = async (
  setProducts: Dispatch<SetStateAction<ProductsType[]>>
) => {
  try {
    const jwt = localStorage.getItem('jwt')
    const res = await axios.get<ProductsType[]>("https://appi-xi.vercel.app/", { headers: {'Authorization': jwt}});
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};
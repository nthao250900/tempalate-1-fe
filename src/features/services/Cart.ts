import axios from "axios";
import { TUserStorage } from "features/slices/Auth";
import { getQueryHelper, postQueryHelper } from "helpers";

const addToCart = async (cartItems: any) => {
 const userData: string | null = localStorage.getItem("user");
 if (userData) {
  const { accountId } = JSON.parse(userData)?.infoUser;
  const parameters = {
   productList: JSON.stringify(cartItems),
   info_user: accountId,
  };
  const response = await postQueryHelper("/cart/add-to-cart", parameters);
  selectDataCartByUser(accountId);
  return response;
 }
};
const selectDataCartByUser = async (idUser: string) => {
 try {
  const response: any = await getQueryHelper(
   `/cart/select-cart-by-user-id/${idUser}`
  );
  if (response?.type !== "error") {
   if (response?.message === "empty") return { result: [], idCart: null };
   const productList = JSON.parse(response.productList);
   const result = productList.map((item: any) => ({
    ...item,
    status: response.status,
   }));
   localStorage.setItem("cartItem", JSON.stringify(result));
   return {
    result,
    idCart: response.id,
   };
  }
 } catch (error) {}
};

const cartService = {
 addToCart,
 selectDataCartByUser,
};
export default cartService;

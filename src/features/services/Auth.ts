import { message } from "antd";
import { postQueryHelper } from "helpers";

const register = async (userData: any) => {
 const response: any = await postQueryHelper("/account/register", userData);

 if (response?.type === "error") return message.error(response.error?.message);
 localStorage.setItem("auth", JSON.stringify(response));
 const href = window.location.origin;
 window.location.href = href + "/auth/confirm-account";
 return response;
};

const login = async (values: any) => {
 const response: any = await postQueryHelper("/account/sign-in", values);
 if (!response.type) {
  localStorage.setItem("user", JSON.stringify(response));
  if (response.infoUser.accountRole === "administrator") {
   window.location.href = window.location.origin + "/admin";
  } else {
   if (window.location.pathname.includes("auth")) {
    window.location.href = window.location.origin;
   } else {
    window.history.back();
   }
  }
 }
 return response;
};

const logout = () => {
 localStorage.removeItem("user");
};

const authService = {
 logout,
 login,
 register,
};
export default authService;

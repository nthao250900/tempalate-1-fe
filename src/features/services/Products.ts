import { TProduct } from "@types";
import { message } from "antd";
import { getQueryHelper } from "helpers";
const getAllProduct = async () => {
 const response: any = await getQueryHelper("/product/active");
 if (response) {
  response.map(
   (product: any) =>
    (product.productImages = JSON.parse(product.productImages || "[]"))
  );
 } else {
  message.error("Có lỗi xảy ra khi kết nối đến máy chủ");
 }
 return response;
};

export const productService = {
 getAllProduct,
};

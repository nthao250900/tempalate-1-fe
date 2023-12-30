import { message } from "antd";
import { getQueryHelper } from "helpers";
const getAllCategory = async () => {
 const response: any = await getQueryHelper("/category/get-all-category");
 if (response) {
  return response;
 } else {
  message.error("Có lỗi xảy ra khi kết nối đến máy chủ");
 }
};

export const categoryService = {
 getAllCategory,
};

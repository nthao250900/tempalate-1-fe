import { message } from "antd";
import { getQueryHelper } from "helpers";
const getAllOrder = async (userId: string) => {
 const response: any = await getQueryHelper(`/order/select-order/${userId}`);
 if (response) {
  return response;
 } else {
  message.error("Có lỗi xảy ra khi kết nối đến máy chủ");
 }
};

export const orderService = {
 getAllOrder,
};

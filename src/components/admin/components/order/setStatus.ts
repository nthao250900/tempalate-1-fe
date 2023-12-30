export const setStatus = (status: number) => {
 switch (status) {
  case 0:
   return {
    color: "#f50",
    label: "Chưa xác nhận",
   };
  case 1:
   return {
    color: "#108ee9",
    label: "Đã xác nhận",
   };
  case 2:
   return {
    color: "#87d068",
    label: "Đã vận chuyển",
   };
  case 3:
   return {
    color: "#2db7f5",
    label: "Giao hàng thành công",
   };
  case 4:
   return {
    color: "red",
    label: "Đơn hàng đã bị hủy",
   };
 }
};

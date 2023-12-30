import { Button, Image, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { TOrderAdmin } from "./type";
import Action from "./Action";
import ViewInfoUser from "./viewInforUser";
import ViewProduct from "./ViewProduct";
import { PaymentType } from "./emun";
import { TCart } from "components/clients/cart/Table";
import ViewInfoComponent from "components/clients/cart/infoProduct";
import { formatter } from "components/admin/common/formatPrice";
import { setStatus } from "./setStatus";
import moment from "moment";

export const columns: ColumnsType<TOrderAdmin> = [
 {
  title: "Tên khách hàng",
  dataIndex: "information_user",
  key: "information_user",
  render: (value) => {
   return <>{JSON.parse(value)["Họ tên"]}</>;
  },
 },
 {
  title: "Thông tin khách hàng",
  dataIndex: "information_user",
  key: "information_user",
  render(value, record, index) {
   return <ViewInfoUser record={record} />;
  },
 },
 {
  title: "Loại thanh toán",
  dataIndex: "payment_type",
  key: "payment_type",
  render(value: "paymentoOnDelivery" | "bank", record, index) {
   return <p>{PaymentType[value]}</p>;
  },
 },
 {
  title: "Sản phẩm",
  dataIndex: "productList",
  key: "productList",
  render: (_, record) => {
   return <ViewProduct record={record} />;
  },
 },
 {
  title: "Đơn giá",
  key: "total",
  dataIndex: "total",
  render(value, record, index) {
   return <>{formatter.format(Number(value))}</>;
  },
 },
 {
  title: "Trạng thái",
  dataIndex: "status",
  key: "status",
  render(value, record, index) {
   const { color, label }: any = setStatus(value);
   return <Tag color={color}>{label.toUpperCase()}</Tag>;
  },
 },
 {
  title: "Ngày tạo",
  dataIndex: "createdAt",
  key: "createdAt",
  render(value, record, index) {
   return <>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</>;
  },
 },
 {
  title: "Ngày Cập nhật",
  dataIndex: "updatedAt",
  key: "updatedAt",
  render(value, record, index) {
   return <>{moment(value).format("DD/MM/YYYY HH:mm:ss")}</>;
  },
 },
 {
  title: "",
  key: "action",
  render: (_, record) => <Action record={record} />,
 },
];

export const columnsProduct: ColumnsType<TCart> = [
 {
  title: "Information",
  dataIndex: "productName",
  key: "productName",
  render: (_, record: TCart) => <ViewInfoComponent record={record} />,
 },
 {
  title: "Price",
  dataIndex: "productPrice",
  key: "productPrice",
  align: "center",
  render(value: string) {
   return <>{formatter.format(Number(value))}</>;
  },
 },
 {
  title: "Quantity",
  dataIndex: "quantity",
  key: "quantity",
  align: "center",

  render(value, record, index) {
   return <>{record?.cartQuantity}</>;
  },
 },
 {
  title: "Total",
  dataIndex: "total",
  key: "total",
  align: "center",
  render(_, record: TCart) {
   return (
    <>{formatter.format(record.cartQuantity * Number(record.productPrice))}</>
   );
  },
 },
];

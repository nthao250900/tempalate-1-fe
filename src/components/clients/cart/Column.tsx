import { ColumnsType } from "antd/es/table";
import { TCart } from "./Table";
import ViewInfoComponent from "./infoProduct";
import { formatter } from "components/admin/common/formatPrice";
import QuantityComponent from "./QuantityComponent";
import ActionComponent from "./Action";

export const columnsCart: ColumnsType<TCart> = [
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
   return (
    <QuantityComponent quantity={record?.cartQuantity} itemProduct={record} />
   );
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
 {
  title: "",
  dataIndex: "action",
  key: "action",
  align: "center",
  render(_, record: TCart) {
   return <ActionComponent record={record} />;
  },
 },
];

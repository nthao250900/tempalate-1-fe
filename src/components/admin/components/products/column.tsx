import { ColumnsType } from "antd/es/table";
import { TProduct } from "./Component";
import Action from "./Action";
import PreviewModal from "./PreviewModal";
import PreviewImages from "./PreviewImages";
import { Tag, message, Typography, Space } from "antd";
import { formatter } from "components/admin/common/formatPrice";

const { Link } = Typography;
export interface DataType extends TProduct {
 key?: React.ReactNode;
}

export const columns: ColumnsType<DataType> = [
 {
  title: "Mã sản phẩm",
  dataIndex: "productCode",
  key: "productCode",
 },
 {
  title: "Tên sản phẩm",
  dataIndex: "productName",
  key: "productName",
 },
 {
  title: "Loại",
  dataIndex: "categoryTitle",
  key: "categoryTitle",
 },
 {
  title: "Hình ảnh",
  dataIndex: "productImages",
  key: "productImages",
  render(_, record) {
   return <PreviewImages image={record.productImages} />;
  },
 },
 {
  title: "Chuyển hướng",
  dataIndex: "productHref",
  key: "productHref",
  render(value, record: any) {
   const handleClick = () =>
    message.info("Vui lòng công khai sản phẩm trước khi xem chuyển hướng");
   return (
    <>
     {record.productActive === 1 ? (
      <a href={window.location.origin + "/san-pham/" + value} target='window'>
       Xem chi tiết
      </a>
     ) : (
      <Link onClick={handleClick}>Xem chi tiết</Link>
     )}
    </>
   );
  },
 },
 {
  title: "Giá",
  dataIndex: "productPrice",
  key: "productPrice",
  render(price) {
   return <>{formatter.format(Number(price))}</>;
  },
 },
 {
  title: "Giảm giá",
  dataIndex: "productDiscount",
  key: "productDiscount",
  render(discount) {
   return <>{discount} %</>;
  },
 },
 {
  title: "Màu",
  dataIndex: "productColors",
  key: "productColors",
  render(colors) {
   return (
    <Space size={[0, 8]} wrap>
     {JSON.parse(colors).map((color: string, index: number) => (
      <Tag key={index} color={color}>
       {color}
      </Tag>
     ))}
    </Space>
   );
  },
 },
 {
  title: "Size",
  dataIndex: "productSize",
  key: "productSize",
  render(size) {
   return (
    <Space size={[0, 8]} wrap>
     {JSON.parse(size).map((item: string, index: number) => (
      <Tag key={index}>{item}</Tag>
     ))}
    </Space>
   );
  },
 },
 {
  title: "Thương hiệu",
  dataIndex: "productTrademark",
  key: "productTrademark",
 },
 {
  title: "Thông số",
  dataIndex: "productParameter",
  key: "productParameter",
  render(_, record) {
   return <PreviewModal type='parameter' record={record} />;
  },
 },
 {
  title: "Chi tiết",
  dataIndex: "productDescription",
  key: "productDescription",
  render(_, record) {
   return <PreviewModal type='description' record={record} />;
  },
 },
 {
  title: "Trạng thái",
  dataIndex: "productActive",
  key: "productActive",
  render(active, record) {
   let text: string, color: string;
   if (active === 1) {
    text = "Công khai";
    color = "#87d068";
   } else {
    text = "Chưa công khai";
    color = "#f50";
   }
   return <Tag color={color}>{text}</Tag>;
  },
 },
 {
  title: "Chỉnh sửa",
  dataIndex: "active",
  key: "active",
  render(_, record) {
   return <Action record={record} />;
  },
 },
];

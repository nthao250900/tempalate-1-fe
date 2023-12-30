import React from "react";
import { TProduct } from "./Component";
import { Button, Flex, Form, Modal, Popconfirm, message } from "antd";
import {
 DeleteOutlined,
 EditOutlined,
 LockOutlined,
 UnlockOutlined,
 QuestionCircleOutlined,
} from "@ant-design/icons";
import AddProduct from "./AddProduct";
import { API_SERVER } from "helpers/variable";
import { deleteProductQuery, updateProductQuery } from "./query";
import { QUERY_CATEGORY_ADMIN, QUERY_PRODUCT_ADMIN } from "helpers";
import { useQueryClient } from "react-query";

const Action = ({ record }: { record: TProduct }) => {
 const [imageList, setImageList] = React.useState<any>([]);
 const [visibleModalUpdate, setVisibleModalUpdate] =
  React.useState<boolean>(false);
 const [formUpdate] = Form.useForm();
 const queryClient = useQueryClient();

 const handleUpdateProduct = () => {
  formUpdate.submit();
 };

 const handleCloseUpdateModal = () => {
  setVisibleModalUpdate(false);
  setImageList([]);
 };

 const handleOpenUpdateModal = () => {
  formUpdate.setFieldsValue({
   ...record,
   description: record.productDescription,
  });
  onFormatImageDefault();
  return setVisibleModalUpdate(true);
 };

 const onFormatImageDefault = () => {
  let result;
  if (record.productImages) {
   result = JSON.parse(record.productImages)?.map(
    (image: string, index: number) => ({
     uid: index,
     name: image,
     status: "done",
     url: API_SERVER + "/" + image,
     thumbUrl: API_SERVER + "/" + image,
    })
   );
  } else {
   result = [];
  }
  return setImageList(result);
 };

 const handleUpdateProductActive = async () => {
  const response = await updateProductQuery(
   {
    active: record.productActive === 0 ? 1 : 0,
   },
   record.productId
  );
  queryClient.invalidateQueries(QUERY_PRODUCT_ADMIN);
  queryClient.invalidateQueries(QUERY_CATEGORY_ADMIN);
  if (response) {
   message.success("Cập nhật sản phẩm thành công");
  } else {
   message.success("Cập nhật sản phẩm thất bại");
  }
 };

 const handleDeleteProduct = async () => {
  const response = await deleteProductQuery(record.productId);
  if (response) {
   queryClient.invalidateQueries(QUERY_PRODUCT_ADMIN);
   queryClient.invalidateQueries(QUERY_CATEGORY_ADMIN);
   message.success("Cập nhật sản phẩm thành công");
  } else {
   message.success("Cập nhật sản phẩm thất bại");
  }
 };

 return (
  <>
   <Flex align='center' justify='center' gap={10}>
    <Button
     type='dashed'
     onClick={handleOpenUpdateModal}
     icon={<EditOutlined />}
    />
    {record.productActive === 1 ? (
     <Button
      type='dashed'
      onClick={handleUpdateProductActive}
      danger
      icon={<LockOutlined />}
     />
    ) : (
     <Button
      type='dashed'
      onClick={handleUpdateProductActive}
      icon={<UnlockOutlined />}
     />
    )}
    <Popconfirm
     title='Xóa sản phẩm'
     description={`Bạn có chắc chắn muốn xóa sản phẩm ${record.productName} ?`}
     icon={<QuestionCircleOutlined style={{ color: "red" }} />}
     okText='Xóa'
     cancelText='Hủy'
     onConfirm={handleDeleteProduct}
    >
     <Button danger type='dashed' icon={<DeleteOutlined />} />
    </Popconfirm>
   </Flex>
   <Modal
    open={visibleModalUpdate}
    title={record.categoryTitle}
    onOk={handleUpdateProduct}
    onCancel={handleCloseUpdateModal}
    okText='Cập nhật'
    cancelText='Thoát'
    width={"80%"}
   >
    <AddProduct
     formUpdate={formUpdate}
     imageListUpdate={imageList}
     idProduct={record.productId}
     type='update'
     setVisibleUpdateModal={handleCloseUpdateModal}
    />
   </Modal>
  </>
 );
};

export default Action;

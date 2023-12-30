import { Button, Form, Input, Modal, UploadFile, message } from "antd";
import React from "react";
import { EditOutlined } from "@ant-design/icons";
import AddProduct from "../products/AddProduct";
import { addCategoryQuery, updateCategoryQuery } from "./query";
import { useQueryClient } from "react-query";
import { QUERY_CATEGORY_ADMIN } from "helpers";
import UploadComponent from "common/Upload";
type Props = {
 form: any;
 type: "update" | "add";
 idCategory?: string;
};

const ContentModal = ({ form, type, idCategory = "" }: Props) => {
 const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
 const [imageList, setImageList] = React.useState<UploadFile[]>([]);
 const [formAddProduct] = Form.useForm();
 const queryClient = useQueryClient();

 const handleOpenModal = () => {
  setVisibleModal(true);
  formAddProduct.setFieldsValue({
   categoryCode: idCategory,
  });
 };

 const handleCloseModal = () => {
  setVisibleModal(false);
  formAddProduct.resetFields();
 };

 const onFinish = async (values: any) => {
  let response;
  if (imageList.length === 0)
   return message.warning("Vui lòng tải hình ảnh lên.");
  let parameter = {
   ...values,
   imageThumbnail: imageList[0].name,
  };
  if (type === "add") {
   response = await addCategoryQuery(parameter);
  } else {
   response = await updateCategoryQuery(parameter, idCategory);
  }
  if (response) {
   queryClient.invalidateQueries(QUERY_CATEGORY_ADMIN);
   message.success("Cập nhật thông tin thành công");
  } else {
   message.error("Cập nhật thông tin thất bại");
  }
 };

 return (
  <>
   <Form form={form} layout='vertical' onFinish={onFinish}>
    <Form.Item name='title' label='Tên danh mục:'>
     <Input />
    </Form.Item>
    <Form.Item name='imageThumbnail' label='Thumbnail Image:'>
     <UploadComponent resultUploadImage={setImageList} imageList={imageList} />
    </Form.Item>
    {type === "update" && (
     <Form.Item>
      <Button type='dashed' onClick={handleOpenModal}>
       <EditOutlined /> Thêm sản phẩm vào danh mục
      </Button>
     </Form.Item>
    )}
   </Form>
   <Modal
    title='Thêm sản phẩm'
    open={visibleModal}
    width='80%'
    onCancel={() => setVisibleModal(false)}
    okText='Thêm mới'
    onOk={() => {
     formAddProduct.submit();
    }}
    cancelText='Hủy'
   >
    <AddProduct
     formUpdate={formAddProduct}
     type='add'
     setVisibleUpdateModal={handleCloseModal}
    />
   </Modal>
  </>
 );
};

export default ContentModal;

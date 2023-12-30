import React, { useState } from "react";
import { Modal, Upload, Button } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { API_SERVER } from "helpers/variable";
import { UploadOutlined } from "@ant-design/icons";

const getBase64 = (file: RcFile): Promise<string> =>
 new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result as string);
  reader.onerror = (error) => reject(error);
 });

type TProps = {
 resultUploadImage: Function;
 imageList: UploadFile[];
};

const UploadComponent = ({ resultUploadImage, imageList }: TProps) => {
 const [previewOpen, setPreviewOpen] = useState(false);
 const [previewImage, setPreviewImage] = useState("");
 const [previewTitle, setPreviewTitle] = useState("");
 const handleCancel = () => setPreviewOpen(false);

 const handlePreview = async (file: UploadFile) => {
  if (!file.url && !file.preview) {
   file.preview = await getBase64(file.originFileObj as RcFile);
  }

  setPreviewImage(file.url || (file.preview as string));
  setPreviewOpen(true);
  setPreviewTitle(
   file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
  );
 };

 const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
  resultUploadImage(newFileList);
 };

 return (
  <>
   <Upload
    action={API_SERVER + "/upload"}
    listType='picture'
    fileList={imageList}
    onPreview={handlePreview}
    onChange={handleChange}
    multiple
   >
    <Button type='dashed' icon={<UploadOutlined />}>
     Tải hình ảnh
    </Button>
    {/* {fileList.length >= 8 ? null : uploadButton} */}
   </Upload>
   <Modal
    open={previewOpen}
    title={previewTitle}
    footer={null}
    onCancel={handleCancel}
   >
    <img alt='example' style={{ width: "100%" }} src={previewImage} />
   </Modal>
  </>
 );
};

export default UploadComponent;

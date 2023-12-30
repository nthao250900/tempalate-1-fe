import React from "react";
import { TProduct } from "./Component";
import { Button, Modal, Typography } from "antd";

const { Link } = Typography;
type TProps = {
 record: TProduct;
 type: "parameter" | "description";
};

const PreviewModal = ({ record, type }: TProps) => {
 const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
 return (
  <div>
   <Modal
    open={visibleModal}
    title={record.productName}
    onCancel={() => setVisibleModal(false)}
    okText={null}
    footer={[
     <Button type='primary' key='back' onClick={() => setVisibleModal(false)}>
      Thoát
     </Button>,
    ]}
   >
    <div
     className='sun-editor-editable'
     dangerouslySetInnerHTML={{
      __html:
       type === "parameter"
        ? record.productParameter
        : record.productDescription,
     }}
    />
   </Modal>
   <Link onClick={() => setVisibleModal(true)}>Xem chi tiết</Link>
  </div>
 );
};

export default PreviewModal;

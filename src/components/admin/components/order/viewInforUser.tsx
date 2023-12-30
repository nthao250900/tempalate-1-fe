import React from "react";
import { TOrderAdmin } from "./type";
import { Modal, Typography } from "antd";

const { Link, Text } = Typography;

const ViewInfoUser = ({ record }: { record: TOrderAdmin }) => {
 const { information_user } = record;
 const [visibleMOdal, setVisibleModal] = React.useState<boolean>(false);
 return (
  <>
   <Modal
    open={visibleMOdal}
    title='THÔNG TIN KHÁCH HÀNG'
    onCancel={() => setVisibleModal(false)}
    footer={null}
   >
    {Object.keys(JSON.parse(information_user)).map((key: string) => (
     <p>
      <Text strong>{key}: </Text>
      {JSON.parse(information_user)[key]}
     </p>
    ))}
   </Modal>
   <Link onClick={() => setVisibleModal(true)}>Xem Chi Tiết</Link>
  </>
 );
};

export default ViewInfoUser;

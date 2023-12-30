import React from "react";
import { TOrderAdmin } from "./type";
import { Modal, Table, Typography } from "antd";
import { columnsProduct } from "./column";
import { TCart } from "components/clients/cart/Table";

const { Link } = Typography;

const ViewProduct = ({ record }: { record: TOrderAdmin }) => {
 const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
 const infoProduct: TCart[] = JSON.parse(record.productList);
 return (
  <>
   <Modal
    open={visibleModal}
    title={"THÔNG TIN SẢN PHẨM"}
    onCancel={() => setVisibleModal(false)}
    footer={null}
    width={"80%"}
   >
    <Table columns={columnsProduct} dataSource={infoProduct} />
   </Modal>
   <Link onClick={() => setVisibleModal(true)}>Xem chi tiết</Link>
  </>
 );
};

export default ViewProduct;

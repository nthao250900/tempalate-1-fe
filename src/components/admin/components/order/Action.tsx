import React from "react";
import { TOrderAdmin } from "./type";
import { Button, Flex, Modal, Select, Tooltip, message } from "antd";
import { updateOrder } from "./query";
import {
 EditOutlined,
 UnlockOutlined,
 LockOutlined,
 DeleteOutlined,
} from "@ant-design/icons";
import { useQueryClient } from "react-query";
import { ADMIN_QUERY_ORDER } from "components/admin/common/QueryKey";
import { useSelector } from "react-redux";
import { RootState } from "store";
const options = [
 { value: "0", label: "Chưa xác nhận" },
 { value: "1", label: "Xác nhận" },
 { value: "2", label: "Đã vận chuyển" },
 { value: "3", label: "Giao hàng thành công" },
 { value: "4", label: "Đơn hàng đã bị hủy" },
];

const Action = ({ record }: { record: TOrderAdmin }) => {
 const { user } = useSelector((state: RootState) => state.auth);

 const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
 const [isLoadingPage, setIsLoadingPage] = React.useState<boolean>(false);
 const [selectedStatus, setSelectedStatus] = React.useState<string | string[]>(
  "0"
 );

 const queryClient = useQueryClient();
 const handleChange = (value: string | string[]) => {
  setSelectedStatus(value);
 };

 const handleCloseModal = () => {
  setVisibleModal(false);
 };
 const handleSaveModal = async () => {
  setIsLoadingPage(true);
  const response: any = await updateOrder(record.id, {
   userId: user?.infoUser.accountId,
   status: Number(selectedStatus),
  });
  setIsLoadingPage(false);

  if (response?.type === "error") {
   message.error(response.message);
  } else {
   handleCloseModal();
   queryClient.invalidateQueries(ADMIN_QUERY_ORDER);
   message.success(response.message);
  }
 };
 return (
  <>
   <Modal
    open={visibleModal}
    title='Cập nhật trạng thái'
    onCancel={handleCloseModal}
    onOk={handleSaveModal}
    confirmLoading={isLoadingPage}
   >
    <Flex style={{ margin: "50px 0" }} align='center' justify='center'>
     <Select
      defaultValue={record.status.toString()}
      onChange={handleChange}
      style={{ width: 200 }}
      options={options}
     />
    </Flex>
   </Modal>
   <Flex gap='small'>
    <Tooltip title='Cập nhật trạng thái'>
     <Button
      onClick={() => setVisibleModal(true)}
      type='dashed'
      shape='circle'
      icon={<EditOutlined />}
     />
    </Tooltip>
   </Flex>
  </>
 );
};

export default Action;

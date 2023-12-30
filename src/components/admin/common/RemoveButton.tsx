import { Button, Popconfirm } from "antd";
import React from "react";

type TProps = {
 onClick: (id: string) => void;
 id: string;
};

const RemoveButton = ({ onClick, id }: TProps) => {
 return (
  <Popconfirm
   title={`Bạn có chắc chắn xóa mục này không?`}
   description=''
   okText='Đồng ý'
   cancelText='Không'
   onConfirm={() => onClick(id)}
  >
   <Button
    type='dashed'
    danger
    icon={<i className='fa-solid fa-trash'></i>}
   ></Button>
  </Popconfirm>
 );
};

export default RemoveButton;

import React from "react";
import { API_SERVER } from "helpers/variable";
import { TCart } from "../cart/Table";
import { StyledOrder } from "./styled";
import { formatter } from "components/admin/common/formatPrice";
import { Flex, Tag } from "antd";
import { theme } from "theme";

interface Props {
 record: TCart;
 total: number | string;
}

const OrderComponent = ({ record, total }: Props) => {
 return (
  <StyledOrder bgImage={`${API_SERVER}/${record?.productImages?.[0]}`}>
   <div className='order'>
    <div className='order__left'>
     <div className='image' />
     <div className='info'>
      <h4>{record.productName}</h4>
      <Flex align='center' gap={20}>
       <strong>Size: </strong>
       <Tag>{JSON.parse(record.productSize)?.[0]}</Tag>
      </Flex>
      <Flex align='center' gap={20}>
       <strong>Màu: </strong>
       <Tag
        style={{
         backgroundColor: JSON.parse(record.productColors)?.[0],
         border: `1px solid ${theme.colors.gray[400]}`,
         width: 20,
         height: 20,
        }}
       />
      </Flex>
     </div>
    </div>
    <div className='order__right'>
     <div className='price'>
      <p>
       {formatter.format(
        Number(record.cartQuantity) * Number(record.productPrice)
       )}
      </p>
     </div>
     <div className='quantity'>
      <p>Quantity: {record.cartQuantity}</p>
     </div>
    </div>
   </div>
  </StyledOrder>
 );
};

export default OrderComponent;

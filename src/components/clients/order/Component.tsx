import { Col, Flex, Image, Row, Tag, Timeline, Typography } from "antd";
import Container from "common/Container";
import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TCartItems, TOrder, TProduct } from "@types";
import { OrderStyled } from "./styled";
import moment from "moment";
import { API_SERVER } from "helpers/variable";
import { formatter } from "components/admin/common/formatPrice";
import { setStatus } from "components/admin/components/order/setStatus";

const { Title, Text } = Typography;

const Component = () => {
 const { order, isLoading } = useSelector((state: RootState) => state.order);
 console.log("🚀 ~ file: Component.tsx:18 ~ Component ~ order:", order);
 return (
  <Container>
   <OrderStyled>
    {order.map((item: TOrder) => {
     const productList = JSON.parse(item.productList);
     const { color, label }: any = setStatus(item.status);
     return (
      <>
       <div className='top'>
        <div className='created'>
         <p>{moment(item.createdAt).format("DD/MM/YYYY")}</p>
        </div>
        <div className='status'>
         <Tag color={color}>{label.toUpperCase()}</Tag>
        </div>
       </div>
       <div className='prod'>
        {productList.map((product: TCartItems) => {
         return (
          <div className='prod__item'>
           <div className='info-prod'>
            <Image src={`${API_SERVER}/${product.productImages[0]}`} />
            <div className='content'>
             <p className='name'>{product.productName}</p>
             <p className='size'>Size: {JSON.parse(product.productSize)[0]}</p>
             <p className='color'>
              Màu:
              <span
               style={{ backgroundColor: JSON.parse(product.productSize)[0] }}
              ></span>
             </p>
            </div>
           </div>
           <div className='price'>
            <p>
             {formatter.format(
              Number(product.cartQuantity) * Number(product.productPrice)
             )}
            </p>
           </div>
          </div>
         );
        })}
       </div>
       <div className='total'>
        <p>
         <strong>Hình thức thanh toán</strong>:{" "}
         <span>
          {item.payment_type === "paymentoOnDelivery"
           ? "Thanh toán khi nhận hàng"
           : "Chuyển khoản"}
         </span>
        </p>
        <p className='price'>
         <strong>Thanh toán</strong>:{" "}
         <span>{formatter.format(Number(item.total))}</span>
        </p>
       </div>
      </>
     );
    })}
   </OrderStyled>
   {/* <Flex align='start' style={{ marginTop: 50 }}>
    <Col span={8}>
     <Title level={2}>Thông tin</Title>
     {order.map((item: TOrder) => {
      const productList = JSON.parse(item.productList);
      return (
       <>
        {productList.map((product: TProduct) => (
         <Flex align='start' gap={10}>
          <Text strong>Tên sản phẩm</Text>
          <Text strong>{product.productName}</Text>
         </Flex>
        ))}
       </>
      );
     })}
    </Col>
   </Flex> */}
   {/* <Timeline
    items={[
     {
      color: "green",
      children: "Create a services site 2015-09-01",
     },
     {
      color: "green",
      children: "Create a services site 2015-09-01",
     },
     {
      color: "red",
      children: (
       <>
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
       </>
      ),
     },
     {
      children: (
       <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
       </>
      ),
     },
     {
      color: "gray",
      children: (
       <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
       </>
      ),
     },
     {
      color: "gray",
      children: (
       <>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
       </>
      ),
     },
     {
      color: "#00CCFF",
      dot: <SmileOutlined />,
      children: <p>Custom color testing</p>,
     },
    ]}
   /> */}
  </Container>
 );
};

export default Component;

import React from "react";

import { useSelector } from "react-redux";
import { Button, Empty, Space } from "antd";
import Colors from "modules/Colors";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { StyledCart } from "./styled";
import Container from "common/Container";
import TableComponent from "./Table";
import _ from "lodash";

const Component = () => {
 const { cartItems } = useSelector((state: any) => state.cart);
 console.log("🚀 ~ file: Component.tsx:14 ~ Component ~ cartItems:", cartItems);
 const navigate = useNavigate();
 const handleToPay = () => {
  navigate("/pay");
 };
 const handleContinueShopping = () => {
  navigate("/shop");
 };
 return (
  <StyledCart>
   <Container>
    <>
     {!_.some(cartItems, {
      status: 1,
     }) ? (
      <>
       <TableComponent records={cartItems} />
       <Space
        style={{
         margin: "20px 0",
         display: "flex",
         alignItems: "center",
         justifyContent: "space-between",
        }}
        wrap
       >
        <Button
         type='primary'
         style={{
          backgroundColor: Colors.secondaryColor1,
         }}
         onClick={handleContinueShopping}
         icon={<ShoppingCartOutlined />}
        >
         Continue shopping
        </Button>
        <Button
         style={{
          color: Colors.secondaryColor1,
          borderColor: Colors.secondaryColor1,
         }}
         onClick={handleToPay}
        >
         Make a payment
        </Button>
       </Space>
      </>
     ) : (
      <Empty />
     )}
    </>
   </Container>
  </StyledCart>
 );
};

export default Component;

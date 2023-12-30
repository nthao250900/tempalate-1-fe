import Container from "common/Container";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import ProductList from "../Shop/ProductList";
import NotFoundCommon from "common/NotFound";
import { Empty, Flex } from "antd";

const Component = () => {
 const { wishListItem }: any = useSelector(
  (state: RootState) => state.wishlist
 );

 return (
  <Container>
   {wishListItem.length > 0 ? (
    <ProductList product={wishListItem} />
   ) : (
    <Flex
     style={{
      minHeight: "80vh",
     }}
     justify='center'
     align='center'
    >
     <Empty></Empty>
    </Flex>
   )}
  </Container>
 );
};

export default Component;

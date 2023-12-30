import React from "react";
import Container from "common/Container";
import Breadcrumb from "components/Home/common/Breadcrumb";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { RootState } from "store";

const breadcrumb = [
 {
  text: "Home",
  href: "/",
 },
 {
  text: "Shop",
  href: undefined,
 },
];

const Component = () => {
 const { product }: any = useSelector((state: RootState) => state.products);
 return (
  <Container>
   {/* <Breadcrumb breadcrumb={breadcrumb} /> */}
   <ProductList product={product} />
  </Container>
 );
};

export default Component;

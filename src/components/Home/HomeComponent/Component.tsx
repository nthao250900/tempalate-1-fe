import React from "react";
import Carousel from "../common/Carousel";
import Collection from "./Collection";
import FeaturedProducts from "./FeaturedProduct";
import ContactForm from "components/clients/contact/FormContact";
import Container from "common/Container";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { API_SERVER } from "helpers/variable";
import Service from "./Service";

const Component = () => {
 const { category } = useSelector((state: RootState) => state.category);
 console.log("🚀 ~ file: Component.tsx:13 ~ Component ~ category:", category);

 return (
  <>
   <Carousel
    heading='Bộ sưu tập mới'
    title={category?.[0]?.title}
    description=''
    href={`/collection/${category?.[0]?.href}`}
    textBottom='XEM CHI TIẾT'
    image='/images/carousel-1.png'
   />
   <Collection />
   <Service />
   <FeaturedProducts />
   <Container>
    <ContactForm />
   </Container>
  </>
 );
};

export default Component;

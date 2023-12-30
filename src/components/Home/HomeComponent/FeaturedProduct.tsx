import React from "react";

import { Link } from "react-router-dom";
import TopSession from "../common/TopSession";
import Container from "common/Container";
import { FeatureStyle } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TProduct } from "@types";
import { API_SERVER } from "helpers/variable";
import Card from "../common/Card";
import { calculateDiscount } from "config";

const FeaturedProducts = () => {
 const { product, isLoading: isLoadingProduct } = useSelector(
  (state: RootState) => state.products
 );

 return (
  <>
   {!isLoadingProduct && product && (
    <FeatureStyle>
     <Container>
      <TopSession
       link={[
        {
         text: "Feature Products",
         url: "#",
        },
       ]}
       title='BESTSELLER PRODUCTS'
       description='Problems trying to resolve the conflict between'
      />
      <div className='cards'>
       {product.slice(0, 8).map((product: TProduct, key: number) => (
        <Card
         title={product.productName}
         image={`${API_SERVER}/${product.productImages[0]}`}
         colors={JSON.parse(product.productColors)}
         newPrice={product.productPrice}
         oldPrice={calculateDiscount(
          Number(product.productDiscount),
          Number(product.productPrice)
         )}
         key={key}
         href={`/shop/${product.productHref}`}
         dataProduct={product}
         sale={product.productDiscount}
        />
       ))}
      </div>
      <div className='button'>
       <Link to='/shop'>Load more products</Link>
      </div>
     </Container>
    </FeatureStyle>
   )}
  </>
 );
};

export default FeaturedProducts;

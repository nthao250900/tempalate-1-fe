import ImageDetailProduct from "./ImageDetailProduct";
import InformationProduct from "./InformationProduct";
import Colors from "modules/Colors";
import { useLocation, useParams } from "react-router-dom";
import _ from "lodash";
import { TProduct } from "@types";
import Container from "common/Container";
import Breadcrumb, { TypeBreadCrumb } from "components/Home/common/Breadcrumb";
import React from "react";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { DetailProductStyled } from "./styled";
import DetailDescription from "./Description";
import RelatedProducts from "components/Home/common/RelatedProducts";

const Component = () => {
 const { slug } = useParams();
 const { product, isLoading } = useSelector(
  (state: RootState) => state.products
 );
 const [dataProduct, setDataProduct] = React.useState<TProduct | undefined>(
  undefined
 );
 const [breadcrumb, setBreadcrumb] = React.useState<TypeBreadCrumb[]>([]);
 const selectProductBySLug = (products: TProduct[]) => {
  const result = _.filter(products, { productHref: slug });
  if (result.length > 0) {
   setDataProduct(result[0]);
   setBreadcrumb([
    { text: "Home", href: "/" },
    { text: "Shop", href: "/shop" },
    {
     text: result[0].productName,
     href: undefined,
    },
   ]);
  }
 };

 React.useEffect(() => {
  if (!isLoading) {
   selectProductBySLug(product);
  }
 }, [product, isLoading, slug]);
 const { wishListItem }: any = useSelector(
  (state: RootState) => state.wishlist
 );

 // if (!location?.state?.product) return <Layout404 />;

 return (
  <DetailProductStyled>
   {dataProduct && (
    <>
     <div className='container'>
      <Container>
       {/* content */}
       <div className='content'>
        <div className='product__detail'>
         <div className='left'>
          <ImageDetailProduct images={dataProduct.productImages} />
         </div>
         <div className='right'>
          <InformationProduct
           product={dataProduct}
           wishlist={_.some(wishListItem, {
            productId: dataProduct.productId,
           })}
          />
         </div>
        </div>
       </div>
       <DetailDescription content={dataProduct.productDescription} />
       <RelatedProducts />
      </Container>
     </div>
     <div className='bestseller'></div>
    </>
   )}

   {/* <BestsellerProduct /> */}
   {/* <Brands backgroundColor={Colors.lightGray1} />
      <Bandage borderBottom={true} backgroundColor={Colors.white} /> */}
  </DetailProductStyled>
 );
};

export default Component;

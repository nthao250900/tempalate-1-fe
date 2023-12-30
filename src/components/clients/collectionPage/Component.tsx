import { TCategory, TProduct } from "@types";
import { Select } from "antd";
import { ProductListStyled } from "assets/styles/page/_shop";
import Container from "common/Container";
import NotFoundCommon from "common/NotFound";
import Card from "components/Home/common/Card";
import PaginationComponent from "components/Home/common/PaginationCustomize";
import { NumberPagination, calculateDiscount } from "config";
import { API_SERVER } from "helpers/variable";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";

const ProductList = () => {
 const { slug } = useParams();
 const [dataCurrent, setDataCurrent] = React.useState<TProduct[]>([]);
 const [hasNotFount, setNotFount] = React.useState<boolean>(false);

 const [dataProductList, setDataProductList] = React.useState<TProduct[]>([]);

 const { category } = useSelector((state: RootState) => state.category);
 const { product } = useSelector((state: RootState) => state.products);

 const handleFilterProduct = (slug: string, category: TCategory[]) => {
  const categoryFilter = category.filter(
   (item: TCategory) => item.href === slug
  );
  if (categoryFilter.length === 0) return setNotFount(true);
  const result = _.filter(product, { categoryCode: categoryFilter[0].id });
  setDataProductList(result);
 };

 React.useEffect(() => {
  if (product && category && slug) {
   setDataProductList(product);
   handleFilterProduct(slug, category);
  }
 }, [product, category, slug]);
 return (
  <ProductListStyled>
   {hasNotFount ? (
    <NotFoundCommon />
   ) : (
    <Container>
     <div className='cards'>
      {dataCurrent.map((product: TProduct) => {
       return (
        <Card
         title={product.productName}
         image={`${API_SERVER}/${product.productImages?.[0]}`}
         colors={JSON.parse(product.productColors)}
         sale={product.productDiscount}
         newPrice={calculateDiscount(
          Number(product.productDiscount),
          Number(product.productPrice)
         )}
         oldPrice={product.productPrice}
         href={`/shop/${product.productHref}`}
         dataProduct={product}
         key={product.productId}
        />
       );
      })}
     </div>
     <PaginationComponent
      dataAll={dataProductList}
      dataCurrent={setDataCurrent}
      total={dataProductList.length}
      numberView={9}
     />
    </Container>
   )}
  </ProductListStyled>
 );
};

export default ProductList;

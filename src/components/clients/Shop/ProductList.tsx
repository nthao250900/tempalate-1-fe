import { TCategory, TProduct } from "@types";
import { Select } from "antd";
import { ProductListStyled } from "assets/styles/page/_shop";
import Card from "components/Home/common/Card";
import PaginationComponent from "components/Home/common/PaginationCustomize";
import { NumberPagination, calculateDiscount } from "config";
import { API_SERVER } from "helpers/variable";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const ProductList = ({ product = [] }: { product: TProduct[] }) => {
 const [valuePagination, setValuePagination] = React.useState<{
  minValue: number;
  maxValue: number;
 }>({
  minValue: 0,
  maxValue: NumberPagination,
 });

 const [dataCurrent, setDataCurrent] = React.useState<TProduct[]>([]);
 const [optionFilterProduct, setOptionFilterProduct] = React.useState<
  { label: string; value: string }[]
 >([]);
 const [dataProductList, setDataProductList] = React.useState<TProduct[]>([]);
 const [valueSelectedCategory, setValueSelectedCategory] = React.useState<
  string | null
 >("all");
 const { category } = useSelector((state: RootState) => state.category);

 const formatOptionCategory = (category: TCategory[]) => {
  const result = category.map((item: TCategory) => ({
   label: item.title,
   value: item.id,
  }));
  setOptionFilterProduct([{ value: "all", label: "Tất cả" }, ...result]);
 };

 const handleFilterProduct = () => {
  if (!valueSelectedCategory || valueSelectedCategory === "all") {
   return setDataProductList(product);
  }
  const result = _.filter(product, { categoryCode: valueSelectedCategory });
  setDataProductList(result);
 };

 React.useEffect(() => {
  if (product && category) {
   setDataProductList(product);
   formatOptionCategory(category);
  }
 }, [product]);
 return (
  <ProductListStyled>
   <div className='top'>
    <div className='top__left'>
     <h5>
      Số lượng sản phẩm &#160;
      {valueSelectedCategory === "all"
       ? product?.length
       : dataProductList.length}
     </h5>
    </div>
    <div className='top__right'>
     <Select
      defaultValue='Danh mục sản phẩm'
      options={optionFilterProduct}
      value={valueSelectedCategory}
      style={{ width: 200 }}
      onChange={(value: string) => setValueSelectedCategory(value)}
     />
     <button className='button__filter' onClick={handleFilterProduct}>
      Lọc
     </button>
    </div>
   </div>
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
  </ProductListStyled>
 );
};

export default ProductList;

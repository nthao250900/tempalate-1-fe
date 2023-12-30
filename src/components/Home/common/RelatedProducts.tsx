import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TProduct } from "@types";
import { useSelector } from "react-redux";
import { RootState } from "store";
import _ from "lodash";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { API_SERVER } from "helpers/variable";
import { calculateDiscount } from "config";
import { RelatedProductsStyled } from "./styled";

const RelatedProducts = () => {
 const { product } = useSelector((state: RootState) => state.products);
 const param = useParams();
 const swiperRef = React.useRef<any>(null);
 const [dataPage, setDataPage] = React.useState<TProduct[]>();

 const randomData = (product: TProduct[]) => {
  const result = _.sampleSize(product, 12);
  setDataPage(result);
 };

 const CustomNavigation = () => (
  <div className='related-products__navigation-custom'>
   <button
    onClick={() => {
     swiperRef.current.slidePrev();
    }}
   >
    <i className='fa-solid fa-angle-left'></i>
   </button>
   <button
    onClick={() => {
     swiperRef.current.slideNext();
    }}
   >
    <i className='fa-solid fa-angle-right'></i>
   </button>
  </div>
 );

 React.useEffect(() => {
  if (product) {
   randomData(product);
  }
 }, [product, param.slug]);

 return (
  <RelatedProductsStyled>
   <div className='related-products'>
    <div className='related-products__heading'>
     <h2>SẢN PHẨM KHÁC</h2>
    </div>
   </div>
   <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={4}
    onSwiper={(swiper) => {
     swiperRef.current = swiper;
    }}
    style={{
     padding: "0 20px",
    }}
    loop={true}
    breakpoints={{
     200: {
      slidesPerView: 1,
      spaceBetween: 20,
     },
     688: {
      slidesPerView: 2,
     },
     768: {
      slidesPerView: 4,
     },
    }}
   >
    {dataPage?.map((product: TProduct, key: number) => (
     <SwiperSlide key={key} className='related-products__content-slide'>
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
     </SwiperSlide>
    ))}
    <CustomNavigation />
   </Swiper>
  </RelatedProductsStyled>
 );
};

export default RelatedProducts;

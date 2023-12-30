import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { API_SERVER } from "helpers/variable";

// import required modules
const ImageDetailProduct = ({ images }: { images: string[] }) => {
 const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

 const RenderImageSwiper = () => {
  return (
   <>
    {images.map((image, key) => (
     <SwiperSlide>
      <img src={`${API_SERVER}/${image}`} alt={`${key}`} />
     </SwiperSlide>
    ))}
   </>
  );
 };

 return (
  <>
   <div className='carousel'>
    <Swiper
     loop={true}
     spaceBetween={10}
     navigation={true}
     thumbs={{
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
     }}
     modules={[FreeMode, Navigation, Thumbs]}
     className='mySwiper2'
    >
     {RenderImageSwiper()}
    </Swiper>
   </div>
   <div className='image__list'>
    <Swiper
     onSwiper={(value) => {
      if (value) setThumbsSwiper(value);
     }}
     loop={true}
     spaceBetween={10}
     slidesPerView={4}
     freeMode={true}
     watchSlidesProgress={true}
     modules={[FreeMode, Navigation, Thumbs]}
     className='mySwiper'
    >
     {RenderImageSwiper()}
    </Swiper>
   </div>
  </>
 );
};

export default ImageDetailProduct;

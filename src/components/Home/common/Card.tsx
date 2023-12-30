import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import _ from "lodash";
import { formatter } from "components/admin/common/formatPrice";
import { TProduct } from "@types";
import { StyleCard } from "./styled";

type Props = {
 image: string;
 title: string;
 oldPrice: string;
 newPrice: string;
 colors: string[];
 sale?: string | undefined;
 href: string;
 dataProduct: TProduct | undefined;
};

const Card = ({
 image,
 title,
 oldPrice,
 newPrice,
 colors,
 sale,
 href,
 dataProduct,
}: Props) => {
 const navigate = useNavigate();
 //
 const handleNavigate = () => {
  navigate(href, { state: { product: dataProduct } });
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  });
 };
 //
 // const handleMinusWishlist = (product: TypeProduct | undefined) => {
 //   dispatch(removeWishList(product));
 // };
 return (
  <StyleCard>
   {/* {wishlist && (
    <div className='minus-wishlist'>
     <i
      className='fa-solid fa-heart-circle-minus'
      // onClick={() => handleMinusWishlist(dataProduct)}
     ></i>
    </div>
   )} */}
   {sale && (
    <div className='sale'>
     <p>{sale}%</p>
    </div>
   )}
   <div className='card' onClick={handleNavigate}>
    <div className='image'>
     <img src={image} alt={title} />
    </div>
    <div className='content'>
     <div className='title'>
      <h5>{title}</h5>
     </div>
     <div className='price'>
      <del className='price__old'>{formatter.format(Number(newPrice))}</del>
      <p className='price__new'>{formatter.format(Number(oldPrice))}</p>
     </div>
     <div className='colors'>
      <ul>
       {colors?.map((color: string, index: number) => (
        <li
         style={{ backgroundColor: color, border: "1px solid #777" }}
         key={index}
        ></li>
       ))}
      </ul>
     </div>
    </div>
   </div>
  </StyleCard>
 );
};

export default Card;

import React from "react";
import { ServiceStyled } from "./styled";
import Container from "common/Container";

export interface TDataService {
 label: string;
 img: string;
 desc: string;
}

const dataPage: TDataService[] = [
 {
  label: "24/7 Support",
  img: "/images/free-delivery-1.png",
  desc:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
 },
 {
  label: "24/7 Support",
  img: "/images/cashback.png",
  desc:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
 },
 {
  label: "24/7 Support",
  img: "/images/premium-quality.png",
  desc:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
 },
 {
  label: "24/7 Support",
  img: "/images/24-hours-support.png",
  desc:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
 },
];

const Service = () => {
 return (
  <ServiceStyled>
   <Container>
    <div className='service'>
     {dataPage.map((item: TDataService, index: number) => (
      <div className='service__item'>
       <div className='image'>
        <img src={item.img} alt={item.label} />
       </div>
       <h3>{item.label}</h3>
       <p>{item.desc}</p>
      </div>
     ))}
    </div>
   </Container>
  </ServiceStyled>
 );
};

export default Service;

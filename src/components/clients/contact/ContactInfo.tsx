import { TContactInfo } from "@types";
import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import { ContactInfoStyled } from "./styled";

const { Text } = Typography;

const ContactInfo = () => {
 const dataPage: TContactInfo = {
  address: "408 Mai Đăng Chơn, phường Hòa Qúy, quận Ngũ Hành Sơn, TP. Đà Nẵng",
  email: {
   label: "nguyenvaitaiak123@gmail.com",
   Link: "mailto:nthao250900@gmail.com",
  },
  phone: [
   {
    label: "0559352509",
    link: "tel:0559352509",
   },
  ],
 };
 return (
  <ContactInfoStyled>
   <div className='contact-info'>
    <div className='contact-info-item'>
     <i className='fa-solid fa-location-dot'></i>
     <p className='label'>
      <strong>Địa chỉ: </strong>
      {dataPage.address}
     </p>
    </div>
    <div className='contact-info-item'>
     <i className='fa-solid fa-envelope'></i>
     <p className='label'>
      <strong>Email: </strong>
      <span>{dataPage.email.label}</span>
     </p>
    </div>
    <div className='contact-info-item'>
     <i className='fa-solid fa-phone'></i>
     <p className='label'>
      <strong>Điện thoại: </strong>
      <Link to={`${dataPage.phone[0].link}`}>{dataPage.phone[0].label}</Link>
     </p>
    </div>
    {/* <div className='contact-info-item'>
     <i className='fa-brands fa-facebook'></i>
     <p className='label'>
      <strong>Fanpage: </strong>
      <Link target='window' to={infoCompany.fanpage.href}>
       {infoCompany.fanpage.label}
      </Link>
     </p>
    </div> */}
   </div>
  </ContactInfoStyled>
 );
};

export default ContactInfo;

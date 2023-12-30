import Container from "common/Container";
import React from "react";
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import ContactForm from "./FormContact";
import { ContactHomeStyled } from "./styled";

const Component = () => {
 return (
  <ContactHomeStyled>
   <Container>
    <div className='contact'>
     <div className='contact__heading'>
      <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
     </div>
     <div className='contact__information'>
      <div className='contact__information-info'>
       <div className='title'>
        <h3>Thông tin liên hệ</h3>
       </div>
       <div className='desc'>
        <p>
         Để biết thêm thông tin hoặc yêu cầu về sản phẩm, dự án và giá cả của
         chúng tôi, vui lòng liên hệ với chúng tôi.
        </p>
       </div>
       <ContactInfo />
       {/* <Social /> */}
      </div>
      <div className='map'>
       <Map />
      </div>
     </div>
    </div>
    <ContactForm />
   </Container>
  </ContactHomeStyled>
 );
};

export default Component;

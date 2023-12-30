import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const TopSessionStyled = styled.div`
 .top__session {
  text-align: center;
  .link {
   &__tag {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.main_blue};
   }
  }
  .heading {
   h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: ${({ theme }) => theme.colors.black};
   }
  }
  .title {
   h3 {
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.2px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.black};
   }
  }
  .description {
   p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.black};
   }
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
  .top__session {
   .title {
    h3 {
     font-size: 20px;
    }
   }
   .description {
    p {
     font-size: 15px;
    }
   }
  }
 }
 @media ${MinScreenDevice.laptop} {
  .top__session {
   .title {
    h3 {
     font-size: 28px;
    }
   }
  }
 }
`;

export const CarouselStyle = styled.div<any>`
 max-width: 1292px;
 margin: 0 auto;
 margin-top: 42px;
 width: 100%;
 height: 619px;
 background-image: ${(props) => props.backgroundColor};
 border-radius: 20px;

 .content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &__left {
   width: calc(100% - ${(props) => props.widthImage});
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: center;
   padding: 0 126px;
   gap: 20px;
   .year {
    h5 {
     color: #2a7cc7;
     text-transform: uppercase;
     font-weight: 600px;
    }
   }
   .title {
    h1 {
     font-size: 50px;
     font-weight: 700;
     text-transform: uppercase;
    }
   }
   .description {
    p {
     font-size: 17px;
     color: ${Colors.secondTextColor};
     font-weight: 400;
    }
   }
   .phone,
   .fax {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    p {
     font-size: 20px;
     font-weight: 700;
     line-height: 32px;
     letter-spacing: 0.1px;
     color: ${Colors.textColor};
    }
   }
   .brands {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 34px;
    font-size: 20px;
    .brand__link {
     transition: all 0.4s ease;
     &:hover {
      color: ${Colors.primaryColor};
     }
    }
   }
   .button {
    margin-top: 30px;
    .see-more {
     background-color: ${Colors.primaryColor};
     padding: 15px 40px;
     text-transform: uppercase;
     font-size: 20px;
     font-weight: 600;
     color: ${Colors.white};
     border-radius: 5px;
    }
   }
  }
  &__right {
   width: ${(props) => props.widthImage};
   height: 100%;
   img {
    width: 100%;
    height: 100%;
    object-fit: ${(props) => props.objectFit};
   }
  }
 }
 @media ${MaxScreenDevice.laptop} {
  height: 450px;
  width: calc(100% - 40px);
  .content {
   &__left {
    width: 55%;
    .title {
     h1 {
      font-size: 25px;
     }
    }
   }
   &__right {
    width: 55%;
   }
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
  width: calc(100% - 40px);
  .content {
   flex-direction: column;
   padding: 0;
   gap: 20px;
   &__left {
    width: 100%;
    height: 50%;
    text-align: center;
    align-items: center;
    padding: 0;
    gap: 8px;
    .year {
     h5 {
      font-size: 15px;
     }
    }
    .title {
     h1 {
      font-size: 25px;
     }
    }
    .description {
     p {
      font-size: 16px;
     }
    }
    .button {
     margin-top: 0;
     .see-more {
      padding: 10px 20px;
      font-size: 15px;
     }
    }
   }
   &__right {
    width: 100%;
    height: 50%;
    img {
     object-fit: contain;
    }
   }
  }
 }
`;

export const StyleCard = styled.div`
 position: relative;
 .minus-wishlist {
  position: absolute;
  color: red;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease;
  &:hover {
   transform: scale(1.1);
   color: ${Colors.secondaryColor1};
  }
 }
 .sale {
  position: absolute;
  background-color: ${Colors.secondaryColor1};
  padding: 2px 15px;
  border-radius: 0 15px 15px 0;
  top: 30px;
  left: 0px;
  p {
   color: ${Colors.white};
   font-size: 16px;
   font-weight: 500;
  }
 }
 .card {
  border-radius: 8px;
  transition: box-shadow 0.4s ease;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  p {
   margin-bottom: 0;
  }
  .image {
   width: 100%;
   height: 350px;
   img {
    width: 100%;
    height: 100%;
    object-fit: cover;
   }
  }
  .content {
   padding: 25px 0px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 10px;
   .title {
    width: 90%;
    h5 {
     font-size: 16px;
     font-weight: 700;
     line-height: 24px;
     letter-spacing: 0.1px;
     margin-bottom: 0;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
     text-align: center;
    }
   }
   .description {
    p {
     font-size: 14px;
     font-weight: 700;
     line-height: 24px;
     letter-spacing: 0.2px;
     color: ${Colors.secondTextColor};
    }
   }
   .price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    p {
     font-size: 16px;
     font-weight: 700;
     line-height: 24px;
     letter-spacing: 0.1px;
    }
    &__old {
     color: ${Colors.mutedColor};
    }
    &__new {
     color: ${Colors.secondaryColor1};
    }
   }
   .colors {
    ul {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 6.08px;
     margin-bottom: 0;
     li {
      width: 16px;
      height: 16px;
      border-radius: 50%;
     }
    }
   }
   .read__more {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.1px;
    margin-bottom: 0;
    color: ${Colors.textColor};
    transition: all 0.4s ease;
    &:hover {
     color: ${Colors.primaryColor};
    }
   }
  }
  &:hover {
   box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
   -webkit-box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
   -moz-box-shadow: 2px 2px 6px -3px rgba(91, 91, 91, 0.8);
  }
 }

 @media only screen and (${MaxScreenDevice.tablet}) {
  .image {
   width: 100%;
  }
 }
`;

export const PaginationStyled = styled.div`
 padding: 48px;
 display: flex;
 align-items: center;
 justify-content: center;
 .ant-pagination {
  display: flex;
  align-items: center;
  .ant-pagination-item {
   border: 1px solid #e9e9e9;
   padding: 10px 5px;
   height: auto;
   transition: all 0.4s ease;
   a {
    color: ${Colors.primaryColor};
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
   }
   &.ant-pagination-item-active {
    border-color: ${Colors.primaryColor};
    background-color: ${Colors.primaryColor};
    a {
     color: ${Colors.white};
    }
   }
   &:hover {
    &.ant-pagination-item-active {
     a {
      color: ${Colors.primaryColor};
     }
    }
    border-color: ${Colors.primaryColor};
    background-color: transparent;
   }
  }
  .ant-pagination-prev,
  .ant-pagination-next {
   padding: 10px;
   height: auto;
   border: 1px solid #e9e9e9;
   font-size: 14px;
   font-weight: 700;
   line-height: 24px;
   letter-spacing: 0.2px;
   color: ${Colors.primaryColor};
   transition: all 0.4s ease;
   &.ant-pagination-disabled {
    color: ${Colors.mutedColor};
   }
   &:hover {
    &.ant-pagination-disabled {
     border-color: unset;
    }

    border-color: ${Colors.primaryColor};
   }
  }
 }
`;

export const RelatedProductsStyled = styled.div`
 margin-top: 100px;
 .related-products {
  &__heading {
   h2 {
    color: ${({ theme }) => theme.colors.main_green};
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
   }
  }
  &__content-slide {
   margin: 100px 0 50px;
   transition: all 0.4s ease;
   cursor: pointer;
   &:hover {
    border-radius: 10px;
    box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 2px 5px -2px rgba(0, 0, 0, 0.75);
   }
  }
  &__navigation-custom {
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   gap: 10px;
   z-index: 2;
   button {
    background-color: ${({ theme }) => theme.colors.main_yellow};
    border: 1px solid ${({ theme }) => theme.colors.main_yellow};
    padding: 10px;
    border-radius: 3px;
    transition: all 0.4s ease;
    cursor: pointer;
    i {
     font-size: 15px;
    }
    &:hover {
     background-color: transparent;
    }
   }
  }
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  margin-top: 50px;
  .related-products {
   &__heading {
    h2 {
     font-size: 24px;
     margin-bottom: 10px;
    }
   }
   &__content-slide {
    margin-top: 50px;
   }
  }
 }
`;

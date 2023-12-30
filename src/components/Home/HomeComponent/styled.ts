import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const CollectionStyle = styled.div`
 background-color: ${Colors.lightGray1};
 .collection {
  padding: 80px 0;
  background-color: ${Colors.lightGray1};
  &__cards {
   margin-top: 48px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 242px 242px;
   gap: 16px;
   .item {
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    border-radius: 10px;
    position: relative;
    .image {
     height: 100%;
     img {
      border-radius: 10px;
      object-fit: cover;
      height: 100%;
      width: 100%;
     }
    }
    .button {
     position: absolute;
     left: 31px;
     bottom: 26px;
     &__collection {
      padding: 10px 40px;
      background-color: ${({ theme }) => theme.colors.main_color};
      color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.main_color};
      transition: all 0.4s ease;
      border-radius: 5px;
      &:hover {
       color: ${({ theme }) => theme.colors.main_color};
       background-color: ${({ theme }) => theme.colors.white};
      }
     }
    }
    &:first-child {
     grid-column: 1/3;
     grid-row: 1/3;
    }
    &:nth-child(2) {
     grid-column: 3/4;
     grid-row: 1/3;
    }
   }
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
  .collection {
   padding: 40px 20px;
   &__cards {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .item {
     width: 100%;
     .image {
      img {
       width: 100%;
       height: 100%;
      }
     }
    }
   }
  }
 }
`;
export const FeatureStyle = styled.div`
 padding: 80px 0;
 .cards {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, calc((100% / 4) - 20.5px));
  gap: 20.5px;
 }
 .button {
  margin-top: 71px;
  text-align: center;
  a {
   padding: 15px 40px;
   border: 1px solid ${Colors.primaryColor};
   border-radius: 5px;
   color: ${Colors.primaryColor};
   font-size: 14px;
   font-weight: 700;
   line-height: 22px;
   letter-spacing: 0.2px;
   transition: all 0.4s ease;
   &:hover {
    background-color: ${Colors.primaryColor};
    color: ${Colors.white};
   }
  }
 }
 @media ${MaxScreenDevice.laptop} {
  width: calc(100% - 40px);
  margin: 0 auto;
  .cards {
   grid-template-columns: repeat(3, 1fr);
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
  padding: 50px 0;
  .cards {
   margin-top: 80px;
   grid-template-columns: repeat(1, 100%);
   padding: 0 20px;
  }
 }
`;

export const ServiceStyled = styled.div`
 padding: 50px 0;
 .service {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  &__item {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 20px;
   .image {
    width: 80px;
    height: 80px;
    img {
     width: 100%;
     height: 100%;
     object-fit: contain;
    }
   }
   h3 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
   }
   p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
   }
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.mobileL}) {
  padding: 50px 20px;
  .service {
   grid-template-columns: repeat(1, 1fr);
  }
 }
`;

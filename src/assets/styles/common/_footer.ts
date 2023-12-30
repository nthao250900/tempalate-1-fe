import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const FooterStyled = styled.footer`
 background-color: black;
 height: 100%;
 .footer {
  &__top {
   padding: 50px 0;
   .items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    .item {
     &__title {
      h5 {
       font-size: 16px;
       font-weight: 700;
       line-height: 24px;
       letter-spacing: 0.1px;
       margin-bottom: 20px;
       color: ${Colors.white};
      }
     }
     ul {
      display: flex;
      align-items: start;
      justify-content: start;
      gap: 10px;
      flex-direction: column;
      li {
       font-size: 14px;
       font-weight: 700;
       line-height: 24px;
       letter-spacing: 0.2px;
       color: ${Colors.white};
      }
     }
     .form {
      &__input {
       position: relative;
       display: flex;
       align-items: center;
       justify-content: start;
       z-index: 1;
       input {
        padding: 15px 20px;
        background-color: transparent;
        z-index: 1;
        outline: none;
        border: 1px solid ${Colors.white};
        border-radius: 5px 0 0 5px;
        &:focus,
        &:not(:placeholder-shown) {
         + label {
          top: 0;
          z-index: 2;
          background-color: ${Colors.white};
         }
        }
       }
       label {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: ${Colors.white};
        padding: 0 5px;
        /*  */
        font-size: 14px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0.2px;
        /*  */
        z-index: -1;
        transition: top 0.5s ease;
       }

       .button {
        border: 0;
        &__subscribe {
         border: 0;
         font-size: 14px;
         font-weight: 400;
         line-height: 28px;
         letter-spacing: 0.2px;
         padding: 10px 22.5px;
         background-color: ${Colors.primaryColor};
         color: ${Colors.white};
         font-size: 14px;
         font-weight: 400;
         line-height: 28px;
         letter-spacing: 0.2px;
         border-radius: 0 5px 5px 0;
        }
       }
      }
      .description {
       font-size: 12px;
       font-weight: 400;
       line-height: 28px;
       letter-spacing: 0.2px;
       color: ${Colors.white};
       margin-bottom: 0;
      }
     }
    }
   }
  }
  &__bottom {
   background-color: ${Colors.dark};
   padding: 25px 0;
   p {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: ${Colors.white};
    background-color: ${Colors.dark};
    margin-bottom: 0;
   }
  }
 }
 @media only screen and (${MinScreenDevice.mobileS}) and (${MaxScreenDevice.tablet_800}) {
  .footer {
   &__top {
    padding: 50px 0;
    .items {
     grid-template-columns: repeat(1, 1fr);
     padding: 0 40px;
     .item {
      .form {
       width: 100%;
       &__input {
        width: 100%;
        z-index: 1;
        input {
         width: 100%;
        }
        .button {
         &__subscribe {
          font-size: 14px;
          padding: 13.8px 22.5px;
         }
        }
       }
      }
     }
    }
   }
   &__bottom {
    padding: 15px 0;
    text-align: center;
    p {
     font-size: 12px;
     font-weight: 500;
    }
   }
  }
 }
 @media ${MinScreenDevice.laptop} {
 }
`;

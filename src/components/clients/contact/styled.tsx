import { MaxScreenDevice } from "assets/DeviceScreen";
import styled from "styled-components";

export const ContactHomeStyled = styled.div`
 width: 100%;
 padding: 100px 0;
 .contact {
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
  &__heading {
   h1 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 10px;
    position: relative;
    &::after {
     content: "";
     width: 70px;
     height: 2px;
     background-color: ${({ theme }) => theme.colors.black};
     position: absolute;
     left: 50%;
     bottom: 0;
     transform: translateX(-50%);
    }
   }
   .desc {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    p {
     max-width: 60%;
     color: ${({ theme }) => theme.colors.black};
     font-size: 15px;
     font-weight: 400;
     text-align: center;
    }
   }
  }
  &__information {
   margin: 50px 0;
   display: flex;
   align-items: start;
   gap: 30px;
   &-info {
    width: 40%;
    .title {
     h3 {
      font-size: 20px;
      color: ${({ theme }) => theme.colors.black};
      font-weight: 500;
      text-transform: uppercase;
     }
    }
    .desc {
     margin-top: 10px;
     p {
      font-size: 15px;
      color: ${({ theme }) => theme.colors.black};
      font-weight: 400;
     }
    }
   }
   .map {
    width: 60%;
    height: 400px;
   }
  }
 }
 @media only screen and (${MaxScreenDevice.laptop}) {
  padding: 0 20px;
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  margin: 0 0 100px;
  padding: 0 20px;
  width: calc(100% - 40px);
  .contact {
   &__heading {
    h1 {
     font-size: 18px;
    }
    .desc {
     p {
      font-size: 14px;
      max-width: 100%;
     }
    }
   }
   &__information {
    flex-direction: column-reverse;
    margin: 30px 0;
    &-info {
     width: 100%;
     .title {
      h3 {
       font-size: 17px;
      }
     }
     .desc {
      margin-top: 10px;
      p {
       font-size: 13px;
      }
     }
    }
    .map {
     width: 100%;
    }
   }
  }
 }
`;

export const ContactInfoStyled = styled.div`
 .contact-info {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &-item {
   display: flex;
   align-items: start;
   gap: 10px;
   i {
    color: ${({ theme }) => theme.colors.main_green};
    font-size: 16px;
    width: 20px;
   }
   .label {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    a {
     text-decoration: none;
     transition: all 0.4s ease;
     color: ${({ theme }) => theme.colors.gray[600]};
     &:hover {
      color: ${({ theme }) => theme.colors.main_green};
     }
    }
   }
  }
 }
`;

export const ContactFormStyled = styled.div`
 .contact-form {
  margin: 50px 0 0;
  &__heading {
   h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 10px;
    position: relative;
    &::after {
     content: "";
     width: 70px;
     height: 2px;
     background-color: ${({ theme }) => theme.colors.black};
     position: absolute;
     left: 50%;
     bottom: 0;
     transform: translateX(-50%);
    }
   }
  }
  &__form {
   margin: 50px 0 100px;
   .info {
    .form-input {
     height: 50px;
     width: 100%;
    }
   }
   .form-input {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: none;
    outline: none;
    padding: 0 20px;
    border-radius: 8px;
    transition: all 0.4s ease;
    border: 1px solid ${({ theme }) => theme.colors.gray[200]};
    &::placeholder {
     font-size: 15px;
     color: ${({ theme }) => theme.colors.gray[500]};
    }
    &:focus {
     border-color: ${({ theme }) => theme.colors.main_green};
    }
   }
   textarea {
    margin-top: 20px;
    padding: 18px !important;
    width: calc(100% - 40px);
   }
  }
  &__submit {
   float: right;
   button {
    margin-top: 20px;
    padding: 8px 30px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.main_green};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    cursor: pointer;
    border: none;
    transition: all 0.5s ease;
    &:hover {
     background-color: ${({ theme }) => theme.colors.main_yellow};
     color: ${({ theme }) => theme.colors.black};
     transform: translateY(5px);
    }
   }
  }
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  padding: 0 20px;
  .contact-form {
   margin: 50px 0 0;
   &__heading {
    h2 {
     font-size: 18px;
    }
    .desc {
     p {
      font-size: 14px;
      max-width: 100%;
     }
    }
   }
   &__form {
    margin: 50px 0 100px;
    .info {
     flex-direction: column;
     .ant-col-8 {
      max-width: 100%;
     }
     .form-input {
     }
    }
   }
   &__submit {
    width: 100%;
    button {
     width: 100%;
     padding: 15px 0;
    }
   }
  }
 }
`;

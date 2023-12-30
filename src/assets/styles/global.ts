import { MaxScreenDevice } from "assets/DeviceScreen";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline:0;
    font-family: 'Roboto Condensed', sans-serif;
  }
  #root{
    margin:0 auto;
  }
  a{
    text-decoration: none;
  }
  ul li{
    list-style: none !important;
  }
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.hide-scroll::-webkit-scrollbar {
  display: none !important;
}
.hide-scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-contact {
  width: 50% !important;
 }
 .input-price{
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  font-size: 15px;
 }
 .ant-image-preview-img{
  object-fit: contain;
 }
 .admin-styled{
  padding: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.gray[200]};
  position: relative;
  .icon-edit {
   position: absolute;
   top: 0;
   right: 0;
   transform: translateY(-50%);
   .icon {
    font-size: 20px;
   }
  }
 }
 .h1-title{
  font-size: 30px;
  margin:  0 0 50px;
  text-align: center;
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  .h1-title{
  font-size: 25px;
  margin:  0 0 20px;

 }
  .modal-contact,
  .modal-mobile {
   width: 80% !important;
   .ant-row {
    button {
      margin: 10px 0;
      margin-inline-start: 0 !important;
      width: 100% !important;
    }
   }
  }
  .main-client{
    margin-top: 80px;
  }
 }
 .flex-template-editor {
  &.about {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   .about__left {
    width: 45%;
   }
   .se-component{
     width: calc(55% - 20px);
     position: relative;
     height: 70vh;
      img {
       height: 100%;
      }

   }
   .about__right {
   }
  }
 }

 @media only screen and (${MaxScreenDevice.tablet}) {
  .flex-template-editor {
   .about {
    flex-direction: column-reverse;
    padding: 50px 0;
    gap: 20px;
    &__left,
    &__right {
     width: 100%;
    }
    &__left {
     &-heading {
      h3 {
       font-size: 20px;
      }
     }
     &-desc {
      p {
       font-size: 14px;
       max-width: 100%;
      }
     }
     &-button {
      margin-top: 20px;
      button {
       padding: 5px 10px;
       font-size: 14px;
       .button-plus {
        font-size: 14px;
       }
       &:hover {
        transform: translateY(5px);
        background-color: ${({ theme }) => theme.colors.main_yellow};
       }
      }
     }
    }
    &__right {
     height: 50vh;
     .image {
      border-radius: 0;
     }
    }
   }
  }
 }
 @media only screen and (${MaxScreenDevice.laptop}) {
  .flex-template-editor {
   padding: 20px;
  }
 }

 .button-template-1{
    margin-top: 20px;
    .button {
    padding: 5px 10px;
    font-size: 14px;
     background-color: ${({ theme }) => theme.colors.main_green};
     color: ${({ theme }) => theme.colors.white};
    .button-plus {
      font-size: 14px;
    }
    &:hover {
      transform: translateY(5px);
      background-color: ${({ theme }) => theme.colors.main_yellow};
    }
  }
 }
`;

import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import styled from "styled-components";
export const HeaderStyled = styled.header`
 padding-top: 20px;
 .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__logo {
   display: flex;
   align-items: center;
   gap: 5px;
   img {
    width: 50px;
    height: 32px;
    object-fit: contain;
   }
   h1 {
    color: #000;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
   }
  }
  &__navbar {
   ul {
    display: flex;
    align-items: center;
    gap: 25px;
    li {
     list-style: none;
     .nav-link {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      transition: all 0.4s ease;
      &:hover,
      &.active {
       color: ${({ theme }) => theme.colors["main_blue"]};
      }
     }
    }
   }
  }
  &__icon-list {
   display: flex;
   align-items: center;
   gap: 20px;
   .icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: all 0.4s ease;
    path {
     transition: all 0.4s ease;
    }
    &:hover {
     path {
      fill: ${({ theme }) => theme.colors["main_blue"]};
     }
    }
    &-heart,
    &-cart {
     &:hover {
      path {
       stroke: ${({ theme }) => theme.colors["main_blue"]};
       fill: none;
      }
     }
    }
   }
  }
  .icon-bar {
   display: none;
  }
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  padding: 20px 20px 0;
  .header {
   &__logo {
   }
   &__navbar {
    display: none;
   }
   &__icon-list {
    .icon {
     display: none;
     &-user,
     &-heart,
     &-cart {
      display: block !important;
     }
    }
   }
   .icon-bar {
    display: block;
    font-size: 30px;
   }
  }
 }
`;

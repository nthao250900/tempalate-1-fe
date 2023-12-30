import { MaxScreenDevice, MinScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const DetailProductStyled = styled.div`
 .container {
  background-color: ${({ theme }) => theme.colors.white};
  .content {
   padding: 0 0 48px 0;
   .product {
    &__detail {
     width: 100%;
     min-height: 800px;
     display: flex;
     align-items: flex-start;
     gap: 30px;
     .left {
      width: 40%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .carousel {
       height: calc(80% - 20px);
       .mySwiper2 {
        height: 100%;
        width: 100%;
        img {
         width: 100%;
         height: 100%;
         object-fit: cover;
         vertical-align: middle;
        }
       }
      }
      .image__list {
       height: 20%;
       .mySwiper {
        height: 100%;
        box-sizing: border-box;
       }
       .mySwiper .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
       }
       .mySwiper .swiper-slide-thumb-active {
        opacity: 1;
       }

       .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
       }
      }
     }
     .right {
      position: relative;
      width: 50%;
      height: 80%;
      padding: 11px 24px 0;
      .info {
       display: flex;
       align-items: flex-start;
       justify-content: flex-start;
       flex-direction: column;
       gap: 20px;
       padding-bottom: 10px;
       /* border-bottom: 1px solid ${Colors.mutedColor}; */
       .title {
        h4 {
         font-size: 20px;
         font-weight: 500;
         line-height: 30px;
         letter-spacing: 0.2px;
         color: ${Colors.textColor};
         margin-bottom: 0;
        }
       }
       .rating {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
        .star {
         display: flex;
         align-items: center;
         gap: 5px;
        }
        h6 {
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
        gap: 20px;
        margin: 20px 0;
        .font {
         font-weight: 700;
         line-height: 32px;
         letter-spacing: 0.1px;
        }
        &__old {
         font-size: 18px;
         color: ${Colors.secondTextColor};
         margin-bottom: 0;
        }
        &__new {
         font-size: 30px;
         color: ${Colors.textColor};
         margin-bottom: 0;
        }
       }
       .tag {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5px;
        p {
         font-size: 14px;
         font-weight: 700;
         line-height: 24px;
         letter-spacing: 0.2px;
         margin-bottom: 0;
        }
        &__title {
         p {
          color: ${Colors.textColor};
         }
        }
        &__list {
         display: flex;
         align-items: center;
         justify-content: flex-start;
         gap: 10px;
         flex-wrap: wrap;
         p {
          color: ${Colors.primaryTextColor};
         }
        }
       }
       .description {
        p {
         font-size: 14px;
         font-weight: 400;
         line-height: 20px;
         letter-spacing: 0.2px;
         color: ${Colors.secondTextColor};
        }
       }
      }
      .colors {
       margin-top: 29px;
       &__list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        .ant-tag-checkable-checked {
         border-color: ${({ theme }) => theme.colors.main_blue} !important;
         transform: scale(1.2);
        }
        &-item {
         width: 30px;
         height: 30px;
         border-radius: 50%;
        }
       }
      }
      .bottom {
       margin-top: 30px;
       display: flex;
       align-items: center;
       justify-content: flex-start;
       gap: 10px;
       button {
        color: ${Colors.white};
        border-radius: 5px;
        background-color: ${Colors.primaryTextColor};
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0.2px;
        border: 1px solid ${Colors.primaryColor};
        transition: all 0.4s ease;
        i {
         margin-right: 10px;
        }
        &:hover {
         background-color: transparent;
         color: ${Colors.primaryColor};
        }
       }
       .icon__wishlist {
        padding: 10px;
        cursor: pointer;
        transition: all 0.4s ease;
        border: 1px solid transparent;
        border-radius: 5px;
        &:hover {
         border-color: ${Colors.primaryColor};
         color: ${Colors.primaryColor};
        }
       }
      }
     }
    }
   }
  }
 }
 .description {
  margin: 10px 20px 9px;
  .ant-tabs-nav {
   &::before {
    border-bottom-width: 2px;
    border-bottom-color: #ececec;
   }
   .ant-tabs-nav-wrap {
    justify-content: center;
    padding: 24px 0;

    .ant-tabs-tab-btn {
     color: ${Colors.secondTextColor};
     font-size: 14px;
     font-weight: 700;
     line-height: 24px;
     letter-spacing: 0.2px;
    }
    .ant-tabs-tab-active {
     .ant-tabs-tab-btn {
      color: ${Colors.textColor};
     }
    }
    .ant-tabs-ink-bar {
     background-color: ${Colors.textColor};
    }
   }
  }

  .tabs {
  }
  /* .tabs {
      margin: 10px 0 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px 0;
      gap: 48px;
      &__item {
        position: relative;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0.2px;
        color: ${Colors.secondTextColor};
        cursor: pointer;
        transition: all 0.3s ease;
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          background-color: ${Colors.textColor};
          bottom: 0;
          left: 0;
          transition: width 0.4s ease;
        }
        &:hover {
          color: ${Colors.textColor};
          &::before {
            width: 100%;
          }
        }
      }
    } */
 }
 @media only screen and(${MaxScreenDevice.tablet_800}) {
  .container {
   .content {
    .product {
     &__detail {
      flex-direction: column;
      height: 100%;

      .left {
       flex-direction: row;
       height: 60vh;
       width: 100%;
       .carousel {
        width: calc(80% - 20px);
        height: 100%;
       }
       .image__list {
        width: 20%;
        height: 100%;
        .swiper-wrapper {
         width: 100%;
         height: calc((100% / 4) - 20px);
         flex-direction: column;
         gap: 20px;
         .swiper-slide {
          width: 100% !important;
         }
        }
       }
      }
      .right {
       width: 100%;
       height: calc(100% - 50vh);
       .image__list {
        height: 100%;
       }
       .bottom {
        position: unset;
        margin-top: 20px;
       }
      }
     }
    }
   }
  }
 }
 @media only screen and (${MaxScreenDevice.mobileL}) {
  .container {
   .content {
    .product {
     &__detail {
      flex-direction: column;
      height: 100%;
      .left,
      .right {
       width: 100%;
      }
      .left {
       flex-direction: column;
       height: 50vh;
       .carousel {
        width: 100%;
        height: 80%;
       }
       /* .image__list {
                width: 100%;
                height: 20%;
                .swiper-wrapper {
                  width: calc((100% / 4) - 20px);
                  height: 100%;
                  flex-direction: row;
                  justify-content: flex-start;
                  gap: 20px;
                }
              } */
      }
      .right {
       height: calc(100% - 50vh);
       .bottom {
        position: unset;
        margin-top: 20px;
       }
      }
     }
    }
   }
  }
 }
`;

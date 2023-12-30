import Colors from "modules/Colors";
import styled from "styled-components";
export const StyledCart = styled.div`
 padding: 50px 0;
 .ant-table-thead {
  .ant-table-cell {
   background-color: transparent;
   border: none;
  }
 }
 .shopping__curt {
  padding: 100px 0;
  display: flex;
  gap: 30px;
  .table {
   width: 100%;
   th {
    font-family: "Josefin Sans";
    font-size: 16px;
    line-height: 23px;
    font-weight: 600;
    color: ${Colors.navyBlue};
   }
   .css-1p2cbqg {
    height: 150px;
   }
   td {
    text-align: center;
   }
   .information__product {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 10px;
    .image {
     img {
      width: 83px;
      height: 87px;
      object-fit: cover;
     }
    }
    .information {
     width: 60%;
     .name {
      h4 {
       width: 100%;
       font-family: "Josefin Sans";
       font-size: 13px;
       line-height: 16px;
       color: ${Colors.navyBlue};
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
      }
     }
     .color {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      h4 {
       font-family: "Josefin Sans";
       font-size: 12px;
       line-height: 14px;
       color: ${Colors.secondTextColor};
      }
      div {
       width: 15px;
       height: 15px;
       border-radius: 50%;
      }
     }
    }
   }
  }
 }
 .table__bottom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 }
 .button {
  margin-top: 46px;
  button,
  .button__completed {
   display: block;
   width: 100%;
   padding: 11px 0;
   text-align: center;
   background-color: ${Colors.secondaryColor1};
   border: 1px solid ${Colors.secondaryColor1};
   border-radius: 8px;
   color: ${Colors.white};
   font-family: "Lato";
   font-style: normal;
   font-weight: 700;
   font-size: 14px;
   line-height: 17px;
   transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
   &:hover {
    color: ${Colors.secondaryColor1};
    background-color: transparent;
   }
  }
 }
 .payment {
  &__total {
   &-view {
    border-radius: 8px;
    background-color: #f4f4fc;
    width: calc((300px - 30px));
    padding: 36px 31px;
    .item {
     display: flex;
     justify-content: space-between;
     align-items: center;
     font-family: "Lato";
     font-style: normal;
     color: ${Colors.navyBlue};
     padding-bottom: 13px;
     border-bottom: 1px solid ${Colors.textColor};
     h4 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
     }
     span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
     }
     &:not(:first-child) {
      margin-top: 40px;
     }
    }
   }
  }
 }
`;

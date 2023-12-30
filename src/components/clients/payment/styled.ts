import Colors from "modules/Colors";
import styled from "styled-components";
export const StyledPay = styled.div`
 margin: 100px 0;
 min-height: 100vh;
 .pay {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  &__left {
   width: 50%;
   .rccs {
    margin: 20px 0;
   }
   .title {
    h3 {
     font-size: 24px;
     font-style: normal;
     font-weight: 600;
     line-height: 28px;
     letter-spacing: -0.48px;
    }
   }
  }
  &__right {
   width: 50%;
   .title {
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid ${Colors.secondaryColor1};
    display: block;

    h1 {
     color: ${Colors.dark};
     /* Sub Headline 1 */
     font-family: Inter;
     font-size: 24px;
     font-style: normal;
     font-weight: 600;
     line-height: 28px; /* 116.667% */
     letter-spacing: -0.48px;
    }
   }
   &-content {
    padding: 36px 0;
   }
   &-gift_code {
    padding: 36px 0;
    border-bottom: 1px solid ${Colors.secondaryColor1};
    border-top: 1px solid ${Colors.secondaryColor1};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    .input {
     width: calc(80% - 10px);
    }
    .button {
     background-color: ${Colors.secondaryColor1};
     width: 20%;
     color: ${Colors.white};
    }
   }
   &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label,
    .text {
     margin: 20px 0;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 12px;
    }
    &:last-child {
     padding-top: 20px;
     margin-top: 20px;
     border-top: 1px solid ${Colors.secondaryColor1};
     span {
      color: #acacac;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
     }
     .text {
      font-size: 18px;
     }
    }
   }
  }
  &__with {
   margin: 20px 0;
   &-title {
    h4 {
     color: ${Colors.dark};
     font-size: 18px;
     font-style: normal;
     font-weight: 600;
     line-height: 12px;
    }
   }
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 16px;
  }
 }
`;
export const StyledOrder = styled.div<any>`
 height: 100px;
 width: 100%;
 margin: 20px 0;
 .order {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  &__left {
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 10px;
   .image {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    /* border: 1px solid var(--stroke, #acacac); */
    background: url(${(props) => props.bgImage}),
     lightgray 0px -15.773px / 100% 125.065% no-repeat;
    background-size: cover;
   }
   .info {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    h4 {
     font-size: 20px;
     font-style: normal;
     font-weight: 400;
     line-height: 22px;
    }
   }
  }
  &__right {
   margin: 10px 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
   .price {
    p {
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: 22px;
    }
   }
   .quantity {
    color: #acacac;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
   }
  }
 }
`;

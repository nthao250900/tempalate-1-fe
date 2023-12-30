import styled from "styled-components";
import { MaxScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";

export const ProductListStyled = styled.div`
 .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  .button__filter {
   cursor: pointer;
   border: 0;
  }
  h5 {
   font-size: 14px;
   font-weight: 700;
   line-height: 24px;
   letter-spacing: 0.2px;
   color: ${({ theme }) => theme.colors.black};
  }
  &__center {
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;
   i {
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover,
    &.active {
     color: ${({ theme }) => theme.colors.main_blue};
     border-color: ${({ theme }) => theme.colors.main_blue};
    }
   }
  }
  &__right {
   .button__filter {
    margin-left: 15px;
    background-color: ${({ theme }) => theme.colors.main_blue};
    color: ${Colors.white};
    padding: 5px 27px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.2px;
   }
  }
 }
 .cards {
  padding: 50px 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, calc((100% / 4) - 20px));
  gap: 20px;
 }
 @media only screen and (${MaxScreenDevice.laptop}) {
  margin: 0 auto;
  .cards {
   grid-template-columns: repeat(3, 1fr);
  }
 }
 @media only screen and (${MaxScreenDevice.tablet}) {
  .top {
   flex-direction: column;
   gap: 15px;
  }
  .cards {
   padding: 50px 20px;
   grid-template-columns: repeat(1, calc(100% - 40px));
  }
 }
`;

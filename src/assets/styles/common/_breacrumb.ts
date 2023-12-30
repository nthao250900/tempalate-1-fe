import Colors from "modules/Colors";
import styled from "styled-components";

export const BreadcrumbStyled = styled.div`
 background-color: transparent !important;
 padding: 24px 20px;
 .breadcrumb {
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__left {
   h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: ${({ theme }) => theme.colors.black};
   }
  }
  &__right {
   ul {
    display: flex;
    align-items: center;
    gap: 15px;
    li {
     position: relative;
     font-size: 14px;
     font-weight: 700;
     line-height: 24px;
     letter-spacing: 0.2px;
     .link {
      color: ${({ theme }) => theme.colors.black};
      &::after {
       content: "\f105";
       margin-left: 15px;
       font-family: "Font Awesome 5 Free";
       color: ${Colors.mutedColor};
      }
     }
     span {
      color: ${({ theme }) => theme.colors.gray[400]};
     }
    }
   }
  }
 }
`;

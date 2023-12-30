import styled from "styled-components";

interface Props {
 width: string;
 visibility: string;
}

export const DrawerStyled = styled.div`
 .drawer {
  height: 100%;
  width: 80%;
  z-index: 999999999;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.4s ease;
  transform: translateX(-100vw);
  &.active {
   transform: translateX(0);
  }
  .dropdown-menu {
   position: relative;
   width: 100%;
   height: 100%;
   padding: 60px 0 0 0;
   background: ${({ theme }) => theme.colors.green[800]};
   .close {
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 25px;
   }
   li {
    &.active-parent {
     background: ${({ theme }) => theme.colors.green[700]};
    }
    position: relative;
    a,
    p {
     text-decoration: none;
     text-transform: capitalize;
     display: block;
     padding: 15px 20px;
     color: ${({ theme }) => theme.colors.white};
     border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
     &:hover {
      color: ${({ theme }) => theme.colors.white};
     }
    }
    .icon-menu {
     color: ${({ theme }) => theme.colors.white};
     position: absolute;
     top: 8px;
     right: 10px;
     font-size: 14px;
     padding: 8px;
     cursor: pointer;
    }
   }
   .sub-menu {
    background: ${({ theme }) => theme.colors.green[700]};
    display: none;
    a {
     padding-left: 40px;
     color: ${({ theme }) => theme.colors.white};
     &:hover {
      color: ${({ theme }) => theme.colors.white};
     }
    }
   }
   .search-icon {
    margin: 20px;
    color: ${({ theme }) => theme.colors.green[400]};
    transition: color 0.4s ease;
    cursor: pointer;
    position: relative;
    height: 40px;
    width: calc(100% - 60px);
    input {
     height: 100%;
     width: calc(100% - 10px);
     outline: none;
     border-radius: 5px;
     border: 1px solid ${({ theme }) => theme.colors.gray[300]};
     padding: 0 0 0 10px;
    }
    i {
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     right: 0;
     height: 100%;
     width: 50px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-left: 1px solid ${({ theme }) => theme.colors.gray[300]};
    }
   }
  }
 }
`;

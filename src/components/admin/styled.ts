import styled from "styled-components";
export const StyleSidebar = styled.div`
 width: 100%;
 min-height: 100vh;
 height: 100%;
 background-color: ${({ theme }) => theme.colors.white};
 padding: 20px 18px;
 .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 44px;
  .logo {
   display: flex;
   align-items: center;
   gap: 10px;
   img {
    width: 28px;
    height: 24px;
   }
   p {
    font-size: 22px;
    font-weight: bold;
    padding: 0;
    margin: 0;
   }
  }
  .toggle {
   img {
    width: 24px;
    height: 24px;
    cursor: pointer;
   }
  }
 }
 ul {
  .title__routes {
   padding: 15px 0;
   p {
    color: #8b909a;
    text-transform: uppercase;
    font-size: 13px;
   }
  }
 }
 .link {
  background-color: transparent;
  color: #8b909a;
  list-style-type: none;
  border-radius: 6px;
  padding: 10px 15px;
  margin-bottom: 8px;
  &.active {
   background-color: #f3f4f8;
   color: #000000;
  }
  li {
   display: flex;
   align-items: center;
   gap: 16px;

   p {
    padding: 0;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
   }
  }
 }
`;

export const StyleHeaderAdmin = styled.div`
 display: flex;
 width: 100%;
 height: 100%;
 align-items: center;
 justify-content: space-between;
 .header {
  &__right {
   display: flex;
   align-items: center;
   gap: 30px;
   i {
    color: ${({ theme }) => theme.colors.gray[700]};
    font-size: 20px;
   }
  }
 }
`;

export const StyleLayoutNotification = styled.div`
 padding: 10px 20px;
 min-width: 30vw;
 p {
  margin-bottom: 0 !important;
 }
 .top {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
   font-size: 12px;
   font-weight: 500;
   line-height: 22px;
  }
  .title {
   font-size: 20px;
  }
 }
 .content__notification {
  max-height: 50vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  cursor: pointer;
  ::-webkit-scrollbar {
   width: 10px;
  }
  ::-webkit-scrollbar-track {
   border-radius: 10px;
   background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
   background: #888;
   border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
   background: #555;
   border-radius: 10px;
  }
  .item {
   .content {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    .title {
     font-size: 15px;
     font-weight: bold;
     color: #000000;
    }
    .des {
     font-size: 14px;
     font-weight: 500;
     color: #595959;
    }
    .date {
     font-size: 13px;
     font-weight: 400;
     font-style: italic;
     color: #595959;
    }
   }
   &:last-child {
    .hr {
     display: none;
    }
   }
  }
 }
`;

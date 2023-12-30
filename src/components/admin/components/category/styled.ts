import styled from "styled-components";
export const CategoryAdminStyled = styled.div`
 .ant-tree-block-node {
  height: 100%;
  padding: 20px 0;
  background-color: transparent;
 }
 .header {
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 99;
  padding: 0 20px;
  .heading {
   text-transform: uppercase;
   font-weight: 600;
  }
 }
`;

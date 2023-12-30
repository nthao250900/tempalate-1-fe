import React from "react";
import Icon from "@ant-design/icons";
import Container from "./Container";
const NotFoundCommon = () => {
 return (
  <Container>
   <div
    style={{
     minHeight: "calc(100vh - 150px)",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
    }}
   >
    <img
     src='/icons/404_error.svg'
     style={{
      width: "70vh",
     }}
     alt='error-404-not-found'
    />
   </div>
  </Container>
 );
};

export default NotFoundCommon;

import { Button } from "antd";
import Container from "common/Container";
import React from "react";
import { useNavigate } from "react-router-dom";

const Component = () => {
 const navigate = useNavigate();
 return (
  <Container>
   <div
    style={{
     minHeight: "calc(100vh - 150px)",
     display: "flex",
     alignItems: "center",
     justifyContent: "center",
     flexDirection: "column",
    }}
   >
    <img
     src='/icons/Authentication-bro.svg'
     style={{
      width: "70vh",
     }}
     alt='confirm'
    />
    <Button
     onClick={() =>
      (window.location.href = "https://mail.google.com/mail/u/0/")
     }
    >
     ĐI TỚI EMAIL
    </Button>
   </div>
  </Container>
 );
};

export default Component;

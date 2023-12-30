import { Flex, Spin } from "antd";
import React from "react";

const LoadingV2 = () => {
 return (
  <Flex
   style={{
    width: "100%",
    height: "100%",
   }}
   justify='center'
   align='center'
  >
   <Spin />
  </Flex>
 );
};

export default LoadingV2;

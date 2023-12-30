import { Spin } from "antd";
import React from "react";
import Lottie from "react-lottie";
const Loading = () => {
 //  const defaultOptions = {
 //   loop: true,
 //   autoplay: true,
 //   animationData: animationData,
 //   rendererSettings: {
 //    preserveAspectRatio: "xMidYMid slice",
 //   },
 //  };
 return (
  <div>
   <Spin />
  </div>
 );
};

export default Loading;

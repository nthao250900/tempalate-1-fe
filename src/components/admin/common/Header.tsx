import { Flex, Typography } from "antd";
import React, { ReactNode } from "react";
const { Title } = Typography;

const Heading = ({
 children,
 title,
}: {
 children: ReactNode;
 title: string;
}) => {
 return (
  <Flex
   style={{
    margin: "20px 0",
   }}
   align='center'
   justify='space-between'
  >
   <Title
    level={4}
    style={{
     textTransform: "uppercase",
    }}
   >
    {title}
   </Title>
   <Flex gap='small' wrap='wrap'>
    {children}
   </Flex>
  </Flex>
 );
};

export default Heading;

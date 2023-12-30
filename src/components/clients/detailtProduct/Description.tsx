import React from "react";
import parse from "html-react-parser";
import Container from "common/Container";
import { Typography } from "antd";

const { Title } = Typography;
const DetailDescription = ({ content }: { content: string }) => {
 return (
  <div
   style={{
    padding: "50px 0",
   }}
  >
   <Container>
    <Title style={{ textTransform: "uppercase" }} level={3}>
     Mô tả sản phẩm
    </Title>

    {content && (
     <div
      className='sun-editor-editable'
      dangerouslySetInnerHTML={{ __html: content }}
     />
    )}
   </Container>
  </div>
 );
};

export default DetailDescription;

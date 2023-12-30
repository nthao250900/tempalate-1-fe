import { TProduct } from "@types";
import React from "react";
import { Button, Divider, Flex, Row, Tag, Typography } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Action from "../products/Action";
import PreviewImages from "../products/PreviewImages";

const { Text, Link, Title } = Typography;

type TProps = {
 productInformation: TProduct;
};

const InformationProduct = ({ productInformation }: TProps) => {
 const navigate = useNavigate();

 return (
  <div
   style={{
    minHeight: "80vh",
    height: "80vh",
    overflowY: "auto",
   }}
  >
   <div className='header'>
    <Row justify={"space-between"}>
     <Title className='heading' level={5}>
      {productInformation.productName}
     </Title>
     <>
      <Flex wrap='wrap' gap='small'>
       <Button
        icon={<EyeOutlined />}
        type='primary'
        onClick={() => navigate("/san-pham/" + productInformation.productHref)}
       />
       <Action
        record={{
         ...productInformation,
         productImages: JSON.stringify(productInformation.productImages),
        }}
       />
      </Flex>
     </>
    </Row>
   </div>

   <Flex gap={10} align='center'>
    <Text strong>
     Hình ảnh ({productInformation.productImages.length} hình ảnh):
    </Text>
    <PreviewImages image={JSON.stringify(productInformation.productImages)} />
   </Flex>
   <Divider />
   <Flex gap={10} align='center'>
    <Text strong>Tên sản phẩm:</Text>
    <Text>{productInformation.productName}</Text>
   </Flex>
   <Divider />
   <Flex gap={10} align='center'>
    <Text strong>Trạng thái:</Text>
    {productInformation.productActive === 1 ? (
     <Tag color='#87d068'>CÔNG KHAI</Tag>
    ) : (
     <Tag color='#f50'>CHƯA CÔNG KHAI</Tag>
    )}
   </Flex>
   <Divider />
   <Flex gap={10} align='center'>
    <Text strong>Mã sản phẩm:</Text>
    <Text>{productInformation.productCode}</Text>
   </Flex>
   <Divider />
   <Flex gap={10} align='center'>
    <Text strong>Thương hiệu:</Text>
    <Text>{productInformation.productTrademark}</Text>
   </Flex>

   <Divider />
   <Flex gap={10} align='start'>
    <Text strong>Thông số:</Text>
    <div
     className='sun-editor-editable'
     dangerouslySetInnerHTML={{ __html: productInformation.productParameter }}
    />
   </Flex>
   <Divider />
   <Flex gap={10} align='start'>
    <Text strong>Mô tả chi tiết:</Text>
    <div
     className='sun-editor-editable'
     dangerouslySetInnerHTML={{ __html: productInformation.productDescription }}
    />
   </Flex>
  </div>
 );
};

export default InformationProduct;

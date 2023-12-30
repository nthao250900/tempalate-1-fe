import { Flex, Image, Tag, Typography } from "antd";

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TCart } from "./Table";
import { API_SERVER } from "helpers/variable";
import { theme } from "theme";

interface Props {
 record: TCart;
}

const { Link: LinkAntd } = Typography;

const ViewInfoComponent = ({ record }: Props) => {
 const [imageArr, setImageArr] = React.useState<string[]>();

 const onFormatUrlImage = React.useCallback(() => {
  const newImageArr: string[] = [];
  record.productImages.map((image: string) => {
   return newImageArr.push(`${API_SERVER}/${image}`);
  });
  setImageArr(newImageArr);
 }, [record.productImages]);
 const navigate = useNavigate();
 const handleSeeMore = () => {
  const { cartQuantity, ...product } = record;
  navigate(record.productHref, { state: { product: product } });
 };
 React.useEffect(() => {
  onFormatUrlImage();
 }, [onFormatUrlImage]);

 return (
  <div
   style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
   }}
  >
   <Image width={150} src={`${API_SERVER}/${record.productImages[0]}`} />

   <div className='info'>
    <h3
     style={{
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
     }}
    >
     {record.productName}
    </h3>
    <Flex align='center' gap={20}>
     <strong>Size: </strong>
     <Tag>{JSON.parse(record.productSize)?.[0]}</Tag>
    </Flex>
    <Flex align='center' gap={20}>
     <strong>Màu: </strong>
     <Tag
      style={{
       backgroundColor: JSON.parse(record.productColors)?.[0],
       border: `1px solid ${theme.colors.gray[400]}`,
       width: 20,
       height: 20,
      }}
     />
    </Flex>
   </div>
  </div>
 );
};

export default ViewInfoComponent;

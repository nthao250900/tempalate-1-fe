import { Image, Typography } from "antd";
import { API_SERVER } from "helpers/variable";
import React from "react";

type TProps = {
 image: string;
};
const { Link } = Typography;

const PreviewImages = ({ image }: TProps) => {
 const [imageList, setImageList] = React.useState<string[]>([]);

 const [visibleImage, setVisibleImage] = React.useState<boolean>(false);
 const onFormatImage = () => {
  const images: any = JSON.parse(image || "[]");
  const imageArr = images.map((item: string) => API_SERVER + "/" + item);
  return setImageList(imageArr);
 };

 React.useEffect(() => {
  onFormatImage();
 }, [image]);
 return (
  <>
   <Image.PreviewGroup
    items={imageList}
    preview={{
     visible: visibleImage,
     onVisibleChange: (value) => {
      setVisibleImage(value);
     },
    }}
   />
   <Link onClick={() => setVisibleImage(true)}>Xem hình ảnh</Link>
  </>
 );
};

export default PreviewImages;

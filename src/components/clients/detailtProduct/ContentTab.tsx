import { Divider } from "antd";
import React, { ReactNode } from "react";
import ShowMoreText from "react-show-more-text";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
const ContentTabDetailProduct = ({ children }: { children: ReactNode }) => {
 const executeOnClick = (isExpanded: any) => {
  console.log(isExpanded);
 };

 return (
  <ShowMoreText
   /* Default options */
   lines={7}
   more={
    <Divider>
     <div
      style={{
       border: "1px solid #777",
       width: 30,
       height: 30,
       borderRadius: "50%",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
      }}
     >
      <DownOutlined
       style={{
        fontSize: 18,
       }}
      />
     </div>
    </Divider>
   }
   less={
    <Divider>
     <div
      style={{
       border: "1px solid #777",
       width: 30,
       height: 30,
       borderRadius: "50%",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
      }}
     >
      <UpOutlined
       style={{
        fontSize: 18,
       }}
      />
     </div>
    </Divider>
   }
   className='content-css'
   anchorClass='show-more-less-clickable'
   onClick={executeOnClick}
   expanded={false}
   truncatedEndingComponent={"... "}
  >
   {children}
  </ShowMoreText>
 );
};

export default ContentTabDetailProduct;

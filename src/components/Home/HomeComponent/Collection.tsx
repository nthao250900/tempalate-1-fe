import React from "react";

import { Link } from "react-router-dom";
import Container from "common/Container";
import TopSession from "../common/TopSession";
import { CollectionStyle } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TCategory } from "@types";
import { API_SERVER } from "helpers/variable";

const Collection = () => {
 const { category } = useSelector((state: RootState) => state.category);

 return (
  <CollectionStyle>
   <Container>
    <div className='collection'>
     <div className='collection__top'>
      <TopSession
       title="Editor's Pick"
       description='Problems trying to resolve the conflict between'
      />
     </div>
     <div className='collection__cards'>
      {category.slice(0, 4).map((item: TCategory) => (
       <div className='item'>
        <div className='image'>
         <img src={`${API_SERVER}/${item.imageThumbnail}`} alt={item.href} />
        </div>
        <div className='button'>
         <Link className='button__collection' to={"/collection/" + item.href}>
          {item.title}
         </Link>
        </div>
       </div>
      ))}
     </div>
    </div>
   </Container>
  </CollectionStyle>
 );
};

export default Collection;

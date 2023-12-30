import React from "react";
import { Link } from "react-router-dom";
import { TopSessionStyled } from "./styled";

type Props = {
 link?:
  | {
     url: string;
     text: string;
    }[]
  | undefined;
 heading?: string | undefined;
 title?: string | undefined;
 description?: string | undefined;
};

const TopSession = ({ link, heading, title, description }: Props) => {
 return (
  <TopSessionStyled>
   <div className='top__session'>
    {link && (
     <div className='link'>
      <Link className='link__tag' to={`${link?.[0]?.url}`}>
       {link?.[0]?.text}
      </Link>
     </div>
    )}
    {heading && (
     <div className='heading'>
      <h2>{heading}</h2>
     </div>
    )}
    {title && (
     <div className='title'>
      <h3>{title}</h3>
     </div>
    )}
    {description && (
     <div className='description'>
      <p>{description}</p>
     </div>
    )}
   </div>
  </TopSessionStyled>
 );
};

export default TopSession;

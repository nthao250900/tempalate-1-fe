import { Flex, Pagination, PaginationProps } from "antd";
import React from "react";

type TProps = {
 total: number;
 dataAll: any[];
 dataCurrent: Function;
 numberView: number;
};

const PaginationComponent = ({
 total,
 dataAll,
 dataCurrent,
 numberView,
}: TProps) => {
 const [current, setCurrent] = React.useState<number>(1);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   left: 0,
   behavior: "smooth",
  });
 };

 const onChange: PaginationProps["onChange"] = (page) => {
  setCurrent(page);
  dataCurrent(dataAll.slice(page * numberView - numberView, page * numberView));
  scrollToTop();
 };
 React.useEffect(() => {
  setCurrent(1);
  dataCurrent(dataAll.slice(0, numberView));
 }, [dataAll]);
 return (
  <Flex
   justify='center'
   align='center'
   style={{
    margin: "50px 0",
   }}
  >
   <div className='pagination'>
    <Pagination
     defaultCurrent={current}
     current={current}
     total={total}
     onChange={onChange}
    />
   </div>
  </Flex>
 );
};

export default PaginationComponent;

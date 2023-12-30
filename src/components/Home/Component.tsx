import Header from "common/Header";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import React from "react";
import { getAllProduct } from "features/slices/Products";
import Loading from "common/Loading";
import { getAllCategory } from "features/slices/Category";
import { Modal } from "antd";
import { AccessEmail } from "components/clients/confirm";
import { selectCart } from "features/slices/Cart";
import { getAllOrder } from "features/slices/Order";
import Footer from "common/Footer";
const Component = () => {
 const dispatch = useDispatch<AppDispatch>();
 const { isLoading: isLoadingProduct } = useSelector(
  (state: RootState) => state.products
 );
 const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
 const { user } = useSelector((state: RootState) => state.auth);
 const { isLoading: isLoadingCategory } = useSelector(
  (state: RootState) => state.category
 );
 const { isLoading: isLoadingOrder } = useSelector(
  (state: RootState) => state.order
 );

 React.useEffect(() => {
  setVisibleModal(user?.infoUser.accountActive === 0);
  if (user) {
   dispatch(selectCart(user.infoUser.accountId));
   dispatch(getAllOrder(user.infoUser.accountId));
  }
 }, [user]);

 React.useEffect(() => {
  dispatch(getAllProduct());
  dispatch(getAllCategory());
 }, [dispatch]);

 return (
  <>
   {isLoadingProduct && isLoadingCategory && isLoadingOrder ? (
    <Loading />
   ) : (
    <>
     <Modal
      onCancel={() => setVisibleModal(false)}
      width={"70%"}
      centered
      footer={null}
      open={visibleModal}
     >
      <AccessEmail />
     </Modal>
     <Header />
     <main style={{ marginTop: 80 }}>
      <Outlet />
     </main>
     <Footer />
    </>
   )}
  </>
 );
};

export default Component;

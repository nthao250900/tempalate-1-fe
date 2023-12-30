import React from "react";
import { Button, Form, Input, Spin, message } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { login, logout, register, reset } from "features/slices/Auth";
import { StyleSignIn } from "./styled";

interface Values {
 email: string;
 password: string;
 fullName: string;
 username: string;
}

const SignIn = () => {
 const [isSignIn, setIsSignIn] = React.useState<boolean>(true);
 const [isSubmitted, setSubmitted] = React.useState<boolean>(false);
 const [isLoadingPages, setIsLoadingPages] = React.useState<boolean>(false);
 const [form] = Form.useForm();

 const navigate = useNavigate();
 const location = useLocation();

 const {
  user,
  isLoading,
  isError,
  isSuccess,
  message: messageAuth,
 } = useSelector((state: RootState) => state.auth);
 const dispatch = useDispatch<AppDispatch>();

 React.useEffect(() => {
  // localStorage.removeItem("user_login");
  if (isError) message.error(messageAuth);
  if (isSuccess || user) {
   setIsLoadingPages(true);
   setTimeout(() => {
    setIsLoadingPages(false);
   }, 3000);
  }
  dispatch(reset());
 }, [user, isLoading, isError, isSuccess, messageAuth, navigate, dispatch]);

 React.useEffect(() => {
  dispatch(logout());
  setIsLoadingPages(false);
  setIsSignIn(location.pathname.split("/")?.[2] === "sign-in");
 }, [setIsSignIn, location]);

 const onSubmit = (values: Values) => {
  setIsLoadingPages(true);

  if (isSignIn) {
   dispatch(
    login({
     username: values.username,
     password: values.password,
    })
   );
  } else {
   dispatch(
    register({
     email: values.email,
     fullName: values.fullName,
     username: values.username,
     password: values.password,
    })
   );
  }
 };
 return (
  <>
   <StyleSignIn>
    <div className='sign-in'>
     <div className='left'>
      <img src='/images/sign-in-logo.jpg' alt='' />
     </div>
     <div className='right'>
      <div className='content'>
       <div className='title'>
        <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
       </div>
       {/* <div className='sign-in-with'>
       <div className='sign-in-with-google'>
        <button>
         <img src='/images/logo-google.png' alt='logo google' />
         <p>Sign Up with Google</p>
        </button>
       </div>
       <div className='sign-in-with-facebook'>
        <button>
         <img src='/images/logo-facebook.png' alt='logo google' />
         <p>Sign Up with Facebook</p>
        </button>
       </div>
      </div> */}
       {/* <p className='or'>-OR-</p> */}
       <Form form={form} className='form' onFinish={onSubmit} layout='vertical'>
        {!isSignIn && (
         <>
          <Form.Item name={"fullName"} label={"FullName"}>
           <Input className='form__input' type='text' />
          </Form.Item>
          <Form.Item name={"email"} label={"E-Mail Address"}>
           <Input className='form__input' type='text' />
          </Form.Item>
         </>
        )}
        <Form.Item name={"username"} label={"Username"}>
         <Input className='form__input' type='text' />
        </Form.Item>
        <Form.Item name={"password"} label={"Password"}>
         <Input className='form__input' type='password' />
        </Form.Item>
        <Form.Item>
         <Button
          loading={isLoadingPages}
          style={{
           height: 55,
          }}
          htmlType='submit'
          className='button__sign-in'
         >
          {isSignIn ? "Create Account" : "Sign In"}
         </Button>
        </Form.Item>
       </Form>
       <p className='have-an-account'>
        {isSignIn ? "Don't" : "Already"} have an account ?
        <Link
         className='link'
         to={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}
        >
         {isSignIn ? "Register" : "Log in"}
        </Link>
       </p>
      </div>
     </div>
    </div>
   </StyleSignIn>
  </>
 );
};

export default SignIn;

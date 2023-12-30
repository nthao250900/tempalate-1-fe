import { MaxScreenDevice } from "assets/DeviceScreen";
import Colors from "modules/Colors";
import styled from "styled-components";
export const StyleSignIn = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .sign-in {
    width: 969px;
    height: 90vh;
    flex-shrink: 0;
    background-color: #b0d8da;
    position: relative;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    .left {
      width: 45%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      width: calc(100% - 45% + 30px);
      height: 100%;
      background-color: ${Colors.white};
      border-radius: 40px 0 0 40px;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        width: 80%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
        flex-direction: column;
        .title {
          h1 {
            font-size: 32px;
            font-weight: 700;
            line-height: 42px;
            letter-spacing: 2.56px;
            color: ${Colors.textColor};
          }
        }
        .sign-in-with {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
          margin-top: 20px;
          div {
            button {
              color: ${Colors.secondTextColor};
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 18px;
              padding: 8px 10px;
              border: 1px solid ${Colors.mutedColor};
              border-radius: 10px;
              transition: all 0.4s ease;
              &:hover {
                color: ${Colors.primaryColor};

                border-color: ${Colors.primaryColor};
              }
            }
          }
        }
        .or {
          color: ${Colors.secondTextColor};
          font-size: 24px;
          font-weight: 400;
          line-height: 42px;
          letter-spacing: 1.92px;
          display: block;
          width: 100%;
          text-align: center;
        }
        .form {
          width: 100%;
          &__input {
            border: none;
            border-bottom: 1px solid ${Colors.mutedColor};
            border-radius: 0px;
            margin-bottom: 13px;
            &:focus {
              outline: none;
              box-shadow: unset;
              border-bottom-color: ${Colors.primaryColor};
            }
          }
        }
        .button__sign-in {
          background-color: ${Colors.primaryColor};
          border: 1px solid ${Colors.primaryColor};
          color: ${Colors.white};
          font-size: 20px;
          font-weight: 600;
          line-height: 42px;
          width: 100%;
          display: block;
          margin-top: 29px;
          border-radius: 5px;
          transition: all 0.4s ease;
          &:hover {
            background-color: transparent;
            color: ${Colors.primaryColor};
          }
        }
        .have-an-account {
          color: ${Colors.textColor};
          font-size: 16px;
          font-weight: 400;
          line-height: 42px;
          /* margin-top: calc(19px - 40px); */
          .link {
            color: ${Colors.primaryColor};
            margin-left: 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 850px) {
    .sign-in {
      box-shadow: unset;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .left {
        width: 100%;
        height: 50%;
      }
      .right {
        padding: 50px 0;
        position: unset;
        width: 100%;
        height: 100%;
        border-radius: 0;
        .content {
          align-items: center;
          justify-content: center;
          .sign-in-with {
            flex-direction: column;
            gap: 20px;
            div {
              button {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (${MaxScreenDevice.mobileL}) {
    .sign-in {
      box-shadow: unset;
      width: 100%;
      height: 100%;
      .left {
        display: none;
      }
      .right {
        position: unset;
        width: 100%;
        height: 100%;
        border-radius: 0;
        .content {
          align-items: center;
          justify-content: center;
          .sign-in-with {
            flex-direction: column;
            gap: 20px;
            div {
              button {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
export const StyleSignUp = styled.div``;

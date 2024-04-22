/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import InputComponent from "../components/InputComponent";
import signup_background from "../assets/signup_background.png";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/session";

import { CancelOutlined } from "@mui/icons-material";
import { Alert } from "@mui/material";
const SignIn = () => {
  const { updateSessionData } = useSession();
  const [errorMessage, seterrorMessage] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const submitData = async () => {
    setData({
      username: "",
      password: "",
    });
    try {
      var response = await axios.post(
        "http://localhost:3001/user/auth/login",
        data
      );
      if (response.status === 200) {
        navigate("/");
        updateSessionData(response.data);
      }
    } catch (error) {
      console.log(error);
      seterrorMessage(error.response.data);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex justify-between  signupPage">
      <div className="bg-[#fafcfc] border  h-[100vh] max-md:mx-[0.5rem] flex justify-center  items-center p-[3rem]  w-full">
        <div className="flex flex-col gap-[2.12rem]">
          {/* Heading */}
          <div className="space-y-[0.62rem]">
            <h1 className="text-[#11142D] text-[2.312rem] font-[700]">
              Welcome back!
            </h1>
            <p className="font-400 text-[#808191]">
              Welcome back! Please enter your details.
            </p>
            {errorMessage && (
              <Alert
                icon={<CancelOutlined fontSize="inherit" />}
                severity="error"
              >
                {errorMessage}
              </Alert>
            )}
          </div>
          {/* User Informations */}
          <div className="flex flex-col w-full gap-[2rem] ">
            <InputComponent
              name={"Username"}
              id={"username"}
              data={data}
              setData={setData}
              type={"text"}
            />
            <InputComponent
              name={"Password"}
              id={"password"}
              type={"password"}
              setData={setData}
              data={data}
            />
            <div onClick={submitData}>
              <ButtonComponent color={"#475BE8"} onClick={"signUp"}>
                Sign In
              </ButtonComponent>
            </div>

            <p
              className="font-400 text-[#808191] cursor-pointer underline text-center"
              onClick={() => navigate("/user/register")}
            >
              Dont Have an account?Sign In here .
            </p>
          </div>
        </div>
      </div>
      <img
        src={signup_background}
        alt=""
        className="max-md:hidden md:w-[50%] object-cover"
      />
    </div>
  );
};

export default SignIn;

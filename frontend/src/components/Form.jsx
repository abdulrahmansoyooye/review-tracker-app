/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import InputComponent from "../components/InputComponent";
import signup_background from "../assets/signup_background.png";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/session";
import spinner from "../assets/spinner.svg";
const Form = ({ signIn, signUp }) => {
  const { updateSessionData } = useSession();
  const [errorMessage, seterrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const submitData = async () => {
    setData({
      username: "",
      password: "",
    });
    setLoading(true);
    if (signIn === true) {
      try {
        const response = await axios.post(
          "https://review-tracker-backend.onrender.com/user/auth/login",
          data
        );

        navigate("/");
        setLoading(false);

        updateSessionData(response.data);
      } catch (error) {
        console.log(error);
        setLoading(false);

        seterrorMessage({ message: error.response.data, code: error.code });
      }
    } else {
      try {
        const response = await axios.post(
          "https://review-tracker-backend.onrender.com/user/auth/register",
          data
        );
        if (response.status === 201) {
          setLoading(false);
          navigate("/user/login");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);

        seterrorMessage({ message: error.response.data, code: error.code });
      }
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex justify-between signupPage">
      <div className="bg-[#fafcfc] border  h-[100vh] max-md:mx-[0.5rem] flex justify-center  items-center p-[3rem]  w-full">
        <div className="flex flex-col gap-[2.12rem]">
          {/* Heading */}
          <div className="space-y-[0.62rem]">
            <h1 className="text-[#11142D] text-[2.312rem] font-[700] bg-gradient-to-r from-[#475be8] via-[#475be8] to-[#D67D3E]  bg-clip-text text-transparent">
              {signIn ? "Welcome Back" : "Sing Up here"}
            </h1>
            <p className="font-400 text-[#808191]">
              Welcome back! Please enter your details.
            </p>
            {errorMessage && (
              <div className="text-slate-100 text-center bg-red-600 p-[1rem] rounded-[1rem] flex flex-col">
                <div className="font-[600]"> {errorMessage.code}</div>
                <div>{errorMessage.message}</div>
              </div>
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
            <div>
              <button
                className="active-btn w-full flex justify-center gap-[1rem] hover:scale-[1.2] transition-all duration-100"
                onClick={submitData}
                disabled={loading}
              >
                {loading && <img src={spinner} />}
                {signIn ? "Sign in" : "Sign up"}
              </button>
            </div>

            <p
              className="font-400 text-[#808191] cursor-pointer underline text-center"
              onClick={() => navigate("/user/register")}
            >
              {signIn
                ? " Dont Have an account?Sign up here ."
                : "Already have an account Sign in here"}
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

export default Form;

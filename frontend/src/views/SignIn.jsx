/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import InputComponent from "../components/InputComponent";
import signup_background from "../assets/signup_background.png";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/session";
import Form from "../components/Form";

const SignIn = () => {
  return <Form signIn={true} />;
};

export default SignIn;
